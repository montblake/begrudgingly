"use client";

import Image from "next/image";
import Footer from "../components/footer";
import Nav from "../components/nav";

export default function Home() {
  return (
    <main className="w-full h-screen pt-16 pb-0 relative overflow-y-scroll lg:overflow-y-hidden">
      {/* <div className="bg-black/60 absolute top-0 left-0 bottom-0 right-0 z-0" /> */}

      <div className="w-full max-w-[1200px] mx-auto h-fit lg:h-full flex flex-col lg:flex-row justify-start items-start gap-4 p-0 rounded-2xl pb-16  lg:my-8 overflow-hidden">
        <div className=" w-full h-full min-h-[360px] max-h-[50vh] sm:max-h-[60vh] md:max-h-[65vh] lg:max-h-[70vh] max-w-[600px] mx-auto  overflow-hidden lg:w-1/2 border border-neutral-500">
          <Image
            src="/dickens_layers/layered_blake.png"
            alt="Blake Montgomery Headshot"
            width={1000}
            height={1000}
            className="h-auto w-full opacity-100"
          />
        </div>

        <div className="w-full flex flex-col rounded-2xl px-12 py-8 lg:w-1/2 h-full lg:overflow-y-scroll">
          <div className="lg:mb-0 text-neutral-400 px-4 sm:px-12 lg:px-0">
            <h1 className="text-3xl text-center">
              &ldquo;Top-notch performance! Just what we needed to lift our
              spirits and put the holiday season in perspective.&rdquo;
            </h1>
            <hr className="w-full border-neutral-400/80 mt-8" />
          </div>

          <div className="w-full font-serif px-4 sm:px-12  lg:px-0 pb-8 sm:pb-12 lg:pb-12 pt-4 lg:p-0 mt-8">
            <p className="text-neutral-400 text-base sm:text-lg md:text-xl lg:text-2xl lg:text-base">
              <span className="font-bold text-neutral-200">
                Blake Montgomery
              </span>{" "}
              began his career in Chicago directing ensemble clown theater and
              performing with a variety of non-naturalistic Chicago theaters,
              most notably Redmoon with whom he collaborated for more than a
              decade. In 2005, Montgomery founded The Building Stage, a theater
              company and performance space, where he served as Artistic
              Director until its closing in 2013. The company was known for its
              ensemble-devised, director-driven creations, particularly in
              literary adaptations like their Jeff Award-winning{" "}
              <span className="italic">Moby-Dick</span> and the poetic,
              clown-inspired <span className="italic">Dawn, Quixote</span>.
              Montgomery&apos;s artistic approach draws on his training at the
              École Jacques Lecoq, the Dell&apos;Arte School of Physical
              Theater, and Middlebury College. A member of Actors&apos; Equity,
              his performances in Chicago include work with The House Theatre,
              The Hypocrites, Remy Bumppo Theatre Company, Court Theatre,
              Chicago Shakespeare, Steppenwolf, and Writers Theatre.
            </p>
            {/* <p className="text-neutral-400 text-base sm:text-lg md:text-xl lg:text-2xl lg:text-base mt-4">
              <span className="font-bold text-neutral-200">Blake Montgomery</span>{" "}
              began his career in Chicago directing ensemble clown theater and
              performing with a variety of non-naturalistic Chicago theaters,
              most notably Redmoon with whom he collaborated for more than a
              decade. In 2005, Montgomery founded The Building Stage, a theater
              company and performance space, where he served as Artistic
              Director until its closing in 2013. The company was known for its
              ensemble-devised, director-driven creations, particularly in
              literary adaptations like their Jeff Award-winning{" "}
              <span className="italic">Moby-Dick</span> and the poetic,
              clown-inspired <span className="italic">Dawn, Quixote</span>.
              Montgomery&apos;s artistic approach draws on his training at the
              École Jacques Lecoq, the Dell&apos;Arte School of Physical
              Theater, and Middlebury College. A member of Actors&apos; Equity,
              his performances in Chicago include work with The House Theatre,
              The Hypocrites, Remy Bumppo Theatre Company, Court Theatre,
              Chicago Shakespeare, Steppenwolf, and Writers Theatre.
            </p> */}
          </div>
        </div>
      </div>
    </main>
  );
}
