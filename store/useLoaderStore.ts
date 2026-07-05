import { create } from "zustand";

type LoaderState = {
    isLoading: boolean;
    showLoader: () => void;
    hideLoader: () => void;
}

export const useLoaderStore = create<LoaderState>((set) => ({
    isLoading: false,
    showLoader: () => {
        document.body.classList.add("overflow-hidden")
        set({isLoading: true})
    },
    hideLoader: () => {
        document.body.classList.remove("overflow-hidden");
        set({isLoading: false})
    }
}))
