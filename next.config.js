/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: "/home", destination: "/", permanent: true }];
  },
  i18n: {
    locales: ["en", "dk"],
    defaultLocale: "en",

    domains: [
      {
        domain: "www.berlingskemedia.org",
        defaultLocale: "en",
        locales: ["en-CA", "en-US", "en-GB", "en-AU", "en-NZ", "en-IN"],
      },
      {
        domain: "dk.berlingskemedia.org",
        defaultLocale: "dk",
      },
    ],
  },
};

export default nextConfig;
