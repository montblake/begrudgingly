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
    <div className="w-full min-h-screen flex flex-col relative bg-gradient-to-b from-yellow-400/50 to-red-900/80 mt-12 landscape:h-[85vh]">
      {/* Story Idea Areas */}
      <div className="absolute z-40 top-0 left-0 w-full h-full px-4 py-4 flex flex-col justify-between items-between landscape:px-16 landscape:py-8 landscape:h-[85vh]">
        <div className="flex flex-col landscape:flex-row justify-between items-start gap-4 landscape:gap-0">
          <div
            className={`w-full landscape:w-[300px] text-neutral-900 flex flex-col justify-start items-start cursor-pointer hover:bg-neutral-200 hover:bg-opacity-20 p-4 rounded-lg hover:opacity-100 transition-opacity duration-300 opacity-20`}
          >
            <p
              className={`relative leading-none whitespace-nowrap drop-shadow-md text-3xl landscape:text-4xl text-black mb-1`}
            >
              Fact
            </p>
            <p className="text-xs landscape:text-sm text-black">
              In 1853, ten years after having dashed off his surprisingly
              successful holiday story, 'A Christmas Carol', Charles Dickens
              gave his first public reading of the work. The effort was so well
              received, as well as providing much needed cash, that Dickens
              continued to perform these celebrated readings for the rest of his
              life.
            </p>
          </div>
          <div
            className={`w-full landscape:w-[300px] text-neutral-900 flex flex-col justify-start items-start cursor-pointer hover:bg-neutral-200 hover:bg-opacity-20 p-4 rounded-lg hover:opacity-100 transition-opacity duration-300 opacity-20`}
          >
            <p
              className={`relative leading-none whitespace-nowrap drop-shadow-md text-3xl landscape:text-4xl text-black mb-1`}
            >
              Fiction
            </p>
            <p className="text-xs landscape:text-sm text-black">
              Never one to let the facts get in the way of a good story, creator
              Blake Montgomery conflates the enduring popularity of the
              ubiquitous holiday 'Christmas Carol' with Dickens's personal
              readings and imagines that reports of the author's death were
              greatly exaggerated. And so, year after year, each and every
              December, not only do theaters around the globe produce
              adaptations of his famous book but Dickens himself is brought back
              to the stage to continue his tradition of solo readings ad
              infinitum.
            </p>
          </div>
        </div>
        <div className="flex flex-col landscape:flex-row-reverse justify-between items-end gap-4 landscape:gap-0">
          <div
            className={`w-full landscape:w-[300px] text-neutral-900 flex flex-col justify-start items-start cursor-pointer hover:bg-neutral-200 hover:bg-opacity-20 p-4 rounded-lg hover:opacity-100 transition-opacity duration-300 opacity-20`}
          >
            <p
              className={`relative leading-none whitespace-nowrap drop-shadow-md text-3xl landscape:text-4xl text-black mb-1`}
            >
              Premise
            </p>
            <p className="text-xs landscape:text-sm text-black">
              Now over 200 years old, Dickens has reached a breaking point and
              unbeknownst to theater management, he will not be performing his
              show this evening. Instead, he has planned something entirely new,
              something he is calling, "Charles Dickens's First Annual Holiday
              Party."
            </p>
          </div>
          <div className="flex flex-col items-center text-xs landscape:text-sm italic">
            <p>Hover Over Any Text to bring it into focus.</p>
            <p>Watch Dickens's eyes to see how he reacts.</p>
          </div>
          <div
            className={`w-full landscape:w-[300px] text-neutral-900 flex flex-col justify-start items-start cursor-pointer hover:bg-neutral-200 hover:bg-opacity-20 p-4 rounded-lg hover:opacity-100 transition-opacity duration-300 opacity-20`}
          >
            <p
              className={`relative leading-none whitespace-nowrap drop-shadow-md text-3xl landscape:text-4xl text-black mb-1`}
            >
              Possibility
            </p>
            <p className="text-xs landscape:text-sm text-black">
              Perhaps Dickens will get his wish. Or, perhaps, the Spirits of
              Christmas might intervene and force him to perform his worn-out
              tale once again, in the course of which, due to some highly
              irregular and ridiculous occurrence, he might see his work in a
              new light, rediscovering its beauty and his passion while, along
              the way, forging the kind of intimate, joyful connection with the
              audience he had hoped would come from hosting a party in the first
              place.
            </p>
          </div>
        </div>
      </div>

      {/* IMAGE SECTION */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[250px] h-[350px] landscape:top-0 landscape:left-[30%] landscape:transform-none landscape:w-[500px] landscape:h-[700px]"
        ref={dickensRef}
      >
        <Image
          src="/eyes_layers/pieces_shadows.png"
          alt="Charles Dickens Background"
          layout="fill"
          objectFit="contain"
          className="mix-blend-multiply"
        />
        <Image
          src="/eyes_layers/dickens_body.png"
          alt="Charles Dickens Body"
          layout="fill"
          objectFit="contain"
        />
        <div
          className="absolute"
          style={{
            top: "10%",
            left: "47%",
            transform: `translate(${eyePosition.x * 0.7}px, ${
              eyePosition.y * 0.7
            }px)`,
          }}
        >
          <Image
            src="/eyes_layers/dickens_left_eye.png"
            alt="Charles Dickens Left Eye"
            width={5}
            height={10}
            className="landscape:w-[10px] landscape:h-[20px]"
          />
        </div>
        <div
          className="absolute"
          style={{
            top: "10%",
            left: "51%",
            transform: `translate(${eyePosition.x * 0.7}px, ${
              eyePosition.y * 0.7
            }px)`,
          }}
        >
          <Image
            src="/eyes_layers/dickens_right_eye.png"
            alt="Charles Dickens Right Eye"
            width={5}
            height={5}
            className="landscape:w-[10px] landscape:h-[10px]"
          />
        </div>
        <Image
          src="/eyes_layers/pieces_desk.png"
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
