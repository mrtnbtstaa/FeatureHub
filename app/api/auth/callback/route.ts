// app/auth/callback/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server/server";
import { prisma } from "@/lib/prismaClient";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  // 'next' represents the page to redirect to after successful authentication
  const next = searchParams.get("next") ?? "/login";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // Fetch the authenticated user's details from the fresh session
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        // Extract the user's name from Google's metadata layout variations
        const fullName =
          user.user_metadata?.full_name ||
          user.user_metadata?.name ||
          "New User";
          const googleAvatar = user.user_metadata?.avatar_url || user.user_metadata?.picture || ""

        // Sync user into Prisma public.Users table
        await prisma.users.upsert({
          where: {
            id: user.id,
          },
          update: {
            email: user.email!,
            name: fullName,
            // Nested upsert updates the profile if it exists, or creates it if it doesn't
            profile: {
              upsert: {
                create: {avatarUrl: googleAvatar},
                update: {avatarUrl: googleAvatar}
              }
            }
          },
          create: {
            id: user.id,
            email: user.email!,
            name: fullName,
            // Nested create 1:1 Profile record is created alongside the new User
            profile: {
              create: {
                avatarUrl: googleAvatar
              }
            }
          },
        });
      }

      const forwardedHost = request.headers.get("x-forwarded-host");
      const isLocalEnv = process.env.NODE_ENV === "development";
      if (isLocalEnv) {
        return NextResponse.redirect(`${origin}${next}`);
      } else if (forwardedHost) {
        return NextResponse.redirect(`https://${forwardedHost}${next}`);
      } else {
        return NextResponse.redirect(`${origin}${next}`);
      }
    }
  }

  // If something fails, drop the user off at an error page
  return NextResponse.redirect(`${origin}/auth/auth-error`);
}
