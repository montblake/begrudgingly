import Image from 'next/image';

export default function Play() {
  return (
    <section className="bg-neutral-900 px-2" >
      <div className="bg-neutral-200  my-1 rounded-md  flex justify-center">

        <div className="landscape:w-[80%] flex flex-col items-center justify-center p-4 pb-8 sm:p-16 sm:pt-12 md:p-24 md:pt-16 lg:p-48 lg:pt-36 landscape:flex-row landscape:gap-8 landscape:items-start landscape:py-24 landscape:px-0 landscape:pb-36">
          <div className="w-full overflow-hidden rounded-lg landscape:w-1/3 h-[320px] sm:h-[540px] md:h-[640px] lg:h-[680px] flex items-center landscape:h-fit landscape:items-start" >
            <Image
              src="/dickens_color3.jpg"
              width="1400"
              height="1000"
              alt="Dickens reading..."
              className="mix-blend-multiply"
            />
          </div>
          < div className="w-full text-neutral-700 mt-4 md:mt-8 landscape:mt-0 landscape:w-2/3" >
            <h2 className="text-base landscape:text-xl sm:text-lg md:text-xl lg:text-2xl font-bold mb-0 landscape:mb-2 sm:mb-1 md:mb-2 lg:mb-2">The Play</h2>
            <p className="text-sm landscape:text-lg sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 landscape:mb-4">Now over 200 years old, Dickens has reached a breaking point and unbeknownst to theater management, he will not be performing his show this evening. Instead, he has planned something entirely new, something he is calling, &ldquo;Charles Dicken&apos;s First Annual Holiday Party.&rdquo;</p>
            <p className="text-sm landscape:text-lg sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 landscape:mb-4"> Perhaps Dickens will get his wish.</p>
            <p className="text-sm landscape:text-lg sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 landscape:mb-4">Or, perhaps, the Spirits of Christmas might intervene and force him to perform his worn-out tale once again, in the course of which, due to some highly irregular and ridiculous occurrence, he might see his work in a new light, rediscovering its beauty and his passion while, along the way, forging the kind of intimate, joyful connection with the audience he had hoped would come from hosting a party in the first place. Perhaps.</p>
          </div>

        </div>

      </div>
    </section>
  );
}