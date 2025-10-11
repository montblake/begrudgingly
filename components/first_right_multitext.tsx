"use client";

import { useState } from "react";

const PlayElement = (
  <>
    <p>
      Charles Dickens finds himself once again booked to perform his overly
      familiar Christmas tale just as he has every December since 1853. The
      famous author, however, has other ideas.
    </p>
    <p>
      Unfortunately, his accidental conjuring of some unemployed Christmas
      Spirit sets in motion a chain of events that place Dickens on a path to
      rediscover the beauty in his work — and the joy of sharing it with an
      audience — one more time.{" "}
    </p>
    <p>
      Told in, around, and with the audience, this one-man yuletide tour de
      force is more festive party than traditional oration. Offering the perfect
      balance of dramatic and playful moments, it is both charming and sly, and
      a remarkably artful riff on Dickens&apos;s original.
    </p>
  </>
);

const NewsElement = (
  <>
    <p>
      This year, the show will be performed at Theater Wit in Chicago from
      December 4-28. MOving the show to this venue allows us a longer run and a
      larger house, both of which are good essential to the success of the
      production. With this change in venue comes a perfect opportunity to
      re-examine the show and to make some changes to improve the production.
    </p>
    <p>
      Joining the company for the process and helming the new production is
      award-winning director, Jonathan Berry. Berry will work with Blake
      Montgomery to re-imagine the show and to build a new production that will
      debut at Chicago&apos;s Theater Wit from December 4-28.
    </p>
  </>
);

export default function FirstRight() {
  const [showPlay, setShowPlay] = useState(true);
  return (
    <div className="w-full">
      <nav className="w-full flex flex-row justify-start items-center gap-4 mb-8">
        <button
          onClick={() => setShowPlay(true)}
          className={`font-bold  uppercase text-neutral-300 text-sm  ${
            showPlay
              ? "border-neutral-300"
              : "border-neutral-300/50 text-neutral-300/50 hover:border-b-2"
          }`}
        >
          The Play
        </button>
        <span className="text-neutral-500 text-lg  font-bold">|</span>
        <button
          onClick={() => setShowPlay(false)}
          className={`font-bold  uppercase text-neutral-300 text-sm  ${
            !showPlay
              ? "border-neutral-300"
              : "border-neutral-300/50 text-neutral-300/50 hover:border-b-2"
          }`}
        >
          New in 2025
        </button>
      </nav>
      {showPlay ? (
        <div className="flex flex-col gap-4 text-neutral-400 text-base drop-shadow-lg">
          {PlayElement}
        </div>
      ) : (
        <div className="flex flex-col gap-4 text-neutral-400 text-base drop-shadow-lg">
          {NewsElement}
        </div>
      )}
    </div>
  );
}
