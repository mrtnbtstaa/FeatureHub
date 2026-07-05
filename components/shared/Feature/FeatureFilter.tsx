"use client";

import Select from "@/components/ui/Select/Select";
import { StatusItems } from "@/config/Statuses.config";
import { useFeatureCategoryStore } from "@/store/useFeatureFilterStore";
import { FeatureStatus } from "@/types/FeatureStatus";

const FeatureFiiter = () => {
  const { setSelectedCategory } = useFeatureCategoryStore(
    (state) => state.actions,
  );

  return (
    <Select
      data={StatusItems}
      onChange={(e) => setSelectedCategory(e.target.value as FeatureStatus)}
    />
  );
};

export default FeatureFiiter;
