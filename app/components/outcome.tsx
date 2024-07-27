import Image from 'next/image';

export default function Outcome() {
  return (
    <section className="PAGETWO bg-neutral-200 items-center justify-center m-2 rounded-lg p-4 pb-8" >

      <div className="w-full overflow-hidden rounded-lg" >
        <Image
          src="/dickens_color4.jpg"
          width="800"
          height="800"
          alt="Dickens reading..."
          className="mix-blend-multiply"
        />
      </div>
      < div className="w-full" >
        <h2 className="text-neutral-800 text-xl font-bold mb-1 mt-4" > The Outcome </h2>
        < p className="text-neutral-800 text-xs" > Perhaps Dickens wil get his wish. Or, perhaps, the Spirits of Christmas might intervene and force him to perform his worn-out tale once again. Perhaps, in the course of this performance, following some highly irregular and ridiculous occurrence, he might be forced to re-examine his creation; rediscover its beauty, and re-ignite his passion; al the while, along the way, forging the kind of intimate, joyful connection with the audience that he had hoped would come from hosting a party.</p >
      </div>


    </section>
  );
}