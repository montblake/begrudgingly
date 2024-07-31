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
    <main className="bg-neutral-900 w-screen h-min-screen flex justify-center items-start">
      <div className="max-w-[1400px] bg-neutral-900 sm:px-2 md:px-4 lg:px-8 xl:px-16">


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
