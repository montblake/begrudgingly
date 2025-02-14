import Image from "next/image";
export default function Special() {
  return (
    <div className="bg-neutral-100 flex-1 flex-1 bg-neutral-100 text-neutral-900 flex flex-col justify-start items-center md:flex-row md:justify-center md:items-start px-8 md:px-16 py-8 md:py-16 overflow-y-scroll h-screen">
      <div className="w-full grid grid-cols-6 gap-4 max-w-[1000px] gap-x-16 gap-y-4 md:gap-y-16">
        <div className="col-span-6 md:col-span-3">
          <div className="flex flex-col gap-4 w-full h-auto rounded-2xl overflow-hidden border border-neutral-950/25 shadow-xl">
            <Image
              src="/charles-full.jpg"
              alt="Blake Montgomery as Charles Dickens, photo by Joe Mazza"
              width={1000}
              height={1000}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="col-span-6 md:col-span-3 flex flex-col justify-end gap-4 text-xl leading-relaxed relative md:top-24 md:p-0 p-4">
          <p>
            Join the famous author, now over 200 years old, as he finds himself
            once again booked to perform his overly familiar Christmas tale.
          </p>
          <p>
            Dickens, however, has a plan. He intends to abandon the performance
            in lieu of a simply hosting a holiday party.
          </p>

          <p>
            Perhaps Dickens will get his wish. Or, perhaps, the Spirits of
            Christmas might intervene and put him on a path to rediscover the
            beauty in his work — and the joy of sharing it with an audience, one
            more time.
          </p>
        </div>
        <div className="col-span-6 py-16 pl-24">
          <h1 className="text-5xl max-w-[800px] text-left font-bold">
            A remarkably artful riff on Dickens&apos; original, written and
            performed stunningly well by Blake Montgomery.
          </h1>
          <p className="text-xl max-w-[800px] mx-auto text-left mt-4">
            Bill Esler, Buzz Center Stage
          </p>
        </div>
        {/* <div className="col-span-6 md:col-span-3 flex flex-col justify-center gap-4  text-2xl leading-relaxed">
          <p>
            Perhaps Dickens will get his wish. Or, perhaps, the Spirits of
            Christmas might intervene and put him on a path to rediscover the
            beauty in his work — and the joy of sharing it with an audience, one
            more time.
          </p>
        </div> */}
        <div className="col-span-6 md:col-span-3">
          <div className="flex flex-col gap-4 w-full h-[600px] rounded-2xl overflow-hidden border border-neutral-200/25 shadow-xl relative">
            <Image
              src="/photos/bravelux/1_joe-mazza-chicago-brave-lux-inc-5108630.jpg"
              alt="Blake Montgomery as Charles Dickens, photo by Joe Mazza"
              width={1000}
              height={1000}
              className=" w-[600px] h-[600px] object-cover"
            />
          </div>
        </div>
        <div className=" col-span-6 gap-4 flex flex-col">
          <div className="text-base max-w-[600px] mx-auto rounded-2xl py-16 px-24 flex flex-col gap-2 bg-neutral-200 text-neutral-950">
            <p>
              Montgomery&apos;s knowledge of the source text is palpable, which
              makes his riffs and discursions even more enjoyable. And at heart,
              the show is an examination of the paradox of traditions: they both
              bind us to the past, but can also provide a pale light pointing in
              the direction of a better future as we realize “we can&apos;t go
              on forever.”
            </p>
            <p className="">- Kerry Reid, Chicago Reader</p>
          </div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="flex flex-col gap-4 w-full rounded-2xl overflow-hidden">
            <Image
              src="/photos/bravelux/4-joe-mazza-chicago-brave-lux-inc-5206468.jpg"
              alt="Blake Montgomery as Charles Dickens, photo by Joe Mazza"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="col-span-6 md:col-span-3 flex flex-col justify-end gap-4  text-2xl leading-relaxed">
          <p>
            Blake Montgomery premiered this show at The Building Stage in
            Chicago in 2011. It returned the follow year, the company&apos;s
            final season, winning a Jeff Award for Solo Performance.
          </p>
        </div>
        <div className="col-span-6 py-16">
          <h1 className="text-8xl max-w-[800px] mx-auto text-center font-bold">
            a one-man yuletide tour de force.
          </h1>
          <p className="text-xl max-w-[800px] mx-auto text-center mt-4">
            Katie Walsh, The Fourth Walsh
          </p>
        </div>
        <div className="col-span-6 md:col-span-3 flex flex-col justify-end gap-4  text-2xl leading-relaxed">
          <p>
            After more than a decade, Blake Montgomery stepped back into
            Dickens&apos; shoes (and wig) for the 2024 holiday season. With a
            new production company, CLOWNSHOW, he presented the piece at The Den
            Theatre in Chicago.
          </p>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="flex flex-col gap-4 w-full rounded-2xl overflow-hidden">
            <Image
              src="/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5206555.jpg"
              alt="Blake Montgomery as Charles Dickens, photo by Joe Mazza"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className=" col-span-6 gap-4 flex flex-col">
          <div className="text-base max-w-[800px] mx-auto bg-neutral-950/10 rounded-2xl py-16 px-24 flex flex-col gap-2">
            <p>Two things stood out to me as especially noteworthy:</p>
            <p>
              First, is the opportunity to see a vocally and physically gifted
              actor and improvisor like Montgomery up close. He roams through
              the house, ad-libbing Victorian era chit chat, engaging playfully,
              respectfully, and individually with his guests, treating us as
              fellow humans sharing an experience with him.
            </p>
            <p>
              The second thing that struck me was the potent magic of
              Dickens&apos; actual text as recited by Montgomery. How well the
              imagination works in allowing us to see the scenes described when
              all other stimulation and technology is stripped away.
            </p>
            <p className="">- Stephanie Kulke, Chicago Stage and Screen</p>
          </div>
        </div>
        <div className="col-span-6">
          <div className="flex flex-col gap-4 w-2/3 mx-auto rounded-2xl overflow-hidden">
            <Image
              src="/photos/bravelux/98-joe-mazza-chicago-brave-lux-inc-5108669.jpg"
              alt="Blake Montgomery as Charles Dickens, photo by Joe Mazza"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className=" col-span-6 gap-4 flex flex-col">
          <div className="text-base max-w-[800px] mx-auto bg-neutral-950/10 rounded-2xl py-16 px-24 flex flex-col gap-2">
            <p>
              Montgomery is a superb storyteller! His rendition of the familiar
              tale is the perfect balance of dramatic and playful. He brings
              true humanity to the character of Ebenezer. Montgomery transforms
              again and again as he begins to understand the missing aspects of
              a life unrealized.
            </p>
            <p className="">- Katie Walsh, The Fourth Walsh</p>
          </div>
        </div>
        <div className="col-span-6">
          <div className="flex flex-col gap-4 w-full mx-auto rounded-2xl overflow-hidden">
            <Image
              src="/composite_dickens.jpg"
              alt="Blake Montgomery as Charles Dickens, photo by Joe Mazza"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="col-span-6 py-16">
          <h1 className="text-8xl max-w-[800px] mx-auto text-center font-bold">
            charming and sly
          </h1>
          <p className="text-xl max-w-[800px] mx-auto text-center mt-4">
            Kerry Reid, Chicago Reader
          </p>
        </div>
        <div className=" col-span-6 gap-4 flex flex-col">
          <div className="text-base max-w-[800px] mx-auto bg-neutral-950/10 rounded-2xl py-16 px-24 flex flex-col gap-2">
            <p>
              Montgomery delivers a disarming portrayal of Dickens. Nattily
              dressed from head to toe in period tuxedo and tails, lace up
              boots, and a very convincing wig. Every inch the consummate host,
              he makes each guest feel personally welcomed into the space.
            </p>
            <p>
              The vibe is wonderfully off-the-cuff and intimate, which is
              fitting, because Montgomery&apos;s main themes are figuring out
              how to recapture the magic of a special event once it becomes a
              tradition; how to identify the beating heart of a literary or
              dramatic work once it becomes a juggernaut; and how to genuinely
              connect with and enjoy precious time spent with others.
            </p>

            <p className="">- Stephanie Kulke, Chicago Stage and Screen</p>
          </div>
        </div>
        <div className=" col-span-6 gap-4 flex flex-col">
          <div className="text-base max-w-[800px] mx-auto bg-neutral-950/10 rounded-2xl py-16 px-24 flex flex-col gap-2">
            <p>
              After spending some time somewhat disabusing us of our
              preconceived notions of what Dickens&apos; “Christmas Carol”
              holds, [Montgomery] deconstructs the story, then disarms us, and
              we are open to hear the story anew. The more opulent productions
              risk masking the human tale embodied in Dickens&apos; work.
              Montgomery reveals more of the internal workings of Scrooge...
            </p>
            <p>
              In all it&apos;s a remarkable reenvisioning of “A Christmas
              Carol,” and a work and performance not to be missed this season.
            </p>

            <p className="">- Bill Esler, Buzz Center Stage</p>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col gap-4 w-1/2">
        <div className="flex flex-col gap-4 w-full aspect-square rounded-full overflow-hidden">
          <Image
            src="/photos/bravelux/98-joe-mazza-chicago-brave-lux-inc-5108669.jpg"
            alt="Blake Montgomery as Charles Dickens, photo by Joe Mazza"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="p-8 flex flex-col gap-4 w-1/2">
        <div className="flex flex-col gap-4 p-4 h-[400px] bg-neutral-950/10 rounded-lg">
          <p>
            We&apos;re excited to announce that we&apos;re hosting a special
            event on December 15th. This event is a celebration of the release
            of our new book, &quot;The Spirits of Christmas&quot;.
          </p>
          <p>
            We&apos;ll be joined by special guests, including the author of the
            book, as well as a few other surprises.
          </p>
          <p>We hope to see you there!</p>
        </div>
        <div className="flex flex-col gap-4 w-full aspect-square rounded-full overflow-hidden">
          <Image
            src="/photos/bravelux/1_joe-mazza-chicago-brave-lux-inc-5108630.jpg"
            alt="Blake Montgomery as Charles Dickens, photo by Joe Mazza"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
      </div> */}
    </div>
  );
}
