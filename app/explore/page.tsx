"use client";

import Nav from "../components/nav";
import Footer from "../components/footer";
import { useState, useEffect, useRef } from "react";

import BuyButton from "../components/buy_button";
import Eyes from "../components/eyes";
export default function Home() {
  const [panelNum, setPanelNum] = useState(1);
  const [isScrolled, setIsScrolled] = useState(false);
  const layeredImagesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="max-w-[1400px] h-screen flex flex-col justify-start items-start relative mx-auto">
      <Nav />

      {/* <div className="absolute bottom-0 left-0 w-full h-1/4 flex flex-col justify-center items-center bg-black p-12 sm:p-24 md:p-32 lg:p-48"> */}
      <Eyes />
      {/* <BuyButton /> */}
      {/* </div> */}
      <Footer />
    </main>
  );
}
