
import Image from 'next/image';
import Title from '@/app/components/title';
import TitleAnimated from '@/app/components/title_animated';


export default function Landing() {
  return (
    <div className="LANDING bg-neutral-800 p-2 w-full">



      {/* <Title version={3} /> */}
      <TitleAnimated />


      <>
        {/* <div className="h-[320px] relative overflow-hidden mx-2 border border-neutral-500 rounded-md" >
          <Image
            src="/dickens_image2_color.jpg"
            width="800"
            height="800"
            alt="Dickens reading..."
            className="absolute top-[-10%] left-0 opacity-100"
          />
        </div> */}


        {/* <div className="w-full flex flex-col justify-start items-center pt-6 pb-10">

          <h4 className="text-amber-200 text-xs text-center uppercase">created and performed by</h4>
          <h4 className="text-xl text-neutral-200">Blake Montgomery</h4>
        </div> */}
      </>


    </div >
  );
}