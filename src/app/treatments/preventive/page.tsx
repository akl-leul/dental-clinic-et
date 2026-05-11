'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { ShieldCheck, Search, Activity, Zap } from 'lucide-react';
import Image from 'next/image';

export default function PreventiveDentistry() {
  const steps = [
    { title: 'Digital X-Rays', desc: 'High-definition imaging with 90% less radiation than traditional x-rays.', icon: <Zap className="w-5 h-5" /> },
    { title: 'Oral Cancer Screening', desc: 'Non-invasive exams to detect early signs of abnormalities.', icon: <Search className="w-5 h-5" /> },
    { title: 'Ultrasonic Cleaning', desc: 'Advanced vibration technology to remove plaque without scraping.', icon: <Activity className="w-5 h-5" /> }
  ];

  return (
    <main className="min-h-screen bg-[#F0F9FF]">
      <Navbar />
      
      <div className="pt-40 pb-24 px-4 bg-primary text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6 border border-white/20"
          >
            <ShieldCheck className="w-4 h-4 text-white" />
            <span className="text-xs font-bold uppercase tracking-widest font-sans">Protection First</span>
          </motion.div>
          <h1 className="text-5xl lg:text-8xl font-extrabold font-cormorant mb-8">Preventive Care</h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto italic font-sans leading-relaxed">
            The best Dental treatment is the one you never need. Our preventive approach stops problems before they start.
          </p>
        </div>
      </div>

      <div className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 font-cormorant">Maintenance for Longevity</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-sans">
              Preventive dentistry is the foundation of our practice. Regular checkups every six months allow us to monitor your oral health and provide professional cleaning that you simply cannot achieve at home.
            </p>
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-md flex items-center justify-center text-primary flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{step.title}</h4>
                    <p className="text-gray-500 font-sans text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
            <Image src="/clinic_equipment.png" alt="Preventive Equipment" fill className="object-cover" />
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
             { title: "Gum Health", desc: "Prevents gingivitis and periodontal disease which can affect your heart health." },
             { title: "Fresh Breath", desc: "Professional cleaning removes bacteria that cause persistent bad breath." },
             { title: "Cost Savings", desc: "Routine maintenance prevents the need for expensive restorative surgery." }
          ].map((benefit, i) => (
            <div key={i} className="p-12 bg-white rounded-[2.5rem] border border-gray-100 shadow-sm text-center hover:bg-primary hover:text-white transition-all group">
              <h4 className="text-2xl font-bold font-cormorant mb-4">{benefit.title}</h4>
              <p className="text-gray-500 font-sans text-sm group-hover:text-white/80 transition-colors">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 font-cormorant mb-8">Don't wait for a toothache.</h2>
          <a href="/book" className="inline-block bg-primary text-white px-12 py-5 rounded-full font-bold text-xl shadow-xl hover:scale-105 transition-all">
            Schedule a Cleaning
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
