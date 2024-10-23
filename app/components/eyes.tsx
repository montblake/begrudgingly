"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const DickensAnimation: React.FC = () => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState<0 | 1 | 2 | 3>(0);
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
    <div className="relative flex flex-col items-center justify-center landscape:flex-row">
      <div
        className="w-full h-[65vh] flex flex-col relative bg-[radial-gradient(circle_at_50%_25%,gray,black)]
 mt-10 landscape:h-[85vh]"
      >
        {/* Story Idea Areas */}
        <div className="absolute z-50 top-0 left-0 w-full h-full px-4 py-4 flex flex-col justify-between items-between landscape:px-16 landscape:py-8 landscape:h-[85vh]">
          <div
            className={`w-full landscape:w-[300px] text-yellow-200/80 flex flex-col justify-start items-start cursor-pointer p-4 rounded-lg hover:opacity-100 transition-opacity duration-300 opacity-75 absolute top-[15vh] left-[25vw]`}
            onClick={() => {
              setDisplayText(0);
              console.log("Clicked");
            }}
          >
            <p
              className={`relative leading-none whitespace-nowrap drop-shadow-md text-xl hover:scale-150 transition-all duration-300 landscape:text-4xl  mb-1`}
            >
              Fact
            </p>
          </div>

          <div
            className={`w-full landscape:w-[300px] text-yellow-200/80 flex flex-col justify-start items-start cursor-pointer p-4 rounded-lg hover:opacity-100 transition-opacity duration-300 opacity-75 absolute top-[20vh] left-[60vw]`}
            onClick={() => {
              setDisplayText(1);
              console.log("Clicked");
            }}
          >
            <p
              className={`relative leading-none whitespace-nowrap drop-shadow-md text-xl hover:scale-150 transition-all duration-300 landscape:text-4xl  mb-1`}
            >
              Fiction
            </p>
          </div>

          <div
            className={`w-full landscape:w-[300px] text-yellow-200/80 flex flex-col justify-start items-start cursor-pointer p-4 rounded-lg hover:opacity-100 transition-opacity duration-300 opacity-75 absolute top-[35vh] left-[10vw]`}
            onClick={() => {
              setDisplayText(2);
              console.log("Clicked");
            }}
          >
            <p
              className={`relative leading-none whitespace-nowrap drop-shadow-md text-xl hover:scale-150 transition-all duration-300 landscape:text-4xl  mb-1`}
            >
              Promise
            </p>
          </div>

          <div
            className={`w-full landscape:w-[300px] text-yellow-200/80 flex flex-col justify-start items-start cursor-pointer  p-4 rounded-lg hover:opacity-100 transition-opacity duration-300 opacity-75 absolute top-[45vh] left-[60vw]`}
            onClick={() => {
              setDisplayText(3);
              console.log("Clicked");
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
            {" "}
            Now over 200 years old, Dickens has reached a breaking point and
            unbeknownst to theater management, he will not be performing his
            show this evening. Instead, he has planned something entirely new,
            something he is calling, "Charles Dickens's First Annual Holiday
            Party. Perhaps Dickens will get his wish. Or, perhaps, the Spirits
            of Christmas might intervene and force him to perform his worn-out
            tale once again, in the course of which, due to some highly
            irregular and ridiculous occurrence, he might see his work in a new
            light, rediscovering its beauty and his passion while, along the
            way, forging the kind of intimate, joyful connection with the
            audience he had hoped would come from hosting a party in the first
            place.
          </p>
        </div>

        {/* IMAGE SECTION */}
        <div
          className="absolute bottom-0 left-1/4 transform-none w-[250px] h-[350px] landscape:top-0 landscape:left-[5vw] landscape:transform-none landscape:w-[500px] landscape:h-[700px]"
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
            className=""
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
              className="landscape:w-[10px] landscape:h-[10px]"
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
        <div className="flex flex-col items-center text-xs landscape:text-sm italic text-neutral-200 absolute top-[2.5vh] w-full">
          <p>Hover Over Any Text to bring it into focus.</p>
          <p>Watch Dickens's eyes to see how he reacts.</p>
        </div>
      </div>

      <div
        className={`w-full landscape:w-1/2 text-gray-400 flex flex-col justify-start items-start cursor-pointer  px-12 py-4 hover:opacity-100 transition-opacity duration-300 opacity-100 bg-black border-t border-gray-700`}
      >
        {displayText === 3 && (
          <>
            <p
              className={`relative leading-none whitespace-nowrap drop-shadow-md text-3xl landscape:text-4xl mb-1`}
            >
              Possibility
            </p>
            <p className="text-xs landscape:text-sm ">
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
              className={`relative leading-none whitespace-nowrap drop-shadow-md text-3xl hover:scale-150 transition-all duration-300 landscape:text-4xl  mb-1`}
            >
              Fact
            </p>
            <p className="text-xs landscape:text-sm ">
              In 1853, ten years after having dashed off his surprisingly
              successful holiday story, 'A Christmas Carol', Charles Dickens
              gave his first public reading of the work. The effort was so well
              received, as well as providing much needed cash, that Dickens
              continued to perform these celebrated readings for the rest of his
              life.
            </p>
          </>
        )}
        {displayText === 2 && (
          <>
            <p
              className={`relative leading-none whitespace-nowrap drop-shadow-md text-3xl hover:scale-150 transition-all duration-300 landscape:text-4xl  mb-1`}
            >
              Promise
            </p>
            <p className="text-xs landscape:text-sm">
              Now over 200 years old, Dickens has reached a breaking point and
              unbeknownst to theater management, he will not be performing his
              show this evening. Instead, he has planned something entirely new,
              something he is calling, "Charles Dickens's First Annual Holiday
              Party."
            </p>
          </>
        )}
        {displayText === 1 && (
          <>
            <p
              className={`relative leading-none whitespace-nowrap drop-shadow-md text-3xl hover:scale-150 transition-all duration-300 landscape:text-4xl  mb-1`}
            >
              Fiction
            </p>
            <p className="text-xs landscape:text-sm ">
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
          </>
        )}
      </div>
    </div>
  );
};

export default DickensAnimation;
