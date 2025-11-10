// app/AnalyticsOnIdle.tsx
"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Load the analytics chunk only when rendered
const Analytics = dynamic(
  () => import("@vercel/analytics/react").then((m) => m.Analytics),
  { ssr: false } // Lazy load analytics to reduce TBT
);

export default function AnalyticsOnIdle() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const onIdle = () => setReady(true);
    let cleanup: (() => void) | undefined;

    if ("requestIdleCallback" in window) {
      // Narrow and call requestIdleCallback safely
      const ric = (
        window as unknown as {
          requestIdleCallback: (cb: () => void) => number;
          cancelIdleCallback?: (id: number) => void;
        }
      ).requestIdleCallback;

      const id = ric(onIdle);
      cleanup = () => {
        (
          window as unknown as {
            cancelIdleCallback?: (id: number) => void;
          }
        ).cancelIdleCallback?.(id);
      };
    } else {
      // Works with both DOM and Node typings
      const t: ReturnType<typeof setTimeout> = setTimeout(onIdle, 1500);
      cleanup = () => clearTimeout(t);
    }

    return () => cleanup?.();
  }, []);

  return ready ? <Analytics /> : null;
  // return <Analytics />;
}
