import Image from 'next/image';

export default function Artist() {
  return (
    <section className="PAGETHREE bg-neutral-200 flex flex-row-reverse gap-4 m-2 rounded-lg p-4 pb-8">
      <div className="w-full text-neutral-500">
        <div className="IMAGE rounded-lg overflow-hidden border border-neutral-400 sm:hidden mb-4 h-[360px]">
          <Image
            src="/blake_headshot.jpg"
            width="800"
            height="800"
            alt="Dickens reading..."
          />
        </div>
        <h2 className="text-neutral-700 text-xl font-bold mb-1">The Artist</h2>
        <p className="text-xs mb-2">Blake Montgomery&apos;s career in the theater spans both the psychological- and text-based tradition as well as the physical, devised world of movement, mime, and clown theater. Having spent his early career as a director of ensemble clown theater, developed working relationships with non-naturalistic Chicago theater most notably Redmoon, he founded the Building Stage where he served as Artistic Director until its closing in 2013. The company specialized in ensemble-devised, director-driven works, most successfully  working with literary adaptations like their Jeff Award-winning Moby-Dick and poetic, clown-inspired Dawn, Quixote. Blake&apos;s work reflects his training at the Ecole Jacques Lecoq, the Dell&apos;Arte School of Physical Theater, and Middlebury College; he is a member of Actors&apos; Equity.</p>
        <p className="text-xs"><span className="font-bold">Charles Dickens Begrudgingly…</span> is a both the most terrifying and satisfying project Blake has created. It exemplifies his belief in a play being the interplay between structure and the performers sense of play. It combines his interest in theatrical clowning, love of unique literary narrative voices, traditional acting, and hospitality to create a uniquely personal, warm evening that both skewers and celebrates the famed author, our attachment to traditions, and the spirit of Christmas itself.</p>
      </div>

    </section>
  );
}