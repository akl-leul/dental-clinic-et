'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, CreditCard, Clock, Sparkles } from 'lucide-react';

const faqCategories = [
  {
    id: 'general',
    title: 'General Information',
    icon: <HelpCircle className="w-5 h-5" />,
    questions: [
      {
        q: "What makes Dentiva Clinic different from other clinics in Addis?",
        a: "We combine international expertise with state-of-the-art technology like 3D digital scanning and laser surgery. Our patient-first philosophy ensures that you are never just a number; we provide personalized treatment plans and a spa-like environment to reduce dental anxiety."
      },
      {
        q: "Where is the clinic located?",
        a: "We are located on Bole Road, right next to Friendship Mall. Our central location makes us easily accessible from all parts of the city, with ample secure parking available for our patients."
      },
      {
        q: "Do I need an appointment, or can I walk in?",
        a: "While we recommend booking in advance to ensure minimal wait times, we do accept walk-ins for emergency cases. For routine checkups, booking through our website or phone is preferred."
      }
    ]
  },
  {
    id: 'treatments',
    title: 'Treatments & Safety',
    icon: <ShieldCheck className="w-5 h-5" />,
    questions: [
      {
        q: "Are dental implants painful?",
        a: "Thanks to modern local anesthesia and our precision placement techniques, most patients report feeling only mild pressure during the procedure. Post-operative discomfort is usually comparable to a simple extraction and can be managed with standard over-the-counter pain relief."
      },
      {
        q: "At what age should my child first visit the dentist?",
        a: "We recommend a child's first visit by their first birthday or when their first tooth appears. Early visits help children become comfortable with the dental environment and allow us to monitor development from the start."
      },
      {
        q: "How long does professional teeth whitening last?",
        a: "Typically, results last between 6 months to 2 years. However, this depends heavily on your lifestyle habits, such as coffee, tea, or tobacco consumption. We provide take-home touch-up kits to help maintain your brightness."
      },
      {
        q: "What is the difference between Invisalign and traditional braces?",
        a: "Invisalign uses clear, removable plastic aligners that are nearly invisible, while traditional braces use metal brackets and wires. Invisalign is great for aesthetics and hygiene, while traditional braces are sometimes better for very complex structural corrections."
      }
    ]
  },
  {
    id: 'billing',
    title: 'Pricing & Insurance',
    icon: <CreditCard className="w-5 h-5" />,
    questions: [
      {
        q: "Do you accept international insurance?",
        a: "Yes, we work with several major international insurance providers and can assist you with the necessary documentation for reimbursement. Please contact our front desk with your policy details before your visit."
      },
      {
        q: "Do you offer payment plans for expensive treatments?",
        a: "We offer flexible financing options for major restorative and cosmetic procedures, including 0% interest monthly installments for qualifying patients. We believe high-quality care should be accessible."
      },
      {
        q: "What are your standard consultation fees?",
        a: "A standard comprehensive consultation starts from 1,500 ETB, which includes a full oral examination and a personalized treatment plan. X-rays or specialized scans are billed separately."
      }
    ]
  },
  {
    id: 'logistics',
    title: 'Logistics & Emergencies',
    icon: <Clock className="w-5 h-5" />,
    questions: [
      {
        q: "What should I do in a dental emergency?",
        a: "Call our emergency line at +251 911 234 567 immediately. Whether it's a knocked-out tooth, severe pain, or a broken crown, we prioritize emergency cases to provide same-day relief."
      },
      {
        q: "How long does a typical checkup take?",
        a: "A routine checkup and professional cleaning usually take between 45 to 60 minutes. We value your time and strive to stay on schedule."
      },
      {
        q: "Can I bring a companion to my appointment?",
        a: "Yes, you are welcome to bring a friend or family member for support. Our waiting lounge is designed for comfort, and we have space for companions in our treatment rooms if necessary."
      }
    ]
  }
];

export default function FAQPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const currentCategory = faqCategories.find(c => c.id === activeTab);

  return (
    <main className="min-h-screen bg-[#F0F9FF]">
      <Navbar />
      
      {/* Header */}
      <div className="pt-40 pb-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-widest">Knowledge Base</span>
          </div>
          <h1 className="text-5xl lg:text-8xl font-extrabold text-gray-900 font-cormorant mb-6">How can we help?</h1>
          <p className="text-xl text-gray-600 font-sans italic">
            Find answers to common questions about our treatments, technology, and patient care.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-32">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-1 space-y-2">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  setOpenIndex(0);
                }}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl transition-all font-sans font-bold text-sm ${
                  activeTab === cat.id 
                  ? 'bg-primary text-white shadow-xl shadow-primary/30' 
                  : 'bg-white text-gray-500 hover:bg-gray-100'
                }`}
              >
                {cat.icon}
                {cat.title}
              </button>
            ))}
          </div>

          {/* Accordion Content */}
          <div className="lg:col-span-3 space-y-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                {currentCategory?.questions.map((item, i) => (
                  <div 
                    key={i}
                    className="bg-white rounded-[2rem] border border-gray-100 overflow-hidden transition-all hover:shadow-lg"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="w-full px-10 py-8 flex items-center justify-between text-left group"
                    >
                      <span className="text-xl font-bold text-gray-900 font-cormorant group-hover:text-primary transition-colors">
                        {item.q}
                      </span>
                      <div className={`w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center transition-all ${
                        openIndex === i ? 'bg-primary text-white rotate-180' : 'bg-gray-50 text-gray-400'
                      }`}>
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {openIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-10 pb-8 text-gray-500 font-sans leading-relaxed text-lg border-t border-gray-50 pt-6">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Still Have Questions? */}
        <section className="mt-32 bg-gray-900 rounded-[3.5rem] p-12 lg:p-24 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 blur-[120px]" />
          <h2 className="text-4xl lg:text-6xl font-extrabold font-cormorant mb-8 relative z-10">Still have questions?</h2>
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto italic font-sans relative z-10">
            If you couldn't find the answer you were looking for, our friendly team is just a call or message away.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
            <a href="/contact" className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl">
              Message Us
            </a>
            <a href="tel:+251911234567" className="bg-white/10 border border-white/20 backdrop-blur-md px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all">
              Call Now
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
