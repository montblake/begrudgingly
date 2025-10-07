"use client";

import { useState, useEffect } from "react";
import SpecialHeadline from "./special_headline";
import SpecialPlot from "./special_plot";

type HeadlineProps = {
  title: string;
  author: string;
  publisher?: string;
};

export default function SpecialHighlight({
  Headline,
  PlotSummary,
}: {
  Headline: HeadlineProps;
  PlotSummary: string;
}) {
  const [showHeadline, setShowHeadline] = useState(true);
  const [showPlot, setShowPlot] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowHeadline((prev) => !prev);
      setShowPlot((prev) => !prev);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [showHeadline]);

  return (
    <div className="flex flex-col gap-4 relative">
      <SpecialHeadline {...Headline} showHeadline={showHeadline} />
      <SpecialPlot summary={PlotSummary} showPlot={showPlot} />
      <div className="absolute inset-0 w-full h-full" />
    </div>
  );
}
