import fileTypeChecker from "file-type-checker";
import React, { useRef, useState } from "react";

interface UseFileDropzoneOptions {
  onFileSelect?: (file: File) => void;
  maxSizeMB?: number;
  validExtensions?: string[];
}

const useFileDropzone = ({
  onFileSelect,
  maxSizeMB = 5,
  validExtensions = ["png", "jpeg", "jpg"],
}: UseFileDropzoneOptions) => {
  const [isDragging, setDragging] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processFile = async (file: File | undefined) => {
    if (!file) return;

    try {
      // Validate that the file is actually an image
      if (!file.type.startsWith("image/")) {
        setErrorMessage("Please upload a valid image file (PNG, JPG, etc.).");
        return;
      }

      // Slice the first 64 bytes for instant, lightweight byte validation
      // preventing performance lag on large files.
      const buffer = await file.slice(0, 64).arrayBuffer();

      // Inspect the buffer signature
      const detectedFile = fileTypeChecker.detectFile(buffer);

      // If the library can't identify it, or it detects a non-image format
      if (!detectedFile || !validExtensions.includes(detectedFile.extension)) {
        setErrorMessage(
          `File verification failed. The file is corrupted or not a real image. ${detectedFile?.description}`,
        );
        return;
      }

      // Check file size (5MB max)
      if (file.size > maxSizeMB * (1024 * 1024)) {
        setErrorMessage(`File is too large. Maximum size is ${maxSizeMB}MB.`);
        return;
      }
      // If valid, clear errors and proceed
      setErrorMessage(null);
      if (onFileSelect) {
        onFileSelect(file);
      }
    } catch (_) {
      setErrorMessage("An error occurred while verifying the file.");
    }
  };

  const dropzoneProps = {
    onDragOver: (e: React.DragEvent) => {
      e.preventDefault();
      setDragging(true);
    },
    onDragLeave: (e: React.DragEvent) => {
      e.preventDefault();
      setDragging(false);
    },
    onDrop: (e: React.DragEvent) => {
      e.preventDefault();
      setDragging(false);
      processFile(e.dataTransfer.files?.[0]);
    },
  };

  const inputProps = {
    ref: fileInputRef,
    type: "file" as const,
    accept: "image/*",
    className: "hidden",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      processFile(e.target.files?.[0]);
    },
  };

  const openBrowse = () => fileInputRef.current?.click();

  return {
    isDragging,
    errorMessage,
    dropzoneProps,
    inputProps,
    openBrowse,
  };
};

export default useFileDropzone;
