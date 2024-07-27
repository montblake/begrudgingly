import Landing from '@/app/components/landing';
import Background from '@/app/components/background';
import History from '@/app/components/history';
import Premise from '@/app/components/premise';
import Artist from '@/app/components/artist';
import ImagePage from '@/app/components/image_page';
import Audience from '@/app/components/audience';
import Press from '@/app/components/press';
import Footer from '@/app/components/footer';
import PageTwo from '@/app/components/pagetwo';
import Outcome from '@/app/components/outcome';

export default function Home() {
  return (
    <main className="bg-neutral-900 w-screen h-min-screen">


      <Landing />
      <PageTwo />
      <Audience />
      <History />
      {/* <div className="lg:hidden">
        <ImagePage page={"zero"} />
      </div> */}

      <Premise />
      {/* <div className="lg:hidden">
        <ImagePage page={"two"} />
      </div> */}

      <Outcome />

      <Press />

      <Artist />
      {/* <div className="lg:hidden"> */}
      {/* <ImagePage page={"one"} /> */}
      {/* </div> */}


      {/* <ImagePage page={"four"} /> */}

      <ImagePage page={"four"} />
      <Footer />


    </main>
  );
}
