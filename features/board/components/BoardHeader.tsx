import FeatureFiiter from "@/components/shared/Feature/FeatureFilter";

const BoardHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="w-full">
        <h1 className="text-[#131b2e] tracking-wide font-bold text-lg md:text-3xl">
          Feature Requests
        </h1>
        <p className="tracking-wide text-md text-gray-900">
          Vote on what we should build next.
        </p>
      </div>
      <div className="flex items-center justify-between">
        <FeatureFiiter />
      </div>
    </div>
  );
};

export default BoardHeader;
