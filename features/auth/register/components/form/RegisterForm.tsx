"use client";

import FormField from "@/components/shared/Form/FormField";
import Input from "@/components/ui/Input/Input";
import NavigateLink from "@/components/ui/Link/NavigateLink";
import { useRegisterForm } from "@/features/auth/register/hooks/useRegisterForm";
import SignUpButton from "../SignUpButton";

const RegisterForm = () => {
  const { form, handleFormSubmit } = useRegisterForm();
  const {
    register,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <div className="space-y-4 w-full">
      <form onSubmit={handleFormSubmit} className="space-y-4">
        <FormField
          label="Full Name"
          htmlFor="fullName"
          error={errors?.fullName?.message}
        >
          <Input
            type="text"
            placeholder="Alex Rivera"
            {...register("fullName")}
          />
        </FormField>
        <FormField label="Email" htmlFor="email" error={errors?.email?.message}>
          <Input
            type="email"
            placeholder="alex@example.com"
            {...register("email")}
          />
        </FormField>
        <FormField
          label="Password"
          htmlFor="password"
          error={errors?.password?.message}
        >
          <Input
            type="password"
            placeholder="●●●●●●●●●●●●"
            {...register("password")}
          />
        </FormField>
        <SignUpButton isSubmitting={isSubmitting} />
      </form>
      <div className="text-center space-x-1">
        <span className="tracking-wide text-md">Already have an account?</span>
        <NavigateLink
          variants="none"
          href="/login"
          className="text-[#384cd0] font-bold"
        >
          Log in
        </NavigateLink>
      </div>
    </div>
  );
};

export default RegisterForm;
