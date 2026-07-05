import Button from "@/components/ui/Button/Button";
import { FcGoogle } from "react-icons/fc";

type SignInButtonProps = {
  onClick: () => void;
};

const GoogleSignInButton = ({ onClick }: SignInButtonProps) => {
  return (
    <Button
      type="submit"
      className="w-full text-custom-text-color tracking-wide font-bold"
      variant="outlined"
      onClick={onClick}
    >
      <div className="inline-flex items-center gap-2">
        <FcGoogle />
        <span>Continue with Google</span>
      </div>
    </Button>
  );
};

export default GoogleSignInButton;
