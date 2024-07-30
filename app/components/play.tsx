import Image from 'next/image';

export default function Play() {
  return (
    <section className="bg-neutral-900 px-2 border-x border-neutral-600" >
      <div className="bg-neutral-200  my-1 rounded-md  flex justify-center">

        <div className="md:w-[80%] flex flex-col items-center justify-center px-4 pt-4 pb-8 md:py-12 md:px-0 md:flex-row md:gap-8 md:pt-24 md:pb-36 md:items-start">
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
            <p className="text-base md:text-lg lg:text-xl mb-2 sm:mb-3 md:mb-4">Now over 200 years old, Dickens has reached a breaking point and unbeknownst to theater management, he will not be performing his show this evening. Instead, he has planned something differentm omething new. Something he is calling, in his head at least, &ldquo;Charles Dicken&apos;s First Annual Holiday Party.&rdquo;</p>
            <p className="text-base md:text-lg lg:text-xl mb-2 sm:mb-3 md:mb-4"> Perhaps Dickens wil get his wish. </p>
            <p className="text-base md:text-lg lg:text-xl">Or, perhaps, the Spirits of Christmas might intervene and force him to perform his worn-out tale once again. And, just possible, in the course of this performance, following some highly irregular and ridiculous occurrence, he might be forced to re-examine his creation; rediscover its beauty, and re-ignite his passion; al the while, along the way, forging the kind of intimate, joyful connection with the audience that he had hoped would come from hosting a party in the first place.</p >
          </div>

        </div>

      </div>
    </section>
  );
}