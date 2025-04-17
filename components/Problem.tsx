"use client"
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const problems = [
  {
    title: "Delayed Diagnosis",
    description: "Early diagnosis is often delayed, missing the window for proactive care and planning.",
    image: "/diagnosis.svg", 
  },
  {
    title: "Costly & Demanding Care",
    description: "Providing care is expensive and emotionally taxing for families and caregivers.",
    image: "/care-cost.svg", 
  },
  {
    title: "Lack of Personalization",
    description: "Existing dementia tools are generic and fail to meet individual patient needs.",
    image: "/no-personalization.svg",
  },
];

const Problem: React.FC = () => {
  return (
    <motion.section
      className="py-20 bg-gradient-to-b from-white to-slate-100"
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          The Growing Challenge of Dementia
        </motion.h2>
        <motion.p
          className="text-blue-800 text-lg max-w-2xl mx-auto mb-12"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Dementia affects millions worldwide, posing significant challenges for individuals, families, and healthcare systems.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-3">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white border border-blue-100 rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
               variants={fadeInVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{item.title}</h3>
              <p className="text-blue-700 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Problem;