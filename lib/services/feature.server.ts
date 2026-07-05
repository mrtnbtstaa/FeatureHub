import { UUID } from "crypto";
import { prisma } from "../prismaClient";
import { Prisma } from "../generated/prisma/client";
import { FeatureInput } from "@/features/feature/schemas/feature.schema";
import { uploadImage } from "../upload-image";
import { createClient } from "../supabase/server/server";
import {z} from "zod";

type GetFeatureOptions = {
  userId?: UUID;
  cursor?: UUID;
  limit: number;
  filter: string;
};

export const FeatureServerService = {
  createFeature: async (data: FeatureInput) => {
    const supabase = await createClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log(`User: ${user?.id}`);

    if (!user || !user.id) return;

    const imageUrl = await uploadImage(data.featureImage);

    return await prisma.features.create({
      data: {
        featureTitle: data.featureTitle,
        featureDescription: data.featureDescription,
        featureImage: imageUrl,
        upvotes: BigInt(0),
        status: "In Progress",
        userId: user?.id,
      },
    });
  },
  getFeatures: async ({
    userId,
    cursor,
    limit = 6,
    filter = "All",
  }: GetFeatureOptions) => {
    const whereClause: Prisma.FeaturesWhereInput = {};

    if (userId) whereClause.userId = userId;
    if (filter && filter !== "All") whereClause.status = filter; // Only apply filter if it's not `All`

    const features = await prisma.features.findMany({
      take: limit + 1, // Fetch one extra if there is another data to fetch
      ...(cursor && {
        cursor: {
          id: cursor,
        },
        skip: 1,
      }),
      where: whereClause,
      include: {
        comments: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const hasNextPage = features.length > limit;
    // [A, B, C, D] = length = 3
    // limit = 3
    if (hasNextPage) features.pop();

    return {
      data: features,
      nextCursor: hasNextPage ? features[features.length - 1].id : null,
      hasNextPage,
    };
  },
  getFeature: async (id: UUID) => {
    return await prisma.features.findUnique({
      where: { id },
      include: {
        comments: true,
        user: { include: { profile: true } },
      },
    });
  },
};
