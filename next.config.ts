import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dvz5kmwqx/image/upload/**",
      },
      {
        protocol: "https",
        hostname: "logos-world.net",
        port: "",
        pathname: "/wp-content/uploads/2020/04/**",
      },
    ],
  },
};

export default nextConfig;
