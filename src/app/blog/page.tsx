'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogIndex() {
  const posts = [
    {
      title: "5 Tips for a Whiter Smile at Home",
      excerpt: "Discover simple habits and natural remedies to keep your teeth sparkling white between professional treatments.",
      date: "Oct 24, 2024",
      author: "Dr. Samuel Abebe",
      img: "/happy_patient.png",
      slug: "whiter-smile-tips"
    },
    {
      title: "Why Dental Implants are the Gold Standard",
      excerpt: "Replacing missing teeth is crucial for your jaw health. Learn why implants are the most permanent solution.",
      date: "Oct 18, 2024",
      author: "Dr. Elias Bekele",
      img: "/service_implant.png",
      slug: "Dental-implants-standard"
    },
    {
      title: "The Link Between Oral Health and Heart Disease",
      excerpt: "Scientific research shows that gum disease can impact your cardiovascular health. Here is how to stay protected.",
      date: "Oct 12, 2024",
      author: "Dr. Martha Tadesse",
      img: "/clinic_room.png",
      slug: "oral-health-heart"
    }
  ];

  return (
    <main className="min-h-screen bg-[#F0F9FF]">
      <Navbar />
      
      <div className="pt-40 pb-24 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl lg:text-8xl font-extrabold text-gray-900 font-cormorant mb-6">Dental Insights</h1>
          <p className="text-xl text-gray-600 font-sans italic">
            Expert advice, treatment guides, and the latest news from the world of modern dentistry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all group flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <Image src={post.img} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-6 left-6 bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full font-sans">
                  Dental Care
                </div>
              </div>
              <div className="p-10 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-gray-400 text-xs font-sans mb-6">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {post.author}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 font-cormorant mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm font-sans leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                  Read Full Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <section className="mt-32 bg-gray-900 rounded-[3rem] p-12 lg:p-20 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 opacity-30" />
          <h3 className="text-3xl lg:text-5xl font-extrabold font-cormorant mb-6 relative z-10">Subscribe for Updates</h3>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto italic font-sans relative z-10">
            Get monthly Dental health tips and exclusive offers delivered straight to your inbox.
          </p>
          <form className="max-w-md mx-auto flex gap-4 relative z-10">
            <input type="email" placeholder="Your email address" className="bg-white/10 border border-white/20 px-6 py-4 rounded-full flex-grow focus:outline-none focus:ring-2 focus:ring-primary/50 font-sans" />
            <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary-hover transition-all">
              Join
            </button>
          </form>
        </section>
      </div>

      <Footer />
    </main>
  );
}
