import Button from "@/components/ui/Button/Button";
import { cn } from "@/lib/utils";
import { FaArrowRight } from "react-icons/fa";
import { RiLoader4Fill } from "react-icons/ri";

type SignUpButtonProps = {
  isSubmitting: boolean;
};

const SignUpButton = ({ isSubmitting }: SignUpButtonProps) => {
  return (
    <Button
      disabled={isSubmitting}
      className={cn(
        "p-4 w-full flex items-center justify-center",
        isSubmitting
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-[#384cd0] hover:bg-[#3a50df]",
      )}
      type="submit"
      variant="none"
    >
      {isSubmitting ? (
          <RiLoader4Fill className="text-[#384cd0] animate-spin text-lg" />
      ) : (
        <div className="inline-flex items-center gap-2">
          <span>Login to FeatureHub</span>
          <FaArrowRight />
        </div>
      )}
    </Button>
  );
};

export default SignUpButton;
