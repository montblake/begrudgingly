"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';


export default function Landing() {
  return (
    // IN LANDSCAPE MODE, images are displayed as background-images
    <div className=" h-screen w-full relative flex-col landscape:bg-cover-dickens landscape:bg-cover landscape:bg-right-top landscape:bg-no-repeat">
      {/* TEXT TITLE SECTION */}
      <div className="h-[85%] landscape:h-[75%] flex flex-col">
        {/* for phone and portrait display*/}
        <div
          className="h-[250px] flex flex-col justify-end items-center landscape:hidden overflow-hidden pb-8"

        >
          <motion.h2
            className="text-3xl landscape:text-6xl tracking-tight text-neutral-300"
            animate={{
              y: [80, 0, 0, 10, 0],

            }}
            transition={{ delay: 2, duration: 4.0 }}

          >
            Charles Dickens
          </motion.h2>

          <motion.h1
            className="text-4xl landscape:text-7xl tracking-tighter text-amber-200 uppercase relative z-10"
            animate={{
              scale: [0, 0, 0, 1.75, 1],
              opacity: [0, 0, 0, 1, 1],

            }}
            transition={{ delay: 2, duration: 4.0 }}
          >
            Begrudgingly
          </motion.h1>

          <motion.h2
            className="text-3xl landscape:text-6xl tracking-tight text-neutral-300"
            animate={{
              y: [40, -40, -40, -10, 0],
            }}
            transition={{ delay: 2, duration: 4.0 }}
          >
            Performs
          </motion.h2>

          <motion.h2
            className="text-3xl landscape:text-6xl tracking-tight text-neutral-300"
            animate={{
              y: [40, -40, -40, -10, 0],
            }}
            transition={{ delay: 2, duration: 4.0 }}
          >
            &lsquo;A Christmas Carol&rsquo;
          </motion.h2>

          <motion.h1
            className="text-4xl landscape:text-7xl tracking-tighter text-amber-200 uppercase"
            animate={{
              scale: [0, 1.75, 1.75, 1, 1],
              opacity: [0, 1, 1, 1, 1],
              y: [-20, -20, -20, 0, 0],
            }}
            transition={{ delay: 2, duration: 4.0 }}
          >
            Again.
          </motion.h1>
        </div>

        {/* TEXT TITLE SECTION FOR LANDSCAPE MODE (USED WITH BG_IMAGE) */}
        {/* INITIAL DICKENS ILLUSTRATION IS INCLUDED HERE AND THEN HIDDEN */}
        <div
          className="hidden landscape:flex grow flex-col justify-start items-start overflow-hidden p-8"

        >
          <motion.div className="w-full h-full bg-neutral-900 absolute top-0 left-0 z-0 flex justify-end"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="visible"
            animate="hidden"
            transition={{ delay: 3, duration: 2 }}
          >
            <div className="w-1/2 bg-neutral-200 h-auto overflow-hidden rounded-lg border border-neutral-700 m-2" >
              <Image
                src="/charles-full.jpg"
                width="800"
                height="800"
                alt="Illustration of Charles Dickens Performing"
                className="mix-blend-multiply"
              />
            </div>
          </motion.div>
          <motion.h2
            className="text-3xl landscape:text-6xl tracking-tight text-neutral-300 relative z-10"
            animate={{
              y: [0, 0, 0, 0, 0],

            }}
            transition={{ delay: 2, duration: 4.0 }}

          >
            Charles Dickens
          </motion.h2>

          <motion.h1
            className="text-4xl landscape:text-8xl tracking-tighter text-amber-200 uppercase relative z-10"
            animate={{
              // scale: [0, 0, 0, 1.25, 1.25],
              opacity: [0, 0, 0, 1, 1],
              // x: [0, 0, 0, 68, 68],

            }}
            transition={{ delay: 4, duration: 4.0 }}
          >
            Begrudgingly
          </motion.h1>

          <motion.h2
            className="text-3xl landscape:text-6xl tracking-tight text-neutral-300 relative z-10"
            animate={{
              y: [-96, -96, 0, 0, 0],
            }}
            transition={{ delay: 4, duration: 4.0 }}
          >
            Performs
          </motion.h2>

          <motion.h2
            className="text-3xl landscape:text-6xl tracking-tight text-neutral-300 relative z-10"
            animate={{
              y: [-96, -96, 0, 0, 0],
              x: [-8, -8, -8, -8, -8],
            }}
            transition={{ delay: 4, duration: 4.0 }}
          >
            &lsquo;A Christmas Carol&rsquo;
          </motion.h2>

          <motion.h1
            className=" text-4xl landscape:text-8xl tracking-tighter text-amber-200 uppercase relative  z-10"
            animate={{
              // scale: [1.5, 1.5, 1.5, 1.5, 1.5],
              opacity: [0, 1, 1, 1, 1],
              y: [-65, -65, 0, 0, 0],
              // x: [68, 68, 68, 68, 68],
            }}
            transition={{ delay: 2, duration: 4.0 }}
          >
            Again.
          </motion.h1>
        </div>
        {/* IMAGES SECTION */}
        {/* PHONE/PORTRAIT MODE IMAGES. HIDDEN WHEN IN LANDSCAPE MODE */}
        <div
          className="h-[300px] overflow-hidden border-y
          landscape:border-x border-neutral-500 relative grow landscape:hidden"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ delay: 5.0, duration: 4.0 }}
          >

            <Image
              src="/dickens_image2_color.jpg"
              width="1200"
              height="1200"
              alt="Dickens Reading 'A Christmas Carol'"
              className="absolute z-20"
            />
          </motion.div>

          <motion.div
            className="bg-neutral-200"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="visible"
            animate="hidden"
            transition={{ delay: 5.0, duration: 4.0 }}
          >
            <Image
              src="/charles-full.jpg"
              width="1200"
              height="1200"
              alt="Dickens Public Reading, Historical Illustration"
              className="absolute z-40"
              priority
            />
          </motion.div>
        </div>
      </div>
      {/* CREDITS SECTION: CREATED BY BLAKE MONTGOMERY  */}
      {/* PHone Version */}
      <motion.div
        className="h-[15%] landscape:hidden grow w-full flex flex-col justify-center items-center landscape:items-start landscape:justify-start landscape:px-8"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ delay: 8.0, duration: 1 }}
      >
        <h4 className="text-amber-200 text-xs landscape:text-lg text-center uppercase">created and performed by</h4>
        <h4 className="text-xl landscape:text-4xl text-neutral-200">Blake Montgomery</h4>
      </motion.div>
      {/* landscape:Version quicker */}
      <motion.div
        className="hidden h-[15%] landscape:h-[25%] grow w-full landscape:flex flex-col justify-center items-center landscape:items-start landscape:justify-start landscape:px-8 relative z-10"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ delay: 6.5, duration: 2 }}
      >
        <h4 className="text-amber-200 text-xs landscape:text-lg text-center uppercase">created and performed by</h4>
        <h4 className="text-xl landscape:text-4xl text-neutral-200">Blake Montgomery</h4>
      </motion.div>


    </div >
  );
}