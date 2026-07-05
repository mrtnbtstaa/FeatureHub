"use client";

import { NavbarItems } from "@/config/Navbar.config";
import NavigateLink from "../ui/Link/NavigateLink";
import Input from "../ui/Input/Input";
import { MdSearch, MdSpaceDashboard } from "react-icons/md";
import Button from "../ui/Button/Button";
import { useNavbarStore } from "@/store/useNavbarStore";
import LogoutButton from "../shared/Logout/LogoutButton";
const Header = () => {

  const { toggleNavState } = useNavbarStore((state) => state.actions);

  return (
    <header className="border-b border-[#c2c6d6] w-full p-4 bg-white flex items-center justify-between gap-8 z-50 sticky top-0">
      <nav>
        <div className="flex items-center gap-4">
          <h1 className="font-bold tracking-wide text-md md:text-lg text-[#384cd0]">
            Feature Hub
          </h1>
          <ul className="md:flex items-start gap-4 hidden">
            {NavbarItems.map((item) => (
              <li key={item.path}>
                <NavigateLink
                  href={item.path}
                  className="text-sm md:text-md font-medium tracking-wide"
                >
                  {item.navName}
                </NavigateLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div className="md:flex hidden items-center gap-4">
        {/* <Input
          className="p-2 pl-10 md:pl-11 lg:pl-12"
          placeholder="Search features..."
          icon={MdSearch}
        /> */}
        <NavigateLink
          href="/feature"
          className="whitespace-nowrap"
          variants="default"
        >
          Create Feature
        </NavigateLink>
        <LogoutButton />
      </div>
      <Button
        variant="none"
        className="md:hidden block"
        onClick={toggleNavState}
      >
        <MdSpaceDashboard className="text-3xl text-[#384cd0]" />
      </Button>
    </header>
  );
};

export default Header;
