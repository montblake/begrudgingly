"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const DickensAnimation: React.FC = () => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState<0 | 1 | 2 | 3>(0);
  const [isMobile, setIsMobile] = useState(false);
  const dickensRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial state
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
    <div className="relative flex flex-col items-center justify-center landscape:flex-row w-full overflow-hidden">
      <div className="w-full h-[65vh] flex flex-col relative bg-[radial-gradient(circle_at_50%_25%,gray,black)] landscape:h-[85vh] landscape:w-1/2 landscape:mt-10">
        {/* Story Idea Areas */}
        <div className="absolute -top-[2.5vh] left-0 w-full h-full px-4 py-4 flex flex-col justify-between items-between landscape:px-16 landscape:py-8 landscape:w-full">
          <div
            className={`w-full landscape:w-[300px] text-yellow-200/80 flex flex-col justify-start items-start cursor-pointer p-4 rounded-lg hover:opacity-100 transition-opacity duration-300 opacity-75 absolute top-[25vh] left-[25vw] landscape:top-[20vh] landscape:left-[10vw]`}
            onClick={() => {
              setDisplayText(0);
            }}
          >
            <p
              className={`relative leading-none whitespace-nowrap drop-shadow-md text-xl hover:scale-150 transition-all duration-300 landscape:text-4xl mb-1`}
            >
              Fact
            </p>
          </div>

          <div
            className={`w-full landscape:w-[300px] text-yellow-200/80 flex flex-col justify-start items-start cursor-pointer p-4 rounded-lg hover:opacity-100 transition-opacity duration-300 opacity-75 absolute top-[30vh] left-[65vw] landscape:top-[30vh] landscape:left-[32.5vw]`}
            onClick={() => {
              setDisplayText(1);
            }}
          >
            <p
              className={`relative leading-none whitespace-nowrap drop-shadow-md text-xl hover:scale-150 transition-all duration-300 landscape:text-4xl mb-1`}
            >
              Fiction
            </p>
          </div>

          <div
            className={`w-full landscape:w-[300px] text-yellow-200/80 flex flex-col justify-start items-start cursor-pointer p-4 rounded-lg hover:opacity-100 transition-opacity duration-300 opacity-75 absolute top-[40vh] left-[7.5vw] landscape:top-[45vh] landscape:left-[2.5vw]`}
            onClick={() => {
              setDisplayText(2);
            }}
          >
            <p
              className={`relative leading-none whitespace-nowrap drop-shadow-md text-xl hover:scale-150 transition-all duration-300 landscape:text-4xl mb-1`}
            >
              Promise
            </p>
          </div>

          <div
            className={`w-full landscape:w-[300px] text-yellow-200/80 flex flex-col justify-start items-start cursor-pointer  p-4 rounded-lg hover:opacity-100 transition-opacity duration-300 opacity-75 absolute top-[45vh] left-[67.5vw] landscape:top-[65vh] landscape:left-[30vw]`}
            onClick={() => {
              setDisplayText(3);
            }}
          >
            <p
              className={`relative leading-none whitespace-nowrap drop-shadow-md text-xl hover:scale-150 transition-all duration-300 landscape:text-4xl mb-1`}
            >
              Possibility
            </p>
          </div>
        </div>

        {/* words */}
        <div className="w-full h-full bg-black text-gray-400 absolute top-0 left-0 opacity-5 text-2xl">
          <p>
            In 1853, ten years after having dashed off his surprisingly
            successful holiday story, &apos;A Christmas Carol&apos;, Charles
            Dickens gave his first public reading of the work. The effort was so
            well received, as well as providing much needed cash, that Dickens
            continued to perform these celebrated readings for the rest of his
            life. Never one to let the facts get in the way of a good story,
            creator Blake Montgomery conflates the enduring popularity of the
            ubiquitous holiday &apos;Christmas Carol&apos; with Dickens&apos;s
            personal readings and imagines that reports of the author&apos;s
            death were greatly exaggerated. And so, year after year, each and
            every December, not only do theaters around the globe produce
            adaptations of his famous book but Dickens himself is brought back
            to the stage to continue his tradition of solo readings ad
            infinitum. Now over 200 years old, Dickens has reached a breaking
            point and unbeknownst to theater management, he will not be
            performing his show this evening. Instead, he has planned something
            entirely new, something he is calling, "Charles Dickens's First
            Annual Holiday Party. Perhaps Dickens will get his wish. Or,
            perhaps, the Spirits of Christmas might intervene and force him to
            perform his worn-out tale once again, in the course of which, due to
            some highly irregular and ridiculous occurrence, he might see his
            work in a new light, rediscovering its beauty and his passion while,
            along the way, forging the kind of intimate, joyful connection with
            the audience he had hoped would come from hosting a party in the
            first place.
          </p>
        </div>

        {/* IMAGE SECTION */}
        <div
          className="absolute -bottom-[10vh]  left-[12.5vw] transform-none w-[375px] h-[525px] landscape:top-[20vh] landscape:left-[5vw] landscape:transform-none landscape:w-[500px] landscape:h-[700px] "
          ref={dickensRef}
        >
          <Image
            src="/eyes_layers/pieces_shadows.png"
            alt="Charles Dickens Background"
            layout="fill"
            objectFit="contain"
            className="mix-blend-multiply relative z-10"
          />
          <Image
            src="/eyes_layers/dickens_body.png"
            alt="Charles Dickens Body"
            layout="fill"
            objectFit="contain"
            className="relative z-20"
          />
          <div
            className="absolute z-30"
            style={{
              top: isMobile ? "10.25%" : "9.875%",
              left: isMobile ? "47.5%" : "47%",
              transform: `translate(${
                eyePosition.x * (isMobile ? 0.5 : 0.7)
              }px, ${eyePosition.y * (isMobile ? 0.5 : 0.7)}px)`,
            }}
          >
            <Image
              src="/eyes_layers/dickens_left_eye.png"
              alt="Charles Dickens Left Eye"
              width={5}
              height={10}
              className="landscape:w-[10px] landscape:h-[10px]"
            />
          </div>
          <div
            className="absolute z-30"
            style={{
              top: isMobile ? "10.25%" : "9.875%",
              left: isMobile ? "51.5%" : "51%",
              transform: `translate(${
                eyePosition.x * (isMobile ? 0.5 : 0.7)
              }px, ${eyePosition.y * (isMobile ? 0.5 : 0.7)}px)`,
            }}
          >
            <Image
              src="/eyes_layers/dickens_right_eye.png"
              alt="Charles Dickens Right Eye"
              width={5}
              height={5}
              className="landscape:w-[10px] landscape:h-[10px] "
            />
          </div>
          <Image
            src="/eyes_layers/pieces_desk.png"
            alt="Charles Dickens Desk"
            layout="fill"
            objectFit="contain"
            className="relative z-40"
          />
          {/* END IMAGE SECTION */}
        </div>
        <div className="flex flex-col items-center text-xs landscape:text-sm italic text-neutral-200 absolute top-[10vh] w-full landscape:top-[5vh]">
          <p>Click Any Text to bring it into focus.</p>
          <p>Watch Dickens&apos;s eyes to see how he reacts.</p>
        </div>
      </div>

      <div
        className={`relative z-50 w-full landscape:w-1/2 text-gray-400 flex flex-col justify-start items-start cursor-pointer  px-12 py-8 hover:opacity-100 transition-opacity duration-300 opacity-100 bg-black border-t border-neutral-800  landscape:items-center landscape:justify-center landscape:h-[85vh] landscape:mt-10`}
      >
        {displayText === 3 && (
          <>
            <p
              className={`relative leading-none whitespace-nowrap drop-shadow-md text-2xl landscape:text-4xl mb-1`}
            >
              Possibility
            </p>
            <p className="text-xs landscape:text-base ">
              Perhaps Dickens will get his wish. Or, perhaps, the Spirits of
              Christmas might intervene and force him to perform his worn-out
              tale once again, in the course of which, due to some highly
              irregular and ridiculous occurrence, he might see his work in a
              new light, rediscovering its beauty and his passion while, along
              the way, forging the kind of intimate, joyful connection with the
              audience he had hoped would come from hosting a party in the first
              place.
            </p>
          </>
        )}
        {displayText === 0 && (
          <>
            <p
              className={`relative leading-none whitespace-nowrap drop-shadow-md text-2xl landscape:text-4xl mb-1`}
            >
              Fact
            </p>
            <p className="text-xs landscape:text-base ">
              In 1853, ten years after having dashed off his surprisingly
              successful holiday story, &apos;A Christmas Carol&apos;, Charles
              Dickens gave his first public reading of the work. The effort was
              so well received, as well as providing much needed cash, that
              Dickens continued to perform these celebrated readings for the
              rest of his life.
            </p>
          </>
        )}
        {displayText === 2 && (
          <>
            <p
              className={`relative leading-none whitespace-nowrap drop-shadow-md text-2xl hover:scale-150 transition-all duration-300 landscape:text-4xl  mb-1`}
            >
              Promise
            </p>
            <p className="text-xs landscape:text-base">
              Now over 200 years old, Dickens has reached a breaking point and
              unbeknownst to theater management, he will not be performing his
              show this evening. Instead, he has planned something entirely new,
              something he is calling, &quot;Charles Dickens&apos;s First Annual
              Holiday Party.&quot;
            </p>
          </>
        )}
        {displayText === 1 && (
          <>
            <p
              className={`relative leading-none whitespace-nowrap drop-shadow-md text-2xl hover:scale-150 transition-all duration-300 landscape:text-4xl  mb-1`}
            >
              Fiction
            </p>
            <p className="text-xs landscape:text-base ">
              Never one to let the facts get in the way of a good story, creator
              Blake Montgomery conflates the enduring popularity of the
              ubiquitous holiday &apos;Christmas Carol&apos; with Dickens&apos;s
              personal readings and imagines that reports of the author&apos;s
              death were greatly exaggerated. And so, year after year, each and
              every December, not only do theaters around the globe produce
              adaptations of his famous book but Dickens himself is brought back
              to the stage to continue his tradition of solo readings ad
              infinitum.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default DickensAnimation;
