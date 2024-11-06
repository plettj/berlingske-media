import { Button } from "@/components/ui/button";
import { COPYRIGHT_STRING } from "@/lib/constants";
import { headers } from "next/headers";
import Link from "next/link";

export default async function Home() {
  const headersList = headers();
  const host = headersList.get("host");

  const isOrgDomain = host?.includes("berlingskemedia.org") ?? true;

  return (
    <div className="flex flex-col mx-12 gap-4 my-auto items-start">
      <h1 className="mb-4 -ml-1 text-[73px] leading-tight">
        CBH Case Competition 2024 <br />
        Berlingske Media
      </h1>
      <p className="mb-8 text-balance text-[18px] opacity-90">
        Josiah, Thien, Ben, Srishti
      </p>
      {isOrgDomain ? (
        <Button className="w-56" asChild>
          <Link href="https://www.berlingskemedia.com/">
            berlinskemedia.com
          </Link>
        </Button>
      ) : (
        <Button className="w-56" asChild>
          <Link href="https://www.berlingskemedia.org/">
            berlingskemedia.org
          </Link>
        </Button>
      )}
      <Button className="w-56" variant="outline" asChild>
        <Link href="https://www.berlingskemedia.dk/">berlingskemedia.dk</Link>
      </Button>
      <p className="mt-8 text-balance text-muted-foreground">
        {COPYRIGHT_STRING}
      </p>
    </div>
  );
}
