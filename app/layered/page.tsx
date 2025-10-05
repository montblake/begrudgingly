import Image from "next/image";

export default function Layered() {
  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto relative">
        <Image
          src="/dickens_layers/2025_poster_web_bg.png"
          alt="Dickens 2024 Publicity Image"
          width={500}
          height={800}
          className="w-full h-auto bg-fixed"
        />
        <div className="w-full h-[200vh] absolute top-0 left-0">
          <Image
            src="/dickens_layers/2025_poster_web_frame.png"
            alt="Dickens 2024 Publicity Image"
            width={500}
            height={800}
            className="w-full h-auto absolute top-0 left-0"
          />
          <Image
            src="/dickens_layers/2025_poster_web_credit.png"
            alt="Dickens 2024 Publicity Image"
            width={500}
            height={800}
            className="w-full h-auto absolute top-0 left-0"
          />
          <Image
            src="/dickens_layers/2025_poster_web_dickens.png"
            alt="Dickens 2024 Publicity Image"
            width={500}
            height={800}
            className="w-full h-auto absolute top-0 left-0"
          />
          <Image
            src="/dickens_layers/2025_poster_web_performs.png"
            alt="Dickens 2024 Publicity Image"
            width={500}
            height={800}
            className="w-full h-auto absolute top-0 left-0"
          />
          <Image
            src="/dickens_layers/2025_poster_web_begrudgingly.png"
            alt="Dickens 2024 Publicity Image"
            width={500}
            height={800}
            className="w-full h-auto absolute top-0 left-0"
          />
          <p className="text-center text-neutral-200 text-sm">
            THIS IS A CLOWNSHOW
          </p>
        </div>
      </div>
    </div>
  );
}
