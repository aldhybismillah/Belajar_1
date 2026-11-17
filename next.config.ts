import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // `/` has no page of its own: the [locale] layout is the root layout,
  // so the bare domain is redirected to the default language.
  async redirects() {
    return [{ source: "/", destination: "/en", permanent: false }];
  },
};

export default nextConfig;
