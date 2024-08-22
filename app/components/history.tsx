import Image from 'next/image';

export default function History() {
  return (
    <section className="bg-neutral-900 " >
      <div className="bg-neutral-200 mx-2 my-1 rounded-md flex justify-center">
        <div className="flex flex-col items-center justify-center p-4 pb-8 sm:p-16 sm:pt-12 md:p-24 md:pt-16  landscape:w-[80%] landscape:flex-row landscape:items-end landscape:gap-8 landscape:py-24 landscape:px-0 landscape:pb-36 lg:w-[80%] lg:flex-row lg:items-end lg:gap-8 lg:py-24 lg:px-0 lg:pb-36">
          <div className="
            w-full h-[320px] sm:h-[540px] md:h-[640px] overflow-hidden rounded-lg pt-8 px-2  border border-neutral-700 flex justify-end items-start 
            landscape:p-0 landscape:mb-0 landscape:w-1/3 landscape:border-none landscape:pt-0 landscape:items-end landscape:h-fit
            lg:p-0 lg:mb-0 lg:w-1/3 lg:border-none lg:pt-0 lg:items-end lg:h-fit
          ">
            <Image
              src="/charles-full.jpg"
              width="1400"
              height="1000"
              alt="Dickens reading..."
              className="mix-blend-multiply"
            />
          </div>
          < div className="text-neutral-700 w-full mt-4 md:mt-8 landscape:w-2/3 landscape:mt-0 lg:w-2/3 lg:mt-0" >
            <h2 className="text-base sm:text-lg md:text-xl font-bold mb-0 sm:mb-1 md:mb-2 landscape:mb-2 landscape:text-2xl lg:mb-2 lg:text-2xl" > The History </h2>
            <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 landscape:text-lg landscape:mb-4 lg:text-lg lg:mb-4"> In 1853, ten years after having dashed off his surprisingly successful holiday story, <span className="italic" > A Christmas Carol</span>, Charles Dickens gave his first public reading of the work. The effort was so well received, as well as providing much needed cash, that Dickens continued to perform these celebrated readings for the rest of his life.</p >
          </div>


        </div>
      </div>
    </section>
  );
}