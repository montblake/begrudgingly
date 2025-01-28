import Venue from "@/components/venue";
import TicketLinks from "@/components/ticket_links";
import Image from "next/image";

export default function Performances() {
  return (
    <main className="w-full min-h-screen text-neutral-400 flex flex-col justify-between items-center bg-black/75 relative">
      <div className="max-w-screen-xl w-full mt-10 flex flex-col justify-center items-center lg:items-start lg:flex-row h-full pb-12 relative z-10">
        <div className="flex flex-col justify-center items-center lg:w-1/2 px-4 bg-transparent">
          <Image
            src="/text-only.png"
            alt="Charles Dickens Begrudgingly Performs A CHRISTMAS CAROL Again"
            width={700}
            height={600}
            className=""
          />
          <div className="lg:block hidden">
            <Venue />
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-full lg:px-24 lg:pt-12">
          <TicketLinks />
          <div className="lg:mb-0 text-neutral-400 px-4 sm:px-12 lg:px-0  w-full mt-8">
            <hr className="w-full border-neutral-400/80 mb-8 lg:mt-0" />

            <h1 className="text-3xl text-center">
              &ldquo;Exactly what I needed to connect to the spirit of the
              season!&rdquo;
            </h1>
            <hr className="w-full border-neutral-400/80 mt-8 mb-12" />
          </div>
          <div className="lg:hidden">
            <Venue />
          </div>
        </div>
      </div>
    </main>
  );
}
