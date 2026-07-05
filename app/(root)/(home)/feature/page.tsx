import Card from "@/components/shared/Card/Card";
import FeatureForm from "@/features/feature/components/form/FeatureForm";
import HeaderFeature from "@/features/feature/components/HeaderFeature";

const Page = () => {
  return (
    <Card
      variants="primary"
      withHover={false}
      className="rounded-md w-full md:max-w-1/2 flex flex-col items-start justify-start p-4 mx-auto"
    >
      <HeaderFeature />
      <FeatureForm />
    </Card>
  );
};

export default Page;
