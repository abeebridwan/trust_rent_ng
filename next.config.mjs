import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } from "next/constants.js";
import withSerwistInit from "@serwist/next";

/** @type {import("next").NextConfig} */
const nextConfig = {
  /* your Next.js config options here */
};

export default async (phase) => {
  let config = { ...nextConfig };

  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    const withSerwist = withSerwistInit({
      swSrc: "src/app/sw.ts",
      swDest: "public/sw.js",
    });
    config = withSerwist(config);
  }

  return config;
};