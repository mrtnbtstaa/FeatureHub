"use client";

import Loader from "@/components/shared/Loader/Loader";
import Roadmap from "@/features/roadmap/Roadmap";
import { useGetFeature } from "@/hooks/useFeatureQueries";
import { useParams } from "next/navigation";
import { UUID } from "node:crypto";

const RoadmapDetailsPage = () => {
  const { id } = useParams<{ id: UUID }>();

  const { data, isLoading, error } = useGetFeature(id);

  
  if (isLoading && !data) return <Loader show={isLoading} />;
  if (error) return <p>Error: {error.message}</p>;
  
  return <Roadmap data={data} />;
};

export default RoadmapDetailsPage;
