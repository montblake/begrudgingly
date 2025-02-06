"use client";
import CTAElement from "@/components/cta_element";
import ReviewCard from "@/components/review_card";
import ReviewCardAlt from "@/components/review_card_alt";

const reviews = [
  {
    top: "one-man yuletide tour de force",
    excerpts: [
      "More festive party than traditional oration.",
      "The perfect balance of dramatic and playful.",
      "An opportunity to rediscover comfort and joy.",
    ],
    source: "The Fourth Walsh",
    link: "https://thefourthwalsh.com/2024/12/review-charles-dickens-begrudgingly-clownshow-yuletide-tour-de-force/",
    image: "/red-dickens-2.jpg",
  },
  {
    top: "wonderfully off-the-cuff and intimate",
    excerpts: [
      "Zany, spooky and tender.",
      "A handsome production.",
      "Witty, heartfelt and (mostly) true to Dickens.",
    ],
    source: "Chicago Stage and Screen",
    link: "https://www.chicagostageandscreen.com/post/a-homegrown-christmas-carol-to-revive-your-holiday-spirit",
    image: "/red-dickens-5.jpg",
  },
  {
    top: "a remarkably artful riff",
    excerpts: [
      "[Montgomery's Dickens] deconstructs the story, then disarms us, and we are open to hear the story anew.",
      "A work and performance not to be missed.",
    ],
    source: "Buzz Center Stage",
    link: "https://www.buzznews.net/theatre/theatre-reviews/item/5732-this-charles-dickens-gets-to-the-heart-of-christmas-carol-in-spectacular-performance.html",
    image: "/red-dickens-1.jpg",
  },
  {
    top: "charming and sly",
    excerpts: [
      "You may well find yourself enchanted by Montgomery's goofy but good-hearted take on Dickens.",
      "Montgomery's knowledge of the source text is palpable, which makes his riffs and discursions even more enjoyable.",
      "READER RECOMMENDED",
    ],
    source: "Chicago Reader",
    link: "https://chicagoreader.com/performing-arts/theater/theater-review/charles-dickens-begrudgingly-performs-a-christmas-carol-again/",
    image: "/red-dickens-4.jpg",
  },
  {
    top: "charming and funny",
    excerpts: [
      "Montgomery's energy ... is balanced by his charming self-awareness—either as himself or Dickens, one can't quite be sure. But it hardly matters, as the effect is the same, disarming the audience and bringing us happily along with him.",
      "A welcome addition to the slew of holiday theater options on offer every year",
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

const CtaProps = {
  intro: "",
  links: [
    {
      href: "/program",
      text: "production credits",
      icon: "program",
      internal: true,
    },
    {
      href: "/creator",
      text: "meet the creator",
      icon: "creator",
      internal: true,
    },
  ],
};

export default function Reviews() {
  return (
    <main className={`w-full py-0 h-full`}>
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto pt-8 pb-16 px-4 sm:px-8 md:px-12 justify-items-center">
        {reviews.map((review, index) => (
          <div key={index}>
            {index !== reviews.length - 1 ? (
              <ReviewCard review={review} index={index} />
            ) : (
              <ReviewCardAlt review={review} index={index} />
            )}
          </div>
        ))}
      </div>
      <div className="w-[80%] max-w-[400px] mx-auto">
        <CTAElement intro={CtaProps.intro} links={CtaProps.links} />
      </div>
      <div className="w-full h-48 md:h-96 bg-gradient-to-b from-neutral-950/0 to-neutral-950/100 md:bg-none" />
    </main>
  );
}
