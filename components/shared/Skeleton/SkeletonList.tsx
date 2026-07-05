import React from "react";

type SkeletonProps = {
  length?: number;
  children: React.ReactNode;
  className: string;
};

const SkeletonList = ({ length = 2, children, className }: SkeletonProps) => {
  return (
    <div className={className}>
      {Array.from({ length: length }).map((_, idx) => (
        <div key={idx}>{children}</div>
      ))}
    </div>
  );
};

export default SkeletonList;
