import Card from "@/components/shared/Card/Card";
import NavigateLink from "@/components/ui/Link/NavigateLink";
import { BiBulb } from "react-icons/bi";

const BoardSuggestion = () => {
  return (
    <Card
      variants="secondary"
      className="flex flex-col items-center justify-center p-4 gap-4"
      withHover={false}
    >
      <div className="p-6 bg-[#c5d5f8] rounded-full">
        <BiBulb className="text-4xl text-[#384cd0]" />
      </div>
      <div className="text-center">
        <h2 className="font-bold tracking-wide text-md">Have a new Idea?</h2>
        <p className="tracking-wide text-gray-600">
          We&apos;re constantly looking for ways to improve FeatureHub. Let us
          know what&apos;s on your mind.
        </p>
      </div>
      <NavigateLink href="/feature" variants="secondary">
        Submit Suggestion
      </NavigateLink>
    </Card>
  );
};

export default BoardSuggestion;
