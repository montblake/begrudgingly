import Nav from "@/app/components/nav";
import Footer from "@/app/components/footer";
import Venue from "@/app/components/venue";
import TicketLinks from "@/app/components/ticket_links";
import Policies from "@/app/components/policies";

export default function Performances() {
  return (
    <main className="w-full h-min-screen relative z-50 text-gray-400 flex flex-col justify-between items-center bg-black mt-10">
      <Nav />

      <div className="max-w-screen-xl h-full pt-12 px-4 sm:px-12 lg:px-16 pb-12 lg:pt-8">
        <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:gap-16 lg:items-start mb-8">
          <Venue />
          <TicketLinks />
        </div>

        <Policies />
      </div>

      <Footer />
    </main>
  );
}
