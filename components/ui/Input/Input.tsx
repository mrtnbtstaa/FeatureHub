import { cn } from "@/lib/utils";
import { ComponentPropsWithRef, forwardRef } from "react";
import { IconType } from "react-icons";

type InputProps = ComponentPropsWithRef<"input"> & {
  variant?: "primary" | "outlined" | "none";
  icon?: IconType;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = "primary", icon: Icon, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-2xl" />
        )}

        <input
          ref={ref}
          className={cn(
            "p-4 rounded-lg outline-none w-full transition-colors",
            Icon && "pl-12",
            variant === "primary" && "bg-[#faf8ff] border border-[#c2c6d6] focus:border-[#384cd0]",
            variant === "outlined" && "border border-[#c2c6d6]",
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
