import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  variants?: "primary" | "secondary" | "none";
  className?: string;
  withHover?: boolean
};

const Card = ({ children, variants = "primary", className, withHover = true }: CardProps) => {
  return (
    <div
      className={cn(
        "border-2 border-[#c2c6d6] rounded-2xl w-full",
        className,
        withHover && "hover:border-[#384cd0] duration-200 transition-colors cursor-pointer",
        // Conditional styles based on variants
        variants === "primary" && "bg-white",
        variants === "secondary" && "bg-[#f2f3ff]",
      )}
    >
      {children}
    </div>
  );
};

export default Card;
