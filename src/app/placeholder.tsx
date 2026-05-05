'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const pages = [
  { path: 'src/app/treatments/orthodontics/page.tsx', title: 'Orthodontics' },
  { path: 'src/app/treatments/pediatric/page.tsx', title: 'Pediatric Dentistry' },
  { path: 'src/app/treatments/preventive/page.tsx', title: 'Preventive Dentistry' },
  { path: 'src/app/dentists/page.tsx', title: 'Our Dentists' },
  { path: 'src/app/gallery/page.tsx', title: 'Smile Gallery' },
  { path: 'src/app/faq/page.tsx', title: 'Frequently Asked Questions' },
  { path: 'src/app/blog/page.tsx', title: 'Dental Insights Blog' },
  { path: 'src/app/contact/page.tsx', title: 'Contact Us' },
  { path: 'src/app/privacy/page.tsx', title: 'Privacy Policy' },
  { path: 'src/app/terms/page.tsx', title: 'Terms & Conditions' }
];

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <main className="min-h-screen bg-[#F0F9FF]">
      <Navbar />
      <div className="pt-40 pb-24 px-4 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 font-cormorant mb-6">{title}</h1>
        <p className="text-xl text-gray-600 mb-12">This page is currently being polished with high-end content. Check back soon!</p>
        <a href="/" className="bg-primary text-white px-8 py-4 rounded-full font-bold">Return Home</a>
      </div>
      <Footer />
    </main>
  );
}
