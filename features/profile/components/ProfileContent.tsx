"use client";

import { useTabbarStore } from "@/store/useTabbarStore";
import ProfileCard from "./Content";
import PaginatedContent from "@/components/shared/Pagination/PaginatedContent";
import { useGetFeatures } from "@/hooks/useFeatureQueries";

const ProfileContent = () => {
  const tabbarActive = useTabbarStore((state) => state.tabbarIndex);

  const {data, isLoading, error} = useGetFeatures("e7e36c8a-f206-49ad-9b3d-98514c5eb682");

  return (
    <>
      {tabbarActive === 0 ? (
        <PaginatedContent
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 grid-rows-1"
          data={data ?? []}
          paginationName="features"
          pageSize={8}
        >
          {(row) => <ProfileCard feature={row.original} />}
        </PaginatedContent>
      ) : (
        <PaginatedContent
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 grid-rows-1"
          data={data ?? []}
          paginationName="votes"
          pageSize={8}
        >
          {(row) => <ProfileCard feature={row.original} />}
        </PaginatedContent>
      )}
    </>
  );
};

export default ProfileContent;
