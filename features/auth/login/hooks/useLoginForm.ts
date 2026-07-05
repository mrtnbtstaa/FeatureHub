import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SignInInput, signInSchema } from "../schemas/login.schemas";
import {
  signInWithEmailAction,
  signInWithGoogleAction,
} from "../actions/login.actions";
import toast from "react-hot-toast";

export const useLoginForm = () => {
  const router = useRouter();
  const [signInType, setSignInType] = useState<"google" | "default">("default");

  const form = useForm<SignInInput>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { setError, handleSubmit } = form;

  const onLoginSubmit = async (data: SignInInput) => {

    const result = await signInWithEmailAction(data);

    if (result && !result.success) {
      if (result.server) {
        toast.error(result.message);
        return;
      }
      // Email flag
      setError("email", {
        message: result.message,
      });
      setError("password", {
        message: result.message,
      });
      return;
    }

    toast.success(result.message);

    router.push("/board");
  };

  const handleFormSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (signInType === "google") {
      signInWithGoogleAction();
    } else {
      handleSubmit(onLoginSubmit)(e);
    }
  };

  return {
    form,
    setSignInType,
    handleFormSubmit,
  };
};
