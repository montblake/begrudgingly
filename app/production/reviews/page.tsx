"use client";

import Image from "next/image";
import Footer from "../../components/footer";
import Nav from "../../components/nav";
import ProductionLinks from "../../components/production_links";

const reviews = [
  {
    top: "one-man yuletide tour de force",
    excerpts: [
      "more festive party than traditional oration",
      "the perfect balance of dramatic and playful",
      "an opportunity to rediscover comfort and joy",
    ],
    source: "The Fourth Walsh",
    link: "https://thefourthwalsh.com/2024/12/review-charles-dickens-begrudgingly-clownshow-yuletide-tour-de-force/",
    image: "/red-dickens-2.jpg",
  },
  {
    top: "wonderfully off-the-cuff and intimate",
    excerpts: [
      "zany, spooky and tender",
      "a handsome production",
      "witty, heartfelt and (mostly) true to Dickens",
    ],
    source: "Chicago Stage and Screen",
    link: "https://www.chicagostageandscreen.com/post/a-homegrown-christmas-carol-to-revive-your-holiday-spirit",
    image: "/red-dickens-5.jpg",
  },
  {
    top: "a remarkably artful riff",
    excerpts: [
      "[Montgomery's Dickens] deconstructs the story, then disarms us, and we are open to hear the story anew.",
      "a work and performance not to be missed",
    ],
    source: "Buzz Center Stage",
    link: "https://www.buzznews.net/theatre/theatre-reviews/item/5732-this-charles-dickens-gets-to-the-heart-of-christmas-carol-in-spectacular-performance.html",
    image: "/red-dickens-1.jpg",
  },
  {
    top: "charming and sly",
    excerpts: [
      "you may well find yourself enchanted by Montgomery's goofy but good-hearted take on Dickens",
      "Montgomery's knowledge of the source text is palpable, which makes his riffs and discursions even more enjoyable",
      "READER RECOMMENDED",
    ],
    source: "Chicago Reader",
    link: "https://chicagoreader.com/performing-arts/theater/theater-review/charles-dickens-begrudgingly-performs-a-christmas-carol-again/",
    image: "/red-dickens-4.jpg",
  },
  {
    top: "charming and funny",
    excerpts: [
      "Montgomery's energy ... is balanced by his charming self-awareness—either as himself or Dickens, one can't quite be sure. But it hardly matters, as the effect is the same, disarming the audience and bringing us happily along with him",
      "a welcome addition to the slew of holiday theater options on offer every year",
    ],
    source: "Third Coast Review",
    link: "https://thirdcoastreview.com/2024/12/11/stages-review-charles-dickens-begrudgingly-christmas-carol",
    image: "/red-dickens-6.jpg",
  },
  {
    top: "When the classic British sci-fi TV series 'Doctor Who' was rebooted for the new century in 2005, the very first journey into the past for its time-traveling alien protagonist and his human companion was to 1869 Cardiff to see Charles Dickens give a public reading of 'A Christmas Carol.'",
    excerpts: [
      // 5, the very first journey into the past for its time-traveling alien protagonist and his human companion was to 1869 Cardiff to see Charles Dickens give a public reading of 'A Christmas Carol.'"When the classic British sci-fi TV series 'Doctor Who' was rebooted for the new century in 200",
      // "[gives away the one moment of magic and surpise the set-up relies on]",
      // "this script doesn't provide many insights into Dickens' life or background details on 'A Christmas Carol.'",
      // "why filter the story through Dickens at all?",
    ],
    source: "Chicago Tribune",
    link: "https://www.chicagotribune.com/2024/12/11/review-charles-dickens-begrudgingly-performs-a-christmas-carol-again-adds-layers-to-scrooges-story/?fbclid=IwY2xjawH1AMBleHRuA2FlbQIxMQABHYvICwEYRdA1ujv-gPyTXq9wttxYJRPvp5P8QGzbF5uIlTB2RwQcvLJdWg_aem_igiDTDBclgF0RQGW5BhbYA",
    image: "/red-dickens-3.jpg",
  },
];

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center bg-victorian-texture bg-cover bg-center bg-no-repeat bg-fixed relative mx-auto mt-24">
      <Nav />
      <div className="w-full relative z-40 mt-2">
        <ProductionLinks />
      </div>
      <div className="w-full h-full bg-red-950/85 absolute top-0 left-0 z-0" />

      <div className="w-full h-full flex flex-col justify-between items-start text-gray-100 text-center text-sm relative z-1 pt-8 pb-16">
        <div className="flex flex-row flex-wrap gap-16 justify-center items-start py-8 overflow-x-scroll overflow-y-hidden scroll-smooth max-w-[1200px] mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="w-[90vw] md:w-[40vw] max-w-[400px] flex-shrink-0 text-center"
            >
              <div className="bg-black/60 text-neutral-200 border border-neutral-700 rounded-xl drop-shadow-lg relative z-1 overflow-scroll px-0 pt-8 pb-0">
                <div className="flex flex-col justify-start items-center gap-4 mb-12 w-full relative z-1 px-8">
                  <h2
                    className={`${
                      index === reviews.length - 1 ? "text-xl" : "text-3xl"
                    } mb-2 text-center font-bold px-4`}
                  >
                    <span className="">&ldquo;</span>
                    {review.top}
                    <span className="">&rdquo;</span>
                  </h2>
                  <div className="w-full h-full relative z-1 mb-4 px-16">
                    <Image
                      src={review.image}
                      alt={review.source}
                      width={300}
                      height={300}
                      className="rounded-xl relative z-1 w-full h-full border border-neutral-200/40"
                    />
                  </div>
                  <div className="w-full h-full relative z-1 mb-2 flex flex-col justify-center items-center gap-4">
                    {review.excerpts.map((excerpt, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col justify-center items-center gap-4"
                      >
                        <p className=" w-full text-sm px-4 text-center">
                          <span className="">&ldquo;</span>
                          {excerpt}
                          <span className="">&rdquo;</span>
                        </p>
                        {idx !== review.excerpts.length - 1 && (
                          <Image
                            src={"/diamond-3.png"}
                            alt={"decoration"}
                            width={20}
                            height={20}
                            className="opacity-75 w-4 h-auto"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-0 w-full relative z-1 bg-neutral-200 text-black px-8 py-4">
                  <p className="text-sm font-bold uppercase relative z-1">
                    {review.source}
                  </p>
                  {review.link && (
                    <a
                      href={review.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs underline hover:text-gray-300 relative z-1"
                    >
                      Read Full Review
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
