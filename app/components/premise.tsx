import Image from 'next/image';

export default function Premise() {
  return (
    <section className="bg-neutral-200 rounded-md mx-2 my-1 flex flex-col p-4 pb-8">
      <div className="IMAGE rounded-lg overflow-hidden border border-neutral-600 h-[400px] mb-4">
        <Image
          src="/dickens_color2.jpg"
          width="800"
          height="800"
          alt="Dickens reading..."
        />
      </div>
      <div className="text-neutral-700">
        <h2 className=" text-xl mb-1 font-bold">The Premise</h2>
        <p className="text-xs mb-2">In creating this show, Blake Montgomery conflates the enduring popularity of the ubiquitous Christmas Carol with Dickens&apos; readings and imagines the reports of the author&apos;s death were exaggerated. And so, year after year, each and every December, not only do theaters around the globe produce adaptations of his famous book but Dickens himself is brought back to the stage to continue his tradition of solo readings ad infinitum.</p>

        {/* <p>Whether this miracle is the result of the magic of Christmas, the power of the author&apos;s popularity, or a freak accident resulting from the interaction between an over-eager booking agent and some hitherto unappreciated arcana of contract law, it is impossible to state for certain.</p> */}

        <p className="text-xs">After 171 years of consecutive readings, Dickens has reached a breaking point. Unbeknownst to the theater management, he will not be performing his show this evening. Tonight will be something entirely different. Something new. Something he is calling, in his head, &ldquo;Charles Dicken&apos;s First Annual Holiday Party.&rdquo;</p>

      </div>






    </section >
  );
}