import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

type AvatarProps = ComponentPropsWithoutRef<typeof Image> & {
    className?: string;
    src: string;
    alt: string;
}

const Avatar = ({className, src, alt, ...props} : AvatarProps) => {
  return (
    <Image
      className={cn(
        "rounded-full object-cover aspect-square",
        className
      )}
      src={src}
      alt={alt}
      {...props}
    />
  );
};

export default Avatar;
