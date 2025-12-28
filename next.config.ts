import type { NextConfig } from "next";

const getRemotePatterns = () => {
  const patterns = [
    {
      protocol: 'https' as const,
      hostname: 'imgproxy.eneba.games',
    },
    {
      protocol: 'https' as const,
      hostname: 'static.eneba.games',
    },
  ]
  return patterns;
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: getRemotePatterns(),
  },
};


export default nextConfig;
