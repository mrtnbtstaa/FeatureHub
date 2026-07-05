import { UUID } from "crypto";
import { prisma } from "../prismaClient";
import { CommentInput } from "@/features/roadmap/schemas/comment.schema";
import {z} from "zod";
export const RoadmapServerService = {
  // Check if a parent feature exists
  verifyFeatureExists: async (featureId: UUID) => {
    return await prisma.features.findUnique({
      where: { id: featureId },
    });
  },
  // Handles both Creation and Updates cleanly based on presence of ID
  saveComment: async (input: CommentInput, featureId: UUID, userId: UUID) => {
    return await prisma.comments.create({
      data: {
        message: input.commentInput,
        featureId: featureId,
        userId: userId,
      },
    });
  },
  // Get all the comments on the specific feature based on the featureId
  getComments: async (featureId: UUID) => {
    return await prisma.comments.findMany({
      where: { featureId },
      include: { user: { include: { profile: true } } },
    });
  },
  updateComment: async (input: CommentInput, commentId: UUID) => {
    return await prisma.comments.update({
      where: { id: commentId },
      data: { message: input.commentInput },
    });
  },
  // Delete comment
  deleteComment: async (id: UUID, userId: UUID) => {
    return await prisma.comments.delete({ where: { id, userId } });
  },
};