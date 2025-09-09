import Image from "next/image";
import DisplayImages from "@/components/display_images";
import DisplayReviews from "@/components/display_reviews";

export default function Home() {
  return (
    <div className="PAGE w-screen h-auto flex flex-col gap-4 items-start justify-start bg-neutral-100 overflow-hidden">
      <DisplayImages />
      <div className="w-[80%] h-auto mx-auto flex flex-col md:flex-row-reverse justify-center items-start gap-0 bg-neutral-950 rounded-xl mt-8 overflow-hidden p-4">
        <div className="md:w-1/2 h-full flex-1 p-8 flex flex-col justify-start items-start m-8 ml-0">
          <Image
            src="/2025_web_welcome_back.png"
            alt="2025. December 4-28. Theater Wit. Chicago."
            width={600}
            height={800}
            className="w-full h-auto invert -mt-8"
          />
          <hr className="w-full border-b border-neutral-200 my-4" />
          <p className="text-justify text-base text-neutral-100 drop-shadow-xl">
            This solo show, created and performed by Blake Montgomery, presents
            an intimate and slightly absurd portrayal of the famous author: now
            over 200 years old, he finds himself once again booked to perform
            his overly familiar Christmas tale &mdash; just as he has every
            December since 1853.
          </p>
          <button className="bg-amber-300/80 px-4 py-2 rounded-2xl w-[66%] mx-auto text-neutral-50 border-2 border-black hover:border-neutral-50 transition-colors duration-300 text-center mt-4">
            Get Tickets
          </button>
        </div>
        <div className="h-full w-1/2 flex justify-center items-center">
          <Image
            src="/2025_production_poster_black.png"
            alt="Charles Dickens Begrudgingly... Poster"
            width={600}
            height={800}
            className="w-full border-neutral-700 relative left-8"
          />
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center items-start bg-neutral-100 relative">
        <div className="REVIEWVIEWER w-full md:w-2/3 mx-auto flex flex-col justify-start items-start gap-8 px-8 h-auto text-neutral-950">
          <p className="text-left max-w-[600px]">
            This solo show, created and performed by Blake Montgomery, presents
            an intimate and slightly absurd portrayal of the famous author: now
            over 200 years old, he finds himself once again booked to perform
            his overly familiar Christmas tale &mdash; just as he has every
            December since 1853.
          </p>
          <p className="text-left max-w-[600px]">
            Dickens, however, has a plan. Unbeknownst to the theater&apos;s
            management, he intends to abandon the performance in lieu of a
            simply hosting a holiday party.
          </p>
          <p className="text-left max-w-[600px]">
            Perhaps Dickens will get his wish. Or, perhaps, the Spirits of
            Christmas might intervene to give him what he really needs, setting
            him on a path to rediscover the beauty in his work &mdash; and the
            joy of sharing it with an audience, one more time.
          </p>
        </div>
      </div>
      <div className="w-full mx-auto flex flex-col md:flex-row-reverse justify-center items-start bg-neutral-100 relative">
        <Image
          src="/dickens_illustration.png"
          alt="Charles Dickens Historical Reading Illustration"
          width={500}
          height={800}
          className="absolute bottom-0 w-1/3 -right-12 mix-blend-multiply"
        />
        <div className="w-full md:w-1/3 mt-12 mb-16 mx-auto">
          <DisplayReviews />
        </div>
      </div>
    </div>
  );
}
