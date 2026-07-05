"use client";
import Button from "@/components/ui/Button/Button";
import { useRouter } from "next/navigation";

const BackButton = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <Button
      variant="none"
      className="text-gray-700"
      onClick={() => router.back()}
    >
      {children}
    </Button>
  );
};

export default BackButton;
