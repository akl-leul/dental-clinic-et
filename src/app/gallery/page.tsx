'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Sparkles, Camera, Award } from 'lucide-react';

export default function GalleryPage() {
  const cases = [
    { title: 'Full Smile Restoration', category: 'Cosmetic', image: '/happy_patient.png', stats: '8 Veneers' },
    { title: 'Invisalign Transformation', category: 'Orthodontics', image: '/happy_patient_3.png', stats: '14 Months' },
    { title: 'Dental Implants', category: 'Restorative', image: '/service_implant.png', stats: '2 Implants' },
    { title: 'Professional Whitening', category: 'Cosmetic', image: '/happy_patient_2.png', stats: '3 Shades Lighter' },
    { title: 'Pediatric Alignment', category: 'Pediatric', image: '/happy_patient_4.png', stats: 'Early Care' },
    { title: 'Hollywood Smile', category: 'Cosmetic', image: '/service_cosmetic.png', stats: 'Premium' }
  ];

  return (
    <main className="min-h-screen bg-[#F0F9FF]">
      <Navbar />
      
      {/* Hero */}
      <div className="pt-40 pb-24 px-4 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6"
          >
            <Camera className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest font-sans">Visual Excellence</span>
          </motion.div>
          <h1 className="text-5xl lg:text-8xl font-extrabold font-cormorant mb-6">Smile Gallery</h1>
          <p className="text-xl text-white/80 font-sans italic leading-relaxed">
            Real results for real patients. Explore our collection of life-changing transformations.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-[3rem] overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image src={c.image} alt={c.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute top-6 left-6 flex gap-2">
                   <div className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest font-sans">
                      {c.category}
                   </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                   <h4 className="text-2xl font-bold text-white font-cormorant mb-2">{c.title}</h4>
                   <div className="flex items-center gap-2 text-primary font-bold text-sm font-sans uppercase tracking-tighter">
                      <Sparkles className="w-4 h-4" />
                      {c.stats}
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Section */}
        <div className="mt-32 bg-gray-900 rounded-[3.5rem] p-12 lg:p-24 text-white text-center relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 blur-[120px]" />
          <Award className="w-16 h-16 text-primary mx-auto mb-8" />
          <h2 className="text-4xl lg:text-6xl font-extrabold font-cormorant mb-8">Ready for your transformation?</h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12 italic font-sans leading-relaxed">
            Our experts are ready to design a personalized treatment plan to help you achieve your goal smile.
          </p>
          <a href="/book" className="inline-block bg-primary text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-all">
            Start Your Journey
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
