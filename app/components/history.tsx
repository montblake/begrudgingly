import Image from 'next/image';

export default function History() {
  return (
    <section className="PAGETWO bg-neutral-200 flex flex-row-reverse justify-center items-center px-8 sm:px-12 md:px-36 pt-8 pb-8 md:pb-12" >
      <div className="flex justify-end items-end gap-12" >
        <div className="hidden w-1/3 rounded-lg overflow-hidden mix-blend-multiply md:flex justify-start items-start" >
          <Image
            src="/charles-full.jpg"
            width="800"
            height="800"
            alt="Dickens reading..."
          />
        </div>
        < div className="w-full md:w-2/3 flex flex-col justify-end items-start pr-0 md:pr-12" >
          <h2 className="text-neutral-900 text-xl md:text-2xl font-bold mb-2" > The History </h2>
          < p className="text-neutral-900 text-sm md:text-md lg:text-lg" > In 1853, ten years after having dashed off his surprisingly successful holiday story, <span className="italic" > A Christmas Carol</span>, Charles Dickens gave his first public reading of the work. The effort was so well received, as well as providing much needed cash, that Dickens continued to perform these celebrated readings for the rest of his life. In fact, it is believed that his death in 1870 was a direct result of these performances.</p >
        </div>

      </div>
    </section>
  );
}