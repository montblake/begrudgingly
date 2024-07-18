import Image from 'next/image';

export default function InfoPages() {
  return (
    <>
      <section className="PAGETWO bg-neutral-200 flex flex-row-reverse justify-center items-center text-justify px-36 pt-8 pb-12">
        <div className="flex justify-end items-end gap-12">
          <div className="IMAGE w-1/3 rounded-lg overflow-hidden mix-blend-multiply flex justify-start items-start">
            <Image
              src="/charles-full.jpg"
              width="800"
              height="800"
              alt="Dickens reading..."
            />
          </div>
          <div className="w-2/3 flex flex-col justify-end items-start pr-12">
            <h2 className="text-neutral-900 text-2xl font-bold mb-2">The History</h2>
            <p className="text-neutral-900 text-lg">In 1853, ten years after having dashed off his surprisingly successful holiday story, <span className="italic">A Christmas Carol</span>, Charles Dickens gave his first public reading of the work. The effort was so well received, as well as providing much needed cash, that Dickens continued to perform these celebrated readings for the rest of his life. In fact, it is believed that his death in 1870 was a direct result of these performances.</p>
          </div>

        </div>
      </section>
      <section className="PAGETHREE bg-neutral-800 flex flex-row gap-4 py-16 px-24">
        <div className="w-1/2 text-neutral-400 text-lg text-justify">
          <h2 className="text-neutral-300 text-2xl font-bold mb-2">The Premise</h2>
          <div className="flex flex-col gap-6">

            <p>In creating this show, Blake Montgomery conflates the enduring popularity of the ubiquitous Christmas Carol with Dickens&apos; readings and imagines the reports of the author&apos;s death were exaggerated. And so, year after year, each and every December, not only do theaters around the globe produce adaptations of his famous book but Dickens himself is brought back to the stage to continue his tradition of solo readings ad infinitum. Whether this miracle is the result of the magic of Christmas, the power of the author&apos;s popularity, or a freak accident resulting from the interaction between an over-eager booking agent and some hitherto unappreciated arcana of contract law, it is impossible to state for certain.</p>
            <p>After 171 years of consecutive readings, Dickens has reached a breaking point. Unbeknownst to the theater management, he will not be performing his show this evening. Tonight will be something entirely different. Something new. Something he is calling, in his head, &ldquo;Charles Dicken&apos;s First Annual Holiday Party.&rdquo; Perhaps Dickens wil get his wish. Or, perhaps, the Spirits of Christmas might intervene and force him to perform his worn-out tale once again. Perhaps, in the course of this performance, following some highly irregular and ridiculous occurrence, he might be forced to re-examine his creation; rediscover its beauty, and re-ignite his passion; al the while, along the way, forging the kind of intimate, joyful connection with the audience that he had hoped would come from hosting a party.</p>
            <p>Perhaps Dickens wil get his wish. Or, perhaps, the Spirits of Christmas might intervene and force him to perform his worn-out tale once again. Perhaps, in the course of this performance, following some highly irregular and ridiculous occurrence, he might be forced to re-examine his creation; rediscover its beauty, and re-ignite his passion; al the while, along the way, forging the kind of intimate, joyful connection with the audience that he had hoped would come from hosting a party.</p>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-8 pl-12">

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

      <section className="PAGETHREE bg-neutral-200 flex flex-row-reverse py-24 px-24">
        <div className="w-1/2 text-neutral-500 text-lg text-justify">
          <h2 className="text-neutral-700 text-3xl font-bold mb-8">The Artist</h2>
          <div className="flex flex-col gap-6">
            <p>Blake Montgomery&apos;s career in the theater spans both the psychological- and text-based tradition as well as the physical, devised world of movement, mime, and clown theater. Having spent his early career as a director of ensemble clown theater, developed working relationships with non-naturalistic Chicago theater most notably Redmoon, he founded the Building Stage where he served as Artistic Director until its closing in 2013. The company specialized in ensemble-devised, director-driven works, most successfully  working with literary adaptations like their Jeff Award-winning Moby-Dick and poetic, clown-inspired Dawn, Quixote. Blake&apos;s work reflects his training at the Ecole Jacques Lecoq, the Dell&apos;Arte School of Physical Theater, and Middlebury College; he is a member of Actors&apos; Equity.</p>
            <p className="">
              “<span className="text-bold">
                Charles Dickens Begrudgingly…
              </span>
              is a both the most terrifying and satisfying project Blake has created. It exemplifies his belief in a play being the interplay between structure and the performers sense of play. It combines his interest in theatrical clowning, love of unique literary narrative voices, traditional acting, and hospitality to create a uniquely personal, warm evening that both skewers and celebrates the famed author, our attachment to traditions, and the spirit of Christmas itself.</p>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-8 pr-8">

          <div className="IMAGE rounded-lg overflow-hidden border border-neutral-400">
            <Image
              src="/blake_headshot.jpg"
              width="800"
              height="800"
              alt="Dickens reading..."
            />
          </div>

        </div>
      </section>

      <section className="bg-black flex justify-center items-center bg-under-dickens bg-cover h-screen">

        {/* <div className="IMAGE rounded-lg overflow-hidden border border-neutral-400">
          <Image
            src="/dickens_color4.jpg"
            width="800"
            height="800"
            alt="Dickens reading..."
          />
        </div> */}

      </section>


      <section className="p-12 flex flex-col justify-center items-center bg-neutral-200 text-neutral-900">
        <h2 className="text-2xl mb-8 uppercase">Audience Reactions<span className="text-sm relative top-[-9px] left-[2px]">*</span></h2>

        <ul className="text-center flex flex-col gap-4 w-3/4 text-lg">

          <li>
            The sleeper Christmas event of the season. You don&lsquo;t have to be into Dickens to appreciate it. It is so well done. I want to see it again.
          </li>
          <li>
            A great twist on a classic.
          </li>

          <li>
            Top-notch performance! Just what we needed to lift our spirits and put the holiday season in perspective.
          </li>

          <li>
            What a fun evening! We laughed a lot and got quiet and reflective and also teary-eyed. Very well done and very well performed. Great performance, really. Go.
          </li>

          <li>
            An exceptional one-man performance that entertained thoroughly! Superbly crafted and performed.
          </li>

          <li>
            With a mixture of humor and fabulous storytelling, this is a must see holiday show. Appropriate for the whole family.
          </li>

          <li>
            Absolutely delightful. [...] The performance was original and interactive. [...] The acting was terrific and though it was an unusual adaptation of the story, it really got to the heart of a classic. Highly recommended. I&lsquo;d like to return with my teenage son!
          </li>

          <li>
            Exceptional! It&lsquo;s very funny, clever, and touching. <br />Blake Montgomery is very talented. I highly recommend this show!
          </li>

          <li>
            Exactly what I needed to connect to the spirit of the season! Fabulous talent, wonderful humor, inspiring and insightful. <br />Thank you - Thank you - Thank you!
          </li>
        </ul>
        <p className="italic text-sm text-center mt-24">*Specifically, comments from Goldstar members who attended the <br />2012 production at The Building Stage.</p>
      </section>


      <section className="p-12 flex flex-col justify-center items-center bg-neutral-200 text-neutral-900">
        <h2 className="text-2xl mb-16 uppercase">Press Reviews<span className="text-sm relative top-[-9px] left-[2px]">*</span></h2>

        <ul className="text-center flex flex-col gap-4 w-3/4">

          <li>
            The sleeper Christmas event of the season. You don&lsquo;t have to be into Dickens to appreciate it. It is so well done. I want to see it again.
            A great twist on a classic.
          </li>

          <li>
            Top-notch performance! Just what we needed to lift our spirits and put the holiday season in perspective.
            What a fun evening! We laughed a lot and got quiet and reflective and also teary-eyed. Very well done and very well performed. Great performance, really. Go.
            An exceptional one-man performance that entertained thoroughly! Superbly crafted and performed.
          </li>

          <li>
            With a mixture of humor and fabulous storytelling, this is a must see holiday show. Appropriate for the whole family.
            Absolutely delightful. [...] The performance was original and interactive. [...] The acting was terrific and though it was an unusual adaptation of the story, it really got to the heart of a classic. Highly recommended. I&lsquo;d like to return with my teenage son!
          </li>

          <li>
            Exceptional! It&lsquo;s very funny, clever, and touching. <br />Blake Montgomery is very talented. I highly recommend this show!
            Exactly what I needed to connect to the spirit of the season! Fabulous talent, wonderful humor, inspiring and insightful. <br />Thank you - Thank you - Thank you!
          </li>
        </ul>
      </section>
      <section className="bg-black flex justify-center items-center bg-footer-dickens bg-cover h-screen">


      </section>

    </>
  );
}