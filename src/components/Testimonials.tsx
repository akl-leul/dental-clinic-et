import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-black to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-3">Patient Stories</h2>
          <h3 className="text-4xl lg:text-6xl font-extrabold mb-4 font-cormorant">Don't Just Take Our Word For It</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 relative group hover:bg-white/10 transition-colors">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              
              <p className="text-gray-300 text-lg italic mb-8 leading-relaxed">
                "I was terrified of the dentist for years. The team here made me feel completely at ease. The transparent pricing and modern facility immediately built my trust. My new smile changed my life."
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden relative border-2 border-primary">
                  <Image src="/happy_patient.png" alt="Patient" fill className="object-cover" sizes="56px" />
                </div>
                <div>
                  <h5 className="font-bold text-white text-lg">Bethelhem T.</h5>
                  <p className="text-gray-400 text-sm">Addis Ababa</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
