import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer id="contact" className="bg-white pt-24 pb-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 font-cormorant">Ready for your new smile?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Book your consultation today and discover why we are the top-rated dental clinic in Addis Ababa.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-50 p-3 rounded-full text-primary mt-1">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-lg">Visit Us</h5>
                    <p className="text-gray-600">Bole Road, Next to Friendship Mall<br/>Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-red-50 p-3 rounded-full text-primary mt-1">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 text-lg">Working Hours</h5>
                    <p className="text-gray-600">Mon - Sat: 8:00 AM - 6:00 PM<br/>Sunday: Emergency Only</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="book" className="bg-gray-50 rounded-3xl p-8 shadow-inner border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request an Appointment</h3>
              <form className="space-y-4" suppressHydrationWarning>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" suppressHydrationWarning className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                  <input type="text" placeholder="Last Name" suppressHydrationWarning className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                </div>
                <input type="tel" placeholder="Phone Number" suppressHydrationWarning className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors" />
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white" suppressHydrationWarning>
                  <option>Select Service</option>
                  <option>General Checkup</option>
                  <option>Dental Implants</option>
                  <option>Cosmetic Dentistry</option>
                  <option>Emergency</option>
                </select>
                <button type="button" className="w-full bg-primary hover:bg-red-800 text-white font-bold text-lg py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5">
                  Request Booking
                </button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-16 border-t border-gray-100">
            <div className="col-span-2 lg:col-span-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 font-cormorant">Dentiva Clinic</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Providing world-class dental care in Addis Ababa with state-of-the-art technology and a patient-first approach.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="#" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest font-sans">Quick Links</h4>
              <ul className="space-y-4">
                <li><Link href="#services" className="text-gray-500 hover:text-primary transition-colors text-sm font-sans">Services</Link></li>
                <li><Link href="#location" className="text-gray-500 hover:text-primary transition-colors text-sm font-sans">Our Location</Link></li>
                <li><Link href="#about" className="text-gray-500 hover:text-primary transition-colors text-sm font-sans">Meet the Team</Link></li>
                <li><Link href="#faq" className="text-gray-500 hover:text-primary transition-colors text-sm font-sans">FAQs</Link></li>
                <li><Link href="#book" className="text-gray-500 hover:text-primary transition-colors text-sm font-sans font-bold">Book Now</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest font-sans">Treatments</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm font-sans">Dental Implants</Link></li>
                <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm font-sans">Cosmetic Whitening</Link></li>
                <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm font-sans">Veneers & Bonding</Link></li>
                <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm font-sans">Orthodontics</Link></li>
                <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm font-sans text-red-500 font-bold">Emergency Care</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest font-sans">Support</h4>
              <ul className="space-y-4">
                <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm font-sans">Privacy Policy</Link></li>
                <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm font-sans">Terms of Service</Link></li>
                <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm font-sans">Cookie Settings</Link></li>
                <li><Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm font-sans">Accessibility</Link></li>
                <li><Link href="#contact" className="text-gray-500 hover:text-primary transition-colors text-sm font-sans">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 mt-16 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs font-medium font-sans italic">
              © {new Date().getFullYear()} Dentiva Dental Clinic. Premium Care in Addis Ababa.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/251911234567" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all transform hover:-translate-y-1 flex items-center gap-2 group"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out font-bold">
          Chat with us
        </span>
      </a>
    </>
  );
}
