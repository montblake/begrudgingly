"use client";

import { useState } from "react";

const PlayElement = (
  <>
    <p>
      Now over 200 years old, Charles Dickens finds himself once again booked to
      perform his overly familiar Christmas tale just as he has every December
      since 1853. Dickens, however, has other ideas.
    </p>
    <p>
      Perhaps he&apos;ll get his wish of simply hosting a festive holiday party.
      Or, perhaps, the Spirits of Christmas might intervene to give him what he
      really needs: a chance to rediscover the beauty in his work &mdash; and
      the joy of sharing it with an audience &mdash; one more time.
    </p>
    <p>
      Told in, around, and with the audience, this one-man yuletide tour de
      force is more festive party than traditional oration. The perfect balance
      of dramatic and playful, it is a remarkably artful riff on Dickens&apos;s
      original and a charming new holiday tradition to share with friends and
      family.
    </p>
  </>
);

const NewsElement = (
  <>
    <p>
      This year, the show will be performed at Chicago&apos;s Theater Wit.
      Moving the show to this venue allows us a longer run, a larger house, and
      better sightlines while still maintaining the intimacy of the original
      production. With this change in venue comes a perfect opportunity to
      re-examine the show and to make some changes to improve the story-telling.
    </p>
    <p>
      Joining the company for the process is award-winning Chicago-based
      director, Jonathan Berry. Berry will work with the show&apos;s
      creator/performer Blake Montgomery to re-imagine the show and build the
      new production that will debut in December 2025.
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
