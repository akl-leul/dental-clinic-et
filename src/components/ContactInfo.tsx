'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function ContactInfo() {
  return (
    <section id="location" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Contact Details & Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3 font-sans">Our Location</h2>
              <h3 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 font-cormorant">Visit Our Modern Clinic in Addis</h3>
              <p className="text-xl text-gray-600 font-sans leading-relaxed">
                Located in the heart of the city, our facility combines accessibility with world-class Dental technology.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#F0F9FF] p-3 rounded-2xl shadow-sm text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">Phone</h5>
                  <p className="text-gray-600 text-sm">+251 911 382 531</p> 
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#F0F9FF] p-3 rounded-2xl shadow-sm text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-bold text-gray-900">Email</h5>
                  <p className="text-gray-600 text-sm">hello@yanaspecialitydentalclinic.com</p>
                  <p className="text-gray-600 text-sm">bookings@yanaspecialitydentalclinic.com</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative w-full h-80 rounded-[2.5rem] overflow-hidden shadow-inner border border-gray-200 bg-gray-200 group">
              <div className="absolute inset-0 bg-gray-300 animate-pulse" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3991.8198039104645!2d38.8250729!3d9.0170558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b9bcee0d7febf%3A0x7415831026955ab3!2zWWFuYSBTcGVjaWFsaXR5IERlbnRhbCBDbGluaWMgfCBTYWxpdGUgTWhpcmV0IHwg4Yur4YqTIOGIjeGLqSDhi6jhjKXhiK3hiLUg4YiF4Yqt4Yid4YqTIOGKreGIiuGKkuGKrSB8IOGIs-GIiuGJsCDhiJ3hiIXhiKjhibU!5e1!3m2!1sen!2set!4v1778485131802!5m2!1sen!2set"
                className="absolute inset-0 w-full h-full border-0 filter grayscale hover:grayscale-0 contrast-125 opacity-80"
                allowFullScreen
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
              <a
                href="https://maps.app.goo.gl/Tj83YyPDrq1o4X4f8"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 bg-[#F0F9FF] text-gray-900 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 shadow-xl hover:bg-gray-50 transition-colors"
              >
                Open in Google Maps
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Right: Clinic Image with Floating Badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]">
              <Image
                src="/clinic_reception.png"
                alt="Clinic Interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating Open Hours Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -left-8 bottom-12 bg-[#F0F9FF] p-8 rounded-[2rem] shadow-2xl border border-gray-100 z-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 font-cormorant">Clinic Hours</h4>
                  <p className="text-green-600 text-xs font-bold uppercase tracking-widest font-sans">Open Now</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between gap-12 border-b border-gray-50 pb-2">
                  <span className="text-gray-500 text-sm font-sans">Mon - Fri</span>
                  <span className="text-gray-900 text-sm font-bold font-sans">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between gap-12 border-b border-gray-50 pb-2">
                  <span className="text-gray-500 text-sm font-sans">Saturday</span>
                  <span className="text-gray-900 text-sm font-bold font-sans">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between gap-12">
                  <span className="text-gray-500 text-sm font-sans">Sunday</span>
                  <span className="text-primary text-sm font-bold font-sans italic">Emergency Only</span>
                </div>
              </div>
            </motion.div>

            {/* Small Floating Decoration */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
