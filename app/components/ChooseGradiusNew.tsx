
'use client'
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ChooseGradiusNew = () => {
  return (
    <div className="relative md:my-12 lg:mt-[180px] md:mt-[120px] -mt-[300px]  md:pt-[16px] pt-[430px] lg:pt-0 flex flex-col items-center">
      <div className="text-center relative">
        <motion.h3
          initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[35px]  lg:text-[64px] md:text-[64] pb-2 font-[Inter] font-medium leading-[100px] tracking-tight bg-gradient-to-b from-[#A436F1] to-[#6E27D5] text-transparent bg-clip-text drop-shadow-[0px_0px_15px_#A436F1]"
        >
          Backed by
        </motion.h3>

        <motion.h1
          initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[40px]  lg:text-[110px] md:text-[80px]  pb-5 md:mt-0 -mt-10 font-medium leading-tight bg-gradient-to-b from-[#6E27D5] to-[#39146F] text-transparent bg-clip-text drop-shadow-[0px_0px_15px_#A436F1]"
        >
          Cognitive Research
        </motion.h1>
      </div>

      {/* Animated Stars */}
      {[
        { top: "-top-7 left-[28%]", delay: 0 },  // Top Left Star
        { top: "-top-7 right-[28%]", delay: 0.2 }, // Top Right Star
        { top: "top-[54%] left-[12%]", delay: 0.4 },  // Middle Left Star
        { top: "top-[54%] right-[12%]", delay: 0.6 }, // Middle Right Star
        { top: "top-[120%] left-[30%]", delay: 0.8 },  // Bottom Left Star
        { top: "top-[120%] right-[25%]", delay: 1.0 }, // Bottom Right Star
      ].map((star, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: star.delay, duration: 1, ease: "easeOut" }}
          className={`absolute hidden lg:inline-block ${star.top}`}
        >
          <Image src={'/StarBig.png'} width={40} height={40} alt="star" />
        </motion.div>
      ))}
    </div>
  );
};

export default ChooseGradiusNew;
