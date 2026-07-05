import { FeatureStatus } from "@/types/FeatureStatus";
import {create} from "zustand";

interface FeatureFilterStore{
    currentCategory: FeatureStatus;
    actions: {
        setSelectedCategory: (value: FeatureStatus) => void;
        resetFiilter: () => void;
    }
}

export const useFeatureCategoryStore = create<FeatureFilterStore>()((set) => ({
    currentCategory: "All",
    actions: {
        setSelectedCategory: (value) => set({currentCategory: value}),
        resetFiilter: () => set({currentCategory: "All"})
    }
}))