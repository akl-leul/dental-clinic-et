'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Calendar, Phone, Clock, MessageSquare } from 'lucide-react';

export default function BookAppointment() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-32 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 font-cormorant mb-6">Schedule Your Visit</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-sans italic">
              Your journey to a healthier, brighter smile starts with a simple conversation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Left: Contact Info */}
            <div className="space-y-6">
              <div className="bg-[#F0F9FF] p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Phone className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Call to Book</h4>
                <p className="text-gray-500 mb-4 text-sm">Prefer speaking with our team? Give us a call directly.</p>
                <a href="tel:+251911234567" className="text-2xl font-bold text-primary hover:underline">+251 911 234 567</a>
              </div>

              <div className="bg-[#F0F9FF] p-8 rounded-3xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Urgent Care</h4>
                <p className="text-gray-500 mb-4 text-sm">Need immediate assistance? Our emergency line is open 24/7.</p>
                <a href="#" className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-bold">Emergency Line</a>
              </div>
            </div>

            {/* Middle: The Form */}
            <div className="lg:col-span-2 bg-[#F0F9FF] rounded-[3rem] p-10 lg:p-16 shadow-2xl border border-gray-100">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900 uppercase tracking-widest font-sans">Full Name</label>
                    <input type="text" className="w-full bg-gray-50 border-0 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900 uppercase tracking-widest font-sans">Email Address</label>
                    <input type="email" className="w-full bg-gray-50 border-0 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Enter your email" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900 uppercase tracking-widest font-sans">Phone Number</label>
                    <input type="tel" className="w-full bg-gray-50 border-0 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Enter phone number" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-900 uppercase tracking-widest font-sans">Service Needed</label>
                    <select className="w-full bg-gray-50 border-0 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none">
                      <option>General Checkup</option>
                      <option>Cosmetic Dentistry</option>
                      <option>Orthodontics</option>
                      <option>Emergency Care</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900 uppercase tracking-widest font-sans">Additional Message</label>
                  <textarea rows={4} className="w-full bg-gray-50 border-0 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Tell us more about your visit..."></textarea>
                </div>

                <button className="w-full bg-primary hover:bg-primary-hover text-white py-5 rounded-2xl font-bold text-xl shadow-xl shadow-primary/30 transition-all transform hover:-translate-y-1">
                  Confirm Booking Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
