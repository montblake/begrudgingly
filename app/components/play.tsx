import Image from 'next/image';

export default function Play() {
  return (
    <section className="bg-neutral-200 flex flex-col items-center justify-center mx-2 my-1 rounded-md px-4 pt-4 pb-8 md:mx-16 md:my-2 md:py-12 md:px-12 md:flex-row md:gap-8 md:items-start max-w-[1080px]" >

      <div className="w-full overflow-hidden rounded-lg md:w-1/3" >
        <Image
          src="/dickens_color3.jpg"
          width="800"
          height="800"
          alt="Dickens reading..."
          className="mix-blend-multiply"
        />
      </div>
      < div className="w-full text-neutral-700 mt-4 md:mt-0 md:w-2/3" >
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 lg:mb-3">The Play</h2>
        < p className="text-xs md:text-base lg:text-lg" > Perhaps Dickens wil get his wish. Or, perhaps, the Spirits of Christmas might intervene and force him to perform his worn-out tale once again. Perhaps, in the course of this performance, following some highly irregular and ridiculous occurrence, he might be forced to re-examine his creation; rediscover its beauty, and re-ignite his passion; al the while, along the way, forging the kind of intimate, joyful connection with the audience that he had hoped would come from hosting a party.</p >
      </div>


    </section>
  );
}