import Button from "@/components/ui/Button/Button";

const FeatureButton = () => {
  return (
    <div className="flex items-center gap-4 justify-end">
      {/* <BackButton>Cancel</BackButton> */}
      <Button type="submit">Create Feature</Button>
    </div>
  );
};

export default FeatureButton;
