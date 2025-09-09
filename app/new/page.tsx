import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen flex flex-col gap-0 items-center text-center text-sm sm:text-base md:text-lg text-neutral-200">
      <Image
        src="/2025_production_poster_web_notext.png"
        alt="Charles Dickens Begrudgingly... Poster"
        width={500}
        height={800}
        className="w-full h-auto"
      />
      <Image
        src="/2025_web_welcome_back.png"
        alt="2025. December 4-28. Theater Wit. Chicago."
        width={250}
        height={800}
        className="mx-auto mb-4"
      />

      <div className="w-full flex flex-col gap-0 items-center text-sm sm:text-base md:text-lg text-neutral-950 px-8 py-8 bg-gradient-to-br from-amber-200/80 to-amber-300/80">
        <p className="text-left">
          Charles Dickens Begrudgingly... is back for the holidays in 2025!
          Blake Montgomery returns as Charles Dickens in this Jeff Award-winning
          solo performance. This year, the show will be performed at Theater Wit
          in Chicago from December 4-28.
        </p>
        <h2 className="text-center text-red-700 text-lg font-bold mt-2">
          Tickets Available Soon!
        </h2>
      </div>
      <Image
        src="/photos/bravelux/1_joe-mazza-chicago-brave-lux-inc-5108630.jpg"
        alt="Blake Montgomery as Charles Dickens"
        width={250}
        height={800}
        className="w-full h-auto border border-neutral-600"
      />
      <div className="w-full flex flex-col gap-2 items-center text-sm sm:text-base md:text-lg text-neutral-950 px-8 py-8 bg-gradient-to-br from-amber-200/80 to-amber-300/80">
        <p className="text-left">
          This solo show, created and performed by Blake Montgomery, presents an
          intimate and slightly absurd portrayal of the famous author: now over
          200 years old, he finds himself once again booked to perform his
          overly familiar Christmas tale &mdash; just as he has every December
          since 1853.
        </p>
        <p className="text-left">
          Dickens, however, has a plan. Unbeknownst to the theater&apos;s
          management, he intends to abandon the performance in lieu of a simply
          hosting a holiday party.
        </p>
        <p className="text-left">
          Perhaps Dickens will get his wish. Or, perhaps, the Spirits of
          Christmas might intervene to give him what he really needs, setting
          him on a path to rediscover the beauty in his work &mdash; and the joy
          of sharing it with an audience, one more time.
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center px-8 py-4">
        <h2 className="text-center text-neutral-100 text-3xl font-bold">
          Montgomery&apos;s smart, heartfelt reinvention proves that you
          don&apos;t need fake snow and flying ghosts to make the tale resonate.
        </h2>
        <p className="text-sm sm:text-lg md:text-base">
          Kerry Reid, <span className="italic">Chicago Reader</span>
        </p>
      </div>
    </div>
  );
}
