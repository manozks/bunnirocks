import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import {
  ShieldCheck,
  Award,
  Users,
  TestTube,
  FileText,
  Activity,
  ArrowRight,
  TrendingUp,
  Clock,
  CheckCircle,
  HelpCircle,
  Plus,
  Minus,
  Sparkles,
  Calculator,
  ChevronRight,
  Building,
  Dna,
  Workflow,
  Layers
} from 'lucide-react';
import { BLOG_POSTS, CASE_STUDIES, FAQS } from '../data';

interface HomeProps {
  navigateTo: (page: PageType) => void;
  openContactModal: (type?: string) => void;
}

export default function Home({ navigateTo, openContactModal }: HomeProps) {
  // Solutions interactive switcher state
  const [activeSolution, setActiveSolution] = useState<number>(0);
  
  // Testimonial Carousel state
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // FAQ open state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Interactive Live Dashboard simulated metrics state
  const [activeTab, setActiveTab] = useState<'personnel' | 'instruments' | 'documents'>('personnel');
  const [auditScore, setAuditScore] = useState(94.8);

  useEffect(() => {
    // Subtle animated metric fluctuation to look "live"
    const interval = setInterval(() => {
      setAuditScore((prev) => {
        const delta = (Math.random() - 0.5) * 0.4;
        const newScore = Math.min(100, Math.max(90, prev + delta));
        return parseFloat(newScore.toFixed(2));
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const solutions = [
    {
      title: 'Hospital Health Systems',
      icon: Building,
      badge: 'Multi-Site core validation',
      challenge: 'Disjointed laboratory protocols and differing LIS setups across satellite sites.',
      needs: 'Continuous remote audit overlays, centralized standard operating procedures (SOPs), and integrated competency sign-offs.',
      result: '38% reductions in operational waste and audit ready 365 days a year.'
    },
    {
      title: 'Commercial Reference Laboratories',
      icon: Layers,
      badge: 'High-Volume Licensure',
      challenge: 'Scaling laboratory testing volume while maintaining state licensure criteria across New York, California, and Florida.',
      needs: 'Automated QC tracking, direct reagent logs, and fast proficiency testing integrations.',
      result: '100% success rate on state inspections and streamlined billing codes.'
    },
    {
      title: 'Molecular Somatic Diagnostics',
      icon: Dna,
      badge: 'FDA LDT Quality Framework',
      challenge: 'Next-Generation Sequencing (NGS) validation files and compliance with evolving FDA LDT guidance.',
      needs: 'Robust design controls, documented clinical utility, and formal molecular training logs.',
      result: 'Regulatory launch timeline cut by 54% with flawless technical verification.'
    }
  ];

  const benefits = [
    { title: 'Zero Citation Guarantee', desc: 'Our continuous pre-audits ensure your clinical laboratory passes CAP and CLIA inspections with perfect scores.', icon: ShieldCheck },
    { title: 'Accelerated Lab Builds', desc: 'Cut through municipal permits, design constraints, and equipment calibrations to launch 50% faster.', icon: Workflow },
    { title: 'ASCP Certified Support', desc: 'Collaborate with clinical scientists who speak your language, rather than generalized consultants.', icon: Users },
    { title: 'SaaS Assisted Document Control', desc: 'Securely manage SOP approvals, digital sign-offs, and compliance logs in a HIPAA-secure sandbox.', icon: FileText }
  ];

  const testimonials = [
    {
      quote: "BunniRocks did what three other consulting agencies said was impossible. They designed our dry-lab and wet-lab NGS sequencing facility, validated our somatic panel, and got us fully licensed and CAP-accredited in 8.2 months. Their combination of physical layout expertise and pre-written SOP files is completely unmatched.",
      author: "Dr. Catherine Voss, MD, PhD",
      role: "Executive Director of Diagnostics",
      org: "OncoPath Somatic Centers",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
    },
    {
      quote: "During a routine state inspection, our molecular testing unit was cited for training document gaps. BunniRocks stepped in, restructured our entire digital QMS within 10 days, successfully defended our correction plans with CMS, and lifted all sanctions. They are the absolute elite in clinical laboratory regulatory affairs.",
      author: "Gerald Vance, MS, MT(ASCP)",
      role: "Senior Pathology Coordinator",
      org: "MetroHealth Systems",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150"
    }
  ];

  const steps = [
    { step: '01', title: 'Diagnostic Alignment', desc: 'We assess your laboratory structure, current testing menu (LD, molecular, non-waived), and impending compliance deadlines.' },
    { step: '02', title: 'Gap Remediation Plan', desc: 'Our team performs a mock inspection, identifying any missing training logs, calibration gaps, or document revisions.' },
    { step: '03', title: 'Validation & SOP Delivery', desc: 'We compile high-fidelity wet-lab validation packages, write customized SOP templates, and configure our digital tracking SaaS.' },
    { step: '04', title: 'Accreditation Defense', desc: 'During the inspection window, we provide direct on-site or remote assistance, helping your team answer peer-reviewer questions confidently.' }
  ];

  return (
    <div className="bg-[#EAF6F5]/40 min-h-screen pt-16">
      
      {/* SECTION 1: HERO SECTION */}
      <section id="hero-section" className="relative overflow-hidden py-16 sm:py-24 lg:py-28 border-b border-[#0D5C63]/10">
        
        {/* Full-width Hero Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://manozks.github.io/bunnirocks/lab-picture.jpg"
            alt="Modern Clinical Laboratory Background"
            className="w-full h-full object-cover select-none pointer-events-none"
            referrerPolicy="no-referrer"
            onError={(e) => {
              // Multi-stage fallback to ensure zero broken images
              const target = e.currentTarget;
              if (target.src.includes("photo-1581091226825")) {
                target.src = "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1920";
              } else if (target.src.includes("photo-1576086213")) {
                target.src = "https://picsum.photos/seed/clinallab/1920/1080?blur=1";
              }
            }}
          />
          {/* Elegant soft gradient overlay to guarantee perfect contrast and text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#12303A]/48 via-[#12303A]/55 to-[#12303A]/65 md:from-[#12303A]/56 md:via-[#12303A]/40 md:to-[#12303A]/5" />
        </div>
        
        {/* Ambient Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#0D5C63_1.2px,transparent_1.2px)] [background-size:24px_24px] opacity-[0.04] z-10" />
        
        {/* Soft Background Gradients */}
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#0d5c63]/10 to-[#EAF6F5]/20 blur-3xl z-10" />
        <div className="absolute top-2/3 left-10 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#E63946]/5 to-[#EAF6F5]/10 blur-2xl z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Hero Texts */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#EAF6F5]/70 border border-[#0D5C63]/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E63946] animate-pulse"></span>
                <span className="text-[11px] font-mono font-bold text-[#0D5C63] tracking-wider uppercase">
                  Continuous Regulatory Protection
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#EAF6F5] tracking-tight leading-[1.08] font-sans">
                Laboratory compliance, <span className="text-[#ffffff]">engineered for precision.</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#EAF6F5]/80 max-w-2xl leading-relaxed">
                The absolute premium partner for high-complexity diagnostic facilities. We combine hands-on ASCP consulting with our enterprise compliance tracking SaaS to guarantee flawless CAP/CLIA certifications, New Lab builds, and rapid validation packages.
              </p>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                <button
                  onClick={() => openContactModal('Comprehensive QMS Audit')}
                  className="bg-[#12303A] hover:bg-[#0D5C63] text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center cursor-pointer flex items-center justify-center space-x-2 group"
                >
                  <span>Request Free Audit</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                
                <button
                  onClick={() => navigateTo('services')}
                  className="border border-[#EAF6F5]/75 hover:border-[#0D5C63] hover:bg-white/80 text-[#EAF6F5] hover:text-[#0D5C63] px-8 py-3.5 rounded-xl font-medium transition-all text-center cursor-pointer"
                >
                  Explore Capabilities
                </button>
              </div>

              {/* Dynamic Micro stats block */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200/80 max-w-md">
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-[#EAF6F5]">100%</span>
                  <span className="block text-[10px] text-[#EAF6F5]/90 font-mono uppercase tracking-wider mt-0.5">Audit Pass Rate</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-[#EAF6F5]/50">40+</span>
                  <span className="block text-[10px] text-[#EAF6F5]/90 font-mono uppercase tracking-wider mt-0.5">Labs Built Out</span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-extrabold text-[#E63946]">54%</span>
                  <span className="block text-[10px] text-[#EAF6F5]/90 font-mono uppercase tracking-wider mt-0.5">Faster Launches</span>
                </div>
              </div>

            </div>

       

          </div>
        </div>
      </section>

      {/* SECTION 2: TRUSTED BY LOGOS */}
      <section id="trusted-by-logos" className="py-10 bg-white border-b border-[#0D5C63]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[11px] font-mono font-bold text-gray-400 uppercase tracking-widest mb-6">
            Trusted by Elite Laboratories and Diagnostic Developers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center justify-items-center opacity-60">
            <span className="font-mono font-extrabold text-base tracking-widest text-[#12303A]"><img src="https://manozks.github.io/bunnirocks/cc-logo.jpg" alt="Modern Clinical Laboratory Background" className="w-full h-full object-cover"></span>
             <span className="font-mono font-extrabold text-base tracking-widest text-[#12303A]"><img src="https://manozks.github.io/bunnirocks/pc-logo.jpg" alt="Modern Clinical Laboratory Background" className="w-full h-full object-cover"></span>
            <span className="font-mono font-extrabold text-base tracking-widest text-[#12303A]"><img src="https://manozks.github.io/bunnirocks/weill.jpg" alt="Modern Clinical Laboratory Background" className="w-full h-full object-cover"></span>
            <span className="font-mono font-extrabold text-base tracking-widest text-[#0D5C63]"><img src="https://manozks.github.io/bunnirocks/ah-logo.jpg" alt="Modern Clinical Laboratory Background" className="w-full h-full object-cover"></span>
            <span className="font-mono font-extrabold text-base tracking-widest text-[#12303A]"><img src="https://manozks.github.io/bunnirocks/chn-logo.jpg" alt="Modern Clinical Laboratory Background" className="w-full h-full object-cover"></span>
          </div>
        </div>
      </section>

      {/* SECTION 3: SERVICES AND CAPABILITIES */}
      <section id="services-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-mono font-bold text-[#0D5C63] uppercase tracking-widest px-3 py-1 bg-[#EAF6F5] rounded-full">
              Full-Stack Advisory & Software
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#12303A] tracking-tight">
              A comprehensive approach to laboratory excellence
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              We don’t just write advice. We build physical spaces, validate diagnostic equipment, act as legal laboratory directors, and deploy continuous compliance software overlays.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="bg-[#EAF6F5] p-8 rounded-3xl border border-[#0D5C63]/10 hover:shadow-xl hover:-translate-y-1 transition-all space-y-4 text-left group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#0D5C63] shadow-sm group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#12303A]">CAP Accreditation Readiness</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Peer-review audit files, mock inspections, immediate citation resolutions, and complete checklist mapping to guarantee passing scores.
              </p>
              <button onClick={() => navigateTo('consulting-compliance')} className="inline-flex items-center text-xs font-bold text-[#0D5C63] hover:underline pt-2 group">
                <span>Accreditation Strategy</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            <div className="bg-[#EAF6F5] p-8 rounded-3xl border border-[#0D5C63]/10 hover:shadow-xl hover:-translate-y-1 transition-all space-y-4 text-left group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#0D5C63] shadow-sm group-hover:scale-105 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#12303A]">CLIA Licensing Support</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Navigating CMS filings, State Department of Health channels (NY, CA, FL), and Certificate of Accreditation applications for new facilities.
              </p>
              <button onClick={() => navigateTo('consulting-compliance')} className="inline-flex items-center text-xs font-bold text-[#0D5C63] hover:underline pt-2 group">
                <span>Licensing Roadmap</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            <div className="bg-[#EAF6F5] p-8 rounded-3xl border border-[#0D5C63]/10 hover:shadow-xl hover:-translate-y-1 transition-all space-y-4 text-left group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#0D5C63] shadow-sm group-hover:scale-105 transition-transform">
                <TestTube className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#12303A]">Assay validation Packages</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Robust dry-lab and wet-lab validation protocols. Sourcing specimens, validating precision, LOD, accuracy, and clinical utility files.
              </p>
              <button onClick={() => navigateTo('consulting-validation')} className="inline-flex items-center text-xs font-bold text-[#0D5C63] hover:underline pt-2 group">
                <span>Validation Standards</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            <div className="bg-[#EAF6F5] p-8 rounded-3xl border border-[#0D5C63]/10 hover:shadow-xl hover:-translate-y-1 transition-all space-y-4 text-left group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#0D5C63] shadow-sm group-hover:scale-105 transition-transform">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#12303A]">SaaS QMS Integration</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Say goodbye to binders. Document approval workflows, automated instrument calibration alerts, and continuous digital competency cards.
              </p>
              <button onClick={() => navigateTo('features')} className="inline-flex items-center text-xs font-bold text-[#0D5C63] hover:underline pt-2 group">
                <span>Platform Features</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            <div className="bg-[#EAF6F5] p-8 rounded-3xl border border-[#0D5C63]/10 hover:shadow-xl hover:-translate-y-1 transition-all space-y-4 text-left group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#0D5C63] shadow-sm group-hover:scale-105 transition-transform">
                <Workflow className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#12303A]">Turn-Key New Lab Builds</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Full physical designs: workflow sequencing, biosafety air balance mapping, electrical/HVAC schematics, and major instrumentation selection.
              </p>
              <button onClick={() => navigateTo('consulting-builds')} className="inline-flex items-center text-xs font-bold text-[#0D5C63] hover:underline pt-2 group">
                <span>Build Specifications</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            <div className="bg-[#EAF6F5] p-8 rounded-3xl border border-[#0D5C63]/10 hover:shadow-xl hover:-translate-y-1 transition-all space-y-4 text-left group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#0D5C63] shadow-sm group-hover:scale-105 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#12303A]">Fractional Lab Directorship</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Connect with pre-qualified, board-certified High-Complexity Lab Directors to provide legal, professional clinical laboratory oversight.
              </p>
              <button onClick={() => navigateTo('consulting-management')} className="inline-flex items-center text-xs font-bold text-[#0D5C63] hover:underline pt-2 group">
                <span>Director Placements</span>
                <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: INTERACTIVE SECTOR SWITCHER */}
      <section id="solutions-section" className="py-20 bg-gray-50 border-t border-b border-[#0D5C63]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
            <div className="max-w-2xl text-left space-y-3">
              <span className="text-xs font-mono font-bold text-[#E63946] uppercase tracking-wider">
                Tailored Domain Solutions
              </span>
              <h2 className="text-3xl font-bold text-[#12303A] tracking-tight">
                Specially calibrated for your clinical focus
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed">
                Select your specific operational sector below to see how BunniRocks customizes standard operating procedures, audits, and software templates.
              </p>
            </div>

            {/* Quick action buttons to switch */}
            <div className="flex flex-wrap gap-2 mt-6 lg:mt-0">
              {solutions.map((sol, idx) => {
                const SolIcon = sol.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveSolution(idx)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center space-x-2 transition-all cursor-pointer ${
                      activeSolution === idx
                        ? 'bg-[#0D5C63] text-white shadow-md'
                        : 'bg-white text-[#12303A] border border-gray-200 hover:border-[#0D5C63]'
                    }`}
                  >
                    <SolIcon className="w-4 h-4" />
                    <span>{sol.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Solution detail block */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#0D5C63]/5 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex px-3 py-1 bg-[#EAF6F5] text-[#0D5C63] rounded-full text-xs font-mono font-bold uppercase">
                {solutions[activeSolution].badge}
              </div>
              <h3 className="text-2xl font-bold text-[#12303A]">
                Compliance strategy for {solutions[activeSolution].title}
              </h3>
              
              <div className="space-y-4">
                <div className="border-l-2 border-[#E63946] pl-4">
                  <span className="block text-[11px] uppercase font-mono font-bold text-gray-400">The Primary Challenge:</span>
                  <p className="text-xs text-[#12303A]/90 mt-1">{solutions[activeSolution].challenge}</p>
                </div>
                <div className="border-l-2 border-[#0D5C63] pl-4">
                  <span className="block text-[11px] uppercase font-mono font-bold text-[#0D5C63]">The BunniRocks Blueprint:</span>
                  <p className="text-xs text-[#12303A]/90 mt-1">{solutions[activeSolution].needs}</p>
                </div>
              </div>

              <div className="pt-2 flex items-center space-x-2 text-xs font-bold text-[#0D5C63]">
                <CheckCircle className="w-4 h-4" />
                <span>Impact: {solutions[activeSolution].result}</span>
              </div>

              <button
                onClick={() => openContactModal(`Custom ${solutions[activeSolution].title} Assessment`)}
                className="bg-[#12303A] hover:bg-[#0D5C63] text-white text-xs font-semibold px-6 py-3 rounded-xl transition-all cursor-pointer"
              >
                Inquire About {solutions[activeSolution].title}
              </button>
            </div>

            <div className="lg:col-span-5 bg-[#EAF6F5]/50 p-6 rounded-2xl border border-[#0D5C63]/10 text-left space-y-4">
              <span className="block text-xs font-mono font-bold text-[#0D5C63] uppercase tracking-wider">
                CORE VERIFICATIONS REQUIRED
              </span>
              <ul className="space-y-3 text-xs text-gray-700 font-medium">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E63946]" />
                  <span>Validation Files (Accuracy, Reproducibility, AMR)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D5C63]" />
                  <span>6-Element Bi-Annual Competency Sign-offs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D5C63]" />
                  <span>Standardized QA/QC Reporting & Delta Check logs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0D5C63]" />
                  <span>State Department Licensure Reciprocity check</span>
                </li>
              </ul>
              <div className="p-3 bg-white rounded-xl border border-gray-100 flex items-center space-x-3">
                <Calculator className="w-5 h-5 text-[#0D5C63]" />
                <div className="text-[10px]">
                  <span className="font-bold block">Need an ROI projection?</span>
                  <button onClick={() => navigateTo('resources')} className="text-[#0D5C63] underline hover:text-[#12303A]">
                    Launch Compliance Gap Tool &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: HOW IT WORKS TIMELINE */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-mono font-bold text-[#0D5C63] uppercase tracking-widest px-3 py-1 bg-[#EAF6F5] rounded-full">
              The Path to Flawless Audits
            </span>
            <h2 className="text-3xl font-bold text-[#12303A] tracking-tight">
              Our 4-step compliance deployment process
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              We guide your clinical team seamlessly from baseline audit prep to defending complex peer reviews during inspection week.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((st, idx) => (
              <div key={idx} className="bg-[#EAF6F5] p-6 rounded-3xl border border-[#0D5C63]/10 relative group hover:shadow-md transition-shadow text-left">
                <span className="absolute top-4 right-6 text-3xl font-black font-mono text-[#0D5C63]/15">
                  {st.step}
                </span>
                <div className="space-y-4 pt-4">
                  <h3 className="text-base font-bold text-[#12303A]">{st.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{st.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6: BENEFITS */}
      <section id="benefits-section" className="py-20 bg-[#12303A] text-white relative overflow-hidden">
        
        {/* Accent shapes */}
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#0D5C63]/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#E63946]/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6 text-left">
              <span className="text-xs font-mono font-bold text-[#EAF6F5] uppercase tracking-wider">
                Uncompromising Outcomes
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                Enterprise benefits, calibrated for healthcare systems
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Don’t risk stop-work orders, immediate jeopardy citations, or multi-year lab directorship bans. BunniRocks delivers absolute compliance safety, allowing your scientific teams to focus purely on high-throughput patient diagnostic accuracy.
              </p>
              
              <div className="p-5 bg-[#EAF6F5]/10 rounded-2xl border border-[#0D5C63]/20 space-y-3">
                <span className="block text-xs font-mono font-bold text-[#0D5C63]">CLINICAL CERTIFICATE ASSURANCE:</span>
                <p className="text-xs text-gray-300 leading-relaxed">
                  We maintain active direct lines with major clinical state reviewers, ensuring New York SDOH Clep, CLIA, and CAP guidelines are pre-reconciled prior to final package submission.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((b, idx) => {
                const BenefitIcon = b.icon;
                return (
                  <div key={idx} className="bg-gray-800/65 p-6 rounded-2xl border border-gray-700/60 text-left space-y-3">
                    <div className="w-10 h-10 bg-[#0D5C63] rounded-xl flex items-center justify-center text-white">
                      <BenefitIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-white">{b.title}</h3>
                    <p className="text-xs text-gray-400 leading-relaxed">{b.desc}</p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 7: TESTIMONIALS CAROUSEL */}
      <section id="testimonials-section" className="py-20 bg-white border-b border-[#0D5C63]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-mono font-bold text-[#0D5C63] uppercase tracking-widest px-3 py-1 bg-[#EAF6F5] rounded-full">
              Client Endorsements
            </span>
            <h2 className="text-3xl font-bold text-[#12303A]">
              Tested by Directors, trusted by health networks
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-[#EAF6F5] rounded-3xl border border-[#0D5C63]/10 p-8 sm:p-12 relative shadow-sm">
            
            <div className="space-y-6 text-left animate-fade-in" key={activeTestimonial}>
              
              <p className="text-base sm:text-lg text-[#12303A] font-medium leading-relaxed italic">
                "{testimonials[activeTestimonial].quote}"
              </p>
              
              <div className="flex items-center space-x-4 pt-4 border-t border-gray-200/80">
                <div className="w-12 h-12 rounded-full bg-[#0D5C63] text-white flex items-center justify-center font-bold text-sm">
                  {testimonials[activeTestimonial].author.split(' ')[1][0]}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#12303A]">{testimonials[activeTestimonial].author}</h4>
                  <p className="text-xs text-gray-500">
                    {testimonials[activeTestimonial].role} at <strong>{testimonials[activeTestimonial].org}</strong>
                  </p>
                </div>
              </div>

            </div>

            {/* Slider Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    activeTestimonial === idx ? 'bg-[#0D5C63] w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 8: CASE STUDIES HIGHLIGHTS */}
      <section id="home-case-studies" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
            <div className="text-left space-y-2">
              <span className="text-xs font-mono font-bold text-[#0D5C63] uppercase tracking-wider">
                Proven Track Records
              </span>
              <h2 className="text-3xl font-bold text-[#12303A]">
                Recent compliance successes
              </h2>
            </div>
            <button
              onClick={() => navigateTo('case-studies')}
              className="mt-4 sm:mt-0 inline-flex items-center text-xs font-bold text-[#0D5C63] hover:underline cursor-pointer"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((cs) => (
              <div key={cs.id} className="bg-white rounded-3xl border border-[#0D5C63]/10 shadow-sm overflow-hidden flex flex-col justify-between text-left group hover:shadow-md transition-shadow">
                
                {/* Visual Header */}
                <div className="bg-[#12303A] px-6 py-5 text-white flex items-center justify-between">
                  <span className="font-mono font-bold text-xs tracking-widest text-gray-300">{cs.logoText}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#0D5C63]/30 text-[#EAF6F5] uppercase">
                    {cs.category}
                  </span>
                </div>

                <div className="p-6 space-y-4 flex-1">
                  <h3 className="text-base font-bold text-[#12303A] group-hover:text-[#0D5C63] transition-colors leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {cs.challenge.substring(0, 140)}...
                  </p>
                  
                  {/* Highlights */}
                  <div className="pt-2 border-t border-gray-100 space-y-2">
                    {cs.metrics.slice(0, 2).map((m, mIdx) => (
                      <div key={mIdx} className="flex justify-between text-[11px]">
                        <span className="text-gray-500">{m.label}:</span>
                        <span className="font-bold text-[#0D5C63]">{m.after}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => navigateTo('case-studies')}
                    className="w-full py-2.5 bg-[#EAF6F5] hover:bg-[#0D5C63] hover:text-white rounded-xl text-center text-xs font-bold text-[#0D5C63] transition-all cursor-pointer"
                  >
                    Read Full Case Study
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 9: ACCORDION FAQ */}
      <section id="faq-section" className="py-20 bg-gray-50 border-t border-b border-[#0D5C63]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-mono font-bold text-[#0D5C63] uppercase tracking-widest px-3 py-1 bg-[#EAF6F5] rounded-full">
              Advisory Database
            </span>
            <h2 className="text-3xl font-bold text-[#12303A]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.slice(0, 5).map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-[#0D5C63]/10 overflow-hidden shadow-sm transition-all">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left cursor-pointer hover:bg-gray-50"
                >
                  <span className="font-bold text-sm sm:text-base text-[#12303A]">{faq.question}</span>
                  {openFaq === idx ? (
                    <Minus className="w-5 h-5 text-[#0D5C63] shrink-0 ml-4" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400 shrink-0 ml-4" />
                  )}
                </button>
                
                {openFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-50 animate-fade-in">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => navigateTo('faq')}
              className="text-xs font-bold text-[#0D5C63] hover:underline"
            >
              Browse complete compliance FAQ database &rarr;
            </button>
          </div>

        </div>
      </section>

      {/* SECTION 10: CALL TO ACTION BANNER */}
      <section id="cta-banner" className="py-16 sm:py-20 bg-[#EAF6F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#12303A] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-xl border border-[#0D5C63]/20">
          
          {/* Decorative circular backdrop elements */}
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-[#0D5C63]/25" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-[#E63946]/5" />

          <div className="relative space-y-6 max-w-3xl mx-auto">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#0D5C63]/30 text-xs font-mono font-bold uppercase text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E63946] animate-ping" />
              <span>Complimentary QMS Baseline Inspection</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Ready to secure flawless CAP/CLIA audits?
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Partner with BunniRocks today. Receive a rigorous, zero-obligation gap assessment of your clinical procedures, personnel records, and instrumentation calibrations within 48 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <button
                onClick={() => openContactModal('Comprehensive QMS Audit')}
                className="bg-[#0D5C63] hover:bg-[#0D5C63]/80 text-white px-8 py-3.5 rounded-xl text-sm font-semibold transition-all shadow-md cursor-pointer"
              >
                Request Free Assessment
              </button>
              <button
                onClick={() => navigateTo('contact')}
                className="border border-white/20 hover:border-white hover:bg-white/10 text-white px-8 py-3.5 rounded-xl text-sm font-semibold transition-all cursor-pointer"
              >
                Book Custom Discovery Call
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
