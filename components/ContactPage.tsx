import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Twitter, Linkedin, Github, Youtube, Send, Globe, User, Instagram, MessageCircle, X as XIcon } from 'lucide-react';
import ContactForm from './ContactForm';

const ContactPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const prev = document.body.style.backgroundColor;
    document.body.style.backgroundColor = '#ffffff';
    return () => { document.body.style.backgroundColor = prev; };
  }, []);

  return (
    <div className="min-h-screen text-gray-900" style={{ backgroundColor: '#ffffff' }}>
      {/* Light Mode Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 backdrop-blur-xl bg-white/90" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-center">
          <motion.div 
            className="flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100 hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.1 }}
            >
              <img src="/gcore----mark.png" alt="EuropShip logo" className="w-full h-full object-contain" />
            </motion.div>
            <span className="font-bold text-base tracking-tight">EuropShip</span>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              {/* Hero Text */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-gray-900">
                  Start your journey with <span className="relative">
                    <span className="absolute -inset-2 bg-orange-600/30 blur-2xl" />
                    <span className="relative text-orange-600">us</span>
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium max-w-lg">
                  Join Europe's fastest-growing fulfillment network and scale your e-commerce business effortlessly.
                </p>
              </motion.div>

              {/* Testimonial */}
              <motion.div 
                className="space-y-4 p-6 md:p-8 rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-shadow"
                style={{ backgroundColor: '#ffffff' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <blockquote className="text-base text-gray-700 leading-relaxed italic font-medium">
                  "Helping the seller is essential—you can't maintain reliable service without prioritizing their needs. It's a true WIN-WIN, but many fail to see this value."
                </blockquote>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
                  <motion.img
                    src="/founder.jpeg"
                    alt="Aassim El Kihel"
                    className="w-16 h-16 rounded-full object-cover border-3 border-orange-600 shadow-lg"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div>
                    <p className="font-bold text-gray-900 text-base">Aassim El Kihel</p>
                    <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">CEO & Founder</p>
                  </div>
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {[
                  { label: 'Active Users', value: '170+' },
                  { label: 'Satisfaction', value: '95%' },
                  { label: '24/7 Support', value: 'Always' }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ translateY: -8, boxShadow: "0 20px 40px rgba(234, 88, 12, 0.15)" }}
                    className="text-center p-4 rounded-xl bg-white border border-gray-200 hover:border-orange-600/40 transition-all group"
                    style={{ backgroundColor: '#ffffff' }}
                  >
                    <p className="text-2xl md:text-3xl font-black text-orange-600 group-hover:scale-110 transition-transform">{stat.value}</p>
                    <p className="text-xs text-gray-600 font-semibold uppercase tracking-wider mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:sticky lg:top-20"
            >
              <div className="p-8 rounded-2xl bg-white border border-gray-200 shadow-xl hover:shadow-2xl transition-shadow" style={{ backgroundColor: '#ffffff' }}>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer premium, light mode, identique Hero, contenu exact demandé */}
      <footer className="bg-white border-t border-gray-200 pt-12 pb-8 text-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-10">
            {/* Logo & description */}
            <div className="col-span-2 flex flex-col gap-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center bg-gray-100">
                  <img src="/gcore----mark.png" alt="EuropShip logo" className="w-full h-full object-contain" />
                </div>
                <span className="font-black text-base tracking-tight">EUROPSHIP</span>
              </div>
              <p className="text-gray-600 text-xs leading-relaxed">
                Ready to elevate your online presence? Contact us today to discuss your project and discover how we can bring your vision to life.
              </p>
              <div className="flex gap-3">
                <a href="https://x.com/europship9355" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-orange-600 text-gray-600 hover:text-white flex items-center justify-center transition-all">
                  <XIcon size={14} />
                </a>
                <a href="https://wa.me/447465920962" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-orange-600 text-gray-600 hover:text-white flex items-center justify-center transition-all">
                  <MessageCircle size={14} />
                </a>
                <a href="https://www.instagram.com/europship?igsh=MXBsM3VzZWJsb2podA==" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-orange-600 text-gray-600 hover:text-white flex items-center justify-center transition-all">
                  <Instagram size={14} />
                </a>
                <a href="https://www.youtube.com/@EuropShip" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-orange-600 text-gray-600 hover:text-white flex items-center justify-center transition-all">
                  <Youtube size={14} />
                </a>
              </div>
            </div>
            {/* Products */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider mb-4 text-gray-900">Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-orange-600 text-xs transition-colors">CDN</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-600 text-xs transition-colors">Hosting</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-600 text-xs transition-colors">AI Inference</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-600 text-xs transition-colors">Cloud</a></li>
              </ul>
            </div>
            {/* Company */}
            <div>
              <h4 className="font-bold text-xs uppercase tracking-wider mb-4 text-gray-900">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-orange-600 text-xs transition-colors">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-600 text-xs transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-600 text-xs transition-colors">Legal</a></li>
                <li><a href="#" className="text-gray-600 hover:text-orange-600 text-xs transition-colors">Contact</a></li>
              </ul>
            </div>
            {/* Adresse & contact */}
            <div className="col-span-1 md:col-span-2 lg:col-span-2 flex flex-col gap-2">
              <h4 className="font-bold text-xs uppercase tracking-wider mb-4 text-gray-900">Contact</h4>
              <address className="not-italic text-xs text-gray-600 leading-relaxed mb-2">
                Via del Gregge, Registered Agents Inc<br />
                30 N Gould St Ste R Sheridan, WY 82801<br />
                <span>Phone: <a href="tel:+447465920962" className="text-orange-600 hover:text-orange-700">+(44) 7465-920962</a></span><br />
                <span>Email: <a href="mailto:contact@euroship.com" className="text-orange-600 hover:text-orange-700">contact@euroship.com</a></span>
              </address>
              <a href="#" className="text-xs text-gray-600 hover:text-orange-600 transition-colors">Support Center</a>
            </div>
            {/* Newsletter */}
            <div className="col-span-1 flex flex-col gap-2">
              <h4 className="font-bold text-xs uppercase tracking-wider mb-4 text-gray-900">Join Us</h4>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-white border border-gray-200 rounded-full py-2 px-3 text-xs placeholder:text-gray-400 focus:outline-none focus:border-orange-500"
                  aria-label="Your email"
                />
                <button className="absolute right-1 top-1 w-7 h-7 bg-orange-600 hover:bg-orange-700 rounded-full flex items-center justify-center text-white transition-colors" aria-label="Send">
                  <Send size={12} />
                </button>
              </div>
            </div>
          </div>
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-gray-200 text-xs text-gray-600 gap-4">
            <p>© 2026 EUROPSHIP S.A. All Rights Reserved.</p>
            <div className="flex gap-6">
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/privacy'); }} className="hover:text-orange-600 transition-colors">Privacy Policy</a>
              <a href="#" onClick={(e) => { e.preventDefault(); navigate('/terms'); }} className="hover:text-orange-600 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;