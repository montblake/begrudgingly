"use client";
import ReviewCard from "@/components/review_card";
import ReviewModal from "@/components/review_modal";
import { useState } from "react";

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
    excerpts: [],
    source: "Chicago Tribune",
    link: "https://www.chicagotribune.com/2024/12/11/review-charles-dickens-begrudgingly-performs-a-christmas-carol-again-adds-layers-to-scrooges-story/?fbclid=IwY2xjawH1AMBleHRuA2FlbQIxMQABHYvICwEYRdA1ujv-gPyTXq9wttxYJRPvp5P8QGzbF5uIlTB2RwQcvLJdWg_aem_igiDTDBclgF0RQGW5BhbYA",
    image: "/red-dickens-3.jpg",
  },
];

export default function Home() {
  const [selected, setSelected] = useState(null);

  return (
    <main
      className={`w-full py-0 bg-red-950/50 ${
        selected !== null ? "h-full" : "h-fit"
      }`}
    >
      {selected !== null ? (
        <ReviewModal
          review={reviews[selected]}
          indexNum={selected}
          numReviews={reviews.length}
          close={() => setSelected(null)}
        />
      ) : (
        <div className=" h-full grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto pt-8 pb-16 place-items-center">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              review={review}
              index={index}
              numReviews={reviews.length}
              setSelected={setSelected}
            />
          ))}
        </div>
      )}
    </main>
  );
}
