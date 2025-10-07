import { ReactNode } from "react";
import SpecialHeadline from "./special_headline";

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
export default function FirstRight() {
  return (
    <div className="w-full px-2 md:px-0 mx-auto">
      <div className="flex flex-col justify-center items-center md:items-start gap-4 w-full  px-8 bg-neutral-900/30 backdrop-blur px-4 py-8 rounded-xl border border-neutral-600 h-full">
        {Headline.title && <SpecialHeadline {...Headline} />}
        {Headline.title && (
          <hr className="px-8 w-[100%] md:w-[80%] border-neutral-600 my-4" />
        )}
        <div className="flex flex-col gap-4 text-neutral-400 text-base drop-shadow-lg">
          {TextElement}
        </div>
      </div>
    </div>
  );
}
