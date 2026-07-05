import AuthContent from "@/features/auth/components/AuthContent";
import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="h-screen flex items-center overflow-hidden">
      <section className="bg-[#384cd0] flex h-screen justify-center items-center w-full">
        {/* Left Column */}
        <AuthContent />
        {/* Right Column */}
        <div className="lg:w-1/2 w-full h-screen flex items-center justify-center bg-[#faf9f9] p-4">{children}</div>
      </section>
    </main>
  );
}
