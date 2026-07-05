import {z} from "zod";

const MAX_FILE_SIZE = 5 * (1024 * 1024);
const ACCEPTED_MIME_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export const featureSchema = z.object({
  featureTitle: z
    .string()
    .trim()
    .min(1, { message: "Feature title is required" }),
  featureDescription: z
    .string()
    .trim()
    .min(1, { message: "Feature description is required" }),
  featureImage: z
    .instanceof(File)
    .refine((file) => file.size <= MAX_FILE_SIZE, {
      message: "Feature image must be maximum of 5MB",
    })
    .refine((file) => ACCEPTED_MIME_TYPES.includes(file.type), {
      message: "Only JPG, JPEG, and PNG images are allowed",
    })
});

export type FeatureInput = z.infer<typeof featureSchema>;