import Button from "@/components/ui/Button/Button";
import { cn } from "@/lib/utils";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

interface PaginationProps {

  hasNextPage: boolean;
  canPreviousPage: boolean;

  onNext: () => void;
  onPrevious: () => void;
}

const Pagination = ({
  hasNextPage,
  canPreviousPage,
  onNext,
  onPrevious,
}: PaginationProps) => {
  return (
    <div className="flex items-end justify-end gap-2">
      <Button
        disabled={!canPreviousPage}
        onClick={onPrevious}
        variant="none"
        className={cn(
          "p-4 px-4",
          !canPreviousPage
            ? "bg-gray-300 text-black cursor-not-allowed"
            : "bg-[#384cd0]",
        )}
      >
        <MdKeyboardArrowLeft />
      </Button>

      <Button
        disabled={!hasNextPage}
        onClick={onNext}
        variant="none"
        className={cn(
          "p-4 px-4",
          !hasNextPage
            ? "bg-gray-300 text-black cursor-not-allowed"
            : "bg-[#384cd0]",
        )}
      >
        <MdKeyboardArrowRight />
      </Button>
    </div>
  );
};

export default Pagination;
