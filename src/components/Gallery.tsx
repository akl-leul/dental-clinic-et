'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Gallery() {
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
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-24 bg-[#F0F9FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Our Facility</h2>
          <h3 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-4 font-cormorant">A Modern, Relaxing Environment</h3>
          <p className="text-xl text-gray-600">
            We've designed our clinic to feel less like a hospital and more like a luxury lounge.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <motion.div variants={itemVariants} className="relative aspect-square rounded-2xl overflow-hidden group shadow-lg">
            <Image
              src="/clinic_reception.png"
              alt="Clinic Reception"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <span className="text-white font-semibold text-lg p-6">Welcoming Reception</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative aspect-square rounded-2xl overflow-hidden group shadow-lg">
            <Image
              src="/clinic_room.png"
              alt="Operating Room"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <span className="text-white font-semibold text-lg p-6">State-of-the-Art Rooms</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative aspect-square md:col-span-2 lg:col-span-1 rounded-2xl overflow-hidden group shadow-lg">
            <Image
              src="/clinic_equipment.png"
              alt="Advanced Equipment"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <span className="text-white font-semibold text-lg p-6">Advanced Technology</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
