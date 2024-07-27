import Image from 'next/image';

export default function History() {
  return (
    <section className="PAGETWO bg-neutral-200 items-center justify-center placeholder:px-4 py-8 m-2 rounded-lg p-4" >

      <div className="w-full" >
        <Image
          src="/charles-full.jpg"
          width="800"
          height="800"
          alt="Dickens reading..."
          className="mix-blend-multiply"
        />
      </div>
      < div className="w-full" >
        <h2 className="text-neutral-800 text-xl md:text-2xl font-bold mb-2" > The History </h2>
        < p className="text-neutral-800 text-xs" > In 1853, ten years after having dashed off his surprisingly successful holiday story, <span className="italic" > A Christmas Carol</span>, Charles Dickens gave his first public reading of the work. The effort was so well received, as well as providing much needed cash, that Dickens continued to perform these celebrated readings for the rest of his life. In fact, it is believed that his death in 1870 was a direct result of these performances.</p >
      </div>


    </section>
  );
}