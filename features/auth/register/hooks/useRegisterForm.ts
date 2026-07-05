import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { SignUpInput, signUpSchema } from "../schemas/register.schemas";
import { signUpAction } from "../actions/register.actions";

export const useRegisterForm = () => {

  const router = useRouter();
  const form = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const { setError, handleSubmit } = form;

  const onRegisterSubmit = async (data: SignUpInput) => {

    const result = await signUpAction(data);

    if(result?.success){
      router.push("/login")
      return;
    }

    if (result && !result.success) {
      // Fullname flag
      setError("fullName", {
        type: "server",
        message: result.message,
      });
      // Email flag
      setError("email", {
        type: "server",
        message: result.message,
      });
      // Password flag
      setError("password", {
        type: "server",
        message: result.message,
      });
    }
  };

  const handleFormSubmit = (e: React.SubmitEvent<HTMLFormElement>) =>
    handleSubmit(onRegisterSubmit)(e);

  return {
    form,
    handleFormSubmit,
  };
};
