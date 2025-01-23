import Image from "next/image";

export default function Production() {
  return (
    <main className="w-full h-full flex flex-col justify-start items-start lg:justify-between mx-auto pt-8 text-neutral-300 text-xs">
      <div className="w-full max-w-[1000px] mx-auto lg:h-fit flex flex-col md:flex-row md:justify-between md:items-start gap-0 mt-16 lg:overflow-scroll mb-12">
        <div className=" w-full h-full max-w-[420px] mx-auto pt-8 lg:pt-0 lg:flex flex-col justify-start items-start ">
          <Image
            src="/new_poster_trimmed.png"
            alt="Blake Montgomery Headshot"
            width={1000}
            height={1000}
            className="h-auto w-full opacity-100 -mt-2"
          />
        </div>

        <div className="w-full h-full px-4 sm:px-12 lg:px-16 pb-8 lg:pt-0 lg:px-8 lg:pb-0 lg:pr-24 flex flex-col justify-start items-start text-neutral-400">
          <p className="text-neutral-400 text-xs py-8 text-left w-full max-w-md h-full mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet adipisicing elit. Quisquam, quos.
            Lorem ipsum amet consectetur adipisicing elit. Quisquam, quos. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            Lorem ipsum dolor sit amet adipisicing elit. Quisquam, quos. Lorem
            ipsum amet consectetur adipisicing elit. Quisquam, quos.
          </p>
        </div>
      </div>
    </main>
  );
}
