import RoadmapContent from "@/features/roadmap/components/RoadmapContent";
import RoadmapHeader from "@/features/roadmap/components/RoadmapHeader";

const RoadmapPage = () => {
  return (
    <>
      <RoadmapHeader />
      <section className="w-full">
        <RoadmapContent/>
      </section>
    </>
  );
};

export default RoadmapPage;
