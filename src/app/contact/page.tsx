'use client';

import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactInfo from '@/components/ContactInfo';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const successTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (successTimerRef.current !== null) {
        window.clearTimeout(successTimerRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || 'Failed to send message');
      }

      setSuccess(true);
      setName(''); setEmail(''); setSubject(''); setMessage('');
      if (successTimerRef.current !== null) {
        window.clearTimeout(successTimerRef.current);
      }
      successTimerRef.current = window.setTimeout(() => setSuccess(false), 3000);
    } catch (err: unknown) {
      console.error('Contact submit error', err);
      setError(err instanceof Error ? err.message : 'Error sending message');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-40 pb-24 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 font-cormorant">Get in touch</h1>
            <p className="text-gray-600 mb-8">Have questions or want to schedule an appointment? Send us a message and we will get back to you shortly.</p>

            <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-8 rounded-2xl border border-gray-200">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} required className="w-full border border-gray-300 rounded-lg px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full border border-gray-300 rounded-lg px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input value={subject} onChange={(e) => setSubject(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={6} className="w-full border border-gray-300 rounded-lg px-4 py-2" />
              </div>

              <div className="flex items-center gap-4">
                <button type="submit" disabled={loading} className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-hover">
                  {loading ? 'Sending…' : 'Send Message'}
                </button>
                {error && <div className="text-red-600">{error}</div>}
              </div>
            </form>
          </div>

          <div>
            <ContactInfo />
          </div>
        </div>
      </div>

      <Footer />

      {/* Simple success popup */}
      {success && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-black/40 absolute inset-0" />
          <div className="bg-white rounded-xl p-8 shadow-xl z-10 max-w-md mx-4 text-center">
            <h3 className="text-xl font-bold mb-2">Message sent</h3>
            <p className="text-gray-600 mb-4">Thanks — we&apos;ll get back to you soon.</p>
            <button onClick={() => setSuccess(false)} className="bg-primary text-white px-4 py-2 rounded-lg">Close</button>
          </div>
        </div>
      )}
    </main>
  );
}
