import {create} from "zustand";

interface TabbarState{
    tabbarIndex: number;
    action: {
        setTabbarActive: (index: number) => void;
    }
}

export const useTabbarStore = create<TabbarState>()((set) => ({
    tabbarIndex: 0,
    action:{
        setTabbarActive: (index) => set((_) => ({tabbarIndex: index})) 
    }
}))