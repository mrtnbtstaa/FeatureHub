import { ApiResponse } from "@/lib/api/api.response";
import { FeatureClientService } from "@/services/feature.client";
import { useFeatureCategoryStore } from "@/store/useFeatureFilterStore";
import { CursorResponse } from "@/types/AuthMessageResponse";
import { FeatureData } from "@/types/FeatureData";
import { FeatureDetailData } from "@/types/FeatureDetailData";
import { FeatureStatus } from "@/types/FeatureStatus";
import { useQuery } from "@tanstack/react-query";
import { UUID } from "node:crypto";
import { useState } from "react";

export const useGetFeatures = (userId?: UUID) => {

  const [cursor, setCursor] = useState<UUID | null>(null);
  const [cursorHistory, setCursorHistory] = useState<UUID[]>([]);
  const currentCategory = useFeatureCategoryStore((state) => state.currentCategory);

  // Track the category we last rendered with
  const [prevCategory, setPrevCategory] = useState<FeatureStatus>(currentCategory);

  if(currentCategory !== prevCategory){
    setPrevCategory(currentCategory);
    setCursor(null);
    setCursorHistory([]);
  }

  const { data, isLoading, error, isFetching } = useQuery<CursorResponse<FeatureData>>({
    queryKey: ["features", userId, cursor, currentCategory], 
    queryFn: async () => (await FeatureClientService.getFeatures(userId, cursor ?? undefined, 2, currentCategory)),
    staleTime: 1000 * 60 * 15, // 15 minutues,
  });

  const next = () => {
    if(!data?.hasNextPage || !data.nextCursor) return;
    setCursorHistory((prev) => [...prev, cursor as UUID]);
    setCursor(data.nextCursor);
  }

  const previous = () => {
    if(cursorHistory.length === 0) return;

    // Copy of previous history of cursors
    const updatedHistory = [...cursorHistory];
    // Removed the last cursor of the stack
    const previousCursor = updatedHistory.pop() ?? null;

    setCursorHistory(updatedHistory);
    setCursor(previousCursor);
  }

  return { 
    data: data?.data ?? [],
    isLoading,
    error,
    next,
    previous,
    hasNextPage: data?.hasNextPage ?? false,
    canPreviousPage: cursorHistory.length > 0,
    isFetching
    // currentCursor: cursor
   };
};

export const useGetFeature = (id: UUID) => {
  const { data, isLoading, error } = useQuery<ApiResponse<FeatureDetailData>>({
    queryKey: ["features", id],
    queryFn: async () => await FeatureClientService.getFeature(id),
    staleTime: 1000 * 60 * 15,
  });

  return {
    data,
    isLoading,
    error,
  };
};
