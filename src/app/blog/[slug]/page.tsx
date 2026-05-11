'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, User, ArrowLeft, Share2, Clock, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch('/api/blog');
        if (!res.ok) throw new Error('Failed to fetch posts');
        const data = await res.json();
        const posts = data.blogs || [];

        const normalize = (s: any) => String(s || '').trim().toLowerCase().replace(/\s+/g, '-');
        const target = normalize(slug);

        const found = posts.find((p: any) => {
          const s = normalize(p.slug || p.title || '');
          return s === target;
        });

        if (mounted) {
          if (found) setPost(found);
          else setError('Post not found.');
        }
      } catch (e: any) {
        console.error('Error loading blog post:', e);
        if (mounted) setError(e?.message ?? 'Error');
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [slug]);

  if (loading) return <div className="pt-40 text-center">Loading…</div>;
  if (error || !post) return <div className="pt-40 text-center">{error ?? 'Post not found.'}</div>;

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-40 pb-12 px-4 max-w-4xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-12 hover:gap-3 transition-all">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        <div className="flex items-center gap-6 text-gray-400 text-sm font-sans mb-8">
          <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.createdAt ?? post.date}</span>
          <span className="flex items-center gap-2"><User className="w-4 h-4" /> {post.author ?? 'Clinic'}</span>
          <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> 5 min read</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 font-cormorant mb-12 leading-tight">
          {post.title}
        </h1>
        <div className="relative aspect-[16/9] rounded-[3.5rem] overflow-hidden shadow-2xl mb-16">
          <Image src={post.image || '/happy_patient.png'} alt={post.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 pb-32">
        <div className="font-sans leading-relaxed text-gray-600 prose-lg" dangerouslySetInnerHTML={{ __html: post.content || post.excerpt || '' }} />
        
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
