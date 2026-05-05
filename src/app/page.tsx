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
    <main className="min-h-screen bg-white selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <Accreditations />
      <StatsBar />
      <Services />
      <Doctors />
      <Gallery />
      <Pricing />
      <Testimonials />
      <TreatmentQuiz />
      <ContactInfo />
      <FAQ />
      <Footer />
    </main>
  );
}
