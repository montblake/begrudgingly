import Image from 'next/image';

export default function History() {
  return (
    <section className="bg-neutral-900 " >
      <div className="bg-neutral-200 mx-2 my-1 rounded-md flex justify-center">
        <div className="landscape:w-[80%] flex flex-col landscape:flex-row items-center justify-center landscape:items-end landscape:gap-8 pt-4 pb-8  px-4  landscape:py-24 landscape:px-0 landscape:pb-36">
          <div className="w-full h-[320px] landscape:h-auto overflow-hidden rounded-lg pt-8 px-2 landscape:p-0 border border-neutral-700 mb-4 landscape:mb-0 landscape:w-1/3 landscape:border-none landscape:pt-0" >
            <Image
              src="/charles-full.jpg"
              width="800"
              height="800"
              alt="Dickens reading..."
              className="mix-blend-multiply"
            />
          </div>
          < div className="w-full landscape:w-2/3 text-neutral-700" >
            <h2 className="text-lg landscape:text-xl lg:text-2xl font-bold mb-1 landscape:mb-2 lg:mb-3" > The History </h2>
            <p className="text-sm landscape:text-lg lg:text-xl mb-2 sm:mb-3 landscape:mb-4"> In 1853, ten years after having dashed off his surprisingly successful holiday story, <span className="italic" > A Christmas Carol</span>, Charles Dickens gave his first public reading of the work. </p>
            <p className="text-sm landscape:text-lg lg:text-xl">The effort was so well received, as well as providing much needed cash, that Dickens continued to perform these celebrated readings for the rest of his life. In fact, it is believed that his death in 1870 was a direct result of these performances.</p >
          </div>


        </div>
      </div>
    </section>
  );
}