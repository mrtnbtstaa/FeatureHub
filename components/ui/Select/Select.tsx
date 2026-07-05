import { cn } from "@/lib/utils";
import { SelectOption } from "@/types/SelectOption";
import { ComponentPropsWithoutRef } from "react";

type SelectProps<T extends SelectOption> =
  ComponentPropsWithoutRef<"select"> & {
    data: T[];
    className?: string;
  };

// Reusable select generic component
export default function Select<T extends SelectOption>({
  data,
  className,
  ...props
}: SelectProps<T>) {
  return (
    <select
      className={cn(
        "bg-[#f2f3ff] rounded-md p-3 outline-none border-r-8 border-transparent",
        className,
      )}
      {...props}
    >
      {data &&
        data.map((data, index) => (
          <option key={data.label ?? index} value={data.value}>
            {data.label}
          </option>
        ))}
    </select>
  );
}
