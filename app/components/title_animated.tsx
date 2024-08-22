"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';


export default function TitleAnimated() {
  return (

    <div className="w-full h-screen relative rounded-lg overflow-hidden flex-col md:bg-cover-dickens md:bg-cover md:bg-right-top md:bg-no-repeat md:border-x md:border-neutral-600 text-left">
      <div className="h-[85%] md:h-[75%] flex flex-col">
        {/* sm */}
        <div
          className="h-[250px] flex flex-col justify-end items-center md:hidden overflow-hidden pb-8"

        >
          <motion.h2
            className="text-3xl md:text-6xl tracking-tight text-neutral-300"
            animate={{
              y: [80, 0, 0, 10, 0],

            }}
            transition={{ delay: 2, duration: 4.0 }}

          >
            Charles Dickens
          </motion.h2>

          <motion.h1
            className="text-4xl md:text-7xl tracking-tighter text-amber-200 uppercase relative z-10"
            animate={{
              scale: [0, 0, 0, 1.75, 1],
              opacity: [0, 0, 0, 1, 1],

            }}
            transition={{ delay: 2, duration: 4.0 }}
          >
            Begrudgingly
          </motion.h1>

          <motion.h2
            className="text-3xl md:text-6xl tracking-tight text-neutral-300"
            animate={{
              y: [40, -40, -40, -10, 0],
            }}
            transition={{ delay: 2, duration: 4.0 }}
          >
            Performs
          </motion.h2>

          <motion.h2
            className="text-3xl md:text-6xl tracking-tight text-neutral-300"
            animate={{
              y: [40, -40, -40, -10, 0],
            }}
            transition={{ delay: 2, duration: 4.0 }}
          >
            &lsquo;A Christmas Carol&rsquo;
          </motion.h2>

          <motion.h1
            className="text-4xl md:text-7xl tracking-tighter text-amber-200 uppercase"
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
        {/* MEDIUM ANIMATED TEXT */}
        <div
          className="hidden md:flex grow flex-col justify-start items-start overflow-hidden p-8"

        >
          <motion.div className="w-full h-full bg-neutral-900 absolute top-0 left-0 z-0 flex justify-end"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            initial="visible"
            animate="hidden"
            transition={{ delay: 2.5, duration: 5.5 }}
          >
            <div className="w-1/2 bg-neutral-200 h-auto overflow-hidden rounded-lg border border-neutral-700 m-2" >
              <Image
                src="/charles-full.jpg"
                width="800"
                height="800"
                alt="Dickens reading..."
                className="mix-blend-multiply"
              />
            </div>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-6xl tracking-tight text-neutral-300 relative z-10"
            animate={{
              y: [0, 0, 0, 0, 0],

            }}
            transition={{ delay: 2, duration: 4.0 }}

          >
            Charles Dickens
          </motion.h2>

          <motion.h1
            className="text-4xl md:text-8xl tracking-tighter text-amber-200 uppercase relative z-10"
            animate={{
              // scale: [0, 0, 0, 1.25, 1.25],
              opacity: [0, 0, 0, 1, 1],
              // x: [0, 0, 0, 68, 68],

            }}
            transition={{ delay: 2, duration: 4.0 }}
          >
            Begrudgingly
          </motion.h1>

          <motion.h2
            className="text-3xl md:text-6xl tracking-tight text-neutral-300 relative z-10"
            animate={{
              y: [-96, -96, 0, 0, 0],
            }}
            transition={{ delay: 2, duration: 4.0 }}
          >
            Performs
          </motion.h2>

          <motion.h2
            className="text-3xl md:text-6xl tracking-tight text-neutral-300 relative z-10"
            animate={{
              y: [-96, -96, 0, 0, 0],
              x: [-8, -8, -8, -8, -8],
            }}
            transition={{ delay: 2, duration: 4.0 }}
          >
            &lsquo;A Christmas Carol&rsquo;
          </motion.h2>

          <motion.h1
            className=" text-4xl md:text-8xl tracking-tighter text-amber-200 uppercase relative  z-10"
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
        <div
          className="h-[300px] overflow-hidden rounded-md border border-neutral-500 relative grow md:hidden"
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
              width="800"
              height="800"
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
              width="800"
              height="800"
              alt="Dickens Public Reading, Historical Illustration"
              className="absolute z-40"
              priority
            />
          </motion.div>
        </div>
      </div>
      {/* PHone Version */}
      <motion.div
        className="h-[15%] md:hidden grow w-full flex flex-col justify-center items-center md:items-start md:justify-start md:px-8"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ delay: 8.0, duration: 1 }}
      >
        <h4 className="text-amber-200 text-xs md:text-lg text-center uppercase">created and performed by</h4>
        <h4 className="text-xl md:text-4xl text-neutral-200">Blake Montgomery</h4>
      </motion.div>
      {/* MD:Version quicker */}
      <motion.div
        className="hidden h-[15%] md:h-[25%] grow w-full md:flex flex-col justify-center items-center md:items-start md:justify-start md:px-8 relative z-10"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ delay: 6.0, duration: 2 }}
      >
        <h4 className="text-amber-200 text-xs md:text-lg text-center uppercase">created and performed by</h4>
        <h4 className="text-xl md:text-4xl text-neutral-200">Blake Montgomery</h4>
      </motion.div>


    </div >

  )
}