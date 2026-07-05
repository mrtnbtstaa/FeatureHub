import Avatar from "@/components/shared/Avatar/Avatar";
import Card from "@/components/shared/Card/Card";
import Divider from "@/components/shared/Divider/Divider";
import Votes from "@/components/shared/Votes/Votes";
import { FeatureDetailData } from "@/types/FeatureDetailData";

const FeatureContent = ({data}: {data: FeatureDetailData | undefined}) => {

  return (
    <Card className="flex flex-col items-start w-full p-4">
      <div className="inline-flex gap-4 items-center bg-[#d8e2ff]/50 rounded-md py-1 px-2 my-2">
        <div className="text-[#384cd0]/70 font-bold tracking-wide text-xs inline-flex items-center gap-1">
          <span className="text-2xl text-[#384cd0]">&#9679;</span>
          {data?.status}
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <h1 className="text-4xl font-bold tracking-wide w-200">
          {data?.featureTitle}
        </h1>
        <Votes voteCount={25} />
      </div>

      <Divider />

      <div className="flex items-center gap-4">
        <Avatar
          src={"/martin.jpg"}
          alt="profile picture"
          width={48}
          height={48}
        />
        <div>
          <h2 className="font-bold text-sm tracking-wide text-gray-600">
            {data?.user.name.toUpperCase()}
          </h2>
          <span className="text-gray-700 text-sm">Product Manager</span>
        </div>
        <Divider divider="vertical" />
        <div>
          <h3 className="text-gray-700 text-sm">Published on</h3>
          <span className="font-bold text-sm tracking-wide text-gray-600">
            Oct 24, 2026
          </span>
        </div>
      </div>

      <div className="relative w-full aspect-4/1 mt-8">
        <Avatar
          src={data?.featureImage ?? "/martin.jpg"}
          alt="Feature image"
          fill
          loading="eager"
          className="rounded-md object-center"
        />
      </div>
      <div className="mt-8">
        <p className=" text-gray-800 tracking-wide text-lg">
          {data?.featureDescription}
        </p>
      </div>
    </Card>
  );
};

export default FeatureContent;
