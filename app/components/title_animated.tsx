"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';


export default function TitleAnimated() {
  return (

    <div className="h-screen flex flex-col justify-between rounded-md">
      <div
        className="h-[35%] flex flex-col justify-center items-center rounded-t overflow-hidden"

      >
        <motion.h2
          className="text-3xl tracking-tight text-neutral-300"
          animate={{
            y: [0, 0, 0, 10, 0],

          }}
          transition={{ delay: 4, duration: 4.0 }}

        >
          Charles Dickens
        </motion.h2>

        <motion.h1
          className="text-4xl tracking-tighter text-amber-200 uppercase relative z-10"
          animate={{
            scale: [0, 0, 0, 1.75, 1],
            opacity: [0, 0, 0, 1, 1],
          }}
          transition={{ delay: 4, duration: 4.0 }}
        >
          Begrudgingly
        </motion.h1>

        <motion.h2
          className="text-3xl tracking-tight text-neutral-300"
          animate={{
            y: [-40, -40, -40, -10, 0],
          }}
          transition={{ delay: 4, duration: 4.0 }}
        >
          Performs
        </motion.h2>

        <motion.h2
          className="text-3xl tracking-tight text-neutral-300"
          animate={{
            y: [-40, -40, -40, -10, 0],
          }}
          transition={{ delay: 4, duration: 4.0 }}
        >
          &lsquo;A Christmas Carol&rsquo;
        </motion.h2>

        <motion.h1
          className="text-4xl tracking-tighter text-amber-200 uppercase"
          animate={{
            scale: [0, 1.75, 1.75, 1, 1],
            opacity: [0, 1, 1, 1, 1],
            y: [-20, -20, -20, 0, 0],
          }}
          transition={{ delay: 4, duration: 4.0 }}
        >
          Again.
        </motion.h1>
      </div>
      <div
        className=" overflow-hidden rounded-md border border-neutral-500 relative h-1/2"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ delay: 9.0, duration: 4.0 }}
        >

          <Image
            src="/dickens_image2_color.jpg"
            width="800"
            height="800"
            alt="Dickens reading..."
            className="absolute z-20"
          />
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="visible"
          animate="hidden"
          transition={{ delay: 8.0, duration: 5.0 }}
        >
          <Image
            src="/charles-full.jpg"
            width="800"
            height="800"
            alt="Dickens reading..."
            className="absolute z-40"
            priority
          />
        </motion.div>
      </div>

      <motion.div
        className="h-[15%] w-full flex flex-col justify-center items-center"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ delay: 12.0, duration: 1.0 }}
      >
        <h4 className="text-amber-200 text-xs text-center uppercase">created and performed by</h4>
        <h4 className="text-xl text-neutral-200">Blake Montgomery</h4>
      </motion.div>


    </div >

  )
}