import Landing from '@/app/components/landing';
import History from '@/app/components/history';
import Premise from '@/app/components/premise';
import Artist from '@/app/components/artist';
import ImagePage from '@/app/components/image_page';
import Audience from '@/app/components/audience';
import Press from '@/app/components/press';
import Footer from '@/app/components/footer';
import News from '@/app/components/news';
import Play from '@/app/components/play';

export default function Home() {
  return (
    <main className="bg-neutral-900 w-screen h-min-screen p-2 flex flex-col justify-start items-center">


      <Landing />
      <News />
      <Audience />
      <History />
      {/* <div className="lg:hidden">
        <ImagePage page={"zero"} />
      </div> */}

      <Premise />
      {/* <div className="lg:hidden">
        <ImagePage page={"two"} />
      </div> */}

      <Play />

      <Press />

      <Artist />
      {/* <div className="lg:hidden"> */}
      {/* <ImagePage page={"one"} /> */}
      {/* </div> */}


      {/* <ImagePage page={"four"} /> */}

      <Footer />
      <ImagePage page={"one"} />


    </main>
  );
}
