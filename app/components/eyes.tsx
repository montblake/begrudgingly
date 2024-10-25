"use client";

import React, { useState, useEffect, useRef } from "react";
import StoryIdeas from "@/app/components/eyes/StoryIdeas";
import BackgroundText from "@/app/components/eyes/BackgroundText";
import DickensImage from "@/app/components/eyes/DickensImage";
import DisplayText from "@/app/components/eyes/DisplayText";

const DickensAnimation: React.FC = () => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState<0 | 1 | 2 | 3>(0);
  const [isMobile, setIsMobile] = useState(false);
  const dickensRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (dickensRef.current) {
        const { clientX, clientY } = e;
        const { left, top, width, height } =
          dickensRef.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height * 0.1;
        const x = ((clientX - centerX) / (width / 2)) * 2;
        const y = ((clientY - centerY) / (height / 2)) * 2;
        const newPosition = {
          x: Math.max(-2, Math.min(2, x)),
          y: Math.max(-2, Math.min(2, y)),
        };
        setEyePosition(newPosition);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center lg:flex-row w-full overflow-hidden">
      <div className="w-full h-[65vh] flex flex-col relative bg-[radial-gradient(circle_at_50%_25%,gray,black)] lg:h-[85vh] lg:w-1/2 lg:mt-10">
        <StoryIdeas setDisplayText={setDisplayText} />
        <BackgroundText />
        <DickensImage
          dickensRef={dickensRef}
          eyePosition={eyePosition}
          isMobile={isMobile}
        />
        <InstructionText />
      </div>
      <DisplayText displayText={displayText} />
    </div>
  );
};

const InstructionText: React.FC = () => (
  <div className="flex flex-col items-center text-xs lg:text-sm italic text-neutral-200 absolute top-[10vh] w-full lg:top-[5vh]">
    <p>Click Any Text to bring it into focus.</p>
    <p>Watch Dickens&apos;s eyes to see how he reacts.</p>
  </div>
);

export default DickensAnimation;
