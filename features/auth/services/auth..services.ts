"use server";

import { prisma } from "@/lib/prismaClient";
import { createClient } from "@/lib/supabase/server/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SignInInput } from "../login/schemas/login.schemas";
import { SignUpInput } from "../register/schemas/register.schemas";

export async function signInWithGoogle() {
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      // Directs Google to hit your new callback handler
      redirectTo: `${origin}/api/auth/callback?next=/board`,
    },
  });

  if (error) {
    return redirect("/auth/auth-error");
  }

  if (data.url) {
    return redirect(data.url); // Send user off to the Google Sign-In screen
  }
}

export async function signOutWithGoogle() {
  const supabase = await createClient();
  return supabase.auth.signOut();
}

export async function signInWithEmail(input: SignInInput) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email: input.email,
    password: input.password,
  });

  if (error) {
    return {
      error: error.message,
    };
  }

  if (data) return { data: data };
}

export async function signUp(input: SignUpInput) {
  const supabase = await createClient();
  const origin = (await headers()).get("origin");

  // Register user in supabase auth
  const { data, error } = await supabase.auth.signUp({
    email: input.email,
    password: input.password,
    options: {
      data: {
        full_name: input.fullName,
      },
      emailRedirectTo: `${origin}/api/auth/callback?next=/board`,
    },
  });

  // Sync successfully created user to the prisma user database
  if (data?.user) {
    await prisma.users.upsert({
      where: {
        id: data.user.id,
      },
      update: {
        email: input.email,
        name: input.fullName,
      },
      create: {
        id: data.user.id,
        email: input.email,
        name: input.fullName,
      },
    });
  }

  if (error) return { error: error.message };

  if (data) return { data };
}
