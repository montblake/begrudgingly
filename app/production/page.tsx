"use client";

import Footer from "../components/footer";
import Nav from "../components/nav";
import ProductionLinks from "../components/production_links";
import LayeredImage from "../components/layered_image";
export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col justify-start items-start bg-black relative mx-auto">
      <Nav />
      <div className="w-full relative z-40 mt-2">
        <ProductionLinks />
      </div>

      <div className="w-full h-full flex flex-col justify-start items-start text-white text-center text-sm relative z-1 bg-victorian-texture bg-cover bg-center bg-no-repeat mt-28 sm:mt-24 lg:mt-20">
        <div className="w-full h-full bg-black/85 absolute top-0 left-0 z-0" />
        <div className="flex flex-col justify-start items-center my-0 w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto">
          <LayeredImage />
        </div>
        <p className="text-neutral-400 text-xs py-8 px-8 sm:px-12 md:px-16 pb-12 text-left relative z-100 w-full max-w-2xl h-full mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos. Lorem ipsum dolor sit amet adipisicing elit. Quisquam, quos.
          Lorem ipsum amet consectetur adipisicing elit. Quisquam, quos.
        </p>
      </div>

      <Footer />
    </main>
  );
}
