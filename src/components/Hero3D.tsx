'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import Link from 'next/link';
import ToothModel from './ToothModel';

export default function Hero3D() {
  return (
    <div className="relative min-h-[100vh] lg:min-h-[90vh] bg-gradient-to-br from-white to-gray-100 overflow-hidden flex items-center justify-center pt-24 lg:pt-0 font-cormorant">
      
      {/* Background Huge Watermark */}
      <div className="absolute inset-0 -mt-60 flex items-center justify-center opacity-40 pointer-events-none select-none overflow-hidden z-0">
        <h1 className="text-[25vw] font-black text-red-50 leading-none tracking-tighter">
          Dentiva
        </h1>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        
        {/* Top Floating Badge - Hidden on very small screens or adjusted */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-4 lg:top-24 left-4 lg:left-8 bg-white/80 backdrop-blur-md px-4 lg:px-6 py-2 rounded-full shadow-sm flex items-center gap-3 border border-white/50"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
          <span className="text-gray-600 font-bold tracking-wide text-xs lg:text-sm">Trusted Dental Care</span>
        </motion.div>

        {/* Location & Time Info */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-4 lg:top-24 right-4 lg:right-8 text-right hidden sm:block"
        >
          <div className="flex items-center justify-end gap-2 text-gray-700 mb-1">
            <MapPin className="w-4 h-4" />
            <span className="font-bold text-xs lg:text-sm">Addis Ababa</span>
          </div>
          <p className="text-gray-600 text-[10px] lg:text-sm font-bold uppercase tracking-wider">Open Clinic</p>
          <p className="text-gray-500 text-[9px] lg:text-xs">08 AM - 18 PM</p>
        </motion.div>

        {/* Center 3D Tooth Model */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20 overflow-visible">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full max-w-[300px] md:max-w-[500px] lg:max-w-[600px] aspect-square pointer-events-auto relative mt-20 lg:mt-20"
          >
            <ToothModel />
          </motion.div>
        </div>

        {/* Typography Left & Right */}
        <div className="flex flex-col lg:flex-row justify-between items-center w-full z-10 pointer-events-none relative mt-16 lg:mt-32 gap-12 lg:gap-0">
          
          {/* Left Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-2 pointer-events-auto text-center lg:text-left items-center lg:items-start"
          >
            <h2 className="text-[12vw] lg:text-[100px] leading-[0.9] font-normal tracking-tight text-gray-900" 
                style={{ WebkitTextStroke: '1px #111827', color: 'transparent' }}>
              Exceptional
            </h2>
            <h2 className="text-[12vw] lg:text-[100px] leading-[0.9] font-light tracking-tight text-gray-900 opacity-80">
              Dental Care
            </h2>
            
            <p className="max-w-[300px] lg:max-w-[400px] text-gray-600 mt-4 lg:mt-8 text-base lg:text-xl leading-relaxed font-semibold italic">
              We combine delivery speed and service accuracy to ensure every patient leaves with their best smile.
            </p>
            
            <Link href="#book" className="mt-6 lg:mt-8 bg-black hover:bg-gray-900 text-white px-6 lg:px-8 py-3 lg:py-5 flex items-center gap-4 w-fit transition-transform hover:scale-105 pointer-events-auto rounded-full lg:rounded-none">
              <span className="font-bold text-lg lg:text-xl">Book Appointment</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <div className="mt-8 lg:mt-16 hidden lg:block text-left">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                <span className="text-5xl font-light text-gray-900">827<span className="font-extralight text-primary">+</span></span>
              </div>
              <p className="text-sm lg:text-base text-gray-600 max-w-[250px] mt-2 font-bold uppercase tracking-widest">
                Transform your smile quickly and with our exceptional services.
              </p>
            </div>
          </motion.div>

          {/* Right Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center lg:items-end gap-2 text-center lg:text-right pointer-events-auto"
          >
            <h2 className="text-[12vw] lg:text-[90px] leading-[0.9] font-light tracking-tight text-gray-900">
              <span style={{ WebkitTextStroke: '1px #111827', color: 'transparent' }}>& </span>Straight
            </h2>
            <h2 className="text-[12vw] lg:text-[100px] leading-[0.9] font-light tracking-tight text-gray-900 opacity-80">
              Smile
            </h2>

            <div className="flex flex-row lg:flex-col items-center lg:items-end gap-8 lg:gap-12 mt-8 lg:mt-32">
              <div className="text-center lg:text-right">
                <span className="text-4xl lg:text-6xl font-light text-gray-900">170<span className="font-extralight text-primary">+</span></span>
                <p className="text-xs lg:text-sm text-gray-500 max-w-[120px] lg:max-w-[150px] mx-auto lg:ml-auto uppercase font-bold tracking-widest mt-1">Performed surgeries</p>
              </div>
              <div className="text-center lg:text-right">
                <span className="text-4xl lg:text-6xl font-light text-gray-900">85<span className="font-extralight text-primary">%</span></span>
                <p className="text-xs lg:text-sm text-gray-500 max-w-[120px] lg:max-w-[150px] mx-auto lg:ml-auto uppercase font-bold tracking-widest mt-1">Satisfied Clients</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Tags - Adjusted for responsive or hidden on mobile */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute left-[34%] top-[65%] hidden xl:flex items-center gap-4 z-30"
        >
          <div className="bg-white/40 backdrop-blur-md border border-white/60 px-4 py-2 rounded-lg shadow-sm flex items-center gap-6">
            <div>
              <p className="text-[10px] text-gray-600 font-bold tracking-wider uppercase">Root Canal Treatment</p>
              <p className="text-[9px] text-gray-500 font-bold">634 Patients</p>
            </div>
            <span className="text-primary font-black text-xs">$220.00</span>
          </div>
          <div className="w-24 h-[1px] bg-red-200 relative">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary"></div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute right-[34%] top-[50%] hidden xl:flex items-center gap-4 z-30 flex-row-reverse"
        >
          <div className="bg-white/40 backdrop-blur-md border border-white/60 px-4 py-2 rounded-lg shadow-sm flex items-center gap-6">
            <div>
              <p className="text-[10px] text-gray-600 font-bold tracking-wider uppercase">Dental Check-Up</p>
              <p className="text-[9px] text-gray-500 font-bold">840 Patients</p>
            </div>
            <span className="text-primary font-black text-xs">$75.00</span>
          </div>
          <div className="w-24 h-[1px] bg-red-200 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-primary"></div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
