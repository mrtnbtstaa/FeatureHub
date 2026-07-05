"use client";

import FormField from "@/components/shared/Form/FormField";
import Input from "@/components/ui/Input/Input";
import Textarea from "@/components/ui/TextArea/TextArea";
import FeatureImageUpload from "../FeatureImageUpload";
import { useCreateFeature } from "../../hooks/useFeatures";
import Button from "@/components/ui/Button/Button";

const FeatureForm = () => {
  const { form, handleFeatureSubmit } = useCreateFeature();

  const {
    register,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = form;

  return (
    <form onSubmit={handleFeatureSubmit} className="mt-4 w-full space-y-4">
      <FormField
        label="Feature Title"
        htmlFor="Feature Title"
        error={errors.featureTitle?.message}
      >
        <Input
          placeholder="e.g., Dark Mode for Dashboard"
          {...register("featureTitle")}
        />
      </FormField>
      <FormField
        label="Description"
        htmlFor="Description"
        error={errors.featureDescription?.message}
      >
        <Textarea
          placeholder="Describe the problem this feature solves and proposed solution"
          {...register("featureDescription")}
        />
      </FormField>
      <FeatureImageUpload
        value={watch("featureImage")}
        onFileSelect={(file) => setValue("featureImage", file)}
      />
      <div className="flex items-end justify-end">
        <Button type="submit">Create Feature</Button>
      </div>
    </form>
  );
};

export default FeatureForm;
