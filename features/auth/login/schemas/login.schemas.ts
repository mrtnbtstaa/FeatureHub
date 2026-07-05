import z from "zod";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const signInSchema = z.object({
  email: z
    .string()
    .trim() // Automatically trim whitespaces
    .min(1, { message: "Email is required" })
    .regex(emailRegex, { message: "Invalid email format" }),
  password: z
    .string()
    .trim() // Automatically trim whitespaces
    .min(1, { message: "Password is required" }),
});

export type SignInInput = z.infer<typeof signInSchema>;