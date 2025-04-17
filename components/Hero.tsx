'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CTA from './Waitlist';
import Image from 'next/image';
import Waitlist from './Waitlist';

const Hero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const circleY = useTransform(scrollYProgress, [0, 1], ['60%', '-50%']);
  const blur = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const blurFilter = useTransform(blur, (val) => `blur(${val}px)`);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 1, 1]);
  const contentY = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-white flex items-center justify-center overflow-visible"
    >
      <div className="absolute top-0 left-0 w-full h-1/2 md:h-2/3 lg:h-full overflow-visible pointer-events-none z-0">
        <motion.div
          style={{
            y: circleY,
            filter: blurFilter,
            position: 'absolute',
            bottom: '-120%',
            transform: 'translateX(-50%)',
            width: '100vw',
            height: '160vw',
            maxWidth: '250vh',
            maxHeight: '200vh',
            transformOrigin: 'top center',
          }}
          className="shadow-[inset_0px_0px_75px_-15px_rgba(255,255,255,0.4)] rounded-full bg-gradient-to-b from-[#0000ff] to-transparent"
        />
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between z-10 relative px-4 sm:px-8 py-16 text-blue">

        <motion.div
          className="w-full lg:w-1/2 text-center lg:text-left mb-5 lg:mb-0 lg:pl-12 lg:pb-20"
          style={{
            opacity: contentOpacity,
            y: contentY,
            filter: 'blur(0.2rem)',
          }}
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <small className="text-sm sm:text-base">The Future of Dementia Care</small>
          <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-3xl font-semibold leading-snug mt-2">
            AI Driven Wearables for Proactive Caregiving
          </h1>
          <p className="text-sm sm:text-base lg:text-base mt-4">
            Empowering caregivers with real-time insights, safety alerts, and cognitive health tracking for loved ones.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-start gap-4">
            <Waitlist />
          </div>
        </motion.div>
        <motion.div
          className="hidden lg:flex w-1/2 justify-end"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <div className="bg-white rounded-3xl shadow-xl p-4 max-w-md w-full h-80 flex items-center justify-center">
            <Image
              src="/STlogo.svg"
              alt="Dashboard Preview"
              width={300}
              height={300}
              className="object-contain overflow-hidden"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;