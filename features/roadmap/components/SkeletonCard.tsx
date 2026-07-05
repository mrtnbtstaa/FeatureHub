import Card from "@/components/shared/Card/Card";
import { Skeleton } from "@/components/shared/Skeleton/Skeleton";

const SkeletonCard = () => {
  return (
    <Card className="mt-4">
      <div className="p-4">
        <Skeleton className="w-88 h-4 p-2" />
        <Skeleton className="w-146 h-59 p-2 mt-2" />
        <div className="mt-2 flex items-center justify-between gap-4 w-full">
          <Skeleton className="w-32 h-4 p-2" />
          <Skeleton className="w-24 h-4 p-4" />
        </div>
      </div>
    </Card>
  );
};

export default SkeletonCard;
