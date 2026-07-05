"use client";

import FormField from "@/components/shared/Form/FormField";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import { BiCloudUpload } from "react-icons/bi";
import useFileDropzone from "@/hooks/useFileDropzone";

type FeatureImageUploadProps = {
  value?: File;
  onFileSelect: (file: File) => void;
};

const FeatureImageUpload = ({
  value,
  onFileSelect,
}: FeatureImageUploadProps) => {
  const { isDragging, errorMessage, dropzoneProps, inputProps, openBrowse } =
    useFileDropzone({ onFileSelect });

  return (
    <FormField label="Feature Image" htmlFor="Feature Image">
      <div
        className="w-full border border-dashed rounded-xl flex flex-col items-center justify-center space-y-4"
        {...dropzoneProps}
      >
        <Input {...inputProps} />
        <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center">
          <BiCloudUpload className="w-7 h-7 text-blue-600" />
        </div>
        <p className="text-slate-700 text-lg font-medium text-center mb-1">
          Drag and drop or{" "}
          <Button
            type="button"
            variant="none"
            className="text-blue-600 font-semibold text-lg hover:underline focus:outline-none"
            onClick={openBrowse}
          >
            browse
          </Button>
        </p>
        <p className="text-slate-400 text-lg text-center">
          {!isDragging &&
            "Upload a screenshot or mockup to help explain your idea. Max 5 MB."}
        </p>

        {errorMessage && (
          <p className="text-red-500 text-sm mt-2 font-medium">
            {errorMessage}
          </p>
        )}
        <p>{value ? `Selected: ${value.name}` : "No file selected"}</p>
      </div>
    </FormField>
  );
};

export default FeatureImageUpload;
