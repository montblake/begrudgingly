import Image from 'next/image';

export default function Artist() {
  return (
    <section className=" bg-neutral-900 p-2 ">
      <div className="bg-neutral-200 rounded-md flex justify-center">
        <div className="landscape:w-[80%] flex flex-col mx-2 my-1 rounded-md p-4 pb-8 sm:p-8 sm:pb-16 md:p-16 md:pb-24 lg:px-24 lg:pb-36 landscape:my-2 landscape:py-12 landscape:flex-row-reverse landscape:gap-8 landscape:items-start">


          <div className="rounded-lg overflow-hidden border border-neutral-700 h-[360px] md:h-[800px] landscape:h-fit w-full landscape:w-1/3">
            <Image
              src="/blake_headshot.jpg"
              width="1400"
              height="1000"
              alt="Dickens reading..."
              className="relative sm:-top-32 landscape:top-0"
            />
          </div>
          <div className="text-neutral-700 landscape:w-2/3 mt-4 md:mt-8 landscape:mt-0 ">
            <h2 className="text-lg landscape:text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold mb-0 landscape:mb-2 sm:mb-1 md:mb-2 lg:mb-2">The Artist</h2>
            <p className="text-sm landscape:text-lg sm:text-lg md:text-xl lg:text-2xl">Blake Montgomery spent his early career as a director of ensemble clown theater and developed working relationships with non-naturalistic Chicago theaters, most notably Redmoon. He founded the Building Stage where he served as Artistic Director until its closing in 2013. The company specialized in ensemble-devised, director-driven works, most successfully working with literary adaptations like their Jeff Award-winning <span className="uppercase text-sm sm:text-base md:text-lg lg:text-lg">Moby-Dick</span> and poetic, clown-inspired <span className="uppercase text-sm sm:text-base md:text-lg lg:text-lg">Dawn, Quixote</span>. Work with other Chicago companies includes The House Theater, The Hypocrites, Remy Bumppo, Court Theatre, Chicago Shakespeare, Writers Theatre, and Steppenwolf.  Blake&rsquo;s work reflects his training at the Ecole Jacques Lecoq, the Dell&rsquo;Arte School of Physical Theater, and Middlebury College; he is a member of Actors&rsquo; Equity.</p>


          </div>
        </div>

      </div>
    </section>
  );
}