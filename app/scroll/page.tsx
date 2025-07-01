"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowBigRight } from "lucide-react";
import CTAElement from "@/components/cta_element";

const CtaProps = {
  intro: "",
  links: [
    {
      href: "/history",
      text: "production history",
      icon: "history",
      internal: true,
    },
    {
      href: "/photos_publicity",
      text: "publicity photos by Joe Mazza",
      icon: "camera",
      internal: true,
    },
    {
      href: "/photos_performance",
      text: "performance photos by Michael Brosilow",
      icon: "spotlight",
      internal: true,
    },
    {
      href: "/booking",
      text: "booking information",
      icon: "booking",
      internal: false,
    },
  ],
};

export default function Home() {
  const handleScroll = () => {
    const sections = document.querySelectorAll(".snap-start");
    // const scrollPosition = window.scrollY;

    // Find the next section to scroll to
    Array.from(sections).forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top > 10) {
        // Small offset to handle current section
        section.scrollIntoView({ behavior: "smooth" });
        return;
      }
    });
  };

  return (
    <>
      {/* <ArrowBigRight
        onClick={handleScroll}
        className="fixed bottom-20 left-1/2 -translate-x-1/2 w-12 h-12 p-2 flex items-center justify-center rotate-90 text-neutral-200 z-40 cursor-pointer hover:scale-110 transition-transform"
      /> */}

      <div className="w-full h-[calc(100vh-4rem)] md:h-[calc(100vh-7rem)] flex flex-col items-center justify-center flex-shrink-0 snap-start p-4 md:px-0 md:py-0 bg-red-500/0">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="flex items-center justify-center mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-0 p-0">
            <div className="w-1/2 flex flex-col w-full h-full  p-8">
              <Image
                src="/charles-full.jpg"
                alt="Blake Montgomery as Charles Dickens, photo by Joe Mazza"
                width={800}
                height={800}
                className="w-full h-auto object-cover md:object-cover  md:h-full rounded-2xl overflow-hidden border border-neutral-200/25"
                priority
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="w-1/2 flex-shrink-0 flex flex-col justify-center gap-4 text-base md:text-2xl leading-relaxed md:top-0 p-8 md:p-16 rounded-2xl "
            >
              <p className="text-neutral-200 leading-10 text-2xl">
                Join the famous author, now over 200 years old, as he finds
                himself once again booked to perform his overly familiar
                Christmas tale. Dickens, however, has a plan. He intends to
                abandon the performance in lieu of a simply hosting a holiday
                party.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="w-full h-[calc(100vh-4rem)] md:h-[calc(100vh-7rem)] flex flex-col items-center justify-center  flex-shrink-0 snap-start p-4 md:px-4 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="flex items-center justify-center  mx-auto"
        >
          <div className="flex flex-col md:flex-row gap-0 p-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="w-1/2 flex-shrink-0 flex flex-col justify-center gap-4 text-base md:text-2xl leading-relaxed md:top-0 p-8 md:p-16 rounded-2xl "
            >
              <p className="text-neutral-200 leading-10 text-2xl">
                Perhaps Dickens will get his wish. Or, perhaps, the Spirits of
                Christmas will give him what he truly needs, setting him on a
                path to rediscover the beauty in his work — and the joy of
                sharing it with an audience, one more time.
              </p>
            </motion.div>

            <div className="w-1/2 flex flex-col w-full h-full  p-8">
              <Image
                src="/photos/bravelux/1_joe-mazza-chicago-brave-lux-inc-5108630.jpg"
                alt="Blake Montgomery as Charles Dickens, photo by Joe Mazza"
                width={1000}
                height={1000}
                className="w-full h-auto flex-shrink-0 object-contain md:object-cover md:h-[600px] rounded-2xl border border-neutral-200/25"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className="w-full h-[calc(100vh-4rem)] md:h-[calc(100vh-7rem)] flex flex-col items-center justify-center flex-shrink-0 snap-start p-4 md:px-4 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: false }}
          className="flex items-center justify-center text-neutral-200  max-w-4xl mx-auto"
        >
          <div className="w-full flex flex-col gap-1 md:gap-4 px-8 py-16 md:py-24">
            <h1 className="text-3xl md:text-6xl max-w-[800px] mx-auto text-center mx-auto font-bold">
              A remarkably artful riff on Dickens&apos; original, written and
              performed stunningly well by Blake Montgomery.
            </h1>
            <p className="text-sm mx-auto text-center mt-2">
              Bill Esler, <span className="italic">Buzz Center Stage</span>
            </p>
          </div>
        </motion.div>
      </div>
      <div className="w-full h-[calc(100vh-4rem)] md:h-[calc(100vh-7rem)] flex flex-col items-center justify-center flex-shrink-0 snap-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: false }}
          className="text-white text-4xl font-bold relative z-10"
        >
          <div className="col-span-6 w-full h-full">
            <Image
              src="/photos/bravelux/4-joe-mazza-chicago-brave-lux-inc-5206468.jpg"
              alt="Blake Montgomery as Charles Dickens, photo by Joe Mazza"
              width={1000}
              height={1000}
              className="w-[800px] h-full object-cover rounded-2xl shadow-lg border border-neutral-800"
            />
          </div>
        </motion.div>
      </div>
      <div className="w-full h-[calc(100vh-4rem)] md:h-[calc(100vh-7rem)] flex flex-col items-center justify-center flex-shrink-0 snap-start p-4 md:px-4 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: false }}
          className="flex items-center justify-center text-neutral-200 0 max-w-4xl mx-auto"
        >
          <div className="col-span-6 py-32">
            <h1 className="text-3xl md:text-6xl max-w-[800px] mx-auto text-center mx-auto font-bold">
              A one-man yuletide <br /> tour de force.
            </h1>
            <p className="text-sm mx-auto text-center mt-2">
              Katie Walsh, <span className="italic">The Fourth Walsh</span>
            </p>
          </div>
        </motion.div>
      </div>
      <div className="w-full h-[calc(100vh-4rem)] md:h-[calc(100vh-7rem)] flex flex-col items-center justify-center flex-shrink-0 snap-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: false }}
          className="text-white text-4xl font-bold relative z-10"
        >
          <div className="col-span-6 w-full h-full">
            <Image
              src="/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5206555.jpg"
              alt="Blake Montgomery as Charles Dickens, photo by Joe Mazza"
              width={1000}
              height={1000}
              className="w-[800px] h-full object-cover rounded-2xl shadow-lg border border-neutral-800"
            />
          </div>
        </motion.div>
      </div>
      <div className="w-full h-[calc(100vh-4rem)] md:h-[calc(100vh-7rem)] flex flex-col items-center justify-center flex-shrink-0 snap-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: false }}
          className="text-white text-4xl font-bold relative z-10"
        >
          <div className="col-span-6 py-24">
            <h1 className="text-5xl md:text-6xl max-w-[800px] mx-auto text-center font-bold">
              charming and sly
            </h1>
            <p className="text-sm mx-auto text-center mt-2">
              Kerry Reid, <span className="italic">Chicago Reader</span>
            </p>
          </div>
        </motion.div>
      </div>
      <div className="w-full h-[calc(100vh-4rem)] md:h-[calc(100vh-7rem)] flex flex-col items-center justify-center flex-shrink-0 snap-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: false }}
          className="text-white text-4xl font-bold relative z-10"
        >
          <div className="col-span-6 w-full h-full">
            <Image
              src="/photos/bravelux/202_joe-mazza-chicago-brave-lux-inc-5206819.jpg"
              alt="Blake Montgomery as Charles Dickens, photo by Joe Mazza"
              width={1000}
              height={1000}
              className="w-[800px] h-full object-cover rounded-2xl shadow-lg border border-neutral-800"
            />
          </div>
        </motion.div>
      </div>
      <div className="w-full h-[calc(100vh-4rem)] md:h-[calc(100vh-7rem)] flex flex-col items-center justify-center flex-shrink-0 snap-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: false }}
          className="text-white text-4xl font-bold relative z-10"
        >
          <div className="col-span-6 py-24">
            <h1 className="text-5xl md:text-6xl max-w-[800px] mx-auto text-center font-bold">
              an opportunity
              <br /> to rediscover
              <br /> comfort and joy
            </h1>
            <p className="text-sm mx-auto text-center mt-2">
              Katie Walsh, <span className="italic">The Fourth Walsh</span>
            </p>
          </div>
        </motion.div>
      </div>

      <div className="w-full h-[calc(100vh-4rem)] md:h-[calc(100vh-7rem)] flex flex-col items-center justify-center flex-shrink-0 snap-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: false }}
          className="text-white text-4xl font-bold relative z-10"
        >
          <div className="col-span-6 w-full h-full">
            <Image
              src="/photos/bravelux/98-joe-mazza-chicago-brave-lux-inc-5108669.jpg"
              alt="Blake Montgomery as Charles Dickens, photo by Joe Mazza"
              width={1000}
              height={1000}
              className="w-[800px] h-full object-cover rounded-2xl shadow-lg border border-neutral-800"
            />
          </div>
        </motion.div>
      </div>

      <div className="w-full h-[calc(100vh-4rem)] md:h-[calc(100vh)] flex flex-col items-center justify-center flex-shrink-0 snap-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: false }}
          className="text-white text-4xl font-bold relative z-10"
        >
          <div className="col-span-6 py-8">
            <CTAElement {...CtaProps} />
          </div>
        </motion.div>
      </div>
    </>
  );
}
