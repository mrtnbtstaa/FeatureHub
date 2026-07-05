"use client";

import { useFilteredFeatures } from "@/hooks/useFilteredFeatures";
import RoadmapCard from "./RoadmapCard";
import PaginatedContent from "@/components/shared/Pagination/PaginatedContent";
import Loader from "@/components/shared/Loader/Loader";
import { useGetFeatures } from "@/hooks/useFeatureQueries";
import SkeletonCard from "./SkeletonCard";
import SkeletonList from "@/components/shared/Skeleton/SkeletonList";

const RoadmapContent = () => {
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
      <SkeletonList className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <SkeletonCard />
      </SkeletonList>
    );
  if (error) return <p>Error: {error.message}</p>;

  return (
    <PaginatedContent
      data={filtered}
      onNext={next}
      onPrevious={previous}
      hasNextPage={hasNextPage}
      canPreviousPage={canPreviousPage}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 h-auto"
    >
      {(data) => <RoadmapCard feature={data} />}
    </PaginatedContent>
  );
};

export default RoadmapContent;
