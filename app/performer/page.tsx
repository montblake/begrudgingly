"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Performer() {
  return (
    <main className="w-full h-fit py-4 sm:py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0, duration: 0.5 }}
        className="w-full max-w-[1000px] mx-auto h-fit md:h-full flex flex-col md:flex-row justify-start items-start gap-4 px-4 md:px-8 py-2 rounded-2xl pb-16  overflow-hidden"
      >
        <div className="w-full h-full min-h-[360px] max-w-[500px] mx-auto rounded-2xl overflow-hidden drop-shadow-lg border border-neutral-400">
          <Image
            src="/dickens_layers/layered_blake.png"
            alt="Blake Montgomery Headshot"
            width={500}
            height={655}
            className="h-auto w-full"
            priority
          />
        </div>

        <div className="w-full max-w-[500px] mx-auto flex flex-col py-4 md:py-0 md:pl-4 md:pr-4  h-full md:overflow-y-scroll">
          <div className="md:mb-0 text-neutral-400 px-4 sm:px-4 md:px-0">
            <h1 className="text-3xl text-center md:text-left">
              A superb storyteller! The perfect balance of dramatic and playful.
              I highly recommend the gift of Blake Montgomery this season.
            </h1>
            <p className="text-sm mt-2 text-center md:text-left italic">
              The Fourth Walsh
            </p>
          </div>

          <div className="w-full h-4 flex justify-center md:justify-start items-center my-8">
            <hr className="w-full border-neutral-400/80" />
          </div>

          <div className="w-full px-4 sm:px-4  md:px-0 pb-8 sm:pb-12 md:p-0 pt-4">
            <p className="text-neutral-400 text-sm">
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
          </div>
        </div>
      </motion.div>
    </main>
  );
}
