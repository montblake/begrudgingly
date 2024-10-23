"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const storyIdeas = [
  {
    title: "historical note",
    text: "In 1853, ten years after having dashed off his surprisingly successful holiday story, 'A Christmas Carol', Charles Dickens gave his first public reading of the work. The effort was so well received, as well as providing much needed cash, that Dickens continued to perform these celebrated readings for the rest of his life.",
  },
  {
    title: "a fabrication",
    text: "Never one to let the facts get in the way of a good story, creator Blake Montgomery conflates the enduring popularity of the ubiquitous holiday 'Christmas Carol' with Dickens's personal readings and imagines that reports of the author's death were greatly exaggerated. And so, year after year, each and every December, not only do theaters around the globe produce adaptations of his famous book but Dickens himself is brought back to the stage to continue his tradition of solo readings ad infinitum.",
  },
  {
    title: "something new",
    text: `Now over 200 years old, Dickens has reached a breaking point and unbeknownst to theater management, he will not be performing his show this evening. Instead, he has planned something entirely new, something he is calling, "Charles Dickens's First Annual Holiday Party."`,
  },
  {
    title: "ghostly intervention",
    text: `Perhaps Dickens will get his wish. Or, perhaps, the Spirits of Christmas might intervene and force him to perform his worn-out tale once again, in the course of which, due to some highly irregular and ridiculous occurrence, he might see his work in a new light, rediscovering its beauty and his passion while, along the way, forging the kind of intimate, joyful connection with the audience he had hoped would come from hosting a party in the first place.`,
  },
];

const DickensAnimation: React.FC = () => {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const dickensRef = useRef<HTMLDivElement>(null);

  const [storyIdea, setStoryIdea] = useState(0);

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

  const handleStoryClick = (index: number) => {
    setStoryIdea(index);
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center relative bg-gradient-to-b from-gray-300 to-gray-900 mt-12">
      {/* Story Idea Areas */}
      <div className="absolute top-0 left-0 w-full h-3/4 z-40 mt-24">
        {storyIdeas.map((idea, index) => (
          <div
            key={index}
            className={`w-[${
              100 + index * 20
            }px] text-center aspect-square rounded-full text-neutral-200 flex justify-center items-center absolute top-1/2 left-1/2 cursor-pointer`}
            style={{
              transform: `translate(${
                index === 0
                  ? "-250%"
                  : index === 1
                  ? "240%"
                  : index === 2
                  ? "-250%"
                  : "130%"
              }, ${
                index === 0
                  ? "-300%"
                  : index === 1
                  ? "-180%"
                  : index === 2
                  ? "-40%"
                  : "30%"
              })`,
            }}
            onClick={() => handleStoryClick(index)}
          >
            <p
              className={`relative top-[-${
                index * 5
              }px] leading-none whitespace-nowrap drop-shadow:md text-${
                index === 0
                  ? "3xl"
                  : index === 1
                  ? "3xl"
                  : index === 2
                  ? "3xl"
                  : "3xl"
              }`}
            >
              {idea.title.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {/* {i < idea.title.split("\n").length - 1 && <br />} */}
                </React.Fragment>
              ))}
            </p>
          </div>
        ))}
      </div>

      {/* IMAGE SECTION */}
      <div
        className="absolute top-0 left-50 w-[500px] h-[700px] mt-24"
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
            width={10}
            height={20}
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
            width={10}
            height={10}
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
      {/* Text section */}
      <div className="absolute bottom-8 left-[50%] translate-x-[-50%]  w-1/2 h-auto flex flex-col justify-center items-center bg-gray-50 px-12 py-8 rounded-lg text-gray-900">
        <h1 className="text-xl font-bold mb-2">
          {storyIdeas[storyIdea].title}
        </h1>
        <p className="text-sm">{storyIdeas[storyIdea].text}</p>
      </div>
    </div>
  );
};

export default DickensAnimation;
