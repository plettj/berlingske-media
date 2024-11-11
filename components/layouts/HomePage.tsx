"use client";

import { useEffect, useState } from "react";
import LocaleButton from "../LocaleButton";
import { Button } from "../ui/button";
import Link from "next/link";
import { COPYRIGHT_STRING_DK, COPYRIGHT_STRING_EN } from "@/lib/constants";

export default function HomePage() {
  const [isEn, setIsEn] = useState(true);

  useEffect(() => {
    const host = window.location.host;
    console.log(host);
    setIsEn(!host.startsWith("dk."));
  }, []);

  return (
    <div className="relative flex flex-col mx-12 gap-4 my-auto items-start">
      <LocaleButton className="absolute -right-3 -top-16 text-base" />
      <h1 className="mt-8 mb-4 -ml-1 text-6xl leading-tight">
        {isEn ? (
          <>
            CBS Case Competition 2024 <br />
            Berlingske Media
          </>
        ) : (
          <>
            CBS Case Konkurrence 2024 <br /> Berlingske Media
          </>
        )}
      </h1>
      <p className="mb-8 text-balance text-[18px] opacity-90">
        Team name: <i>Distributed Media</i>
      </p>
      <Button className="w-56" variant="outline" asChild>
        <Link href="https://www.berlingskemedia.dk/">berlingskemedia.dk</Link>
      </Button>
      <p className="my-8 text-balance text-muted-foreground">
        {isEn ? COPYRIGHT_STRING_EN : COPYRIGHT_STRING_DK} Distributed Media
      </p>
    </div>
  );
}
