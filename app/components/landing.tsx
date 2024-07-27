import Image from 'next/image';

export default function Landing() {
  return (
    <div className="LANDING">


      <div className="w-full flex flex-col justify-start items-center r elative top-[-100px] pt-8 pb-8">
        <h1 className="text-5xl tracking-tighter text-neutral-200">Begrudgingly,</h1>

        <h2 className="text-amber-200 text-xs text-center uppercase mt-4 mb-2">Charles Dickens performs &lsquo;A Christmas Carol&rsquo;</h2>


        <h2 className="text-5xl tracking-tighter text-neutral-200">Again!</h2>
      </div>


      <div className="sm:hidden h-[320px]  relative overflow-hidden border border-neutral-500 m-2" >
        <Image
          src="/dickens_image2_color.jpg"
          width="800"
          height="800"
          alt="Dickens reading..."
          className="absolute top-[-10%] left-0 opacity-100"
        />
      </div>


      <div className="w-full flex flex-col justify-start items-center pt-8 pb-8">

        <h4 className="text-amber-200 text-xs text-center uppercase">created and performed by</h4>
        <h4 className="text-xl text-neutral-200">Blake Montgomery</h4>
      </div>
    </div >
  );
}