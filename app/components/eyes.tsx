"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const DickensAnimation: React.FC = () => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const dickensRef = useRef<HTMLDivElement>(null);

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
    <div className="flex flex-col landscape:flex-row justify-center items-center">
      {/* IMAGE SECTION */}
      <div className="relative w-[500px] h-[700px]" ref={dickensRef}>
        <Image
          src="/pieces_shadows.png"
          alt="Charles Dickens Background"
          layout="fill"
          objectFit="contain"
          className="mix-blend-multiply"
        />
        <Image
          src="/dickens_body.png"
          alt="Charles Dickens Body"
          layout="fill"
          objectFit="contain"
        />
        <div
          className="absolute"
          style={{
            top: "70px",
            left: "235px",
            transform: `translate(${eyePosition.x * 0.7}px, ${
              eyePosition.y * 0.7
            }px)`,
          }}
        >
          <Image
            src="/dickens_left_eye.png"
            alt="Charles Dickens Left Eye"
            width={10}
            height={20}
          />
        </div>
        <div
          className="absolute"
          style={{
            top: "70px",
            left: "255px",
            transform: `translate(${eyePosition.x * 0.7}px, ${
              eyePosition.y * 0.7
            }px)`,
          }}
        >
          <Image
            src="/dickens_right_eye.png"
            alt="Charles Dickens Right Eye"
            width={10}
            height={10}
          />
        </div>
        <Image
          src="/pieces_desk.png"
          alt="Charles Dickens Desk"
          layout="fill"
          objectFit="contain"
        />
        {/* END IMAGE SECTION */}
      </div>
    </div>
  );
};

export default DickensAnimation;
