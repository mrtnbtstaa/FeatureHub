import Card from "@/components/shared/Card/Card";
import TopContributorsContent from "./TopContributorsContent";

const BoardTopContributors = () => {
  return (
    <Card
      className="flex flex-col items-start justify-center p-4 space-y-4"
      withHover={false}
    >
      <h2 className="font-bold tracking-wide text-md">Top Contributors</h2>
      {Array.from({ length: 3 }).map((_, idx) => (
        <TopContributorsContent
          key={idx}
          name="Alex Johnson"
          ideasCount={42}
          src="/martin.jpg"
        />
      ))}
    </Card>
  );
};

export default BoardTopContributors;
