'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      name: 'Essential Care',
      price: '1,500',
      period: 'per visit',
      description: 'Foundational treatments to maintain optimal oral health for you and your family.',
      features: [
        'Comprehensive Exam',
        'Professional Cleaning',
        'Digital X-Rays',
        'Fluoride Treatment',
        'Personalized Care Plan'
      ],
      cta: 'Book Now',
      popular: false
    },
    {
      name: 'Smile Makeover',
      price: '15,000',
      period: 'starting from',
      description: 'Transform your aesthetics with our most sought-after cosmetic procedures.',
      features: [
        'Premium Teeth Whitening',
        'Porcelain Veneers (per tooth)',
        'Gum Contouring',
        'Enamel Shaping',
        'Digital Smile Design'
      ],
      cta: 'Start Transformation',
      popular: true
    },
    {
      name: 'Luxury Restoration',
      price: '45,000',
      period: 'full package',
      description: 'State-of-the-art restorative solutions for a complete, natural-looking reboot.',
      features: [
        'Full Arch Implants',
        'Custom Zirconia Crowns',
        'Bone Grafting (if needed)',
        'Sedation Options',
        'Life-time Guarantee'
      ],
      cta: 'Consult Specialist',
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-[#F0F9FF] font-cormorant">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3 font-sans">Transparent Investment</h2>
          <h3 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-4">Investment in Your Smile</h3>
          <p className="text-xl text-gray-600 font-sans italic">
            Quality dental care is an investment that lasts a lifetime. We offer flexible payment plans.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-[2.5rem] border ${plan.popular ? 'border-primary shadow-2xl bg-[#F0F9FF] scale-105 z-10' : 'border-gray-100 shadow-lg bg-gray-50'}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-widest font-sans">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h4>
                <p className="text-gray-500 font-sans text-sm leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-lg font-bold text-gray-900 font-sans">ETB</span>
                  <span className="text-5xl lg:text-6xl font-extrabold text-gray-900">{plan.price}</span>
                </div>
                <span className="text-gray-400 text-sm font-sans italic">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    <div className={`p-1 rounded-full ${plan.popular ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-gray-600 font-sans text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="#book"
                className={`w-full py-4 rounded-2xl flex items-center justify-center gap-2 font-bold text-lg transition-all font-sans ${plan.popular ? 'bg-primary text-white hover:bg-primary-hover shadow-xl shadow-primary/30' : 'bg-[#F0F9FF] text-gray-900 border border-gray-200 hover:bg-gray-50'}`}
              >
                {plan.cta}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
