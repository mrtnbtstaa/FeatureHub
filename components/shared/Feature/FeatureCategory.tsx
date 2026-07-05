import { cn } from "@/lib/utils";

type FeatureProps = {
  title: string;
  variants?: "IN PROGRESS" | "PLANNED" | "COMPLETED" | "none";
  className?: string;
}


const FeatureCategory = ({title, variants = "IN PROGRESS", className} : FeatureProps) => {
  return (
    <div className={cn(
      "rounded-full p-1 px-2",
      className,
      // Conditional styles based on variants
      variants === "PLANNED" && "bg-[#e8f0fc]",
      variants === "IN PROGRESS" && "bg-[#efeffd]",
      variants ===  "COMPLETED" && "bg-[#e4fbed]"
    )}>
      <span className="text-xs text-gray-600 font-bold">{title}</span>
    </div>
  );
};

export default FeatureCategory;
