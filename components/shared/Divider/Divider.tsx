import { cn } from "@/lib/utils";

const Divider = ({
  className,
  divider = "horizontal",
}: {
  className?: string;
  divider?: "vertical" | "horizontal";
}) => {
  return (
    <>
      {divider === "horizontal" && (
        <hr className={cn("my-4 w-full h-0.5 text-gray-300", className)} />
      )}
      {divider === "vertical" && (
        <div className={cn("w-0.5 self-stretch bg-gray-300", className)}></div>
      )}
    </>
  );
};

export default Divider;
