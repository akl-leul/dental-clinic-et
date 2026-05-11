 'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, Phone, Clock, MessageSquare } from 'lucide-react';

export default function BookAppointment() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [treatment, setTreatment] = useState('General Checkup');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!name || !email || !phone || !treatment || !date || !time) {
      setError('Please fill all required fields.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, treatment, date, time, notes }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || 'Failed to submit');
      setSuccess('Appointment request submitted successfully. We will contact you soon.');
      setName(''); setEmail(''); setPhone(''); setTreatment('General Checkup'); setDate(''); setTime(''); setNotes('');
    } catch (err: any) {
      console.error(err);
      setError(err?.message || 'Submission failed');
    } finally {
      setLoading(false);
    }
  };

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
            <div className="lg:col-span-2 bg-white rounded-[3rem] p-10 lg:p-16 shadow-2xl border border-gray-100">
              <form onSubmit={submit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] font-sans">Full Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="w-full bg-[#F0F9FF]/50 border border-gray-100 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all placeholder:text-gray-400 text-gray-900" placeholder="e.g. John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] font-sans">Email Address</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-full bg-[#F0F9FF]/50 border border-gray-100 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all placeholder:text-gray-400 text-gray-900" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] font-sans">Phone Number</label>
                    <input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" className="w-full bg-[#F0F9FF]/50 border border-gray-100 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all placeholder:text-gray-400 text-gray-900" placeholder="+251 ..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] font-sans">Service Needed</label>
                    <div className="relative">
                      <select value={treatment} onChange={(e) => setTreatment(e.target.value)} className="w-full bg-[#F0F9FF]/50 border border-gray-100 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all appearance-none text-gray-900">
                        <option>General Checkup</option>
                        <option>Cosmetic Dentistry</option>
                        <option>Orthodontics</option>
                        <option>Restorative Care</option>
                        <option>Pediatric Care</option>
                      </select>
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <Calendar className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] font-sans">Preferred Date</label>
                    <input value={date} onChange={(e) => setDate(e.target.value)} type="date" className="w-full bg-[#F0F9FF]/50 border border-gray-100 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all placeholder:text-gray-400 text-gray-900" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] font-sans">Preferred Time</label>
                    <input value={time} onChange={(e) => setTime(e.target.value)} type="time" className="w-full bg-[#F0F9FF]/50 border border-gray-100 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all placeholder:text-gray-400 text-gray-900" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] font-sans">Additional Message</label>
                  <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={4} className="w-full bg-[#F0F9FF]/50 border border-gray-100 px-6 py-4 rounded-2xl focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none transition-all placeholder:text-gray-400 text-gray-900 resize-none" placeholder="Tell us more about your visit..."></textarea>
                </div>

                {error && <div className="text-red-600 font-medium">{error}</div>}
                {success && <div className="text-green-700 font-medium">{success}</div>}

                <button disabled={loading} className="w-full bg-primary hover:bg-primary-hover disabled:opacity-60 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/30 transition-all transform hover:-translate-y-1">
                  {loading ? 'Sending…' : 'Send Message'}
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
