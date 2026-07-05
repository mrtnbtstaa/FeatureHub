import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

type TextareaProps = ComponentPropsWithoutRef<"textarea"> & {
  className?: string;
  variant?: "primary" | "outlined" | "none";
};

const Textarea = ({
  className,
  variant = "primary",
  ...props
}: TextareaProps) => {
  return (
    <textarea
      className={cn(
        "w-full rounded-lg p-4 outline-none resize-y min-h-32 transition-colors duration-200",
        variant === "primary" &&
          "bg-[#faf8ff] border border-[#c2c6d6] focus:border-[#384cd0]",
        variant === "outlined" &&
          "border border-[#c2c6d6] focus:border-[#384cd0]",
        className,
      )}
      {...props}
    />
  );
};

export default Textarea;
