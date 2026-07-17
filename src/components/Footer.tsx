import React, { useState } from 'react';
import { PageType } from '../types';
import {
  Shield,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  Clock,
  ArrowRight
} from 'lucide-react';

interface FooterProps {
  navigateTo: (page: PageType) => void;
  openContactModal: () => void;
}

export default function Footer({ navigateTo, openContactModal }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  return (
    <footer id="main-footer" className="bg-[#12303A] text-white pt-16 pb-8 border-t border-[#0D5C63]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Segment: Newsletter and Logo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-gray-800">
          
          <div className="lg:col-span-5 space-y-4">
            <div
              className="flex items-center cursor-pointer group"
              onClick={() => navigateTo('home')}
            >
              <img
                src="/bunnirocks-mark-reversed.svg"
                alt="BunniRocks"
                className="h-18 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-sm text-gray-300 max-w-sm leading-relaxed">
              Trusted advisory services guiding hospital networks, biotechnology firms, and high-complexity reference laboratories through flawless CAP/CLIA certifications and assay validations.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0D5C63] transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0D5C63] transition-all"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700/60 max-w-xl lg:ml-auto w-full">
              <h4 className="text-base font-bold text-white mb-1">Subscribe to LabCompliance Intelligence</h4>
              <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                Receive crucial regulatory updates, CAP checklist reviews, FDA LDT advisories, and industry metrics directly from our board-certified experts.
              </p>
              
              {subscribed ? (
                <div className="flex items-center space-x-2 p-3 bg-[#EAF6F5]/10 rounded-xl border border-[#0D5C63]/30 text-[#EAF6F5] text-xs">
                  <CheckCircle className="w-4 h-4 text-[#0D5C63]" />
                  <span>Success! You have subscribed to our bi-weekly regulatory briefs.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter professional email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-gray-950 border border-gray-700 rounded-xl px-4 py-2 text-xs focus:ring-2 focus:ring-[#0D5C63] outline-none"
                  />
                  <button
                    type="submit"
                    className="bg-[#0D5C63] hover:bg-[#0D5C63]/80 px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all flex items-center space-x-1"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Middle Segment: Columns of Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12 border-b border-gray-800">
          
          {/* Consulting Submenu */}
          <div>
            <span className="block text-xs font-mono font-bold text-[#0D5C63] uppercase tracking-wider mb-4">
              Consulting
            </span>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <button onClick={() => navigateTo('consulting-builds')} className="hover:text-white transition-colors">
                  New Lab Builds
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('consulting-validation')} className="hover:text-white transition-colors">
                  New Test Validation
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('consulting-management')} className="hover:text-white transition-colors">
                  Lab Management
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('consulting-integrations')} className="hover:text-white transition-colors">
                  Health Integrations
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('consulting-planning')} className="hover:text-white transition-colors">
                  Layout Planning
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('consulting-performance')} className="hover:text-white transition-colors">
                  Performance Improvement
                </button>
              </li>
            </ul>
          </div>

          {/* About Submenu */}
          <div>
            <span className="block text-xs font-mono font-bold text-[#0D5C63] uppercase tracking-wider mb-4">
              About Us
            </span>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-white transition-colors">
                  Our Story
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('leadership')} className="hover:text-white transition-colors">
                  Leadership
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('careers')} className="hover:text-white transition-colors">
                  Careers (Hiring)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('testimonials')} className="hover:text-white transition-colors">
                  Testimonials
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('case-studies')} className="hover:text-white transition-colors">
                  Case Studies
                </button>
              </li>
            </ul>
          </div>

          {/* Platform & Products */}
          <div>
            <span className="block text-xs font-mono font-bold text-[#0D5C63] uppercase tracking-wider mb-4">
              Platform Features
            </span>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <button onClick={() => navigateTo('features')} className="hover:text-white transition-colors">
                  Compliance Tracking
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('resources')} className="hover:text-white transition-colors">
                  Roadmap Tools
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('research')} className="hover:text-white transition-colors">
                  Research Studies
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('pricing')} className="hover:text-white transition-colors">
                  SaaS Pricing
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('faq')} className="hover:text-white transition-colors">
                  FAQ Database
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <span className="block text-xs font-mono font-bold text-[#0D5C63] uppercase tracking-wider mb-4">
              Contact Us
            </span>
            <ul className="space-y-3 text-xs text-gray-400">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 text-[#0D5C63] mr-2 shrink-0 mt-0.5" />
                <span>100 Federal Street, 24th Floor, Boston, MA 02110</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 text-[#0D5C63] mr-2 shrink-0" />
                <a href="mailto:compliance@bunnirocks.com" className="hover:text-white">
                  compliance@bunnirocks.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 text-[#0D5C63] mr-2 shrink-0" />
                <a href="tel:+18005555227" className="hover:text-white">
                  +1 (800) 555-LABS
                </a>
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 text-[#0D5C63] mr-2 shrink-0" />
                <span>Advisors Available 24/7/365</span>
              </li>
            </ul>
          </div>

          {/* Legal Pages */}
          <div>
            <span className="block text-xs font-mono font-bold text-[#0D5C63] uppercase tracking-wider mb-4">
              Legal
            </span>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <button onClick={() => navigateTo('privacy')} className="hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('terms')} className="hover:text-white transition-colors">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('cookie-policy')} className="hover:text-white transition-colors">
                  Cookie Policy
                </button>
              </li>
              <li>
                <button onClick={openContactModal} className="text-[#E63946] hover:underline font-bold transition-all">
                  Request NDA Proposal
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Area: Copyright & Disclaimers */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 space-y-4 md:space-y-0 text-[11px] text-gray-500">
          <div>
            <span>&copy; {new Date().getFullYear()} BunniRocks LLC. All rights reserved.</span>
          </div>
          <div className="flex space-x-4 max-w-lg text-center md:text-right leading-normal">
            <span>
              Disclaimer: BunniRocks is a private compliance advisory firm. CLIA, CAP, and CMS names are properties of their respective trademark holders. Sourcing board-qualified Laboratory Directors is subject to state-specific availability.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
