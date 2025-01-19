import Image from "next/image";

export default function LayeredImage() {
  return (
    <div className="w-full relative left-0 top-0 z-0 px-0 sm:px-20 md:px-28 lg:px-0 pb-0">
      <div className="relative w-full max-w-[600px] lg:max-w-[600px] mx-auto">
        <Image
          src="/dickens_layers/layered_cropped.png"
          alt="Dickens 2024 Publicity Image"
          width={800}
          height={800}
          className="w-full h-auto"
          priority
        />

        <Image
          src="/dickens_layers/border_layer_new.png"
          alt="Dickens 2024 Publicity Image"
          width={800}
          height={800}
          className="absolute top-0 left-0"
          priority
        />

        {window.location.pathname === "/production" && (
          <Image
            src="/dickens_layers/venue_layer_new.png"
            alt="Dickens 2024 Publicity Image"
            width={800}
            height={800}
            className="absolute top-0 left-0"
            priority
          />
        )}

        <Image
          src="/dickens_layers/layered_title.png"
          alt="Dickens 2024 Publicity Image"
          width={800}
          height={800}
          className="absolute top-0 left-0"
          priority
        />

        <Image
          src="/dickens_layers/layered_credits.png"
          alt="Dickens 2024 Publicity Image"
          width={800}
          height={800}
          className="absolute top-0 left-0"
          priority
        />
      </div>
    </div>
  );
}
