"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default function LocaleButton({ className }: { className?: string }) {
  const [isDK, setIsDK] = useState(false);

  useEffect(() => {
    const host = window.location.host;
    setIsDK(host.startsWith("dk."));
  }, []);

  const handleClick = () => {
    const host = window.location.host;
    const newHost = host.startsWith("dk.")
      ? host.replace("dk.", "www.")
      : host.replace("www.", "dk.");
    const newUrl = `${window.location.protocol}//${newHost}${window.location.pathname}`;
    redirect(newUrl);
  };

  return (
    <Button variant="ghost" onClick={handleClick} className={className}>
      {isDK ? "EN" : "DK"}
    </Button>
  );
}
