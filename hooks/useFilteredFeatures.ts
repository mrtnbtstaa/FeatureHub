import { useFeatureCategoryStore } from "@/store/useFeatureFilterStore";
import { FeatureStatus } from "@/types/FeatureStatus";
import { useEffect, useMemo } from "react";

interface HasStatus {
  status: string;
}

interface UseFilteredFeatureOptions {
  defaultCategory?: string;
}

export const useFilteredFeatures = <T extends HasStatus>(
  data: T[],
  options?: UseFilteredFeatureOptions,
) => {
  const defaultCategory = options?.defaultCategory ?? "All";
  const { setSelectedCategory } = useFeatureCategoryStore(
    (state) => state.actions,
  );

  useEffect(() => {
    setSelectedCategory(defaultCategory as FeatureStatus);
  }, [defaultCategory, setSelectedCategory]);

  const currentCategory = useFeatureCategoryStore(
    (state) => state.currentCategory,
  );

  const filtered = useMemo(() => {
    // If no category is selected or it's set to "All", return all data
    if (!currentCategory || currentCategory === "All") return data;

    // Normalized category for casing mismatches safely
    const normalizedCategory = currentCategory.toLowerCase();

    // This will only run if the `currentCategory` or `data` changed
    return data.filter(
      (feature) => normalizedCategory === feature.status.toLowerCase(),
    );
  }, [currentCategory, data]);

  return filtered;
};
