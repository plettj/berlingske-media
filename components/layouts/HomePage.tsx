"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  COPYRIGHT_STRING_DK,
  COPYRIGHT_STRING_EN,
  TEAM_NAME,
} from "@/lib/constants";

export default function HomePage() {
  const [isEn, setIsEn] = useState(true);

  useEffect(() => {
    const host = window.location.host;
    console.log(host);
    setIsEn(!host.startsWith("dk."));
  }, []);

  return (
    <div className="relative flex flex-col mx-4 sm:mx-6 md:mx-12 gap-4 my-auto items-start">
      {/* <LocaleButton className="absolute -right-3 -top-16 text-base" /> */}
      <h1 className="mt-8 mb-4 -ml-1 text-3xl sm:text-4xl lg:text-6xl leading-tight">
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
      <p className="mb-8 text-balance text-lg opacity-90">
        Team name: <i>{TEAM_NAME}</i>
      </p>
      <div className="max-w-[35ch] sm:max-w-[50ch]">
        <p className="mb-8 text-base opacity-90">
          Berlingske Media led the market with their innovative push from{" "}
          <b>paper-first</b> to <b>digital-first media</b>, unlocking infinite
          opportunity.
        </p>
        <p className="mb-8 text-base opacity-90">
          But times have changed, and digital-first isn&apos;t enough for young
          people. They want <i>personalized</i> news <i>anywhere</i>,{" "}
          <i>anytime</i>.
        </p>
        <p className="mb-8 text-base opacity-90">
          It&apos;s time for{" "}
          <span className="text-white">
            a <b>mobile-first</b> revolution.
          </span>
        </p>
      </div>
      <Button className="w-56" variant="outline" asChild>
        <Link href="https://www.berlingskemedia.dk/">berlingskemedia.dk</Link>
      </Button>
      <p className="my-8 text-balance text-muted-foreground">
        {isEn ? COPYRIGHT_STRING_EN : COPYRIGHT_STRING_DK} {TEAM_NAME}
      </p>
    </div>
  );
}
