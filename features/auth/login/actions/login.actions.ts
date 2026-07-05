import {
  signInWithEmail,
  signInWithGoogle,
  signOutWithGoogle,
} from "../../services/auth..services";
import { SignInInput, signInSchema } from "../schemas/login.schemas";

export async function signOutWithGoogleAction() {
  return await signOutWithGoogle();
}

export async function signInWithGoogleAction() {
  return await signInWithGoogle();
}

export async function signInWithEmailAction(input: SignInInput) {
  // Validation
  const result = signInSchema.safeParse(input);

  if (!result.success) {
    return {
      message: result.error.message,
      success: false,
      server: false,
    };
  }

  const response = await signInWithEmail(input);

  if (!response?.data?.user)
    return {
      success: false,
      message: "Invalid credentials",
      server: true,
    };

  return {
    success: true,
    message: "Successfully logged in",
    server: true,
  };
}
