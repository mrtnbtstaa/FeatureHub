"use client";

import { NavbarItems } from "@/config/Navbar.config";
import NavigateLink from "../ui/Link/NavigateLink";
import { useNavbarStore } from "@/store/useNavbarStore";
import { cn } from "@/lib/utils";
import Input from "../ui/Input/Input";
import { MdSearch } from "react-icons/md";
import Button from "../ui/Button/Button";

const NavbarMenu = () => {
  const navState = useNavbarStore((state) => state.navState);

  return (
    <div
      className={cn(
        "bg-white border-b-2 border-[#384cd0] z-1 block md:hidden top-14 transition-transform duration-300 ease-in-out fixed w-full left-0 overflow-hidden",
        navState
          ? "translate-x-0 block pointer-events-auto"
          : "-translate-x-full pointer-events-none",
      )}
    >
      <nav>
        <ul className="p-4 space-y-4">
          {NavbarItems &&
            NavbarItems.map((item, idx) => (
              <li key={idx}>
                <NavigateLink
                  href={item.path}
                  className="text-sm md:text-md font-medium tracking-wide"
                >
                  {item.navName}
                </NavigateLink>
              </li>
            ))}
        </ul>
      </nav>
      <div className="flex flex-col items-start gap-4 px-4">
        <Input
          className="p-2 pl-10 md:pl-11 lg:pl-12 w-full"
          placeholder="Search features..."
          icon={MdSearch}
        />
        <Button className="whitespace-nowrap w-full mb-4">
          Create Feature
        </Button>
        {/* <Button
          variant="none"
          className="text-gray-700 text-2xl"
          onClick={signOutWithGoogle}
        >
          <MdLogout />
        </Button> */}
      </div>
    </div>
  );
};

export default NavbarMenu;
