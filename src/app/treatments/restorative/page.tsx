'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function RestorativeDentistry() {
  const services = [
    { title: 'Dental Implants', price: '15,000 ETB' },
    { title: 'Crowns & Bridges', price: '8,000 ETB' },
    { title: 'Full Mouth Reconstruction', price: 'Consultation Required' },
    { title: 'Root Canal Therapy', price: '4,500 ETB' }
  ];

  return (
    <main className="min-h-screen bg-[#F0F9FF]">
      <Navbar />
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 text-primary mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest font-sans">Restorative Specialists</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 font-cormorant mb-8 leading-tight">
              Restore Your Smile's Full Potential
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed font-sans italic mb-8">
              We specialize in complex restorative cases, ensuring your teeth function perfectly and look completely natural.
            </p>
            <div className="flex gap-4">
              <a href="/book" className="bg-primary text-white px-8 py-4 rounded-full font-bold shadow-xl hover:bg-primary-hover transition-all">
                Book Consultation
              </a>
              <a href="#services" className="bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">
                Explore Services
              </a>
            </div>
          </motion.div>
          <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
            <Image src="/service_implant.png" alt="Restorative" fill className="object-cover" />
          </div>
        </div>

        <div id="services" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-xl transition-all">
              <h4 className="text-2xl font-bold text-gray-900 font-cormorant mb-2">{s.title}</h4>
              <p className="text-primary font-bold text-sm mb-6 font-sans">{s.price}</p>
              <a href="/book" className="flex items-center gap-2 text-gray-900 font-bold text-sm hover:gap-3 transition-all group">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Featured CTA Section */}
      <section className="bg-primary py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-6xl font-extrabold text-white font-cormorant mb-8">Ready to get your bite back?</h2>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-12 italic font-sans">
            Our restorative team is ready to guide you through a comprehensive treatment plan designed for your longevity.
          </p>
          <a href="/book" className="inline-block bg-[#F0F9FF] text-primary px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:scale-105 transition-all">
            Schedule Your Visit Today
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
