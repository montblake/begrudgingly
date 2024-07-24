import Landing from '@/app/components/landing';
import History from '@/app/components/history';
import Premise from '@/app/components/premise';
import Artist from '@/app/components/artist';
import ImagePage from '@/app/components/image_page';
import Audience from '@/app/components/audience';
import Press from '@/app/components/press';
import Footer from '@/app/components/footer';

export default function Home() {
  return (
    <main className="bg-black w-screen h-min-screen">
      <div className="h-screen bg-black">

        <Landing />

        <History />
        <div className="lg:hidden">
          <ImagePage page={"zero"} />
        </div>

        <Premise />
        <div className="lg:hidden">
          <ImagePage page={"two"} />
        </div>

        <Artist />
        {/* <div className="lg:hidden"> */}
        <ImagePage page={"one"} />
        {/* </div> */}

        <Audience />
        {/* <ImagePage page={"four"} /> */}

        <Press />
        <ImagePage page={"four"} />
        <Footer />
      </div>

    </main>
  );
}
