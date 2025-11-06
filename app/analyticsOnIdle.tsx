// app/AnalyticsOnIdle.tsx
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// only load the analytics chunk when we actually render it
const Analytics = dynamic(
  () => import("@vercel/analytics/react").then((m) => m.Analytics),
  { ssr: false }
);

export default function AnalyticsOnIdle() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let idleId: number | undefined;
    const onIdle = () => setReady(true);

    if ("requestIdleCallback" in window) {
      const ric = window.requestIdleCallback as (cb: () => void) => number;
      idleId = ric(onIdle);
      return () => {
        if ("cancelIdleCallback" in window) {
          const cic = window.cancelIdleCallback as (id: number) => void;
          cic(idleId!);
        }
      };
    } else {
      const t = window.setTimeout(onIdle, 1500) as unknown as number;
      return () => clearTimeout(t);
    }
  }, []);

  return ready ? <Analytics /> : null;
}
