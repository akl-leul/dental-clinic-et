'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Target, Users, Shield, Award, MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const values = [
    { title: 'Excellence', desc: 'We utilize the highest standards of Dental technology and ongoing education.', icon: <Target className="w-6 h-6" /> },
    { title: 'Compassion', desc: 'We understand Dental anxiety and treat every patient with gentle, personalized care.', icon: <Users className="w-6 h-6" /> },
    { title: 'Integrity', desc: 'Transparent pricing and honest recommendations for your long-term health.', icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <main className="min-h-screen bg-[#F0F9FF]">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-40 pb-24 px-4 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[100px]" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-8xl font-extrabold font-cormorant mb-6"
          >
            A Smile Legacy in Addis
          </motion.h1>
          <p className="text-xl text-white/80 font-sans italic">
            Founded with a vision to bring international-standard dentistry to Ethiopia, we’ve spent 15 years perfecting the art of patient care.
          </p>
        </div>
      </div>

      {/* Story & Image Section */}
      <div className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]"
          >
            <Image src="/clinic_reception.png" alt="Clinic Reception" fill className="object-cover" />
          </motion.div>
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 font-cormorant leading-tight">Founded on Trust, Driven by Innovation.</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-sans">
              Our journey began in 2009 when Dr. Samuel Abebe identified a need for specialized prosthodontics in Addis Ababa. What started as a two-chair clinic has evolved into a multi-specialty center equipped with 3D digital scanners, laser surgical tools, and an in-house Dental lab.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed font-sans italic">
              "We don't just treat teeth; we treat people. Our goal is to make every visit feel like a conversation with a trusted friend."
            </p>
            <div className="grid grid-cols-2 gap-8 pt-6">
              <div>
                <h4 className="text-4xl font-bold text-primary font-cormorant">15+</h4>
                <p className="text-gray-500 text-sm uppercase tracking-widest font-sans font-bold">Years of Care</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-primary font-cormorant">12k+</h4>
                <p className="text-gray-500 text-sm uppercase tracking-widest font-sans font-bold">Successful Cases</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="grid md:grid-cols-3 gap-12 mb-32">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-white rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                {v.icon}
              </div>
              <h4 className="text-2xl font-bold text-gray-900 font-cormorant mb-4">{v.title}</h4>
              <p className="text-gray-500 text-sm font-sans leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Facilities Section */}
        <div className="bg-gray-900 rounded-[3.5rem] p-12 lg:p-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px]" />
          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <h2 className="text-4xl lg:text-6xl font-extrabold font-cormorant mb-8">State-of-the-Art Facilities</h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed font-sans">
                Our clinic is designed to provide a serene, spa-like atmosphere. We’ve invested in the latest global technology to ensure your treatments are faster, safer, and more comfortable.
              </p>
              <ul className="space-y-4">
                {['Digital 3D Cone Beam CT', 'Soft Tissue Laser Technology', 'Advanced Sterilization Suite', 'In-house CAD/CAM Milling'].map((tech, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="font-sans font-medium">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image src="/clinic_room.png" alt="Facility" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Final Contact CTA */}
      <section className="py-24 px-4 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">
           <div className="p-8">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h5 className="font-bold text-gray-900 mb-2">Location</h5>
              <p className="text-gray-500 text-sm">Bole Road, Addis Ababa</p>
           </div>
           <div className="p-8">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h5 className="font-bold text-gray-900 mb-2">Phone</h5>
              <p className="text-gray-500 text-sm">+251 911 234 567</p>
           </div>
           <div className="p-8">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h5 className="font-bold text-gray-900 mb-2">Email</h5>
              <p className="text-gray-500 text-sm">info@dentivaclinic.com</p>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
