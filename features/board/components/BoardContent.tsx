"use client";

import { useFilteredFeatures } from "@/hooks/useFilteredFeatures";
import { useGetFeatures } from "@/hooks/useFeatureQueries";
import SkeletonCard from "./SkeletonCard";
import Board from "../Board";
import SkeletonList from "@/components/shared/Skeleton/SkeletonList";

const BoardContent = () => {
  const {
    data,
    isLoading,
    error,
    next,
    previous,
    hasNextPage,
    canPreviousPage,
    isFetching,
  } = useGetFeatures();
  const filtered = useFilteredFeatures(data ?? []);

  if (isLoading && isFetching)
    return (
      <SkeletonList className="flex flex-col gap-2 w-full">
        <SkeletonCard />
      </SkeletonList>
    );

  if (error) return <p>{error.message}</p>;

  return (
    <Board
      data={filtered}
      hasNextPage={hasNextPage}
      canPreviousPage={canPreviousPage}
      onNext={next}
      onPrevious={previous}
    />
  );
};

export default BoardContent;
