"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, Variants, useInView } from 'framer-motion';

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

const brands = [
  '/logo1(1).svg',
  '/logo1.svg',
  '/logo2.svg',
  '/logo3.svg',
  '/logo4.svg',
  '/logo6.svg',
];

const Counter = ({ end, label }: { end: number; label: string }) => {
  const [count, setCount] = React.useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 1000;
      const step = end / (duration / 16);

      const interval = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCount(Math.floor(start));
      }, 16);

      return () => clearInterval(interval);
    }
  }, [end, isInView]);

  return (
    <div className="text-center" ref={ref}>
      <p className="text-4xl sm:text-5xl font-bold text-blue-600">{count}+</p>
      <p className="text-sm sm:text-base text-gray-600 mt-1">{label}</p>
    </div>
  );
};

const Traction: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = React.useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (carouselRef.current) {
      setContainerWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  useEffect(() => {
    const animateCarousel = async () => {
      await controls.start({
        x: -containerWidth,
        transition: {
          loop: Infinity,
          duration: 20,
          ease: 'linear',
        },
      });
    };

    animateCarousel();

    return () => {
      controls.stop();
    };
  }, [containerWidth, controls]);

  return (
    <motion.section
      className="py-16 bg-gray-50 overflow-hidden"
      variants={fadeInVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
           variants={fadeInVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-10"
        >
          Trusted by
        </motion.h2>

        <motion.div
          ref={carouselRef}
          className="relative w-full overflow-hidden whitespace-nowrap"
           variants={fadeInVariants}
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true }}
        >
          <motion.div
            className="flex"
            style={{ x: 0 }}
            animate={controls}
          >
            {brands.concat(brands).map((src, index) => (
              <div key={index} className="flex-shrink-0 w-40 sm:w-48">
                <Image
                  src={src}
                  alt={`Brand ${index + 1}`}
                  width={192}
                  height={64}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <Counter end={10000} label="Insights" />
          <Counter end={35000} label="Hospitals & Patient Network" />
          <Counter end={500} label="Lives Impacted" />
        </div>
      </div>
    </motion.section>
  );
};

export default Traction;