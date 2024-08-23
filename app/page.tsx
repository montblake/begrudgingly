import Landing from '@/app/components/landing';
import History from '@/app/components/history';
import Premise from '@/app/components/premise';
import Artist from '@/app/components/artist';
import ImagePage from '@/app/components/image_page';
import Audience from '@/app/components/audience';
import Press from '@/app/components/press';
import News from '@/app/components/news';
import Play from '@/app/components/play';

export default function Home() {
  return (
    <main className="bg-neutral-900 w-screen flex justify-center items-start">
      <div className="max-w-[1400px] h-min-screen">


        <Landing />
        <News context={'landing'} />

        <Audience />

        <History />
        <Premise />
        <Play />

        <Press />

        <Artist />

        <ImagePage page={"one"} />

      </div>

    </main>
  );
}
