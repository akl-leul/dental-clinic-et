'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Heart, Star, Shield, Cloud } from 'lucide-react';
import Image from 'next/image';

export default function PediatricDentistry() {
  return (
    <main className="min-h-screen bg-[#F0F9FF]">
      <Navbar />
      
      {/* Playful Hero */}
      <div className="pt-40 pb-24 px-4 bg-primary/95 text-white relative overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex items-center gap-3 mb-6"
          >
            <Star className="w-6 h-6 text-yellow-400 fill-current" />
            <span className="text-sm font-bold uppercase tracking-widest font-sans">A Comfortable First Visit</span>
          </motion.div>
          <h1 className="text-5xl lg:text-8xl font-extrabold font-cormorant mb-6">Pediatric Care</h1>
          <p className="text-xl text-white/80 max-w-2xl font-sans italic leading-relaxed">
            Building a foundation for a lifetime of healthy smiles in a fun, friendly, and anxiety-free environment.
          </p>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-square">
            <Image src="/happy_patient_2.png" alt="Kids Dentistry" fill className="object-cover" />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 font-cormorant">Dentistry Designed for Kids</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-sans">
              Our pediatric team is specially trained to work with children, ensuring they feel safe and excited about their dental health. From the waiting room games to our "gentle-touch" cleanings, everything is designed with your child in mind.
            </p>
            
            <div className="grid gap-6">
              {[
                { title: 'The First Visit', desc: 'A quick, easy exam to get your child comfortable with the dental chair.', icon: <Heart className="w-5 h-5" /> },
                { title: 'Protective Sealants', desc: 'Invisible shields applied to the back teeth to prevent 80% of cavities.', icon: <Shield className="w-5 h-5" /> },
                { title: 'Safe Sedation', desc: 'Calming options for children who feel particularly anxious about treatment.', icon: <Cloud className="w-5 h-5" /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-6 bg-white rounded-3xl shadow-sm border border-gray-100 hover:border-primary/20 transition-all">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm font-sans">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-gray-900 rounded-[3rem] p-12 lg:p-20 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 opacity-30" />
          <h3 className="text-3xl lg:text-5xl font-extrabold font-cormorant mb-6 relative z-10">Prepare for Your Visit</h3>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto italic font-sans relative z-10">
            Tell your child they are going to visit a "tooth friend." Avoid using words like "shot" or "drill" to keep the experience positive.
          </p>
          <div className="flex justify-center gap-6 relative z-10">
            <a href="/book" className="bg-primary hover:bg-primary-hover text-white px-10 py-4 rounded-full font-bold shadow-2xl transition-all transform hover:scale-105">
              Schedule First Visit
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
