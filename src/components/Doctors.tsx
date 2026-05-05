'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, CheckCircle } from 'lucide-react';

export default function Doctors() {
  return (
    <section id="about" className="py-24 h-full bg-[#F0F9FF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/10 transform -skew-x-12 rounded-3xl" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/doctor_profile.png"
                alt="Lead Dentist"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <h4 className="text-3xl font-bold text-white mb-1 font-cormorant">Dr. Samuel Abebe</h4>
                <p className="text-red-400 font-medium text-lg">Lead Prosthodontist</p>
              </div>
            </div>

            {/* Trust Badge Floating */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -right-8 top-12 bg-[#F0F9FF] p-6 rounded-2xl shadow-xl animate-bounce"
              style={{ animationDuration: '3s' }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-bold text-lg">Board Certified</p>
                  <p className="text-gray-500 text-sm">15+ Years Exp.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Meet Your Doctor</h2>
            <h3 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight font-cormorant">
              World-Class Expertise,<br />Right Here in Addis.
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Dr. Samuel and our team of specialists are dedicated to providing the highest standard of dental care using modern techniques and state-of-the-art equipment.
            </p>

            <ul className="space-y-4 mb-10">
              {['Certified by the International Congress of Oral Implantologists', 'Advanced training in Cosmetic Dentistry', 'Painless treatment methodology', 'Over 5,000 successful implants'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <a href="#book" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-full text-white bg-gray-900 hover:bg-black shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              Read Full Profile
            </a>
          </motion.div>
        </div>

        {/* Team Grid */}
        <div className="mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl lg:text-5xl font-extrabold text-gray-900 font-cormorant">Our Specialist Team</h3>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto italic font-sans">
              A collaborative team of international experts dedicated to your smile.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Martha Tadesse", role: "Orthodontist", img: "/happy_patient_3.png" },
              { name: "Dr. Elias Bekele", role: "Oral Surgeon", img: "/doctor_profile.png" },
              { name: "Dr. Selamawit G.", role: "Pediatric Dentist", img: "/happy_patient_2.png" }
            ].map((doc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-[2.5rem] bg-gray-50 aspect-[4/5] hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={doc.img}
                  alt={doc.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <h4 className="text-2xl font-bold text-white font-cormorant">{doc.name}</h4>
                  <p className="text-primary font-medium text-sm font-sans tracking-widest uppercase">{doc.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
