import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function LayeredImage() {
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
    <div
      className="w-full relative -mt-8 left-0 z-0 px-0 sm:px-20 md:px-28 lg:px-0 mix-blend-screen pb-8"
      ref={layeredImagesRef}
    >
      <div className="relative w-full max-w-[600px] lg:max-w-[600px] mx-auto">
        <Image
          src="/dickens_layers/layered_cropped.png"
          alt="Dickens 2024 Publicity Image"
          width={800}
          height={800}
          className="w-full h-auto"
        />

        <div
          className={`absolute top-0 left-0 bottom-0 right-0 bg-black/60 transition-opacity duration-1000 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        <Image
          src="/dickens_layers/border_layer_new.png"
          alt="Dickens 2024 Publicity Image"
          fill
          className={`transition-opacity duration-1000 object-contain ${
            isScrolled ? "opacity-100" : "opacity-100"
          }`}
        />

        <Image
          src="/dickens_layers/venue_layer_new.png"
          alt="Dickens 2024 Publicity Image"
          fill
          className={`transition-opacity duration-1000 object-contain ${
            isScrolled ? "opacity-100" : "opacity-100"
          }`}
        />

        <Image
          src="/dickens_layers/layered_title.png"
          alt="Dickens 2024 Publicity Image"
          fill
          className={`transition-opacity duration-1000 object-contain ${
            isScrolled ? "opacity-100" : "opacity-100"
          }`}
        />

        <Image
          src="/dickens_layers/layered_credits.png"
          alt="Dickens 2024 Publicity Image"
          fill
          className={`transition-opacity duration-1000 object-contain`}
        />
      </div>
    </div>
  );
}
