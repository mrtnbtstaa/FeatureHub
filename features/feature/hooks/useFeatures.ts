import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FeatureInput, featureSchema } from "../schemas/feature.schema";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { createFeatureAction } from "../actions/feature.actions";

export const useCreateFeature = () => {
  const router = useRouter();

  const form = useForm<FeatureInput>({
    resolver: zodResolver(featureSchema),
    defaultValues: {
      featureTitle: "",
      featureDescription: "",
      featureImage: undefined,
    },
  });

  const { setError, handleSubmit } = form;

  const onFeatureSubmit = async (data: FeatureInput) => {
    const result = await createFeatureAction(data);

    console.log(result.message)

    if (!result?.success) {
      if (result.server) {
        toast.error(result.message);
        return;
      }
      setError("featureTitle", {message: result?.message});
      setError("featureDescription", {message: result?.message});
      return;
    }

    toast.success("Succesfully created feature");
    router.push("/board");
  };

  return {
    form,
    handleFeatureSubmit: handleSubmit(onFeatureSubmit),
  };
};
