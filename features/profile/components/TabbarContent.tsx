"use client";

import { TabbarItems } from "@/config/Tabbar.config";
import TabbarButton from "./TabbarButton";
import { useTabbarStore } from "@/store/useTabbarStore";

const TabbarContent = () => {
  const tabbarIndex = useTabbarStore((state) => state.tabbarIndex);
  const { setTabbarActive } = useTabbarStore((state) => state.action);
  return (
    <div className="space-x-4 mt-8 flex">
      {TabbarItems.map((item, idx) => (
        <TabbarButton
          key={idx}
          title={item.title}
          isActive={tabbarIndex === idx}
          index={idx}
          selectedIndex={(index) => setTabbarActive(index)}
        />
      ))}
    </div>
  );
};

export default TabbarContent;
