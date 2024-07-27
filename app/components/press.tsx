"use client"

import { useState } from 'react';

const QUOTES = [
  "The sleeper Christmas event of the season. You don't have to be into Dickens to appreciate it. It is so well done. I want to see it again.",
  "A great twist on a classic.",
  "Top-notch performance! Just what we needed to lift our spirits and put the holiday season in perspective.",
  "What a fun evening! We laughed a lot and got quiet and reflective and also teary-eyed. Very well done and very well performed. Great performance, really. Go.",
  "An exceptional one-man performance that entertained thoroughly! Superbly crafted and performed.",
  "With a mixture of humor and fabulous storytelling, this is a must see holiday show. Appropriate for the whole family.",
  "Absolutely delightful... The performance was original and interactive... The acting was terrific and though it was an unusual adaptation of the story, it really got to the heart of a classic. Highly recommended. I'd like to return with my teenage son!",
  "Exceptional! It's very funny, clever, and touching. Blake Montgomery is very talented. I highly recommend this show!",
  "Exactly what I needed to connect to the spirit of the season! Fabulous talent, wonderful humor, inspiring and insightful. Thank you — Thank you — Thank you!",
]

export default function Press() {

  const [showExplanation, setShowExplanation] = useState<Boolean>(false);
  const [currentQuote, setCurrentQuote] = useState<number>(0);

  const toggleShow = () => {
    setShowExplanation(!showExplanation);
  }

  const nextQuote = () => {
    const newQuote = (currentQuote + 1) % QUOTES.length;
    setCurrentQuote(newQuote);
  }

  const prevQuote = () => {
    const newQuote = (currentQuote - 1) >= 0 ? (currentQuote - 1) % QUOTES.length : QUOTES.length - 1;
    setCurrentQuote(newQuote);
  }

  return (
    <>
      <h1 className="text-amber-200 text-xs text-center uppercase mt-12">Press Reviews</h1>
      <div className="p-4 flex gap-4 w-full justify-between items-center text-neutral-600 mt-0 mb-16">
        <p className="text-2xl" onClick={prevQuote}>&lt;</p>
        <h2 className="text-md text-center text-neutral-200" onClick={toggleShow}>{QUOTES[currentQuote]}</h2>
        <p className="text-2xl" onClick={nextQuote}>&gt;</p>
      </div>
      <div className="text-center text-md ">
        {showExplanation &&
          <p className="italic text-xs text-center text-amber-200">Specifically, comments from Goldstar members who attended the <br />2012 production at The Building Stage.</p>
        }


      </div>
    </>
  )
}