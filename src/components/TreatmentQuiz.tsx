'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, RefreshCcw, CheckCircle2 } from 'lucide-react';

export default function TreatmentQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    {
      question: "What is your primary goal today?",
      options: [
        "A whiter, brighter smile",
        "Straightening my teeth",
        "Replacing a missing tooth",
        "Routine checkup & cleaning"
      ]
    },
    {
      question: "Do you experience any sensitivity?",
      options: [
        "None at all",
        "Occasionally with cold drinks",
        "Frequently during the day",
        "I have persistent pain"
      ]
    },
    {
      question: "When was your last Dental visit?",
      options: [
        "Less than 6 months ago",
        "6-12 months ago",
        "Over a year ago",
        "I can't remember"
      ]
    }
  ];

  const handleAnswer = (option: string) => {
    setAnswers([...answers, option]);
    setStep(step + 1);
  };

  const getRecommendation = () => {
    const primaryGoal = answers[0];
    if (primaryGoal?.includes("whiter")) return { title: "Hollywood Smile Package", desc: "Our premium laser whitening and veneer consultation is perfect for you." };
    if (primaryGoal?.includes("Straightening")) return { title: "Clear Aligner Therapy", desc: "Discreet and effective straightening using our modern Invisalign technology." };
    if (primaryGoal?.includes("missing")) return { title: "Dental Implant Restoration", desc: "A permanent, life-like solution to restore your complete smile." };
    return { title: "Elite Preventative Care", desc: "Our comprehensive checkup and cleaning will ensure your oral health is peak." };
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
  };

  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3 font-sans">Find Your Perfect Care</h2>
            <h3 className="text-4xl lg:text-6xl font-extrabold mb-6 font-cormorant">Not sure what you need?</h3>
            <p className="text-xl text-gray-400 mb-8 font-sans leading-relaxed">
              Answer 3 quick questions and our system will recommend the most suitable treatment plan for your specific goals.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-400 font-medium">Over 2,000+ personal recommendations delivered.</p>
            </div>
          </div>

          <div className="bg-[#F0F9FF]/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 lg:p-12 relative min-h-[400px] flex flex-col">
            <AnimatePresence mode="wait">
              {step < questions.length ? (
                <motion.div
                  key="question"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex-grow"
                >
                  <span className="text-primary font-bold text-sm uppercase tracking-widest font-sans mb-4 block">Question {step + 1} of {questions.length}</span>
                  <h4 className="text-2xl lg:text-3xl font-bold mb-8 font-cormorant">{questions[step].question}</h4>
                  <div className="space-y-3">
                    {questions[step].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleAnswer(option)}
                        className="w-full text-left p-4 rounded-xl border border-white/10 bg-[#F0F9FF]/5 hover:bg-[#F0F9FF]/10 hover:border-primary/50 transition-all font-sans text-sm lg:text-base flex justify-between items-center group"
                      >
                        {option}
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-10 h-10 text-primary" />
                  </div>
                  <h4 className="text-sm text-primary font-bold uppercase tracking-widest font-sans mb-2">Our Recommendation</h4>
                  <h5 className="text-3xl lg:text-4xl font-bold mb-4 font-cormorant">{getRecommendation().title}</h5>
                  <p className="text-gray-400 font-sans mb-10 text-sm lg:text-base">
                    {getRecommendation().desc}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#book" className="bg-primary hover:bg-red-800 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 font-sans">
                      Book This Treatment
                    </a>
                    <button onClick={reset} className="flex items-center justify-center gap-2 text-gray-400 hover:text-white transition-colors font-sans font-bold">
                      <RefreshCcw className="w-4 h-4" />
                      Take Quiz Again
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
