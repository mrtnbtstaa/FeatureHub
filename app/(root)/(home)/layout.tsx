import Header from "@/components/layout/Header";
import MainContent from "@/components/layout/MainContent";
import NavbarMenu from "@/components/layout/NavbarMenu";
import React from "react";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="h-full flex flex-col items-start w-full">
      <Header />
      <div className="w-full">
        <NavbarMenu />
        <MainContent>{children}</MainContent>
      </div>
    </main>
  );
}
