import Link from 'next/link';
import { ArrowRight, Smile, Sparkles, Zap, Baby, Shield, Hammer } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function TreatmentsPage() {
  const treatments = [
    {
      name: 'General Dentistry',
      slug: 'general',
      description: 'Comprehensive oral care including cleanings, fillings, and routine checkups to maintain your dental health.',
      icon: Smile,
      color: 'bg-blue-100',
      textColor: 'text-blue-600',
    },
    {
      name: 'Cosmetic Dentistry',
      slug: 'cosmetic',
      description: 'Enhance your smile with teeth whitening, veneers, bonding, and other aesthetic treatments.',
      icon: Sparkles,
      color: 'bg-purple-100',
      textColor: 'text-purple-600',
    },
    {
      name: 'Restorative Dentistry',
      slug: 'restorative',
      description: 'Restore damaged teeth with crowns, bridges, implants, and advanced restoration techniques.',
      icon: Hammer,
      color: 'bg-amber-100',
      textColor: 'text-amber-600',
    },
    {
      name: 'Orthodontics',
      slug: 'orthodontics',
      description: 'Straighten your teeth with braces, aligners, and other orthodontic solutions for a perfect bite.',
      icon: Zap,
      color: 'bg-green-100',
      textColor: 'text-green-600',
    },
    {
      name: 'Pediatric Dentistry',
      slug: 'pediatric',
      description: 'Specialized dental care for children, ensuring healthy teeth development and cavity prevention.',
      icon: Baby,
      color: 'bg-pink-100',
      textColor: 'text-pink-600',
    },
    {
      name: 'Preventive Dentistry',
      slug: 'preventive',
      description: 'Proactive approach to dental health with regular cleanings, sealants, and fluoride treatments.',
      icon: Shield,
      color: 'bg-teal-100',
      textColor: 'text-teal-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F0F9FF] to-white pt-32 pb-16">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold font-cormorant text-gray-900 mb-4">
            Our <span className="text-primary">Treatments</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of dental services to meet all your oral health needs and give you the smile you deserve.
          </p>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {treatments.map((treatment) => {
            const IconComponent = treatment.icon;
            return (
              <Link
                key={treatment.slug}
                href={`/treatments/${treatment.slug}`}
                className="group h-full"
              >
                <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100">
                  {/* Icon Section */}
                  <div className={`${treatment.color} p-8 flex items-center justify-center`}>
                    <IconComponent className={`${treatment.textColor} w-16 h-16`} />
                  </div>

                  {/* Content Section */}
                  <div className="p-8 flex flex-col justify-between h-full">
                    <div>
                      <h3 className="text-2xl font-bold font-cormorant text-gray-900 mb-3">
                        {treatment.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {treatment.description}
                      </p>
                    </div>

                    {/* Link */}
                    <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary to-[#0f9197] rounded-3xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold font-cormorant mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our experienced dental team today and discover the perfect treatment plan for you.
          </p>
          <Link
            href="/book"
            className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl font-sans"
          >
            Book Your Appointment
          </Link>
        </div>

        {/* Info Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smile className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Care</h3>
            <p className="text-gray-600">
              Our experienced dentists use the latest techniques and technology.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Assured</h3>
            <p className="text-gray-600">
              We follow international standards for all our treatments.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Beautiful Results</h3>
            <p className="text-gray-600">
              We create natural-looking smiles that enhance your confidence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
