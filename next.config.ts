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
  // async headers() {
  //   return [
  //     {
  //       source: "/graphql/:anything*",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "no-store, no-cache, must-revalidate, proxy-revalidate",
  //         },
  //         { key: "Pragma", value: "no-cache" },
  //         { key: "Expires", value: "0" },
  //       ],
  //     },
  //     {
  //       source: "/content/:anything*",
  //       headers: [
  //         {
  //           key: "Cache-Control",
  //           value: "no-store, no-cache, must-revalidate, proxy-revalidate",
  //         },
  //         { key: "Pragma", value: "no-cache" },
  //         { key: "Expires", value: "0" },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
