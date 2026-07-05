import { AuthError, PostgrestError } from "@supabase/supabase-js";
import { AppError } from "./app-error";

export type ErrorResponse = {
  success: false;
  status: number;
  message: string;
};

export function translateToHttpErrors(error: unknown): ErrorResponse {
  
  // Application errors (business logic validations)
  if (error instanceof AppError)
    return { success: false, status: error.status, message: error.message };
  
  // Supabase Auth Exceptions (429)
  if (error instanceof AuthError) {
    const status = error.status || 400;

    if (status === 429 || error.message.toLowerCase().includes("rate limit"))
      return {
        success: false,
        status: 429,
        message: "Too many requests. Please wait a moment.",
      };

    switch (error.message) {
      case "User already registered":
        return {
          success: false,
          status: 409,
          message: "An account with this email already exists.",
        };
      case "Invalid login credentials":
        return {
          success: false,
          status: 401,
          message: "Incorrect email or password.",
        };
      default:
        return { success: false, status: status, message: error.message };
    }
  }

  // Supabase Database Exceptions

  // Standard runtime errors
  if (error instanceof Error)
    return { success: false, status: 500, message: error.message };

  return {
    success: false,
    status: 500,
    message: "A critical system error occurred. Please contact support.",
  };
}
