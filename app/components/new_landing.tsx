import Image from "next/image";
import News from "./news";

export default function NewLanding() {
  return (
    <div className="flex flex-col justify-start items-start landscape:flex-row bg-neutral-200 rounded-lg m-2">
      <div className="w-full landscape:w-1/2 p-2">
        <Image
          src="/dickens_publicity_2024.png"
          alt="Dickens 2024 Publicity Image"
          width={1200}
          height={800}
          className="rounded-lg border-2 border-neutral-300"
        />
      </div>
      <News />
    </div>
  );
}
