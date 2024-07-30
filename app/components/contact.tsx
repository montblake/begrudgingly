import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section className="bg-neutral-900 border-x border-neutral-600 flex flex-col justify-start items-center px-12 md:px-24 py-12">

      <h1 className="text-amber-200 text-xs md:text-base text-center uppercase ">Contact</h1>
      <div className="flex flex-col justify-center items-center text-neutral-600 h-[360px] sm:w-2/3">
        <h2 className="text-md sm:text-xl md:text-2xl text-center text-neutral-200 mb-2" >Currently, I am seeking a venue for this year&apos;s performances. Open to discuss any and all possibilities including both self-production/rental or some form of co-production. Please reach out.</h2>
        <p className="text-xs sm:text-md md:text-lg text-center text-neutral-200" >Blake Montgomery</p>
        <p className="italic text-xs sm:text-md md:text-lg text-center text-neutral-200" >performer, creator, producer</p>
      </div>
      <div className="w-full flex justify-center gap-8">
        <Mail color="rgb(253 230 138)" size={48} strokeWidth="1" />
      </div>

    </section >
  );
}
