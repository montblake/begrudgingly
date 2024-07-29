"use client"

import { useState } from 'react';
import { CircleArrowRight, CircleArrowLeft } from 'lucide-react';

const REVIEWS = [
  { quote: "As the guests enter, each one is made welcome by Mr. Dickens. He runs to the tea cups, matching saucer and cup with the appropriate pattern. He flings a biscuit to the nearest patron young and old. He moves through the aisle with likeable ease, keenly observing audience. He makes you smile almost instantly.", credit: "Lazlo Collins, Chicagoland Theater Reviews" },
  { quote: "Encore!", credit: "Katy Walsh, Let's Play at ChicagoNow" },
  { quote: "I was expecting something transgressive and wonderfully bitter based on the show's title, but writer-performer Blake Montgomery has envisioned something far cozier than my personal cynicism could have predicted. [...] It is charming and awkward and the sort of thing that is disarming in its good-natured sweetness.", credit: "Nina Metz, Chicago Tribune" }
  ,
  { quote: "Montgomery's smart, heartfelt reinvention proves that you don't need fake snow and flying ghosts to make the tale resonate.", credit: "Kerry Reid, Chicago Reader" },
]

export default function Press() {

  // const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [currentQuote, setCurrentQuote] = useState<number>(0);

  // const toggleShow = () => {
  //   setShowExplanation(!showExplanation);
  // }

  const nextQuote = () => {
    const newQuote = (currentQuote + 1) % REVIEWS.length;
    setCurrentQuote(newQuote);
  }

  const prevQuote = () => {
    const newQuote = (currentQuote - 1) >= 0 ? (currentQuote - 1) % REVIEWS.length : REVIEWS.length - 1;
    setCurrentQuote(newQuote);
  }

  return (
    <div className="py-12 px-12 md:px-24 relative flex flex-col justify-center items-center w-full">
      <h1 className="text-amber-200 text-xs md:text-base text-center uppercase ">Press Reviews</h1>
      <div className="flex flex-col justify-center items-center text-neutral-600 h-[300px] sm:w-2/3">
        <h2 className="text-md sm:text-xl md:text-2xl text-center text-neutral-200 mb-2" >{REVIEWS[currentQuote].quote}</h2>
        <p className="text-xs sm:text-md md:text-lg text-center text-neutral-200" >{REVIEWS[currentQuote].credit.split(",")[0]}</p>
        <p className="italic text-xs sm:text-md md:text-lg text-center text-neutral-200" >{REVIEWS[currentQuote].credit.split(",")[1]}</p>
      </div>
      <div className="w-full flex justify-center gap-2">
        <div className="opacity-[80%]">
          <CircleArrowLeft color="rgb(253 230 138)" size={25} onClick={prevQuote} />
        </div>
        <div className="opacity-[80%]">
          <CircleArrowRight color="rgb(253 230 138)" size={25} onClick={nextQuote} />
        </div>
      </div>
      {/* <div className="text-center text-md ">
        {showExplanation &&
          <p className="italic text-xs text-center text-amber-200">Specifically, comments from Goldstar members who attended the <br />2012 production at The Building Stage.</p>
        }
      </div> */}
    </div>
  )
}