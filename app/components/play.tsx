import Image from 'next/image';

export default function Play() {
  return (
    <section className=" bg-neutral-200 items-center justify-center mx-2 my-1 rounded-md px-4 pt-4 pb-8" >

      <div className="w-full overflow-hidden rounded-lg" >
        <Image
          src="/dickens_color4.jpg"
          width="800"
          height="800"
          alt="Dickens reading..."
          className="mix-blend-multiply"
        />
      </div>
      < div className="w-full text-neutral-700 mt-4" >
        <h2 className="text-xl font-bold mb-1">The Play</h2>
        < p className="text-xs" > Perhaps Dickens wil get his wish. Or, perhaps, the Spirits of Christmas might intervene and force him to perform his worn-out tale once again. Perhaps, in the course of this performance, following some highly irregular and ridiculous occurrence, he might be forced to re-examine his creation; rediscover its beauty, and re-ignite his passion; al the while, along the way, forging the kind of intimate, joyful connection with the audience that he had hoped would come from hosting a party.</p >
      </div>


    </section>
  );
}