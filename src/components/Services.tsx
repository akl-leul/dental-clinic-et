'use client';

import { motion } from 'framer-motion';
import { Activity, Smile, Search, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: 'Dental Implants',
      description: 'Permanent, natural-looking tooth replacements that restore your smile and confidence.',
      icon: <Activity className="w-8 h-8 text-primary" />,
      price: 'From 15,000 ETB',
      image: '/service_implant.png'
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Professional whitening, veneers, and bonding to give you the perfect Hollywood smile.',
      icon: <Smile className="w-8 h-8 text-primary" />,
      price: 'From 5,000 ETB',
      image: '/service_cosmetic.png'
    },
    {
      title: 'General Checkups',
      description: 'Comprehensive examinations, cleanings, and preventative care for the whole family.',
      icon: <Search className="w-8 h-8 text-primary" />,
      price: 'From 1,500 ETB',
      image: '/service_checkup.png'
    },
    {
      title: 'Orthodontics',
      description: 'Clear aligners and traditional braces to straighten teeth and correct bite issues.',
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      price: 'From 25,000 ETB',
      image: '/service_ortho.png'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Our Services</h2>
          <h3 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-4 font-cormorant">Comprehensive Dental Care</h3>
          <p className="text-xl text-gray-600">
            We offer transparent pricing and world-class treatments using state-of-the-art technology.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group aspect-square relative rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 border border-gray-100 mx-auto w-full max-w-[400px] cursor-pointer"
            >
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg mb-4 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  {service.icon}
                </div>
                
                <h4 className="text-2xl lg:text-3xl font-bold text-white mb-2 font-cormorant transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {service.title}
                </h4>
                
                <div className="overflow-hidden max-h-0 group-hover:max-h-24 transition-all duration-500 delay-100">
                  <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/20 mt-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <span className="text-[10px] text-primary font-bold uppercase tracking-widest">Starting From</span>
                  <p className="text-xl font-bold text-white mt-0.5">{service.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
