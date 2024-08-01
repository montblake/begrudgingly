import Image from 'next/image';

export default function Artist() {
  return (
    <section className=" bg-neutral-900 p-2 ">
      <div className="bg-neutral-200 rounded-md flex justify-center">
        <div className="landscape:w-[80%] flex flex-col mx-2 my-1 rounded-md p-4 pb-8  landscape:my-2 landscape:py-12 landscape:flex-row-reverse landscape:gap-8 landscape:items-start">


          <div className="rounded-lg overflow-hidden border border-neutral-700 mb-4 h-[360px] landscape:h-fit w-full landscape:w-1/3">
            <Image
              src="/blake_headshot.jpg"
              width="1000"
              height="1000"
              alt="Dickens reading..."
              className="relative sm:-top-32 landscape:top-0"
            />
          </div>
          <div className="text-neutral-700 landscape:w-2/3">
            <h2 className="text-lg landscape:text-xl lg:text-2xl font-bold mb-1 landscape:mb-2 lg:mb-3">The Artist</h2>
            <p className="text-sm landscape:text-lg lg:text-xl mb-2 sm:mb-3 landscape:mb-4">Blake Montgomery spent his early career as a director of ensemble clown theater and developed working relationships with non-naturalistic Chicago theaters, most notably Redmoon. He founded the Building Stage where he served as Artistic Director until its closing in 2013. The company specialized in ensemble-devised, director-driven works, most successfully working with literary adaptations like their Jeff Award-winning <span className="uppercase text-xs md:text-sm lg:text-base">Moby-Dick</span> and poetic, clown-inspired <span className="uppercase text-xs md:text-sm lg:text-base">Dawn, Quixote</span>. Work with other Chicago companies includes The House Theater, The Hypocrites, Remy Bumppo, Court Theatre, Chicago Shakespeare, Writers Theatre, and Steppenwolf.  Blake&rsquo;s work reflects his training at the Ecole Jacques Lecoq, the Dell&rsquo;Arte School of Physical Theater, and Middlebury College; he is a member of Actors&rsquo; Equity.</p>
            {/* <p className="text-sm landscape:text-base lg:text-lg"><span className="font-bold uppercase">Charles Dickens Begrudgingly</span> is a both the most terrifying and satisfying project Blake has created. It exemplifies his belief in a play being the interplay between structure and the performers sense of play. It combines his interest in theatrical clowning, love of unique literary narrative voices, traditional acting, and hospitality to create a uniquely personal, warm evening that both skewers and celebrates the famed author, our attachment to traditions, and the spirit of Christmas itself.</p> */}

          </div>
        </div>

      </div>
    </section>
  );
}