import PaginatedContent from "@/components/shared/Pagination/PaginatedContent";
import BoardFeature from "./components/BoardFeature";
import { FeatureData } from "@/types/FeatureData";
import EmptyState from "@/components/shared/EmptyState/EmptyState";

type BoardProps<T> = {
  data: T[];
  hasNextPage: boolean;
  canPreviousPage: boolean;
  onNext: () => void;
  onPrevious: () => void;
};

const Board = ({
  data,
  hasNextPage,
  canPreviousPage,
  onNext,
  onPrevious,
}: BoardProps<FeatureData>) => {
  return (
    <PaginatedContent
      data={data}
      hasNextPage={hasNextPage}
      canPreviousPage={canPreviousPage}
      onNext={onNext}
      onPrevious={onPrevious}
      className="flex flex-col gap-2 h-auto"
    >
      {(data) => <BoardFeature feature={data} />}
    </PaginatedContent>
  );
};

export default Board;
