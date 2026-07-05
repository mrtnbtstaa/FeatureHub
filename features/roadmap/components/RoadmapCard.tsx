import Card from "@/components/shared/Card/Card";
import Comments from "@/components/shared/Comment/Comments";
import FeatureCategory from "@/components/shared/Feature/FeatureCategory";
import FeatureTitle from "@/components/shared/Feature/FeatureTitle";
import NavigateLink from "@/components/ui/Link/NavigateLink";
import { FeatureData } from "@/types/FeatureData";

const RoadmapCard = ({ feature }: { feature: FeatureData }) => {
  return (
    <NavigateLink href={`/roadmap/${feature.id}`} variants="none">
      <Card className="mt-4 h-full">
        <div className="p-4">
          <FeatureTitle
            title={feature.featureTitle}
          />
          <p className="mt-4">{feature.featureDescription}</p>
          <div className="mt-4 flex items-center justify-between gap-4 w-full">
            <Comments commentCount={feature.comments.length ?? 0} />
            <FeatureCategory
              className="bg-[#e8f0fc] text-gray-600 font-bold tracking-wider text-xs"
              title={feature.status}
              variants="none"
            />
          </div>
        </div>
      </Card>
    </NavigateLink>
  );
};

export default RoadmapCard;
