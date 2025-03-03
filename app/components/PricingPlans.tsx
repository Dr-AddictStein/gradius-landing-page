"use client";

import React from "react";
import PlanCard from "./PlanCard";
import { PlanDetails } from "./types";
import { motion } from "framer-motion";

const monthlyPlan: PlanDetails = {
  title: "Monthly Plan",
  price: "\u20AC14.99",
  discountedPrice: "\u20AC0",
  billingPeriod: "/month",
  trialInfo: "Enjoy 7 days free trial, then \u20AC20/month.",
  billingInfo: "Billed Monthly.",
  features: [
    "Paid monthly, cancel anytime.",
    "Enjoy personalized learning flexibly.",
    "3 months unpaid = AI progress lost",
  ],
  buttonText: "Sign me up",
};

const yearlyPlan: PlanDetails = {
  title: "Yearly Plan",
  price: "\u20AC9.99",
  discountedPrice: "\u20AC0",
  billingPeriod: "/month",
  trialInfo: "Enjoy 7 days free trial, then \u20AC10/month.",
  billingInfo: "Billed annually.",
  features: [
    "50% off: pay just \u20AC119.88/year.",
    "Your AI-Tutor all year round!",
    "Never lose your progress!",
  ],
  buttonText: "Sign me up",
};

const PricingPlans: React.FC = () => {
  const springTransition = {
    type: "spring",
    stiffness: 200,
    damping: 10,
    staggerChildren: 0.02,
  };

  const characterVariants = {
    hidden: {
      filter: "blur(8px)",
      y: 15,
      opacity: 0,
    },
    visible: {
      filter: "blur(0)",
      y: 0,
      opacity: 1,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="flex flex-col items-center mt-16 lg:mt-36 px-6 sm:px-12 lg:px-24 w-full">
      <div className="text-center max-w-4xl">
        <motion.h1
          className="text-[#F3ECFE] text-2xl lg:text-5xl font-semibold drop-shadow-[0_0_10px_#A436F1]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{ visible: { transition: springTransition } }}
        >
          {"Level up to personalized learning!".split(" ").map((word, index) => (
            <motion.span key={index} className="inline-block mr-1" variants={characterVariants}>
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <p className="mt-6 text-lg leading-7 text-purple-100 text-opacity-70">
          Get started today—your first 7 days are on us! <br /> No card required!
        </p>
      </div>

      <div className="mt-12 w-full lg:max-w-6xl flex flex-col lg:flex-row gap-6">
        <PlanCard plan={monthlyPlan} />
        <PlanCard plan={yearlyPlan} isYearly={true} />
      </div>
    </div>
  );
};

export default PricingPlans;
