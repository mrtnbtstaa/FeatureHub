import Button from "@/components/ui/Button/Button";
import { cn } from "@/lib/utils";

type TabbarProps = {
  isActive: boolean;
  title: string;
  index: number;
  selectedIndex: (value: number) => void;
};

const TabbarButton = ({ isActive, title, index, selectedIndex }: TabbarProps) => {
  return (
    <div className="flex flex-col">
      <Button
        onClick={() => selectedIndex(index)}
        variant="none"
        className={cn(
          "font-bold text-sm tracking-wider transition-colors duration-200",
          isActive ? "text-[#384cd0]" : "text-gray-800",
        )}
      >
        {title}
      </Button>
      <div
        className={cn(
          "border-[#384cd0] rounded-full",
          isActive ? "border-b-3" : "border-none",
        )}
      ></div>
    </div>
  );
};

export default TabbarButton;
