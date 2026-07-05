import {create} from "zustand";

export interface NavbarState {
    navState: boolean;
    actions: {
        toggleNavState: () => void;
    }
}

export const useNavbarStore = create<NavbarState>()((set) => ({
    navState: false,
    actions: {
        toggleNavState: () => set((state) => ({navState: !state.navState}))
    }
}))