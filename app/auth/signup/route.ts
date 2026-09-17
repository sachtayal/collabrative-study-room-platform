import { NextResponse, type NextRequest } from "next/server";

import { createSupabaseRouteHandlerClient } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  const { username, email, password, next } = (await request.json()) as {
    username?: string;
    email?: string;
    password?: string;
    next?: string | null;
  };

  const trimmedUsername = username?.trim();

  if (!trimmedUsername || !email || !password) {
    return NextResponse.json(
      { error: "Username, email, and password are required." },
      { status: 400 }
    );
  }

  const supabase = await createSupabaseRouteHandlerClient();

  const { data, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${request.nextUrl.origin}/auth/callback`,
      data: {
        username: trimmedUsername
      }
    }
  });

  if (signUpError) {
    return NextResponse.json(
      { error: signUpError.message },
      { status: 400 }
    );
  }

  if (data.session) {
    return NextResponse.json({
      redirectTo: next || "/dashboard"
    });
  }

  return NextResponse.json({
    message: "Check your email to confirm your account, then log in."
  });
}
