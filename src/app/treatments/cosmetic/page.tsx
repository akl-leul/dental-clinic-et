'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function CosmeticDentistry() {
  const treatments = [
    { name: 'Teeth Whitening', desc: 'Professional laser whitening for a brighter smile in just one visit.' },
    { name: 'Porcelain Veneers', desc: 'Thin, custom-made shells designed to cover the front surface of teeth.' },
    { name: 'Dental Bonding', desc: 'A tooth-colored resin material applied to repair chips or cracks.' },
    { name: 'Smile Design', desc: 'A comprehensive plan to achieve your ideal aesthetic goals.' }
  ];

  return (
    <main className="min-h-screen bg-[#F0F9FF]">
      <Navbar />
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-40">
          <Image src="/service_cosmetic.png" alt="Cosmetic" fill className="object-cover" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center mb-6"
          >
            <div className="w-16 h-16 bg-[#F0F9FF]/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          <h1 className="text-5xl lg:text-8xl font-extrabold text-white font-cormorant mb-4">Cosmetic Dentistry</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-sans italic">
            Unlock the power of a perfect smile with our advanced aesthetic treatments.
          </p>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 font-cormorant mb-8">Artistry Meets Science</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our cosmetic treatments are tailored to your unique facial features and personal goals. We use the highest quality materials to ensure natural-looking, long-lasting results.
            </p>
            <div className="space-y-6">
              {treatments.map((t, i) => (
                <div key={i} className="flex gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-primary/20 transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{t.name}</h4>
                    <p className="text-gray-500 text-sm">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sticky top-32 bg-gray-900 rounded-[3rem] p-12 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px]" />
            <h3 className="text-3xl font-bold font-cormorant mb-6">Ready to Transform?</h3>
            <p className="text-gray-400 mb-8 font-sans">
              Book a cosmetic consultation today and let our experts design your dream smile.
            </p>
            <a href="/book" className="block w-full bg-primary py-4 rounded-xl text-center font-bold text-lg hover:bg-primary-hover transition-all shadow-xl shadow-primary/30">
              Get Started Now
            </a>
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-sm text-gray-500">Flexible financing available for all cosmetic packages.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
