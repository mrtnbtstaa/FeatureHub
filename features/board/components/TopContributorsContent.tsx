import Avatar from "@/components/shared/Avatar/Avatar";

const TopContributorsContent = ({
  src,
  name,
  ideasCount,
}: {
  src: string;
  name: string;
  ideasCount: string | number;
}) => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <Avatar src={src} alt="profile" width={32} height={32} />
        <h2 className="tracking-wide font-medium">{name}</h2>
      </div>
      <span className="tracking-wider text-gray-500 font-bold text-sm">
        {ideasCount} Ideas
      </span>
    </div>
  );
};

export default TopContributorsContent;