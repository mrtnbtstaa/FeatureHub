import Card from "@/components/shared/Card/Card";
import { Skeleton } from "@/components/shared/Skeleton/Skeleton";

const SkeletonCard = () => {
  return (
    <Card className="rounded-2xl w-full h-63">
      <div className="flex p-4 items-start gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Skeleton className="w-24 h-4 p-4" />
            <Skeleton className="w-12 h-4 p-2" />
          </div>
          <div>
            <Skeleton className="w-88 h-4 p-2" />
            <Skeleton className="w-300 h-32 p-2 mt-2" />
          </div>
           <Skeleton className="w-32 h-4 p-2" />
        </div>
      </div>
    </Card>
  );
};

export default SkeletonCard;
