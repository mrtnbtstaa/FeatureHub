import Card from "@/components/shared/Card/Card";
import Votes from "@/components/shared/Votes/Votes";
import Comments from "@/components/shared/Comment/Comments";
import { FeatureData } from "@/types/FeatureData";
import { formatTime } from "@/lib/utils";
import NavigateLink from "@/components/ui/Link/NavigateLink";

const BoardFeature = ({feature}: {feature: FeatureData}) => {
  return (
    <NavigateLink href={`/roadmap/${feature.id}`}>
      <Card className=" rounded-2xl w-full h-full">
      <div className="flex p-4 items-start gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="bg-[#e8f0fc] rounded-lg p-2">
              <span className="text-xs tracking-wider leading-none font-bold text-[#384cd0]">
                {feature.status}
              </span>
            </div>
            <span className="text-xs tracking-wider text-gray-600 font-bold">
              &#9679;&nbsp;{formatTime(feature.createdAt)}
            </span>
          </div>
          <div>
            <h2 className="font-bold tracking-wider text-2xl">
              {feature.featureTitle}
            </h2>
            <p className="tracking-wide text-gray-600 font-medium text-md">
              {feature.featureDescription}
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <Comments commentCount={feature.comments.length} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
    </NavigateLink>
  );
};

export default BoardFeature;
