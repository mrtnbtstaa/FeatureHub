import { cn } from "@/lib/utils";
import React, { ComponentPropsWithoutRef } from "react"

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "outlined" | "danger" | "none"
}

const Button = ({children, className, variant = "primary", ...props} : ButtonProps) => {
    return (
        <button className={cn(
            "rounded-lg cursor-pointer transition-colors duration-200 text-white text-xs md:text-md",
            className,
            // Conditional styles based on variants
            variant === "primary" && "bg-[#384cd0] hover:bg-[#3a50df] p-4",
            variant === "outlined" && "border border-[#c9ccdb] p-4",
            variant === "danger" &&  "text-red-500",
        )}
        {...props}
        >
            {children}
        </button>
    )
}

export default Button;