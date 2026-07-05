"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/ui/Button/Button";
import { MdLogout } from "react-icons/md";
import { useLoaderStore } from "@/store/useLoaderStore";
import { signOutWithGoogleAction } from "@/features/auth/login/actions/login.actions";
import toast from "react-hot-toast";

const LogoutButton = () => {
  
  const showLoader = useLoaderStore((state) => state.showLoader);
  const hideLoader = useLoaderStore((state) => state.hideLoader);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      showLoader();
      await signOutWithGoogleAction();
      toast.success("Successfully logged out")
      router.refresh();
      router.push("/login");
    } catch (error) {
      console.error(error);
      hideLoader();
    }
  };

  return (
    <>
      <Button
        variant="none"
        className="text-gray-700 text-2xl"
        onClick={handleLogout}
      >
        <MdLogout className="hover:text-[#384cd0] duration-200 transition-colors" />
      </Button>
    </>
  );
};

export default LogoutButton;
