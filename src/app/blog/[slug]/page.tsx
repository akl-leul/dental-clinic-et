'use client';

import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, User, ArrowLeft, Share2, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const blogPosts = {
  'whiter-smile-tips': {
    title: "5 Tips for a Whiter Smile at Home",
    date: "Oct 24, 2024",
    author: "Dr. Samuel Abebe",
    image: "/happy_patient.png",
    content: (
      <>
        <p className="text-xl text-gray-900 font-bold mb-8 font-cormorant">
          A bright, white smile is often the first thing people notice. While professional treatments are the most effective, maintaining that brilliance starts at home.
        </p>
        <h2 className="text-3xl font-bold text-gray-900 font-cormorant mt-12 mb-6">1. Watch Your Diet</h2>
        <p className="mb-8 text-gray-600">Coffee, red wine, and dark berries are notorious for staining teeth. If you do consume these, try rinsing your mouth with water immediately after. Using a straw can also help bypass your front teeth entirely.</p>
        <h2 className="text-3xl font-bold text-gray-900 font-cormorant mt-12 mb-6">2. Optimize Your Brushing Technique</h2>
        <p className="mb-8 text-gray-600">Brushing too hard can wear down your enamel. Use a soft-bristled brush and gentle, circular motions. Brushing for a full two minutes is key to removing surface stains.</p>
        <div className="bg-[#F0F9FF] p-10 rounded-[2.5rem] border border-primary/10 my-16">
          <h4 className="text-primary font-bold mb-4 font-sans uppercase tracking-widest text-xs">Expert Tip</h4>
          <p className="text-gray-900 font-medium italic">"Never brush immediately after eating acidic foods like citrus. Wait at least 30 minutes to allow your enamel to re-harden."</p>
        </div>
      </>
    )
  },
  'Dental-implants-standard': {
    title: "Why Dental Implants are the Gold Standard",
    date: "Oct 18, 2024",
    author: "Dr. Elias Bekele",
    image: "/service_implant.png",
    content: (
      <>
        <p className="text-xl text-gray-900 font-bold mb-8 font-cormorant">
          Missing teeth can lead to bone loss and a shifted bite. Dental implants offer a permanent solution that looks, feels, and functions like a natural tooth.
        </p>
        <h2 className="text-3xl font-bold text-gray-900 font-cormorant mt-12 mb-6">Bone Preservation</h2>
        <p className="mb-8 text-gray-600">Unlike bridges or dentures, implants stimulate the jawbone, preventing the sunken appearance that often comes with tooth loss. This preservation of facial structure is a key benefit unique to implants.</p>
        <h2 className="text-3xl font-bold text-gray-900 font-cormorant mt-12 mb-6">Durability & Success</h2>
        <p className="mb-8 text-gray-600">With proper care, Dental implants have a 98% success rate and can last a lifetime. They don't require the reduction of adjacent teeth, preserving more of your natural smile.</p>
        <div className="bg-gray-900 p-10 rounded-[2.5rem] text-white my-16">
          <h4 className="text-primary font-bold mb-4 font-sans uppercase tracking-widest text-xs">The Procedure</h4>
          <ul className="space-y-4">
             <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-primary" /> Comprehensive 3D scan</li>
             <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-primary" /> Precision titanium placement</li>
             <li className="flex items-center gap-3"><CheckCircle className="w-4 h-4 text-primary" /> Custom crown restoration</li>
          </ul>
        </div>
      </>
    )
  },
  'oral-health-heart': {
    title: "The Link Between Oral Health and Heart Disease",
    date: "Oct 12, 2024",
    author: "Dr. Martha Tadesse",
    image: "/clinic_room.png",
    content: (
      <>
        <p className="text-xl text-gray-900 font-bold mb-8 font-cormorant">
          The mouth is the gateway to the body. Chronic inflammation in the gums has been scientifically linked to an increased risk of cardiovascular issues.
        </p>
        <h2 className="text-3xl font-bold text-gray-900 font-cormorant mt-12 mb-6">Bacteria & Bloodstream</h2>
        <p className="mb-8 text-gray-600">When gums are diseased, bacteria can enter the bloodstream and cause arterial inflammation. This process can contribute to the formation of plaques that lead to heart attacks or strokes.</p>
        <h2 className="text-3xl font-bold text-gray-900 font-cormorant mt-12 mb-6">Prevention is Key</h2>
        <p className="mb-8 text-gray-600">Managing gum disease through professional cleanings and diligent home care is a vital component of a heart-healthy lifestyle. Don't ignore bleeding gums—they are an early warning sign.</p>
      </>
    )
  }
};

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) return <div className="pt-40 text-center">Post not found.</div>;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-40 pb-12 px-4 max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-12 hover:gap-3 transition-all">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        <div className="flex items-center gap-6 text-gray-400 text-sm font-sans mb-8">
          <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
          <span className="flex items-center gap-2"><User className="w-4 h-4" /> {post.author}</span>
          <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 5 min read</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 font-cormorant mb-12 leading-tight">
          {post.title}
        </h1>
        <div className="relative aspect-[16/9] rounded-[3.5rem] overflow-hidden shadow-2xl mb-16">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-32">
        <div className="font-sans leading-relaxed text-gray-600 prose-lg">
          {post.content}
        </div>
        
        <div className="pt-12 mt-16 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex gap-4">
            <button 
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.title,
                    url: window.location.href
                  }).catch(() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link copied to clipboard!');
                  });
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }
              }}
              className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all group"
              title="Share Article"
            >
              <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
          <a href="/book" className="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-all text-lg">
            Schedule a Consultation
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
