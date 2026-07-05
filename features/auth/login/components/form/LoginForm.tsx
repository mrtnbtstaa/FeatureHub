"use client";
import FormField from "@/components/shared/Form/FormField";
import Input from "@/components/ui/Input/Input";
import NavigateLink from "@/components/ui/Link/NavigateLink";
import Divider from "@/components/shared/Divider/Divider";
import { useLoginForm } from "@/features/auth/login/hooks/useLoginForm";
import GoogleSignInButton from "../GoogleSignInButton";
import SignInButton from "../SignInButton";

export default function LoginForm() {
  const { form, setSignInType, handleFormSubmit } = useLoginForm();
  const {
    register,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <div className="space-y-4 w-full">
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <FormField label="Email" htmlFor="email" error={errors?.email?.message}>
          <Input
            type="email"
            placeholder="name@example.com"
            {...register("email")}
          />
        </FormField>
        <FormField
          label="Password"
          htmlFor="Password"
          error={errors?.password?.message}
        >
          <Input
            type="password"
            placeholder="●●●●●●●●●●●●"
            {...register("password")}
          />
        </FormField>
        <SignInButton
          onClick={() => setSignInType("default")}
          isSubmitting={isSubmitting}
        />
        <Divider className="mt-0 mb-4" />
        <GoogleSignInButton onClick={() => setSignInType("google")} />
      </form>
      <div className="text-center space-x-1">
        <span className="tracking-wide text-md">
          Don&#39;t have an account?
        </span>
        <NavigateLink
          variants="none"
          href="/register"
          className="text-[#384cd0] font-bold"
        >
          Create Account
        </NavigateLink>
      </div>
    </div>
  );
}
