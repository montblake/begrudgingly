// import Landing from '@/app/components/landing';
import NewLanding from "@/app/components/new_landing";
import History from "@/app/components/history";
import Premise from "@/app/components/premise";
import Artist from "@/app/components/artist";
import ImagePage from "@/app/components/image_page";
import Audience from "@/app/components/audience";
import Press from "@/app/components/press";
// import News from "@/app/components/news";
import Play from "@/app/components/play";
import Footer from "@/app/components/footer";
export default function Home() {
  return (
    <main className="bg-neutral-900 w-screen flex justify-center items-start">
      <div className="max-w-[1400px] h-min-screen">
        <NewLanding />
        {/* <News /> */}

        <Audience />

        <History />
        <Premise />
        <Play />

        <Press />

        <Artist />

        <ImagePage page={"one"} />
        <Footer />
      </div>
    </main>
  );
}
