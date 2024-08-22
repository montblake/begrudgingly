import Image from 'next/image';

export default function Play() {
  return (
    <section className="bg-neutral-900 px-2" >
      <div className="bg-neutral-200 my-1 rounded-md flex justify-center">

        <div className="
          flex flex-col p-4 pb-8 sm:p-16 sm:pt-12 md:p-24 md:pt-16 
          landscape:w-[80%] landscape:flex-row-reverse landscape:items-end landscape:gap-8 landscape:py-24 landscape:px-0 landscape:pb-36
          lg:w-[80%] lg:flex-row-reverse lg:items-end lg:gap-8 lg:py-24 lg:px-0 lg:pb-36">
          <div className=" w-full h-[420px] sm:h-[540px] md:h-[640px] overflow-hidden rounded-lg  border border-neutral-700 flex justify-end items-start 
            landscape:p-0 landscape:mb-0 landscape:w-1/3 landscape:border-none landscape:pt-0 landscape:items-end landscape:h-fit
            lg:p-0 lg:mb-0 lg:w-1/3 lg:border-none lg:pt-0 lg:items-end lg:h-fit" >
            <Image
              src="/dickens_color3.jpg"
              width="1400"
              height="1000"
              alt="Dickens and the Ghost of Christmas Past"
              className="mix-blend-multiply"
            />
          </div>
          < div className="text-neutral-700 w-full mt-4 md:mt-8 landscape:w-2/3 landscape:mt-0 lg:w-2/3 lg:mt-0" >
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-0 sm:mb-1 md:mb-2 landscape:text-2xl landscape:mb-2 lg:text-2xl lg:mb-2">The Play</h2>
            <div>
              <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 landscape:text-lg landscape:mb-4 lg:text-lg lg:mb-4">Now over 200 years old, Dickens has reached a breaking point and unbeknownst to theater management, he will not be performing his show this evening. Instead, he has planned something entirely new, something he is calling, &ldquo;Charles Dicken&apos;s First Annual Holiday Party.&rdquo;</p>
              <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 landscape:text-lg landscape:mb-4 lg:text-lg lg:mb-4"> Perhaps Dickens will get his wish.</p>
              <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 landscape:text-lg landscape:mb-4 lg:text-lg lg:mb-4">Or, perhaps, the Spirits of Christmas might intervene and force him to perform his worn-out tale once again, in the course of which, due to some highly irregular and ridiculous occurrence, he might see his work in a new light, rediscovering its beauty and his passion while, along the way, forging the kind of intimate, joyful connection with the audience he had hoped would come from hosting a party in the first place. Perhaps.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}