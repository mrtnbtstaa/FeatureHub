import { ComponentPropsWithoutRef } from "react";

type FormFieldProps = ComponentPropsWithoutRef<"label"> & {
  label?: string;
  error?: string;
  children: React.ReactNode;
};

const FormField = ({ label, error, children }: FormFieldProps) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="text-[#424790] tracking-wide font-medium">
          {label}
        </label>
      )}

      {children}

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default FormField;
