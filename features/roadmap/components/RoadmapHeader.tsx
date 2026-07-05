import FeatureFiiter from "@/components/shared/Feature/FeatureFilter";


const RoadmapHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="w-full">
        <h1 className="text-[#131b2e] tracking-wide font-bold text-lg md:text-3xl">
          Product Roadmap
        </h1>
        <div className="flex items-center justify-between">
          <p className="tracking-wide text-md text-gray-900">
            Our public plan for what&apos;s coming next. From initial requests
            to shipped features, track our progress here.
          </p>
          <FeatureFiiter />
        </div>
      </div>
    </div>
  );
};

export default RoadmapHeader;
