"use server";

import { FeatureServerService } from "@/lib/services/feature.server";
import { featureSchema } from "../schemas/feature.schema";

export async function createFeatureAction(data: unknown) {
  const validated = featureSchema.safeParse(data);

  if (!validated.success)
    return {
      message: validated.error.message,
      success: false,
      server: false,
    };

  try {
    const result = await FeatureServerService.createFeature(validated.data);
    if (!result)
      return {
        success: false,
        message: "Failed to create feature",
        server: true,
      };
    return {
      success: true,
      message: "Successfully created feature",
      server: true,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: `Something went wrong while creating feature: ${error}`,
      server: true,
    };
  }
}
