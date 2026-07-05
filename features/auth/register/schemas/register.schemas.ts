import z from "zod";

// Email regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Password regex
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

export const signUpSchema = z.object({
  fullName: z.string().trim().min(1, { message: "Full name is required" }),
  email: z
    .string()
    .trim() // Automatically trim whitespaces
    .min(1, { message: "Email is required" })
    .regex(emailRegex, { message: "Invalid email format" }),
  password: z
    .string()
    .trim() // Automatically trim whitespaces
    .min(1, { message: "Password is required" })
    .regex(passwordRegex, {
      message:
        "Password must include uppercase, lowercase, number, and special character, and be at least 8 characters long.",
    }),
});

export type SignUpInput = z.infer<typeof signUpSchema>;