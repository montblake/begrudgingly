import Image from 'next/image';

export default function Premise() {
  return (
    <section className="bg-neutral-200 rounded-md mx-2 my-1 flex flex-col p-4 pb-8 md:mx-16 md:my-2 md:py-12 md:px-12 md:flex-row-reverse md:gap-8 max-w-[1080px]">
      <div className="w-full IMAGE rounded-lg overflow-hidden border border-neutral-600 h-[400px] mb-4 md:w-1/3 md:h-fit">
        <Image
          src="/dickens_color2.jpg"
          width="800"
          height="800"
          alt="Dickens reading..."
          className="relative top-0"
        />
      </div>
      <div className="text-neutral-700 w-full md:w-2/3">
        <h2 className=" text-xl md:text-2xl lg:text-3xl mb-1 md:mb-2 lg:mb-3 font-bold">The Premise</h2>
        <p className="text-sm md:text-base lg:text-lg mb-2 md:mb-3 lg:mb-4">In creating this show, Blake Montgomery conflates the enduring popularity of the ubiquitous Christmas Carol with Dickens&apos; readings and imagines the reports of the author&apos;s death were exaggerated. And so, year after year, each and every December, not only do theaters around the globe produce adaptations of his famous book but Dickens himself is brought back to the stage to continue his tradition of solo readings ad infinitum.</p>

        {/* <p>Whether this miracle is the result of the magic of Christmas, the power of the author&apos;s popularity, or a freak accident resulting from the interaction between an over-eager booking agent and some hitherto unappreciated arcana of contract law, it is impossible to state for certain.</p> */}

        <p className="text-sm md:text-base lg:text-lg">After 171 years of consecutive readings, Dickens has reached a breaking point. Unbeknownst to the theater management, he will not be performing his show this evening. Tonight will be something entirely different. Something new. Something he is calling, in his head, &ldquo;Charles Dicken&apos;s First Annual Holiday Party.&rdquo;</p>

      </div>






    </section >
  );
}