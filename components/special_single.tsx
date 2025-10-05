import { ReactNode } from "react";

import { Button } from "./ui/button";

import SpecialHeadline from "./special_headline";
import Image from "next/image";
import PictureReviewScramble from "./picture_review_scramble";

const MainImage = {
  src: "/2025_dickens_web_transparency.png",
  alt: "Charles Dickens Begrudgingly... Poster",
  width: 800,
  height: 800,
};

type TextElement = ReactNode;

const Headline = {
  title:
    "Montgomery's smart, heartfelt reinvention proves that you don't need fake snow and flying ghosts to make the tale resonate.",
  author: "Kerry Reid",
  publisher: "Chicago Reader",
};

const TextElement = (
  <>
    <p>
      Now over 200 years old, Charles Dickens finds himself once again booked to
      perform his overly familiar Christmas tale &mdash; just as he has every
      December since 1853. Dickens, however, has other plans.
    </p>
    <p>
      Despite his deep misgivings, and thanks to the mischievous intervention of
      the Spirits of Christmas, Dickens is set on a path to rediscover the
      beauty in his work and the joy of sharing it with an audience, one more
      time.
    </p>
    <p>
      This intimate and absurd solo show, created and performed by Blake
      Montgomery who won the Jeff Award for Solo Performance in 2012, is in
      constant development. For 2025, the script has been newly re-imagined and
      revised in collaboration with director Jonathan Berry. Berry will helm the
      creative team building a new production that will debut at Chicago&apos;s
      Theater Wit from December 4-28.
    </p>
  </>
);

export default function SpecialPage() {
  return (
    <main className="w-full h-full flex flex-col justify-start items-start gap-1 max-w-[1000px] mx-auto">
      <div className="w-full flex flex-col gap-8 justify-start items-center md:flex-row md:justify-center md:items-stretch md:gap-8 mx-auto p-4 md:p-8 w-full">
        <div className="w-full md:w-1/2 p-0 flex flex-col justify-start items-center gap-0">
          <Image
            src={MainImage.src}
            alt={MainImage.alt}
            width={MainImage.width}
            height={MainImage.height}
            className="w-full h-auto object-cover object-center rounded-xl relative top-0 md:-top-4 mb-4 md:-mb-4"
          />

          <div className="w-full flex flex-col gap-0 rounded-xl px-2 md:px-6 text-neutral-950">
            <div className="w-full bg-neutral-300 rounded-xl md:px-0 md:py-0 border border-neutral-600 relative overflow-hidden flex flex-col items-start justify-start">
              <div className="bg-neutral-900 w-full px-4 py-2">
                <h1 className="text-3xl uppercase font-bold text-center text-amber-300/80 my-2">
                  C<span className="text-2xl">hicago</span> 2025
                </h1>
              </div>
              <div className="absolute bottom-[10%] left-[50%] w-2/3 h-2/3 bg-[url('/dickens_illustration.png')] bg-contain bg-bottom-left bg-no-repeat z-1 mix-blend-multiply opacity-100"></div>
              <div className="w-full rounded-xl flex flex-col items-start justify-start gap-0 relative z-2 pl-4 md:pl-12 pt-6 pb-8">
                <h2 className="text-lg md:text-xl font-bold text-center">
                  December 4&ndash;28
                </h2>
                <p className="text-sm italic font-bold text-center my-2">at</p>
                <h3 className="text-xl font-bold text-center mb-0">
                  Theater Wit
                </h3>
                <h4 className="text-sm font-bold text-center ">
                  1229 W. Belmont
                </h4>
                <p className="text-sm italic font-bold text-center mt-2">
                  box office
                </p>
                <div className="text-sm font-bold text-center flex flex-col items-start justify-center gap-0">
                  <p>(773) 975-8150</p>
                  <p>theaterwit.org</p>
                </div>
              </div>
              <div className="w-full bg-neutral-900 relative z-30 flex flex-col items-center justify-center">
                <Button className="bg-amber-300/75  px-8 py-2 rounded-2xl mx-auto font-bold  uppercase text-neutral-900 border-2 border-black hover:scale-105 hover:bg-amber-300/90 transition-all duration-300 text-center text-xs mt-3 mb-4">
                  Tickets
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 px-2 md:px-0 mx-auto">
          <div className="flex flex-col justify-center items-center md:items-start gap-4 w-full max-w-[500px] mx-auto md:max-w-none px-8 bg-neutral-900/30 backdrop-blur px-4 py-8 rounded-xl border border-neutral-600 h-full">
            {Headline.title && <SpecialHeadline {...Headline} />}
            {Headline.title && (
              <hr className="px-8 w-[100%] md:w-[80%] border-neutral-600 my-4" />
            )}
            <div className="flex flex-col gap-4 text-neutral-400 text-base drop-shadow-lg">
              {TextElement}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pl-6 md:pl-14 pr-6 md:pr-8 pb-24 flex flex-col items-center justify-center gap-4">
        <PictureReviewScramble />
        <Button className="bg-amber-300/75  px-8 py-2 rounded-2xl mx-auto font-bold  uppercase text-neutral-900 border-2 border-black hover:scale-105 hover:bg-amber-300/90 transition-all duration-300 text-center text-xs mt-3 mb-4">
          Tickets
        </Button>
      </div>
    </main>
  );
}
