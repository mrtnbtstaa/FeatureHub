import { signUp } from "../../services/auth..services";
import { SignUpInput, signUpSchema } from "../schemas/register.schemas";

export async function signUpAction(
  input: SignUpInput,
){
  // Validation
  const result = signUpSchema.safeParse(input);

  if (!result.success)
    return {
      message: result.error.message,
      success: false,
    };

  const response = await signUp(input);

  if (!response?.data?.user)
    return {
      success: false,
      message: "Failed to create an account",
    };

  return {
    success: true,
    message: "Successfully created an account",
  };
}