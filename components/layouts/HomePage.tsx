"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  COPYRIGHT_STRING_DK,
  COPYRIGHT_STRING_EN,
  PRESENTATION_PDF,
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
        {isEn ? "CBS Case Competition 2024" : "CBS Case Konkurrence 2024"}
      </h1>
      <p className="mb-8 text-balance text-base">
        <a
          className="text-blue-200 hover:underline"
          href="https://www.linkedin.com/in/josiahplett/"
        >
          Josiah
        </a>
        ,{" "}
        <a
          className="text-blue-200 hover:underline"
          href="https://www.linkedin.com/in/thienzhi/"
        >
          Thien
        </a>
        ,{" "}
        <a
          className="text-blue-200 hover:underline"
          href="https://www.linkedin.com/in/benjaminmedina/"
        >
          Ben
        </a>
        , and{" "}
        <a
          className="text-blue-200 hover:underline"
          href="https://www.linkedin.com/in/srishti-k-badaya/"
        >
          Srishti
        </a>
        .
      </p>
      <div className="my-2 w-full sm:max-w-[50ch]">
        <p className="mb-8 text-base">
          <a
            className="text-blue-200 hover:underline"
            href="https://www.berlingskemedia.dk/"
          >
            Berlingske Media
          </a>{" "}
          led the market with their innovative push from <b>paper-first</b> to{" "}
          <b>digital-first</b> media, unlocking infinite opportunity.
        </p>
        <p className="mb-8 text-base">
          But times have changed, and digital-first isn&apos;t enough for young
          people. They want <i>personalized</i> news, <i>anywhere</i>,{" "}
          <i>anytime</i>.
        </p>
        <p className="mb-8 text-base">
          It&apos;s time for a <b>mobile-first</b> revolution.
        </p>
      </div>
      <Button className="w-full sm:w-56" asChild>
        <Link href={PRESENTATION_PDF}>See full presentation</Link>
      </Button>
      <Button className="w-full sm:w-56" variant="outline" asChild>
        <Link href="https://www.berlingskemedia.dk/">berlingskemedia.dk</Link>
      </Button>
      <p className="my-8 text-balance text-muted-foreground">
        <i>
          This is a mimic domain of{" "}
          <a
            className="underline hover:text-green-600"
            href="https://www.berlingskemedia.dk/"
          >
            Berlingske Media
          </a>{" "}
          hosted by{" "}
          <a
            className="underline hover:text-green-600"
            href="https://plett.dev"
          >
            Josiah
          </a>
        </i>
        <br />
        <br />
        {isEn ? COPYRIGHT_STRING_EN : COPYRIGHT_STRING_DK} {TEAM_NAME}
      </p>
    </div>
  );
}
