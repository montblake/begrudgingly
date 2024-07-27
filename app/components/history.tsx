import Image from 'next/image';

export default function History() {
  return (
    <section className="bg-neutral-200 items-center justify-center pt-4 pb-8 mx-2 my-1 rounded-md px-4" >

      <div className="w-full h-[320px] overflow-hidden rounded-md pt-8 px-2 border border-neutral-700 mb-4" >
        <Image
          src="/charles-full.jpg"
          width="800"
          height="800"
          alt="Dickens reading..."
          className="mix-blend-multiply"
        />
      </div>
      < div className="w-full text-neutral-700" >
        <h2 className=" text-xl font-bold mb-1" > The History </h2>
        < p className=" text-xs" > In 1853, ten years after having dashed off his surprisingly successful holiday story, <span className="italic" > A Christmas Carol</span>, Charles Dickens gave his first public reading of the work. The effort was so well received, as well as providing much needed cash, that Dickens continued to perform these celebrated readings for the rest of his life. In fact, it is believed that his death in 1870 was a direct result of these performances.</p >
      </div>


    </section>
  );
}