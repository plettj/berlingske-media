import HomePage from "@/components/layouts.tsx/HomePage";
import { headers } from "next/headers";

export default async function Home() {
  const headersList = headers();
  const host = headersList.get("host");
  const isOrgDomain = host?.includes("berlingskemedia.org") ?? true;

  return <HomePage isOrgDomain={isOrgDomain} />;
}
