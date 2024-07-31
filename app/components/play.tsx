import Image from 'next/image';

export default function Play() {
  return (
    <section className="bg-neutral-900 px-2" >
      <div className="bg-neutral-200  my-1 rounded-md  flex justify-center">

        <div className="landscape:w-[80%] flex flex-col items-center justify-center px-4 pt-4 pb-8 landscape:py-12 landscape:px-0 landscape:flex-row landscape:gap-8 landscape:pt-24 landscape:pb-36 landscape:items-start">
          <div className="w-full overflow-hidden rounded-lg landscape:w-1/3" >
            <Image
              src="/dickens_color3.jpg"
              width="800"
              height="800"
              alt="Dickens reading..."
              className="mix-blend-multiply"
            />
          </div>
          < div className="w-full text-neutral-700 mt-4 landscape:mt-0 landscape:w-2/3" >
            <h2 className="text-lg landscape:text-xl lg:text-2xl font-bold mb-1 landscape:mb-2 lg:mb-3">The Play</h2>
            <p className="text-sm landscape:text-lg lg:text-xl mb-2 sm:mb-3 landscape:mb-4">Now over 200 years old, Dickens has reached a breaking point and unbeknownst to theater management, he will not be performing his show this evening. Instead, he has planned something entirely new, something he is calling, &ldquo;Charles Dicken&apos;s First Annual Holiday Party.&rdquo;</p>
            <p className="text-sm landscape:text-lg lg:text-xl mb-2 sm:mb-3 landscape:mb-4"> Perhaps Dickens will get his wish.</p>
            <p className="text-sm landscape:text-lg lg:text-xl">Or, perhaps, the Spirits of Christmas might intervene and force him to perform his worn-out tale once again, in the course of which, due to some highly irregular and ridiculous occurrence, he might see his work in a new light, rediscovering its beauty and his passion while, along the way, forging the kind of intimate, joyful connection with the audience he had hoped would come from hosting a party in the first place. Perhaps.</p>
          </div>

        </div>

      </div>
    </section>
  );
}