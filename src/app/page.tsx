import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Accreditations from '@/components/Accreditations';
import StatsBar from '@/components/StatsBar';
import Services from '@/components/Services';
import Doctors from '@/components/Doctors';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import TreatmentQuiz from '@/components/TreatmentQuiz';
import ContactInfo from '@/components/ContactInfo';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F0F9FF] selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <Accreditations />
      <StatsBar />
      <Services />
      <Doctors />
      <Gallery />

      {/* High-Impact CTA Banner */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#F0F9FF] rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F0F9FF] rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="bg-[#F0F9FF]/10 backdrop-blur-xl border border-white/20 rounded-[3rem] p-12 lg:p-20 text-center">
            <h2 className="text-4xl lg:text-7xl font-extrabold text-white font-cormorant mb-6">Experience the future of dentistry.</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto italic font-sans leading-relaxed">
              Join over 5,000 happy patients who have transformed their smiles with our state-of-the-art care.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/book" className="bg-[#F0F9FF] text-primary px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl">
                Book Appointment
              </a>
              <a href="tel:+251911234567" className="bg-transparent border border-white/30 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#F0F9FF]/10 transition-all flex items-center justify-center gap-3">
                Call Our Clinic
              </a>
            </div>
          </div>
        </div>
      </section>

      <Pricing />
      <Testimonials />
      <TreatmentQuiz />
      <ContactInfo />
      <FAQ />
      <Footer />
    </main>
  );
}
