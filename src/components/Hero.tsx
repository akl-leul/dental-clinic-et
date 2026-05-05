'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Hero() {
  const title = "Transforming Smiles with Advanced Care";
  const words = title.split(" ");
  const [currentBg, setCurrentBg] = useState(0);

  const backgrounds = [
    { type: 'video', src: "https://videos.pexels.com/video-files/7147901/7147901-hd_1920_1080_24fps.mp4" },
    { type: 'image', src: "/clinic_reception.png" },
    { type: 'image', src: "/clinic_room.png" },
    { type: 'image', src: "/hero_dentist.png" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [backgrounds.length]);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="relative bg-black h-screen flex items-center overflow-hidden font-cormorant">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            {backgrounds[currentBg].type === 'video' ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                className='w-full h-full object-cover opacity-60'
                src={backgrounds[currentBg].src}
              />
            ) : (
              <Image
                src={backgrounds[currentBg].src}
                alt="Clinic background"
                fill
                className="object-cover opacity-60"
                priority
              />
            )}
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0F9FF]/10 backdrop-blur-sm border border-white/20 mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-white text-xs lg:text-sm font-medium tracking-wide uppercase font-sans">Now accepting new patients</span>
          </motion.div>

          <motion.div
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
            variants={container}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-4"
          >
            {words.map((word, index) => (
              <motion.span
                variants={child}
                style={{ marginRight: "15px" }}
                key={index}
                className={word === "Smiles" ? "text-primary italic" : ""}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl italic"
          >
            Experience world-class dental care in the heart of Addis Ababa. Your journey to a perfect smile starts here.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#book" className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 group shadow-xl shadow-primary/20 font-sans">
              Book a Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="bg-[#F0F9FF]/10 hover:bg-[#F0F9FF]/20 backdrop-blur-sm text-white px-8 py-3.5 rounded-full font-bold text-lg transition-all flex items-center justify-center border border-white/20 font-sans">
              View Our Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="flex -space-x-4">
              {[
                "/happy_patient.png",
                "/happy_patient_2.png",
                "/happy_patient_3.png",
                "/happy_patient_4.png"
              ].map((src, i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-black bg-gray-600 overflow-hidden relative">
                  <Image src={src} alt={`Patient ${i + 1}`} fill className="object-cover" sizes="48px" />
                </div>
              ))}
            </div>
            <div className="text-white">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-sm font-medium mt-1 font-sans">5,000+ Happy Smiles</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
