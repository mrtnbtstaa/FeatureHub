// components/LoaderPathTracker.tsx
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useLoaderStore } from "@/store/useLoaderStore";

export default function LoaderPathTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hideLoader = useLoaderStore((state) => state.hideLoader);

  useEffect(() => {
    hideLoader();
  }, [pathname, searchParams, hideLoader]);

  return null; // This component doesn't render anything visually
}