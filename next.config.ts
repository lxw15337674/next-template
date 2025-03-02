import withSerwistInit from "@serwist/next";

const withSerwist = withSerwistInit({
  // Note: This is only an example. If you use Pages Router,
  // use something else that works, such as "service-worker/index.ts".
  swSrc: "/src/app/sw.ts",
  swDest: "public/sw.js",
});

const nextConfig = withSerwist({
  reactStrictMode: true,
  experimental: {
    serverActions: {
      bodySizeLimit: '20mb',
    }
  },
 
})

export default nextConfig;
