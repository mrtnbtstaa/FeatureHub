import Card from "@/components/shared/Card/Card";
import Comments from "@/components/shared/Comment/Comments";
import Divider from "@/components/shared/Divider/Divider";
import FeatureStatus from "@/components/shared/Feature/FeatureStatus";
import FeatureTitle from "@/components/shared/Feature/FeatureTitle";
import NavigateLink from "@/components/ui/Link/NavigateLink";
import { formatTime } from "@/lib/utils";
import { FeatureData } from "@/types/FeatureData";

const ProfileCard = ({feature}: {feature: FeatureData}) => {
  return (
    <NavigateLink href={`/roadmap/${feature.id}`}>
      <Card className="p-4 w-full">
        <div>
          <FeatureStatus status={feature.status} />
          <FeatureTitle title={feature.featureTitle} />
        </div>
        <p className="text-md text-gray-700 tracking-wide mt-4">
          {feature.featureDescription}
        </p>
        <Divider />
        <div className="flex items-center justify-between">
          <Comments commentCount={feature.comments.length ?? 0} />
          <span className="text-sm text-gray-700 tracking-wide">
            {formatTime(feature.createdAt)}
          </span>
        </div>
      </Card>
    </NavigateLink>
  );
};

export default ProfileCard;
