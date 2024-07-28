import Image from 'next/image';

export default function History() {
  return (
    <section className="bg-neutral-200 flex flex-col md:flex-row items-center justify-center md:items-end md:gap-8 pt-4 pb-8 mx-2 my-1 rounded-md px-4 md:mx-16 md:py-12 md:px-12 max-w-[1080px] md:my-2" >

      <div className="w-full h-[320px] md:h-auto overflow-hidden rounded-md pt-8 px-2 border border-neutral-700 mb-4 md:mb-0 md:w-1/3 md:border-none md:pt-0" >
        <Image
          src="/charles-full.jpg"
          width="800"
          height="800"
          alt="Dickens reading..."
          className="mix-blend-multiply"
        />
      </div>
      < div className="w-full md:w-2/3 text-neutral-700" >
        <h2 className=" text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 lg:mb-3" > The History </h2>
        < p className=" text-xs md:text-base lg:text-lg" > In 1853, ten years after having dashed off his surprisingly successful holiday story, <span className="italic" > A Christmas Carol</span>, Charles Dickens gave his first public reading of the work. The effort was so well received, as well as providing much needed cash, that Dickens continued to perform these celebrated readings for the rest of his life. In fact, it is believed that his death in 1870 was a direct result of these performances.</p >
      </div>


    </section>
  );
}