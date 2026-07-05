import { FeatureDetailData } from "@/types/FeatureDetailData";
import CommentContent from "./components/CommentContent";
import FeatureContent from "./components/FeatureContent";

const Roadmap = ({ data }: { data: FeatureDetailData | undefined }) => {
  return (
    <section>
      <FeatureContent data={data} />
      <CommentContent />
    </section>
  );
};

export default Roadmap;
