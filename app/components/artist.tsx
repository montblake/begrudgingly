import Image from 'next/image';

export default function Artist() {
  return (
    <section className=" bg-neutral-900 px-2 ">
      <div className="bg-neutral-200 my-1 rounded-md flex justify-center">
        <div className=" 
          flex flex-col p-4 pb-8 sm:p-16 sm:pt-12 md:p-24 md:pt-16 
          landscape:w-[80%] landscape:flex-row-reverse landscape:items-end landscape:gap-8 landscape:py-24 landscape:px-0 landscape:pb-36
          lg:w-[80%] lg:flex-row-reverse lg:items-end lg:gap-8 lg:py-24 lg:px-0 lg:pb-36">


          <div className=" w-full h-[320px] sm:h-[540px] md:h-[640px] overflow-hidden rounded-lg  border border-neutral-700 flex justify-end items-start 
            landscape:p-0 landscape:mb-0 landscape:w-1/3 landscape:border-none landscape:pt-0 landscape:items-end landscape:h-fit
            lg:p-0 lg:mb-0 lg:w-1/3 lg:border-none lg:pt-0 lg:items-end lg:h-fit">
            <Image
              src="/blake_headshot.jpg"
              width="1400"
              height="1000"
              alt="Dickens reading..."
              className="relative -top-[32px] sm:top-0 landscape:top-0"
            />
          </div>
          <div className="text-neutral-700 w-full mt-4 md:mt-8 landscape:w-2/3 landscape:mt-0 lg:w-2/3 lg:mt-0">
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-0 sm:mb-1 md:mb-2 landscape:text-2xl landscape:mb-2 lg:text-2xl lg:mb-2">The Artist</h2>
            <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 landscape:text-lg landscape:mb-4 lg:text-lg lg:mb-4">Blake Montgomery spent his early career as a director of ensemble clown theater and developed working relationships with non-naturalistic Chicago theaters, most notably Redmoon. He founded the Building Stage where he served as Artistic Director until its closing in 2013. The company specialized in ensemble-devised, director-driven works, most successfully working with literary adaptations like their Jeff Award-winning <span className="uppercase text-sm sm:text-base md:text-lg lg:text-lg">Moby-Dick</span> and poetic, clown-inspired <span className="uppercase text-sm sm:text-base md:text-lg lg:text-lg">Dawn, Quixote</span>. Work with other Chicago companies includes The House Theater, The Hypocrites, Remy Bumppo, Court Theatre, Chicago Shakespeare, Writers Theatre, and Steppenwolf.  Blake&rsquo;s work reflects his training at the Ecole Jacques Lecoq, the Dell&rsquo;Arte School of Physical Theater, and Middlebury College; he is a member of Actors&rsquo; Equity.</p>


          </div>
        </div>

      </div>
    </section>
  );
}