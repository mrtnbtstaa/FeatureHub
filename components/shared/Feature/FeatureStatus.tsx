const FeatureStatus = ({ status }: { status: string }) => {
  return (
    <div className="inline-flex gap-4 items-center bg-[#d8e2ff]/50 rounded-md py-1 px-2">
      <div className="text-[#384cd0]/70 font-bold tracking-wide text-xs inline-flex items-center gap-1">
        <span className="text-2xl text-[#384cd0]">&#9679;</span>
        {status}
      </div>
    </div>
  );
};

export default FeatureStatus;
