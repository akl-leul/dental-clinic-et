'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Award, GraduationCap, HeartPulse } from 'lucide-react';

export default function Accreditations() {
  const partners = [
    { name: "Ministry of Health Certified", icon: <ShieldCheck className="w-6 h-6 text-gray-400" /> },
    { name: "Int. Congress of Oral Implantologists", icon: <Award className="w-6 h-6 text-gray-400" /> },
    { name: "Top Rated Clinic 2025", icon: <HeartPulse className="w-6 h-6 text-gray-400" /> },
    { name: "Addis Ababa University Alumni", icon: <GraduationCap className="w-6 h-6 text-gray-400" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gray-50 border-y border-gray-100 py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-semibold text-gray-400 tracking-widest uppercase mb-6"
        >
          Trusted and Accredited By
        </motion.p>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all duration-500"
        >
          {partners.map((partner, index) => (
            <motion.div key={index} variants={itemVariants} className="flex items-center gap-3">
              {partner.icon}
              <span className="font-bold text-gray-500">{partner.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
