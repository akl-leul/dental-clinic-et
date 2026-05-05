'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you accept international insurance?",
      answer: "Yes, we work with several major international insurance providers. Please contact our reception with your policy details before your appointment so we can verify coverage."
    },
    {
      question: "How much does a dental implant cost?",
      answer: "While prices vary depending on individual needs, our premium dental implants typically start from 15,000 ETB. We offer transparent pricing and will provide a detailed quote during your initial consultation."
    },
    {
      question: "Is the teeth whitening procedure painful?",
      answer: "Not at all. We use advanced, professional-grade whitening systems that minimize sensitivity. Most patients experience zero discomfort during or after the procedure."
    },
    {
      question: "How quickly can I get an emergency appointment?",
      answer: "We reserve slots daily specifically for dental emergencies. If you are in severe pain, please call us immediately and we will ensure you are seen by a dentist within hours."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="faq" className="py-24 bg-gray-50 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Questions & Answers</h2>
          <h3 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-4 font-cormorant">Frequently Asked Questions</h3>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`bg-[#F0F9FF] border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-primary shadow-md' : 'border-gray-200 hover:border-gray-300'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-gray-900 text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === index ? 'transform rotate-180 text-primary' : ''}`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
