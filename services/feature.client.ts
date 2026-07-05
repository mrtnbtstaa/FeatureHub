import { API } from "@/lib/api";
import { apiClient } from "@/lib/api/api.client";
import { CursorResponse } from "@/types/AuthMessageResponse";
import { FeatureData } from "@/types/FeatureData";
import { FeatureDetailData } from "@/types/FeatureDetailData";
import { UUID } from "crypto";

export const FeatureClientService = {
  getFeatures: async (
    userId?: UUID | null,
    cursor?: UUID | null,
    limit: number = 6,
    filter?: string
  ): Promise<CursorResponse<FeatureData>> => {

    const params = new URLSearchParams();
    // Only append if they have a real value (handles both null and undefined)
    if (userId) params.append("userId", userId);
    if (cursor) params.append("cursor", cursor);
    params.append("limit", limit.toString());
    params.append("filter", filter ?? "All")
    
    const response = await apiClient<CursorResponse<FeatureData>>("GET", `${API.features}?${params}`);

    return response.data!;
  },
  getFeature: async (featureId: UUID) => {
    const params = new URLSearchParams({featureId})
    return apiClient<FeatureDetailData>("GET", `${API.features}?${params}`);
  },
};
