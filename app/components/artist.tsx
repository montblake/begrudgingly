import Image from 'next/image';

export default function Artist() {
  return (
    <section className=" bg-neutral-200 flex flex-col mx-2 my-1 rounded-md p-4 pb-8 md:mx-16 md:my-2 md:py-12 md:px-12 md:flex-row md:gap-8 max-w-[1080px]">

      <div className="rounded-lg overflow-hidden border border-neutral-700 mb-4 h-[360px] md:h-fit w-full md:w-1/3">
        <Image
          src="/blake_headshot.jpg"
          width="1000"
          height="800"
          alt="Dickens reading..."
          className="relative sm:-top-32 md:top-0"
        />
      </div>
      <div className="text-neutral-700 md:w-2/3">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 lg:mb-3">The Artist</h2>
        <p className="text-xs md:text-base lg:text-lg mb-2 md:mb-3 lg:mb-4">Blake Montgomery&apos;s career in the theater spans both the psychological- and text-based tradition as well as the physical, devised world of movement, mime, and clown theater. Having spent his early career as a director of ensemble clown theater, developed working relationships with non-naturalistic Chicago theater most notably Redmoon, he founded the Building Stage where he served as Artistic Director until its closing in 2013. The company specialized in ensemble-devised, director-driven works, most successfully  working with literary adaptations like their Jeff Award-winning Moby-Dick and poetic, clown-inspired Dawn, Quixote. Blake&apos;s work reflects his training at the Ecole Jacques Lecoq, the Dell&apos;Arte School of Physical Theater, and Middlebury College; he is a member of Actors&apos; Equity.</p>
        <p className="text-xs md:text-base lg:text-lg"><span className="font-bold uppercase">Charles Dickens Begrudgingly</span> is a both the most terrifying and satisfying project Blake has created. It exemplifies his belief in a play being the interplay between structure and the performers sense of play. It combines his interest in theatrical clowning, love of unique literary narrative voices, traditional acting, and hospitality to create a uniquely personal, warm evening that both skewers and celebrates the famed author, our attachment to traditions, and the spirit of Christmas itself.</p>

      </div>

    </section>
  );
}