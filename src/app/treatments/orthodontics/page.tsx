'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle2, Ruler, LayoutGrid, Smile } from 'lucide-react';
import Image from 'next/image';

export default function Orthodontics() {
  const options = [
    { 
      title: 'Invisalign® Clear Aligners', 
      desc: 'Virtually invisible, removable aligners that straighten your teeth without wires or brackets.',
      icon: <Smile className="w-6 h-6" />
    },
    { 
      title: 'Traditional Metal Braces', 
      desc: 'The most common and cost-effective method for correcting complex bite issues.',
      icon: <LayoutGrid className="w-6 h-6" />
    },
    { 
      title: 'Ceramic Braces', 
      desc: 'Tooth-colored brackets that blend in with your natural teeth for a more discreet look.',
      icon: <Ruler className="w-6 h-6" />
    }
  ];

  return (
    <main className="min-h-screen bg-[#F0F9FF]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-40 pb-24 px-4 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px]" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-8xl font-extrabold font-cormorant mb-6"
          >
            Precision Orthodontics
          </motion.h1>
          <p className="text-xl text-white/80 max-w-2xl font-sans italic leading-relaxed">
            From modern clear aligners to traditional precision braces, we help patients of all ages achieve perfectly aligned, healthy smiles.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 font-cormorant">Why Straighten Your Teeth?</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-sans">
              Orthodontics is about more than just aesthetics. Properly aligned teeth are easier to clean, reduce the risk of gum disease, and ensure a functional bite that prevents jaw pain and uneven tooth wear.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Improved Oral Hygiene",
                "Boosted Self-Confidence",
                "Corrected Bite Issues",
                "Healthier Jaw Function",
                "Clearer Speech",
                "Reduced Tooth Decay"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image src="/service_ortho.png" alt="Orthodontics" fill className="object-cover" />
          </div>
        </div>

        {/* Treatment Options */}
        <div className="grid md:grid-cols-3 gap-8">
          {options.map((opt, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {opt.icon}
              </div>
              <h4 className="text-2xl font-bold text-gray-900 font-cormorant mb-4">{opt.title}</h4>
              <p className="text-gray-500 font-sans text-sm leading-relaxed mb-8">{opt.desc}</p>
              <a href="/book" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <Smile className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process CTA */}
      <section className="bg-white py-24 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 font-cormorant mb-6">Your Consultation Process</h2>
          <p className="text-gray-600 mb-12 italic font-sans">
            We use 3D digital scanning to create a virtual model of your teeth, allowing you to see your projected results before the treatment even begins.
          </p>
          <a href="/book" className="bg-primary text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-all">
            Book Your 3D Scan
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
