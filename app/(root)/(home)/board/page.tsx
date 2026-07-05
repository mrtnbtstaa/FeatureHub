import BoardContent from "@/features/board/components/BoardContent";
import BoardHeader from "@/features/board/components/BoardHeader";
import BoardStatistics from "@/features/board/components/BoardStatistics";
import BoardSuggestion from "@/features/board/components/BoardSuggestion";
import BoardTopContributors from "@/features/board/components/BoardTopContributors";

const BoardPage = () => {
  return (
    <>
      <BoardHeader />
      <section className="lg:flex grid grid-cols-1 grid-rows-1 items-start justify-center gap-4 mt-8">
        <BoardContent />
        <div className="flex flex-col items-start gap-2 lg:w-1/2  w-full">
          <BoardStatistics />
          <BoardSuggestion />
          <BoardTopContributors />
        </div>
      </section>
x    </>
  );
};

export default BoardPage;
