'use client';

import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const displayValue = useTransform(springValue, (latest) =>
    Math.floor(latest).toLocaleString() + suffix
  );

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export default function StatsBar() {
  const stats = [
    { value: 10, suffix: '+', label: 'Years Experience' },
    { value: 50000, suffix: '+', label: 'Smiles Transformed' },
    { value: 15, suffix: '+', label: 'Expert Specialists' },
    { value: 99, suffix: '%', label: 'Patient Satisfaction' },
  ];

  return (
    <div className="bg-primary py-12 lg:py-16 relative z-20 shadow-xl border-t-4 border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <span className="text-4xl lg:text-6xl font-extrabold text-white mb-2 font-cormorant">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-blue-100 font-bold uppercase tracking-widest text-[10px] lg:text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
