"use client";

import React from "react";
import Pagination from "./Pagination";
import EmptyState from "../EmptyState/EmptyState";

interface PaginatedContentProps<T> {
  data: T[];
  className?: string;

  hasNextPage: boolean;
  canPreviousPage: boolean;

  onNext: () => void;
  onPrevious: () => void;
  children: (item: T, index: number) => React.ReactNode;
}

const PaginatedContent = <T,>({
  data,
  className,
  hasNextPage,
  canPreviousPage,
  onNext,
  onPrevious,
  children,
}: PaginatedContentProps<T>) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      {data && data.length ? (
        <div className={className}>
          {data.map((item, index) => (
            <div key={index}>{children(item, index)}</div>
          ))}
        </div>
      ) : (
        <EmptyState
          headLine="No features"
          body="There are no currently features. Create one now!"
        />
      )}
      {data && data.length > 0 && (
        <Pagination
          hasNextPage={hasNextPage}
          canPreviousPage={canPreviousPage}
          onNext={onNext}
          onPrevious={onPrevious}
        />
      )}
    </div>
  );
};

export default PaginatedContent;
