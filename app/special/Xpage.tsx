import Image from "next/image";
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
  return (
    <div className="bg-transparent text-neutral-300 flex flex-col justify-start items-center px-4 md:px-16 py-4 md:py-16 overflow-y-auto overflow-x-hidden h-[calc(100vh-4rem)] scroll-smooth snap-y snap-mandatory">
      <div className="h-[100vh] w-full flex items-center justify-center snap-start bg-green-500">
        <div className="flex flex-col md:grid md:grid-cols-6 gap-4 bg-neutral-200 text-neutral-950 rounded-2xl border border-neutral-800 shadow-xl">
          <div className="col-span-3 flex flex-col w-full h-full rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none overflow-hidden border-r border-neutral-200/25 shadow-xl relative">
            <Image
              src="/charles-full.jpg"
              alt="Blake Montgomery as Charles Dickens, photo by Joe Mazza"
              width={1000}
              height={1000}
              className="w-full h-auto object-contain md:object-cover border-b md:border-b-0 md:h-full md:border-r border-neutral-400"
            />
          </div>

          <div className="col-span-3 flex flex-col justify-center gap-4 text-xl leading-relaxed relative md:top-0 md:p-16 p-8 rounded-2xl">
            <p>
              Join the famous author, now over 200 years old, as he finds
              himself once again booked to perform his overly familiar Christmas
              tale. Dickens, however, has a plan. He intends to abandon the
              performance in lieu of a simply hosting a holiday party.
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-[calc(100vh-8rem)] w-full flex items-center snap-start">
        <div className="w-full flex flex-col gap-1 md:gap-4 px-8 py-16 md:py-24">
          <h1 className="text-3xl md:text-5xl max-w-[800px] mx-auto text-center mx-auto font-bold shadow-lg">
            A remarkably artful riff on Dickens&apos; original, written and
            performed stunningly well by Blake Montgomery.
          </h1>
          <p className="text-sm mx-auto text-center mt-8">
            Bill Esler, <span className="italic">Buzz Center Stage</span>
          </p>
        </div>
      </div>

      <div className="min-h-[calc(100vh-8rem)] w-full flex items-center snap-start">
        <div className="flex flex-col md:grid md:grid-cols-6 gap-4 bg-neutral-200 text-neutral-950 rounded-2xl p-0 border border-neutral-800 shadow-xl">
          <div className="col-span-3 flex flex-col justify-center gap-4 text-xl leading-relaxed relative md:top-0 md:p-16 p-8 rounded-2xl">
            <p>
              Perhaps Dickens will get his wish. Or, perhaps, the Spirits of
              Christmas will give him what he truly needs, setting him on a path
              to rediscover the beauty in his work — and the joy of sharing it
              with an audience, one more time.
            </p>
          </div>

          <div className="col-span-3 flex flex-col gap-4 w-full h-full md:h-[600px] rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none overflow-hidden border-l border-neutral-200/25 shadow-xl relative">
            <Image
              src="/photos/bravelux/1_joe-mazza-chicago-brave-lux-inc-5108630.jpg"
              alt="Blake Montgomery as Charles Dickens, photo by Joe Mazza"
              width={1000}
              height={1000}
              className=" w-[600px] h-[600px] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="min-h-[calc(100vh-8rem)] w-full flex items-center snap-start">
        <div className="col-span-6 gap-4 flex flex-col px-0 py-4 md:px-0 md:py-16 md:flex-row md:gap-8 w-full">
          <div className="text-base max-w-[600px] w-full mx-auto rounded-2xl py-8 px-8 md:px-12 flex flex-col gap-2  text-neutral-300 bg-neutral-600/50 backdrop-blur shadow-lg border border-neutral-800">
            <p>
              Montgomery&apos;s knowledge of the source text is palpable, which
              makes his riffs and discursions even more enjoyable. And at heart,
              the show is an examination of the paradox of traditions: they both
              bind us to the past, but can also provide a pale light pointing in
              the direction of a better future as we realize "we can&apos;t go
              on forever."
            </p>
            <p className="text-xs text-neutral-400">
              Kerry Reid,{" "}
              <span className="italic font-bold">Chicago Reader</span>
            </p>
          </div>

          <div className="text-base max-w-[600px] w-full mx-auto rounded-2xl py-8 px-8 md:px-12 flex flex-col gap-2  text-neutral-300 bg-neutral-600/50 backdrop-blur shadow-lg border border-neutral-800">
            <p>
              The vibe is wonderfully off-the-cuff and intimate, which is
              fitting, because Montgomery&apos;s main themes are figuring out
              how to recapture the magic of a special event once it becomes a
              tradition; how to identify the beating heart of a literary or
              dramatic work once it becomes a juggernaut; and how to genuinely
              connect with and enjoy precious time spent with others.
            </p>

            <p className="text-xs text-neutral-400">
              Stephanie Kulke,{" "}
              <span className="italic font-bold">Chicago Stage and Screen</span>
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-[calc(100vh-8rem)] w-full flex items-center snap-start">
        <div className="flex flex-col md:grid md:grid-cols-6 mx-auto">
          <div className="col-span-6 flex flex-col gap-4 w-full h-full md:h-[600px] rounded-2xl md:rounded-r-2xl border border-neutral-800 shadow-lg">
            <Image
              src="/photos/bravelux/4-joe-mazza-chicago-brave-lux-inc-5206468.jpg"
              alt="Blake Montgomery as Charles Dickens, photo by Joe Mazza"
              width={1000}
              height={1000}
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="min-h-[calc(100vh-8rem)] w-full flex items-center snap-start">
        <div className="col-span-6 py-32">
          <h1 className="text-5xl md:text-8xl max-w-[800px] mx-auto text-center font-bold shadow-lg">
            a one-man yuletide tour de force.
          </h1>
          <p className="text-sm mx-auto text-center mt-8">
            Katie Walsh, <span className="italic">The Fourth Walsh</span>
          </p>
        </div>
      </div>

      <div className="min-h-[calc(100vh-8rem)] w-full flex items-center snap-start">
        <div className=" col-span-6 gap-4 flex flex-col p-0 rounded-2xl">
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="text-base max-w-[600px] w-full mx-auto rounded-2xl py-8 px-8 md:px-12 flex flex-col gap-2  text-neutral-300 bg-neutral-600/50 backdrop-blur shadow-lg border border-neutral-800">
              <p>
                Montgomery delivers a disarming portrayal of Dickens. Nattily
                dressed from head to toe in period tuxedo and tails, lace up
                boots, and a very convincing wig. Every inch the consummate
                host, he makes each guest feel personally welcomed into the
                space.
              </p>

              <p className="text-xs text-neutral-400">
                Stephanie Kulke,{" "}
                <span className="italic">Chicago Stage and Screen</span>
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full mx-auto rounded-2xl shadow-lg border border-neutral-800">
              <Image
                src="/photos/brosilow/DSC_6405.jpg"
                alt="Blake Montgomery as Charles Dickens, photo by Joe Mazza"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex flex-col gap-4 w-full mx-auto rounded-2xl shadow-lg border border-neutral-800">
              <Image
                src="/photos/brosilow/MBP_1266.jpg"
                alt="Blake Montgomery as Charles Dickens, photo by Joe Mazza"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="text-base max-w-[600px] w-full mx-auto rounded-2xl py-8 px-8 md:px-12 flex flex-col gap-2  text-neutral-300 bg-neutral-600/50 backdrop-blur shadow-lg border border-neutral-800">
              <p>
                Montgomery&apos;s energy ... is balanced by his charming
                self-awareness—either as himself or Dickens, one can&apos;t
                quite be sure. But it hardly matters, as the effect is the same,
                disarming the audience and bringing us happily along with him.
              </p>

              <p className="text-xs text-neutral-400">
                Lisa Trifone, <span className="italic">Third Coast Review</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="text-base max-w-[600px] w-full mx-auto rounded-2xl py-8 px-8 md:px-12 flex flex-col gap-2  text-neutral-300 bg-neutral-600/50 backdrop-blur shadow-lg border border-neutral-800">
              <p>
                Montgomery, sporting a black cutaway formal suit and a very
                Dickensian wig, engages the audience with warmth and dashes of
                bookish wit. On opening night, while suggesting other Dickens
                titles he could perform, Montgomery&apos;s scribe discovered
                that there was in fact someone in the house who had read Dombey
                and Son. &quot;You&apos;re going to be hard to please,&quot; he
                noted wryly.
              </p>

              <p className="text-xs text-neutral-400">
                Kerry Reid, <span className="italic">Chicago Reader</span>
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full mx-auto rounded-2xl shadow-lg border border-neutral-800">
              <Image
                src="/photos/brosilow/DSC_6365.jpg"
                alt="Blake Montgomery as Charles Dickens, photo by Joe Mazza"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex flex-col gap-4 w-full mx-auto rounded-2xl shadow-lg border border-neutral-800">
              <Image
                src="/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5206880-2.jpg"
                alt="Blake Montgomery as Charles Dickens, photo by Joe Mazza"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="text-base max-w-[600px] w-full mx-auto rounded-2xl py-8 px-8 md:px-12 flex flex-col gap-2  text-neutral-300 bg-neutral-600/50 backdrop-blur shadow-lg border border-neutral-800">
              <p>
                After spending some time somewhat disabusing us of our
                preconceived notions of what Dickens&apos; "Christmas Carol"
                holds, [Montgomery] deconstructs the story, then disarms us, and
                we are open to hear the story anew...
              </p>
              <p className="text-xs text-neutral-400">
                Bill Esler, <span className="italic">Buzz Center Stage</span>
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="text-base max-w-[600px] w-full mx-auto rounded-2xl py-8 px-8 md:px-12 flex flex-col gap-2  text-neutral-300 bg-neutral-600/50 backdrop-blur shadow-lg border border-neutral-800">
              <p>
                Montgomery charms as he greets audience members with candy
                canes. He is the consummate host as he ushers guests to their
                seats while sharing personal tidbits about his other books.
                Montgomery&apos;s witty interactions feel organic as he asks
                questions and responds with humorous one liners. The vibe is
                more festive party than traditional oration.
              </p>
              <p className="text-xs text-neutral-400">
                Katie Walsh, <span className="italic">The Fourth Walsh</span>
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full mx-auto rounded-2xl shadow-lg border border-neutral-800">
              <Image
                src="/photos/bravelux/joe-mazza-chicago-brave-lux-inc-5206555.jpg"
                alt="Blake Montgomery as Charles Dickens, photo by Joe Mazza"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="col-span-6 flex flex-col gap-4 w-full h-full py-8">
        <Image
          src="/composite_dickens.jpg"
          alt="Blake Montgomery as Charles Dickens, photo by Joe Mazza"
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-2xl shadow-xl border border-neutral-800"
        />
      </div> */}

      <div className="min-h-[calc(100vh-8rem)] w-full flex items-center snap-start">
        <div className="col-span-6 py-24">
          <h1 className="text-5xl md:text-8xl max-w-[800px] mx-auto text-center font-bold">
            charming
            <br /> and sly
          </h1>
          <p className="text-sm mx-auto text-center mt-8">
            Kerry Reid, <span className="italic">Chicago Reader</span>
          </p>
        </div>
      </div>

      <div className="min-h-[calc(100vh-8rem)] w-full flex items-center snap-start">
        <div className="col-span-6 gap-4 flex flex-col px-0 py-4 md:px-0 md:py-8 md:flex-row md:gap-8 w-full">
          <div className="text-base max-w-[600px] w-full mx-auto rounded-2xl py-8 px-8 md:px-12 flex flex-col gap-2  text-neutral-300 bg-neutral-600/50 backdrop-blur shadow-lg border border-neutral-800">
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
            <p className="text-xs text-neutral-400">
              Stephanie Kulke,{" "}
              <span className="italic">Chicago Stage and Screen</span>
            </p>
          </div>

          <div className="text-base max-w-[600px] w-full mx-auto rounded-2xl py-8 px-8 md:px-12 flex flex-col gap-2  text-neutral-300 bg-neutral-600/50 backdrop-blur shadow-lg border border-neutral-800">
            <p>
              Montgomery is a superb storyteller! His rendition of the familiar
              tale is the perfect balance of dramatic and playful. He brings
              true humanity to the character of Ebenezer. Montgomery transforms
              again and again as he begins to understand the missing aspects of
              a life unrealized.... It&apos;s an opportunity to rediscover
              comfort and joy this December. I highly recommend the gift of
              Blake Montgomery this season.
            </p>

            <p className="text-xs text-neutral-400">
              Katie Walsh, <span className="italic">The Fourth Walsh</span>
            </p>
          </div>
        </div>
      </div>

      <div className="min-h-[calc(100vh-8rem)] w-full flex items-center snap-start">
        <div className="col-span-6 w-full h-full">
          <Image
            src="/photos/bravelux/98-joe-mazza-chicago-brave-lux-inc-5108669.jpg"
            alt="Blake Montgomery as Charles Dickens, photo by Joe Mazza"
            width={1000}
            height={1000}
            className="w-full h-full object-cover rounded-2xl shadow-lg border border-neutral-800"
          />
        </div>
      </div>

      <div className="min-h-[calc(100vh-8rem)] w-full flex items-center snap-start">
        <div className="col-span-6 py-24">
          <h1 className="text-5xl md:text-8xl max-w-[800px] mx-auto text-center font-bold">
            rediscover comfort and joy
          </h1>
          <p className="text-sm mx-auto text-center mt-8">
            Katie Walsh, <span className="italic">The Fourth Walsh</span>
          </p>
        </div>
      </div>

      <div className="min-h-[calc(100vh-8rem)] w-full flex items-center snap-start">
        <div className="col-span-6 py-8">
          <CTAElement {...CtaProps} />
        </div>
      </div>
    </div>
  );
}
