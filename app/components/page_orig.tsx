"use client";

import Nav from "./nav";
import Footer from "./footer";
// import { useState, useEffect, useRef } from "react";
// import Eyes from "../components/eyes";
import Explore from "./explore";

export default function Home() {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 0);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <main className="w-full h-min-screen flex flex-col justify-start items-start relative mx-auto bg-black">
      <Nav />

      {/* <div className="absolute bottom-0 left-0 w-full h-1/4 flex flex-col justify-center items-center bg-black p-12 sm:p-24 md:p-32 lg:p-48"> */}
      <Explore />
      {/* <BuyButton /> */}
      {/* </div> */}
      <Footer />
    </main>
  );
}
