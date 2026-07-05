import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname:  "/**"
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**"
      },
      {
        protocol: "https",
        hostname: "rtrglolcnwblhixhuxyl.supabase.co",
        port: "",
        pathname: "/**"
      }
    ]
  }
};

export default nextConfig;
