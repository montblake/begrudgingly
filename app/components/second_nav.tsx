export default function SecondNav() {
  return (
    <div className="flex flex-row justify-center items-start gap-2 text-xs lg:text-sm text-black font-bold mb-16 mt-8 w-full">
      <a href="/explore">
        <button className="bg-amber-200/80 px-4 py-2 rounded-lg flex justify-center items-center hover:bg-amber-200 w-full">
          Explore
          <br /> Show
        </button>
      </a>
      <a href="/artist">
        <button className="bg-amber-200/80 px-4 py-2 rounded-lg flex justify-center items-center hover:bg-amber-200 w-full">
          Meet
          <br /> Artist
        </button>
      </a>
      <a href="/performances">
        <div className="bg-amber-200/80 px-4 py-2 rounded-lg flex justify-center items-center hover:bg-amber-200 ">
          Choose
          <br /> Performances
        </div>
      </a>
    </div>
  );
}
