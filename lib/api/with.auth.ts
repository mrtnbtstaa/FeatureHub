import { User } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { createClient } from "../supabase/server/server";
import { errorResponse } from "./response.builder";

type AuthenticationHandler = (
  request: Request,
  user: User,
) => Promise<NextResponse | Response>;

export function withAuth(handler: AuthenticationHandler) {
  return async (request: Request) => {
    try {
      const supabase = await createClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        return NextResponse.json(errorResponse("Unauthorized"), { status: 401 });
      }
      return await handler(request, user);
    } catch (error) {
      return NextResponse.json(
        errorResponse("Authentication service unavailable"),
        { status: 500 },
      );
    }
  };
}
