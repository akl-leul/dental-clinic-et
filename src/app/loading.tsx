'use client';

import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#F0F9FF]">
      <div className="relative">
        {/* Stylized Tooth SVG */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative z-10"
        >
          <div className="relative">
            <svg
              width="120"
              height="120"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M7 3C5.5 3 4 4.5 4 6.5C4 9.5 5 11 7 11.5C8.5 12 9 13 9 15C9 17 8 18.5 6 19C4 19.5 2.5 18.5 2 17" />
              <path d="M17 3C18.5 3 20 4.5 20 6.5C20 9.5 19 11 17 11.5C15.5 12 15 13 15 15C15 17 16 18.5 18 19C20 19.5 21.5 18.5 22 17" />
              <path d="M9 15C9 15 10 16 12 16C14 16 15 15 15 15" />
              <path d="M7 3C7 3 8 2 12 2C16 2 17 3 17 3" />
              <path d="M12 6V8" className="opacity-30" />
              <path d="M10 7H14" className="opacity-30" />
            </svg>
            <motion.div
              animate={{ 
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                rotate: [0, 90, 180]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-2 -right-2 text-primary"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        {/* Pulse Ring */}
        <motion.div
          animate={{
            scale: [1, 2],
            opacity: [0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeOut"
          }}
          className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-primary font-bold tracking-widest uppercase text-xs font-sans"
        >
          Preparing Your Smile
        </motion.p>
      </div>
    </div>
  );
}
