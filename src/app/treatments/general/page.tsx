'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

export default function GeneralDentistry() {
  return (
    <main className="min-h-screen bg-[#F0F9FF]">
      <Navbar />
      <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto">
        <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 font-cormorant mb-8">General Dentistry</h1>
        <p className="text-xl text-gray-600 mb-12">Comprehensive care for every member of your family.</p>
        <div className="grid md:grid-cols-2 gap-8">
          {['Routine Exams', 'Professional Cleaning', 'Fillings & Repair', 'Emergency Services'].map(s => (
            <div key={s} className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <h3 className="text-2xl font-bold font-cormorant mb-2">{s}</h3>
              <p className="text-gray-500">Professional dental care utilizing modern techniques for your comfort.</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
