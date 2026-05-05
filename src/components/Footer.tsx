import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer id="contact" className="bg-[#0A192F] pt-24 pb-12 border-t border-white/5 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-6 font-cormorant">Ready for your new smile?</h2>
              <p className="text-lg text-gray-400 mb-8 font-sans">
                Book your consultation today and discover why we are the top-rated dental clinic in Addis Ababa.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-full text-primary mt-1">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-lg font-cormorant">Visit Us</h5>
                    <p className="text-gray-400 font-sans">Bole Road, Next to Friendship Mall<br />Addis Ababa, Ethiopia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-full text-primary mt-1">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-lg font-cormorant">Working Hours</h5>
                    <p className="text-gray-400 font-sans">Mon - Sat: 8:00 AM - 6:00 PM<br />Sunday: Emergency Only</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="book" className="bg-white/5 backdrop-blur-sm rounded-[2.5rem] p-10 shadow-2xl border border-white/10">
              <h3 className="text-3xl font-bold text-white mb-8 font-cormorant">Contact Us</h3>
              <form className="space-y-6" suppressHydrationWarning>
                <input type="text" placeholder="Full Name" suppressHydrationWarning className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors placeholder:text-gray-500 font-sans" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="email" placeholder="Email Address" suppressHydrationWarning className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors placeholder:text-gray-500 font-sans" />
                  <input type="tel" placeholder="Phone Number" suppressHydrationWarning className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors placeholder:text-gray-500 font-sans" />
                </div>
                <textarea placeholder="How can we help you?" rows={4} suppressHydrationWarning className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors placeholder:text-gray-500 resize-none font-sans" />
                <button type="button" className="w-full bg-primary hover:bg-primary-hover text-white font-bold text-lg py-5 rounded-xl shadow-xl hover:shadow-primary/40 transition-all transform hover:-translate-y-1">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-16 border-t border-white/10">
            <div className="col-span-2 lg:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-6 font-cormorant">Dentiva Clinic</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-sans">
                Providing world-class dental care in Addis Ababa with state-of-the-art technology and a patient-first approach.
              </p>
              <div className="flex gap-4">
                {[
                  { name: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
                  { name: 'Instagram', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z' },
                  { name: 'Twitter', path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' }
                ].map((social) => (
                  <a key={social.name} href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all border border-white/10">
                    <span className="sr-only">{social.name}</span>
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d={social.path}></path></svg>
                  </a>
                ))}
              </div>
            </div>

            {[
              {
                title: 'Quick Links',
                links: [
                  { name: 'Services', href: '/#services' },
                  { name: 'Our Location', href: '/contact' },
                  { name: 'Meet the Team', href: '/about' },
                  { name: 'FAQs', href: '/faq' },
                  { name: 'Gallery', href: '/gallery' },
                  { name: 'Contact Us', href: '/book', bold: true }
                ]
              },
              {
                title: 'Treatments',
                links: [
                  { name: 'Dental Implants', href: '/treatments/restorative' },
                  { name: 'Cosmetic Whitening', href: '/treatments/cosmetic' },
                  { name: 'Veneers & Bonding', href: '/treatments/cosmetic' },
                  { name: 'Orthodontics', href: '/treatments/orthodontics' },
                  { name: 'Emergency Care', href: '/contact', bold: true }
                ]
              },
              {
                title: 'Support',
                links: [
                  { name: 'Privacy Policy', href: '/privacy' },
                  { name: 'Terms of Service', href: '/terms' },
                  { name: 'Cookie Settings', href: '#' },
                  { name: 'Accessibility', href: '#' },
                  { name: 'Contact Us', href: '/contact' }
                ]
              }
            ].map((section) => (
              <div key={section.title}>
                <h4 className="font-bold text-white mb-6 uppercase text-xs tracking-widest font-sans">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className={`text-gray-400 hover:text-primary transition-colors text-sm font-sans ${link.bold ? 'font-bold text-primary/80' : ''}`}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 mt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs font-medium font-sans italic">
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
