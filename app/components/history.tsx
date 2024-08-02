import Image from 'next/image';

export default function History() {
  return (
    <section className="bg-neutral-900 " >
      <div className="bg-neutral-200 mx-2 my-1 rounded-md flex justify-center">
        <div className="landscape:w-[80%] flex flex-col landscape:flex-row items-center justify-center landscape:items-end landscape:gap-8 p-4 pb-8 sm:p-16 sm:pt-12 md:p-24 md:pt-16 lg:p-48 lg:pt-36  landscape:py-24 landscape:px-0 landscape:pb-36">
          <div className="w-full h-[320px] sm:h-[540px] md:h-[640px] lg:h-[680px] overflow-hidden rounded-lg pt-8 px-2 landscape:p-0 border border-neutral-700 landscape:mb-0 landscape:w-1/3 landscape:border-none landscape:pt-0 flex justify-end items-start landscape:items-end landscape:h-fit" >
            <Image
              src="/charles-full.jpg"
              width="1400"
              height="1000"
              alt="Dickens reading..."
              className="mix-blend-multiply"
            />
          </div>
          < div className="w-full landscape:w-2/3 mt-4 md:mt-8 landscape:mt-0  text-neutral-700" >
            <h2 className="text-base landscape:text-xl sm:text-lg md:text-xl lg:text-2xl font-bold mb-0 landscape:mb-2 sm:mb-1 md:mb-2 lg:mb-2" > The History </h2>
            <p className="text-sm landscape:text-lg sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 landscape:mb-4"> In 1853, ten years after having dashed off his surprisingly successful holiday story, <span className="italic" > A Christmas Carol</span>, Charles Dickens gave his first public reading of the work. The effort was so well received, as well as providing much needed cash, that Dickens continued to perform these celebrated readings for the rest of his life.</p >
          </div>


        </div>
      </div>
    </section>
  );
}