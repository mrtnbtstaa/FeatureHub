"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentPropsWithoutRef } from "react";

type NavigateLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  children: React.ReactNode;
  className?: string;
  variants?: "primary" | "secondary" | "default" | "none";
};

const NavigateLink = ({
  children,
  className,
  variants = "primary",
  href,
  ...props
}: NavigateLinkProps) => {
  const path = usePathname();

  // Checking for url string or url object
  const hrefString = typeof href === "string" ? href : href.pathname || "";

  // Checking sub route match
  const isActive = hrefString === "/" ? path === "/" : path.startsWith(hrefString);

  return (
    <Link
      href={href}
      {...props}
      className={cn(
        "duration-200 transition-colors ease-in-out",
        className,
        // Conditional styles based on variants and isActive
        variants === "primary" && isActive && "text-[#384cd0] hover:text-[#3a50df] font-bold tracking-wider",
        variants === "secondary" && "bg-[#384cd0] rounded-lg p-4 text-white tracking-wide font-bold w-full text-center",
        variants === "default" && "border border-[#384cd0] text-gray-600 hover:bg-[#384cd0] hover:text-white font-bold tracking-wider p-2 rounded-md"
      )}
    >
      {children}
    </Link>
  );
};

export default NavigateLink;
