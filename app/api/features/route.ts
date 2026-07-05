import { errorResponse, successResponse } from "@/lib/api/response.builder";
import { withAuth } from "@/lib/api/with.auth";
import { FeatureServerService } from "@/lib/services/feature.server";
import { NextResponse } from "next/server";
import { UUID } from "node:crypto";
import { z } from "zod";

const getFeaturesSchema = z.object({
  featureId: z.uuid().optional().nullable(),
  userId: z.uuid().optional().nullable(),
  cursor: z.uuid().optional().nullable(),
  limit: z.coerce.number().int().positive().default(6),
  // If the query param `filter` is an empty string or missing, fallback cleanly to "All"
  filter: z.preprocess(
    (val) => (val === "" || val === null ? undefined : val),
    z.string().default("All"),
  ),
});

export const GET = withAuth(async (request, _) => {
  const { searchParams } = new URL(request.url);

  const queryParse = getFeaturesSchema.safeParse({
    featureId: searchParams.get("featureId"),
    userId: searchParams.get("userId"),
    cursor: searchParams.get("cursor"),
    limit: searchParams.get("limit"),
    filter: searchParams.get("filter"),
  });

  if (!queryParse.success) {
    return NextResponse.json(errorResponse("Invalid query parameters"), {
      status: 400,
    });
  }

  const { featureId, userId, cursor, limit, filter } = queryParse.data;

  let result;

  if (featureId) {
    result = await FeatureServerService.getFeature(featureId as UUID);
  } else {
    const listOptions = {
      limit,
      filter,
      // If cursor exists, cast it to UUID, otherwise pass undefined
      cursor: cursor ? (cursor as UUID) : undefined,
      // Spreads userId into the object ONLY if it is present
      ...(userId && { userId: userId as UUID }),
    };
    result = await FeatureServerService.getFeatures(listOptions);
  }
  // Serialize the data
  const jsonString = JSON.stringify(
    successResponse("Successfully list of features", result),
    (_, value) => (typeof value === "bigint" ? value.toString() : value),
  );

  return new Response(jsonString, {
    status: 200,
    headers: { "Content-Type": "Application/json" },
  });
});
