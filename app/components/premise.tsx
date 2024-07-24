import Image from 'next/image';

export default function Premise() {
  return (
    <section className="PAGETHREE bg-neutral-800 flex flex-row gap-4 md:gap-8 px-8 sm:px-12 md:px-36 pt-8 pb-8 md:pb-12">
      <div className="w-full md:w-1/2 text-neutral-400">
        <h2 className="text-neutral-300 text-xl md:text-2xl font-bold mb-2">The Premise</h2>
        <div className="flex flex-col gap-4 md:gap-6">
          <p className="text-sm md:text-md lg:text-lg">In creating this show, Blake Montgomery conflates the enduring popularity of the ubiquitous Christmas Carol with Dickens&apos; readings and imagines the reports of the author&apos;s death were exaggerated. And so, year after year, each and every December, not only do theaters around the globe produce adaptations of his famous book but Dickens himself is brought back to the stage to continue his tradition of solo readings ad infinitum. Whether this miracle is the result of the magic of Christmas, the power of the author&apos;s popularity, or a freak accident resulting from the interaction between an over-eager booking agent and some hitherto unappreciated arcana of contract law, it is impossible to state for certain.</p>
          <p className="text-sm md:text-md lg:text-lg">After 171 years of consecutive readings, Dickens has reached a breaking point. Unbeknownst to the theater management, he will not be performing his show this evening. Tonight will be something entirely different. Something new. Something he is calling, in his head, &ldquo;Charles Dicken&apos;s First Annual Holiday Party.&rdquo; Perhaps Dickens wil get his wish. Or, perhaps, the Spirits of Christmas might intervene and force him to perform his worn-out tale once again. Perhaps, in the course of this performance, following some highly irregular and ridiculous occurrence, he might be forced to re-examine his creation; rediscover its beauty, and re-ignite his passion; al the while, along the way, forging the kind of intimate, joyful connection with the audience that he had hoped would come from hosting a party.</p>
        </div>
      </div>
      <div className="hidden w-1/2 md:flex flex-col gap-2 md:gap-4 md:pr-12">

        <div className="IMAGE rounded-lg overflow-hidden border border-neutral-400">
          <Image
            src="/dickens_color2.jpg"
            width="800"
            height="800"
            alt="Dickens reading..."
          />
        </div>
        <div className="IMAGE rounded-lg overflow-hidden border border-neutral-400">
          <Image
            src="/dickens_color5.jpg"
            width="800"
            height="800"
            alt="Dickens reading..."
          />
        </div>


      </div>
    </section>
  );
}