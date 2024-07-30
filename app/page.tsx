import Landing from '@/app/components/landing';
import History from '@/app/components/history';
import Premise from '@/app/components/premise';
import Artist from '@/app/components/artist';
import ImagePage from '@/app/components/image_page';
import Audience from '@/app/components/audience';
import Press from '@/app/components/press';
import Contact from '@/app/components/contact';
import News from '@/app/components/news';
import Play from '@/app/components/play';

export default function Home() {
  return (
    <main className="bg-neutral-800 flex justify-center items-start">
      <div className="max-w-[1400px] bg-neutral-800 w-screen h-min-screen px-16 flex flex-col justify-start items-center">


        <Landing />
        <News />

        <Audience />

        <History />
        <Premise />
        <Play />

        <Press />

        <Artist />
        <Contact />

        <ImagePage page={"one"} />

      </div>

    </main>
  );
}
