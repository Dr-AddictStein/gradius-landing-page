"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { DotIcon } from "lucide-react";
import { Zoom } from "react-awesome-reveal";

const ChooseGradiusContent = () => {
  const headingText = "Why you should choose Gradius today";
  const springTransition = {
    type: "spring",
    stiffness: 80,
    damping: 25,
    staggerChildren: 0.08,
  };

  const characterVariants = {
    hidden: { filter: "blur(8px)", y: 15, opacity: 0 },
    visible: {
      filter: "blur(0)",
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="max-w-7xl w-full relative mx-auto px-4 py-12 lg:mt-[300px]">
      <div className="text-center">
        <motion.h1
          className="text-[#F3ECFE] pt-[160px] lg:pt-0 text-[24px] md:text-[45px] lg:text-[54px] font-semibold drop-shadow-[0_0_10px_#A436F1]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{ visible: { transition: springTransition } }}
        >
          {headingText.split(" ").map((word, index) => (
            <motion.span
              key={index}
              className="md:text-3xl lg:text-5xl inline-block mr-2"
              variants={characterVariants}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <p className="text-[#F3ECFE] text-[14px] md:text-[18px] lg:text-[18px] mt-3">
          3 simple reasons to level up now
        </p>
      </div>

      {/* Cards */}
      {[1, 2, 3].map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row  gap-4 md:gap-4 mt-16 md:mt-32 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
        >
          {/* Image */}
          <Zoom>
            <div className="lg:w-24 md:w-32 flex justify-center border-red-600">
              <img src={`/assets/${item}.png`} />


            </div>
          </Zoom>

          {/* Content */}
          <div
            className={`flex-1 ${index === 1 ? "text-right   " : "text-center md:text-left"
              }`}
          >
            <motion.h1
              className="text-[#F3ECFE]  text-2xl md:text-3xl font-semibold drop-shadow-[0_0_10px_#A436F1]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={{ visible: { transition: springTransition } }}
            >
              {index === 1 ? (
                // Handling the two-line case while ensuring both lines animate correctly
                <>
                  <motion.span className="block" variants={characterVariants}>
                    Stop Worrying About Finding the
                  </motion.span>
                  <motion.span
                    className="lg:block mt-3"
                    variants={characterVariants}
                  >
                    Right Study Method
                  </motion.span>
                </>
              ) : (
                // Handling index 0 and index 2 the same way, ensuring all words animate
                [
                  "Unlock Your Unique Learning Style",
                  "Study Less, Get Better Grades!",
                ][index === 0 ? 0 : 1]
                  .split(" ")
                  .map((word, i) => (
                    <motion.span
                      key={i}
                      className="lg:inline-block lg:mr-2"
                      variants={characterVariants}
                    >
                      {word}
                    </motion.span>
                  ))
              )}
            </motion.h1>
            {
              item === 1 && <div className="absolute hidden lg:inline-block  right-[48.5%] top-[17.7%]">
                <img src={`/assets/layer3.png`}></img>
              </div>
            }
            {
              item === 2 && <div className="absolute right-[47%] -rotate-12 top-[47%] hidden lg:inline-block">
                <img src={`/assets/layyer8.png`}></img>
              </div>
            }

            {
              item === 1 && <div className="absolute right-[51%] top-[78%] hidden lg:inline-block">
                <img src={`/assets/layer3.png`}></img>
              </div>
            }

            <div
              className={`mt-6 mb-24 space-y-3 ${index === 1 ? "flex flex-col lg:items-end" : " text-start"
                }`}
            >
              {[
                [
                  "Gradius helps you unlock and value your unique learning style",
                  "Everyone learns differently, and traditional, standardized methods aren't effective for everyone",
                  "With Gradius, you’ll be guided to study in the way that works best for you",
                  "Over time, you’ll be creating the perfect tutor for yourself, without even realizing it",
                ],
                [
                  "No more trial and error, no more endless searching for the right study technique",
                  "By using Gradius, you’ll automatically receive the personalized guidance you need to succeed",
                  "Focus on your studies without the stress of figuring out what works for you",
                ],
                [
                  "Personalized learning is proven to boost performance more than twofold",
                  "Studies from top universities show personalized learning can halve study time",
                  "Gradius helps you focus on quality over quantity, resulting in better results with less effort",
                ],
              ][index].map((text, j) => (
                <p
                  key={j}
                  className={`flex items-start text-sm md:text-[20px] bg-gradient-to-r from-[#FFFFFF] to-[#A436F1]  text-transparent bg-clip-text ${index === 1 ? "justify-end" : ""
                    }`}
                >
                  <DotIcon className="text-white mr-2 mt-1 lg:text-3xl h-5" />{" "}
                  {text}
                </p>
              ))}
            </div>
          </div>

          {/* Side Icon */}
          <div className="hidden lg:block w-24 md:w-40">
            <Image
              src="/assets/Icon.png"
              width={200}
              height={200}
              alt="icon"
              layout="responsive"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChooseGradiusContent;
