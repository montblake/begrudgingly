import Image from 'next/image';

export default function InfoPages2() {
  return (
    <div className="flex gap-16 py-24 px-48 bg-amber-950/60">


      <div className="LeftCol w-1/2 ">
        <div className="IMAGE rounded-lg overflow-hidden ">
          <Image
            src="/charles-full.jpg"
            width="800"
            height="800"
            alt="Dickens reading..."
          />
        </div>
        <div className=" text-neutral-300 mt-48">
          <p>In creating this show, Blake Montgomery conflates the enduring popularity of the ubiquitous Christmas Carol with Dickens solo readings. And so, year after year, each and every December, not only do theaters around the globe produce adaptations of his famous book but Dickens himself is brought back to the stage to continue his tradition of solo readings ad infinitum. Whether this miracle is the result of the magic of Christmas, the power of the author&rsquo;s popularity, or a freak accident resulting from the interaction between an over-eager booking agent and some hitherto unappreciated arcana of contract law, it is impossible to state for certain.</p>
        </div>
        <div className="IMAGE rounded-lg overflow-hidden border border-amber-200">
          <Image
            src="/dickens_color4.jpg"
            width="800"
            height="800"
            alt="Dickens reading..."
          />
        </div>
        <div className=" text-neutral-300">
          <p>Perhaps Dickens wil get his wish. Or, perhaps, the Spirits of Christ- mas might intervene and force him to perform his worn-out tale once again. Perhaps, in the course of this performance, following some highly irregular and ridiculous occurrence, he might be forced to re-examine his creation; rediscover its beauty, and re-ignite his passion; al the while, along the way, forging the kind of intimate, joyful connection with the audience that he had hoped would come from hosting a party.</p>
        </div>
      </div>
      <div className="RightCol w-1/2 pt-96">
        <div className="text-neutral-300">
          <p>In 1853, ten years after having dashed off his surprisingly successful holiday story, <span className="italic">A Christmas Carol</span>, Charles Dickens gave his first public reading of the work. The effort was so well received, as well as providing much needed cash, that Dickens continued to perform these celebrated readings for the rest of his life. In fact, it is believed that his death in 1870 was a direct result of these performances.</p>
        </div>
        <div className="IMAGE rounded-lg overflow-hidden mt-16 border border-amber-200">
          <Image
            src="/dickens_color_party.jpg"
            width="800"
            height="800"
            alt="Dickens reading..."
          />
        </div>
        <div className=" text-neutral-300">
          <p>After 171 years of consecutive readings, Dickens has reached a breaking point. Unbeknownst to the theater management, he will not be performing his show this evening. Tonight will be something entirely different. Something new. Something he is calling, in his head, "Charles Dicken's First Annual Holiday Party.</p>
        </div>
        <div className="IMAGE rounded-lg overflow-hidden border border-amber-200">
          <Image
            src="/dickens_color5.jpg"
            width="800"
            height="800"
            alt="Dickens reading..."
          />
        </div>
      </div>
    </div>
  );
}