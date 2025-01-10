import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/graphql/:anything*",
        destination: `${process.env.NEXT_PUBLIC_HOST_URI}/graphql/:anything*`,
      },
      {
        source: "/content/:anything*",
        destination: `${process.env.NEXT_PUBLIC_HOST_URI}/content/:anything*`,
      },
    ];
  },
};

export default nextConfig;
