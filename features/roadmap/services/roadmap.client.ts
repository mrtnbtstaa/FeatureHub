import { CommentInput } from "../schemas/comment.schema";
import { UUID } from "node:crypto";
import { API } from "@/lib/api";
import { apiClient } from "@/lib/api/api.client";
import { CommentData } from "@/types/CommentData";

export const RoadmapClientService = {
  saveComment: async (data: CommentInput, featureId: UUID) => {
    return apiClient<unknown>("POST", API.comments, {
      body: JSON.stringify({ data, featureId }),
    });
  },
  getComments: async (featureId: UUID) => {
    const params = new URLSearchParams({ featureId });
    return apiClient<CommentData[]>("GET", `${API.comments}?${params}`);
  },
  deleteComment: async (commentId: UUID) => {
    return apiClient<unknown>("DELETE", API.comments, {
      body: JSON.stringify({ commentId }),
    });
  },
};
