"use client";

import Footer from "../components/footer";
import Nav from "../components/nav";
import ProductionLinks from "../components/production_links";
import LayeredImage from "../components/layered_image";
export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-start items-start lg:justify-between bg-victorian-texture bg-cover bg-center bg-no-repeat bg-fixed relative relative mx-auto">
      <Nav />
      <div className="w-full relative z-40 mt-2">
        <ProductionLinks />
      </div>
      <div className="w-full h-full bg-black/75 absolute top-0 left-0 z-0" />

      <div
        className="w-full max-w-[1200px] mx-auto lg:h-fit flex flex-col lg:flex-row lg:justify-between lg:items-start gap-0
  mt-16 lg:overflow-scroll mb-12
"
      >
        <div className=" w-full h-[66vh] pt-8 lg:pt-0 lg:w-1/2 lg:flex flex-col justify-start items-start ">
          <LayeredImage />
        </div>

        <div className="w-full h-full lg:w-1/2 relative z-40 font-serif px-4 sm:px-12 lg:px-16 pb-8 lg:pt-0 lg:px-8 lg:pb-0 lg:pr-24 flex flex-col justify-start items-start text-neutral-400">
          {/* <hr className="w-full max-w-md mx-auto border-neutral-400/80 mt-8" /> */}
          <p className="text-neutral-400 text-sm py-8 text-left relative z-100 w-full max-w-md h-full mx-auto px-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet adipisicing elit. Quisquam, quos.
            Lorem ipsum amet consectetur adipisicing elit. Quisquam, quos. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet adipisicing elit. Quisquam, quos. Lorem
            ipsum amet consectetur adipisicing elit. Quisquam, quos.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
