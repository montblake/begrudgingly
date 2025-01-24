import Image from "next/image";

export default function Production() {
  return (
    <main className="w-full h-full mt-32 pb-0 relative overflow-y-scroll md:overflow-y-hidden">
      <div className="w-full max-w-[1000px] mx-auto h-fit md:h-full flex flex-col md:flex-row justify-start items-start gap-4 px-4 md:px-8 rounded-2xl pb-16 overflow-hidden">
        <div className="flex md:flex-col flex-col-reverse gap-2 w-full justify-center items-center">
          <div className="w-full h-full min-h-[360px] max-h-[50vh] md:max-h-[75vh] max-w-[500px] mx-auto rounded-2xl overflow-hidden drop-shadow-lg border border-neutral-700">
            <Image
              src="/photos/bravelux/mazza_image_vertical.jpg"
              alt="Charles Dickens Begrudgingly... Production Image by Joe Mazza / brave lux inc."
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </div>
          <p className="text-xs text-neutral-400 italic drop-shadow-xl">
            Production Image by Joe Mazza / brave lux inc.
          </p>
        </div>
        <div className="w-full max-w-[500px] mx-auto flex flex-col py-4 md:py-0 md:pl-4 md:pr-4  h-full md:overflow-y-scroll">
          <div className="md:mb-0 text-neutral-400 px-4 sm:px-4 md:px-0">
            <h1 className="text-3xl text-center md:text-left drop-shadow-xl">
              Montgomery is a superb storyteller! His rendition of the familiar
              tale is the perfect balance of dramatic and playful.... I highly
              recommend the gift of Blake Montgomery this season.
            </h1>
            <p className="text-sm mt-2 text-center md:text-left">
              <span className="italic">The Fourth Walsh</span>
            </p>
          </div>

          <div className="w-full h-4 flex justify-center md:justify-start items-center my-8">
            <hr className="w-full border-neutral-600" />
            {/* <Image
              src={"/diamond-3.png"}
              alt={"decoration"}
              width={20}
              height={20}
              className="opacity-75 w-8 h-auto"
            /> */}
          </div>

          <div className="w-full pt-4 pb-8 px-4 sm:px-4  sm:pb-12 md:px-0 md:pb-16 md:pt-0">
            <p className="text-neutral-400 text-sm drop-shadow-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              varius, est vulputate aliquet convallis, erat dui tincidunt
              turpis, id lacinia nunc risus quis eros. Donec at odio egestas,
              mollis ante non, facilisis lacus. Aliquam pellentesque velit
              tortor, vitae gravida leo dapibus at. Donec sed ornare tortor.
            </p>
            <p className="text-neutral-400 text-sm mt-4 drop-shadow-xl ">
              Morbi id ex sed nibh feugiat dapibus eu at tortor. Aenean eros
              diam, sollicitudin ac lobortis ac, blandit vel elit. Nullam a
              suscipit metus, at lobortis purus. Duis et nulla sed augue
              scelerisque vehicula in eu libero. Nam at porttitor arcu. Cras
              quam ante, ornare vel volutpat quis, auctor eget diam.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
