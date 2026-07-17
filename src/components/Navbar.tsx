import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import {
  Menu,
  X,
  ChevronDown,
  Shield,
  FlaskConical,
  Activity,
  Layers,
  Globe,
  TrendingUp,
  FileText,
  Users,
  Award,
  BookOpen,
  Briefcase
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  navigateTo: (page: PageType) => void;
  openContactModal: () => void;
}

export default function Navbar({ currentPage, navigateTo, openContactModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'consulting' | 'about' | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: PageType) => {
    navigateTo(page);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#0D5C63]/10 py-0'
          : 'bg-[#EAF6F5]/85 backdrop-blur-sm py-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div
            id="navbar-logo"
            className="flex items-center cursor-pointer group"
            onClick={() => handleNav('home')}
          >
            <img
              src="https://manozks.github.io/bunnirocks/bunnirocks-logo-horizontal.svg"
              alt="BunniRocks"
              className="h-18 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">

            {/* Consulting Dropdown Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('consulting')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPage.startsWith('consulting')
                    ? 'text-[#0D5C63] bg-[#0D5C63]/5'
                    : 'text-[#12303A] hover:text-[#0D5C63] hover:bg-gray-50'
                }`}
              >
                <span>Consulting</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              </button>

              {activeDropdown === 'consulting' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[680px] bg-white rounded-2xl shadow-xl border border-gray-100 p-6 grid grid-cols-3 gap-6 animate-fade-in z-50">
                  {/* Launch Column */}
                  <div>
                    <span className="block text-xs font-mono font-bold text-[#0D5C63]/80 uppercase tracking-wider mb-3">
                      Launch
                    </span>
                    <div className="space-y-3">
                      <button
                        onClick={() => handleNav('consulting-builds')}
                        className="flex items-start text-left p-2 rounded-xl hover:bg-[#EAF6F5] transition-colors group"
                      >
                        <FlaskConical className="w-5 h-5 text-[#0D5C63] mr-2 mt-0.5 group-hover:scale-110 transition-transform" />
                        <div>
                          <span className="block text-xs font-semibold text-[#12303A]">New Lab Builds</span>
                          <span className="block text-[10px] text-gray-500">Design, sourcing & HVAC planning.</span>
                        </div>
                      </button>
                      <button
                        onClick={() => handleNav('consulting-validation')}
                        className="flex items-start text-left p-2 rounded-xl hover:bg-[#EAF6F5] transition-colors group"
                      >
                        <Activity className="w-5 h-5 text-[#0D5C63] mr-2 mt-0.5 group-hover:scale-110 transition-transform" />
                        <div>
                          <span className="block text-xs font-semibold text-[#12303A]">New Test Validation</span>
                          <span className="block text-[10px] text-gray-500">LOD, accuracy & SOP data packages.</span>
                        </div>
                      </button>
                      <button
                        onClick={() => handleNav('consulting-management')}
                        className="flex items-start text-left p-2 rounded-xl hover:bg-[#EAF6F5] transition-colors group"
                      >
                        <Users className="w-5 h-5 text-[#0D5C63] mr-2 mt-0.5 group-hover:scale-110 transition-transform" />
                        <div>
                          <span className="block text-xs font-semibold text-[#12303A]">Lab Management</span>
                          <span className="block text-[10px] text-gray-500">Interim directors & custom workflows.</span>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Integrate Column */}
                  <div>
                    <span className="block text-xs font-mono font-bold text-[#0D5C63]/80 uppercase tracking-wider mb-3">
                      Integrate
                    </span>
                    <div className="space-y-3">
                      <button
                        onClick={() => handleNav('consulting-integrations')}
                        className="flex items-start text-left p-2 rounded-xl hover:bg-[#EAF6F5] transition-colors group"
                      >
                        <Layers className="w-5 h-5 text-[#0D5C63] mr-2 mt-0.5 group-hover:scale-110 transition-transform" />
                        <div>
                          <span className="block text-xs font-semibold text-[#12303A]">Health System Integrations</span>
                          <span className="block text-[10px] text-gray-500">LIS, QC sync & core lab builds.</span>
                        </div>
                      </button>
                      <button
                        onClick={() => handleNav('consulting-planning')}
                        className="flex items-start text-left p-2 rounded-xl hover:bg-[#EAF6F5] transition-colors group"
                      >
                        <Globe className="w-5 h-5 text-[#0D5C63] mr-2 mt-0.5 group-hover:scale-110 transition-transform" />
                        <div>
                          <span className="block text-xs font-semibold text-[#12303A]">Lab Planning</span>
                          <span className="block text-[10px] text-gray-500">Logistics master-plans & space layout.</span>
                        </div>
                      </button>
                      <button
                        onClick={() => handleNav('consulting-performance')}
                        className="flex items-start text-left p-2 rounded-xl hover:bg-[#EAF6F5] transition-colors group"
                      >
                        <TrendingUp className="w-5 h-5 text-[#0D5C63] mr-2 mt-0.5 group-hover:scale-110 transition-transform" />
                        <div>
                          <span className="block text-xs font-semibold text-[#12303A]">Performance Improvement</span>
                          <span className="block text-[10px] text-gray-500">Reducing turnaround time & waste.</span>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Optimize Column */}
                  <div>
                    <span className="block text-xs font-mono font-bold text-[#0D5C63]/80 uppercase tracking-wider mb-3">
                      Optimize
                    </span>
                    <div className="space-y-3">
                      <button
                        onClick={() => handleNav('consulting-compliance')}
                        className="flex items-start text-left p-2 rounded-xl hover:bg-[#EAF6F5] transition-colors group"
                      >
                        <Shield className="w-5 h-5 text-[#0D5C63] mr-2 mt-0.5 group-hover:scale-110 transition-transform" />
                        <div>
                          <span className="block text-xs font-semibold text-[#12303A]">CAP & CLIA Compliance</span>
                          <span className="block text-[10px] text-gray-500">Continuous audits & defense.</span>
                        </div>
                      </button>
                      <button
                        onClick={() => handleNav('consulting-advising')}
                        className="flex items-start text-left p-2 rounded-xl hover:bg-[#EAF6F5] transition-colors group"
                      >
                        <Award className="w-5 h-5 text-[#0D5C63] mr-2 mt-0.5 group-hover:scale-110 transition-transform" />
                        <div>
                          <span className="block text-xs font-semibold text-[#12303A]">Advising & QMS</span>
                          <span className="block text-[10px] text-gray-500">Standardized SOPs & training models.</span>
                        </div>
                      </button>
                      <button
                        onClick={() => handleNav('consulting-pathology')}
                        className="flex items-start text-left p-2 rounded-xl hover:bg-[#EAF6F5] transition-colors group"
                      >
                        <FileText className="w-5 h-5 text-[#0D5C63] mr-2 mt-0.5 group-hover:scale-110 transition-transform" />
                        <div>
                          <span className="block text-xs font-semibold text-[#12303A]">Pathology Consulting</span>
                          <span className="block text-[10px] text-gray-500">Digital histology & specimen audits.</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* About Dropdown Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === 'about' || currentPage === 'leadership' || currentPage === 'careers' || currentPage === 'testimonials' || currentPage === 'case-studies'
                    ? 'text-[#0D5C63] bg-[#0D5C63]/5'
                    : 'text-[#12303A] hover:text-[#0D5C63] hover:bg-gray-50'
                }`}
              >
                <span>About Us</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200" />
              </button>

              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in z-50">
                  <button
                    onClick={() => handleNav('about')}
                    className="flex items-center w-full text-left px-4 py-2.5 text-xs font-medium text-[#12303A] hover:bg-[#EAF6F5] hover:text-[#0D5C63]"
                  >
                    <Award className="w-4 h-4 text-[#0D5C63] mr-2" />
                    Our Story & Standards
                  </button>
                  <button
                    onClick={() => handleNav('leadership')}
                    className="flex items-center w-full text-left px-4 py-2.5 text-xs font-medium text-[#12303A] hover:bg-[#EAF6F5] hover:text-[#0D5C63]"
                  >
                    <Users className="w-4 h-4 text-[#0D5C63] mr-2" />
                    Leadership Team
                  </button>
                  <button
                    onClick={() => handleNav('careers')}
                    className="flex items-center w-full text-left px-4 py-2.5 text-xs font-medium text-[#12303A] hover:bg-[#EAF6F5] hover:text-[#0D5C63]"
                  >
                    <Briefcase className="w-4 h-4 text-[#0D5C63] mr-2" />
                    Careers
                  </button>
                  <button
                    onClick={() => handleNav('testimonials')}
                    className="flex items-center w-full text-left px-4 py-2.5 text-xs font-medium text-[#12303A] hover:bg-[#EAF6F5] hover:text-[#0D5C63]"
                  >
                    <BookOpen className="w-4 h-4 text-[#0D5C63] mr-2" />
                    Client Testimonials
                  </button>
                  <button
                    onClick={() => handleNav('case-studies')}
                    className="flex items-center w-full text-left px-4 py-2.5 text-xs font-medium text-[#12303A] hover:bg-[#EAF6F5] hover:text-[#0D5C63]"
                  >
                    <FileText className="w-4 h-4 text-[#0D5C63] mr-2" />
                    Case Studies
                  </button>
                </div>
              )}
            </div>

            {/* Other Direct Pages */}
            <button
              onClick={() => handleNav('research')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === 'research'
                  ? 'text-[#0D5C63] bg-[#0D5C63]/5'
                  : 'text-[#12303A] hover:text-[#0D5C63] hover:bg-gray-50'
              }`}
            >
              Research
            </button>

            <button
              onClick={() => handleNav('resources')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === 'resources'
                  ? 'text-[#0D5C63] bg-[#0D5C63]/5'
                  : 'text-[#12303A] hover:text-[#0D5C63] hover:bg-gray-50'
              }`}
            >
              Tools & Resources
            </button>

            <button
              onClick={() => handleNav('blog')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === 'blog' || currentPage === 'blog-detail'
                  ? 'text-[#0D5C63] bg-[#0D5C63]/5'
                  : 'text-[#12303A] hover:text-[#0D5C63] hover:bg-gray-50'
              }`}
            >
              Insights
            </button>

            <button
              onClick={() => handleNav('pricing')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentPage === 'pricing'
                  ? 'text-[#0D5C63] bg-[#0D5C63]/5'
                  : 'text-[#12303A] hover:text-[#0D5C63] hover:bg-gray-50'
              }`}
            >
              Pricing
            </button>
                <button
              onClick={() => handleNav('contact')}
              className="text-[#12303A] hover:text-[#0D5C63] text-sm font-medium px-4 py-2 transition-colors"
            >
              Contact
            </button>

          </nav>

          {/* Action Button & Contact */}
          <div className="hidden lg:flex items-center space-x-3">
        
            <button
              onClick={openContactModal}
              className="relative inline-flex items-center justify-center bg-[#12303A] text-white hover:bg-[#0D5C63] px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 shadow-md shadow-[#12303A]/10 hover:shadow-[#0D5C63]/20 group"
            >
              <span>Get Free Assessment</span>
              <span className="ml-2 w-2 h-2 rounded-full bg-[#E63946] group-hover:animate-ping"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#12303A] hover:bg-[#EAF6F5] hover:text-[#0D5C63] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div id="mobile-nav" className="lg:hidden bg-white border-b border-gray-100 shadow-lg px-4 pt-2 pb-6 space-y-3 animate-slide-down max-h-[85vh] overflow-y-auto">
          <div className="grid grid-cols-1 gap-2 pt-2">

            {/* Consulting Group */}
            <div className="border-t border-b border-gray-100 py-2 my-1">
              <span className="block text-[10px] font-bold text-[#0D5C63] tracking-widest uppercase px-3 mb-1">
                Laboratory Consulting
              </span>
              <button
                onClick={() => handleNav('consulting-builds')}
                className="w-full text-left px-5 py-2 text-xs font-medium text-[#12303A] hover:bg-[#EAF6F5] rounded-md"
              >
                • New Lab Builds & Design
              </button>
              <button
                onClick={() => handleNav('consulting-validation')}
                className="w-full text-left px-5 py-2 text-xs font-medium text-[#12303A] hover:bg-[#EAF6F5] rounded-md"
              >
                • New Test Validation Support
              </button>
              <button
                onClick={() => handleNav('consulting-management')}
                className="w-full text-left px-5 py-2 text-xs font-medium text-[#12303A] hover:bg-[#EAF6F5] rounded-md"
              >
                • Laboratory Management Services
              </button>
              <button
                onClick={() => handleNav('consulting-integrations')}
                className="w-full text-left px-5 py-2 text-xs font-medium text-[#12303A] hover:bg-[#EAF6F5] rounded-md"
              >
                • Health System Integrations
              </button>
              <button
                onClick={() => handleNav('consulting-planning')}
                className="w-full text-left px-5 py-2 text-xs font-medium text-[#12303A] hover:bg-[#EAF6F5] rounded-md"
              >
                • Layout Planning & CAD Logistics
              </button>
              <button
                onClick={() => handleNav('consulting-performance')}
                className="w-full text-left px-5 py-2 text-xs font-medium text-[#12303A] hover:bg-[#EAF6F5] rounded-md"
              >
                • Performance Improvement Workflow
              </button>
              <button
                onClick={() => handleNav('consulting-compliance')}
                className="w-full text-left px-5 py-2 text-xs font-medium text-[#12303A] hover:bg-[#EAF6F5] rounded-md"
              >
                • CAP & CLIA Continuous Audit
              </button>
              <button
                onClick={() => handleNav('consulting-advising')}
                className="w-full text-left px-5 py-2 text-xs font-medium text-[#12303A] hover:bg-[#EAF6F5] rounded-md"
              >
                • Advising & Regulatory QMS
              </button>
              <button
                onClick={() => handleNav('consulting-pathology')}
                className="w-full text-left px-5 py-2 text-xs font-medium text-[#12303A] hover:bg-[#EAF6F5] rounded-md"
              >
                • Pathology & Histology Advisory
              </button>
            </div>

            {/* About Group */}
            <div className="border-b border-gray-100 pb-2 my-1">
              <span className="block text-[10px] font-bold text-[#0D5C63] tracking-widest uppercase px-3 mb-1">
                Company Information
              </span>
              <button
                onClick={() => handleNav('about')}
                className="w-full text-left px-5 py-2 text-xs font-medium text-[#12303A] hover:bg-[#EAF6F5] rounded-md"
              >
                • About BunniRocks
              </button>
              <button
                onClick={() => handleNav('leadership')}
                className="w-full text-left px-5 py-2 text-xs font-medium text-[#12303A] hover:bg-[#EAF6F5] rounded-md"
              >
                • Our Executive Leadership
              </button>
              <button
                onClick={() => handleNav('careers')}
                className="w-full text-left px-5 py-2 text-xs font-medium text-[#12303A] hover:bg-[#EAF6F5] rounded-md"
              >
                • Career Opportunities
              </button>
              <button
                onClick={() => handleNav('testimonials')}
                className="w-full text-left px-5 py-2 text-xs font-medium text-[#12303A] hover:bg-[#EAF6F5] rounded-md"
              >
                • Client Endorsements
              </button>
              <button
                onClick={() => handleNav('case-studies')}
                className="w-full text-left px-5 py-2 text-xs font-medium text-[#12303A] hover:bg-[#EAF6F5] rounded-md"
              >
                • Real-world Case Studies
              </button>
            </div>

            {/* Direct pages */}
            <button
              onClick={() => handleNav('research')}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-[#12303A] hover:bg-[#EAF6F5]"
            >
              Research & Metrics
            </button>
            <button
              onClick={() => handleNav('resources')}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-[#12303A] hover:bg-[#EAF6F5]"
            >
              Calculators & Resources
            </button>
            <button
              onClick={() => handleNav('blog')}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-[#12303A] hover:bg-[#EAF6F5]"
            >
              Insights Blog
            </button>
            <button
              onClick={() => handleNav('pricing')}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-[#12303A] hover:bg-[#EAF6F5]"
            >
              Pricing Plans
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-[#12303A] hover:bg-[#EAF6F5]"
            >
              Direct Contact
            </button>
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openContactModal();
              }}
              className="w-full bg-[#12303A] text-white py-3 rounded-xl text-center text-sm font-medium transition-all hover:bg-[#0D5C63]"
            >
              Request Assessment
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
