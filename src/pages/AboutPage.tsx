import React, { useState } from 'react';
import { PageType, Leader, CareerOpportunity } from '../types';
import { LEADERS, CAREERS } from '../data';
import {
  Award,
  Linkedin,
  ChevronRight,
  Briefcase,
  Users,
  MapPin,
  Clock,
  ShieldCheck,
  Globe,
  PlusCircle,
  FileText
} from 'lucide-react';

interface AboutPageProps {
  initialSubSection: 'about' | 'leadership' | 'careers' | 'testimonials';
  navigateTo: (page: PageType) => void;
  openContactModal: (type?: string) => void;
}

export default function AboutPage({ initialSubSection, navigateTo, openContactModal }: AboutPageProps) {
  const [activeSection, setActiveSection] = useState<'about' | 'leadership' | 'careers' | 'testimonials'>(initialSubSection);
  
  // Job application state
  const [appliedJobId, setAppliedJobId] = useState<string | null>(null);
  const [applyingJob, setApplyingJob] = useState<CareerOpportunity | null>(null);
  const [resumeName, setResumeName] = useState('');
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  const handleApply = (job: CareerOpportunity) => {
    setApplyingJob(job);
    setResumeName('');
    setAppliedSuccess(false);
  };

  const submitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resumeName.trim()) return;
    setAppliedSuccess(true);
    setTimeout(() => {
      setAppliedJobId(applyingJob?.id || null);
      setApplyingJob(null);
    }, 1500);
  };

  return (
    <div className="bg-[#EAF6F5]/30 min-h-screen pt-24 pb-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumbs & Subsection Selector */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-gray-200/80 mb-10 gap-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-xs text-gray-400 font-mono">
              <button onClick={() => navigateTo('home')} className="hover:text-[#0D5C63]">HOME</button>
              <ChevronRight className="w-3 h-3" />
              <span className="text-gray-500 font-bold uppercase">COMPANY</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-[#0D5C63] font-bold uppercase">{activeSection}</span>
            </div>
            <h1 className="text-3xl font-extrabold text-[#12303A] tracking-tight">
              About BunniRocks LLC
            </h1>
          </div>

          {/* Quick Sub-tab selector */}
          <div className="flex bg-white p-1.5 rounded-2xl border border-gray-200 shadow-sm overflow-x-auto">
            {(['about', 'leadership', 'careers', 'testimonials'] as const).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all whitespace-nowrap cursor-pointer ${
                  activeSection === section
                    ? 'bg-[#0D5C63] text-white'
                    : 'text-gray-500 hover:text-[#0D5C63]'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>

        {/* ================= SECTION A: ABOUT / STORY ================= */}
        {activeSection === 'about' && (
          <div className="space-y-12 animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex px-3 py-1 rounded-full bg-[#0D5C63]/10 text-xs font-mono font-bold text-[#0D5C63] uppercase">
                  Est. 2018 in Boston, MA
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#12303A]">
                  Protecting clinical accuracy, securing diagnostic futures.
                </h2>
                <p className="text-xs text-gray-600 leading-relaxed">
                  BunniRocks was founded by Dr. Evelyn Martinez and a group of veteran ASCP pathologists who realized that standard healthcare compliance consulting was broken. Generalized advisors did not understand molecular sequencer wet-lab calibrations, HL7 data integrations, or the strict intricacies of NY State CLEP inspections.
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Today, BunniRocks represents the premier boutique compliance agency for high-complexity diagnostic startups, regional healthcare networks, and academic research institutions. We have designed, licensed, and validated over 40 facilities across the United States.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
                    <span className="block text-xl font-extrabold text-[#0D5C63]">100%</span>
                    <span className="block text-[10px] text-gray-500 font-mono mt-0.5">CAP Audit Pass Rate</span>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
                    <span className="block text-xl font-extrabold text-[#12303A]">3.8 Days</span>
                    <span className="block text-[10px] text-gray-500 font-mono mt-0.5">Avg Validation Sync</span>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-center">
                    <span className="block text-xl font-extrabold text-[#E63946]">Zero</span>
                    <span className="block text-[10px] text-gray-500 font-mono mt-0.5">FDA Warning Letters</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 aspect-square bg-gray-100 rounded-3xl overflow-hidden border border-[#0D5C63]/10 shadow-sm relative">
                <img
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=600"
                  alt="Laboratory Compliance team at BunniRocks"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-white p-8 rounded-3xl border border-[#0D5C63]/10 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-[#12303A]">Our Uncompromising Standards</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF6F5] flex items-center justify-center text-[#0D5C63]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#12303A]">Scientific Rigor</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    We never guess. Every standard operating procedure and test validation file is reviewed by board-certified clinical laboratory pathologists.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF6F5] flex items-center justify-center text-[#0D5C63]">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#12303A]">Continuous Innovation</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    We transition laboratories away from dusty compliance binders into continuous, automated, paperless compliance software overlays.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#EAF6F5] flex items-center justify-center text-[#0D5C63]">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#12303A]">Active Partnership</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    We don't leave when audit week begins. Our directors stand side-by-side with your technicians to defend validation files directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= SECTION B: LEADERSHIP ================= */}
        {activeSection === 'leadership' && (
          <div className="space-y-8 animate-fade-in">
            <div className="max-w-2xl text-left space-y-2">
              <span className="text-xs font-mono font-bold text-[#0D5C63] uppercase tracking-wider block">
                MEET THE ADVISORS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#12303A]">
                Led by credentialed pathologists and automation experts
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed">
                Our founders are active peer-review inspectors and diagnostic lawyers. We speak the language of medical science, CMS licensing, and FDA regulations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {LEADERS.map((leader, idx) => (
                <div key={idx} className="bg-white rounded-3xl border border-[#0D5C63]/10 overflow-hidden shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
                  <div className="aspect-[4:5] w-full bg-gray-100 relative overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-5 text-left space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-[#12303A]">{leader.name}</h3>
                      <span className="block text-[10px] font-mono font-bold text-[#0D5C63] uppercase tracking-wider mt-0.5">
                        {leader.role}
                      </span>
                      <p className="text-[11px] text-gray-500 leading-relaxed mt-2">
                        {leader.bio}
                      </p>
                    </div>
                    
                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center text-[11px] font-bold text-[#0D5C63] hover:underline"
                      >
                        <Linkedin className="w-4 h-4 mr-1" />
                        <span>LinkedIn Bio</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= SECTION C: CAREERS ================= */}
        {activeSection === 'careers' && (
          <div className="space-y-8 animate-fade-in">
            <div className="max-w-2xl text-left space-y-2">
              <span className="text-xs font-mono font-bold text-[#E63946] uppercase tracking-wider block">
                WE ARE HIRING
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#12303A]">
                Join the elite unit of laboratory compliance engineers
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed">
                We combine deep pathology insights with responsive web engineering. Explore open clinical positions and technical roles below.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Job opportunities list */}
              <div className="lg:col-span-8 space-y-4">
                {CAREERS.map((job) => (
                  <div key={job.id} className="bg-white p-6 rounded-3xl border border-[#0D5C63]/10 shadow-sm text-left space-y-4 relative overflow-hidden">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <span className="inline-flex px-2 py-0.5 rounded bg-gray-100 text-[10px] font-mono font-semibold text-gray-500 uppercase">
                          {job.department}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-[#12303A] mt-1">{job.title}</h3>
                        
                        <div className="flex items-center space-x-4 text-xs text-gray-400 mt-2">
                          <span className="flex items-center"><MapPin className="w-3.5 h-3.5 mr-1 text-gray-300" /> {job.location}</span>
                          <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1 text-gray-300" /> {job.type}</span>
                        </div>
                      </div>

                      <div>
                        {appliedJobId === job.id ? (
                          <span className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-green-100 text-xs font-bold text-green-800">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-ping"></span>
                            <span>Applied Successfully</span>
                          </span>
                        ) : (
                          <button
                            onClick={() => handleApply(job)}
                            className="bg-[#0D5C63] hover:bg-[#12303A] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer"
                          >
                            Apply Now
                          </button>
                        )}
                      </div>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="space-y-1 pt-2">
                      <span className="block text-[10px] font-mono font-bold text-[#0D5C63] uppercase">REQUIREMENTS & QUALIFICATIONS:</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-500">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-[#0D5C63] mr-1.5 font-bold">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>
                ))}
              </div>

              {/* Recruitment Pitch */}
              <div className="lg:col-span-4 bg-[#EAF6F5] p-6 rounded-3xl border border-[#0D5C63]/10 text-left space-y-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#0D5C63]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm sm:text-base text-[#12303A]">Why build your career at BunniRocks?</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  We are a remote-first clinical consulting team of ASCP scientists, CAD designers, and SaaS product developers. We solve high-stakes regulatory challenges for leading cancer hubs and diagnostic start-ups.
                </p>
                <div className="pt-2 border-t border-gray-200 text-xs space-y-2">
                  <span className="block font-bold">Standard Perquisites:</span>
                  <ul className="space-y-1 text-gray-500">
                    <li>• 100% Employer Paid Health Plans</li>
                    <li>• ASCP Continuing Ed. Subsidies</li>
                    <li>• Generous Home Office Allowances</li>
                    <li>• Bi-Annual Company retreats</li>
                  </ul>
                </div>
              </div>

            </div>

            {/* Application Modal Popup overlay */}
            {applyingJob && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <div className="absolute inset-0 bg-[#12303A]/60 backdrop-blur-sm" onClick={() => setApplyingJob(null)} />
                <div className="bg-white rounded-3xl border border-[#0D5C63]/15 shadow-2xl p-6 sm:p-8 relative max-w-md w-full z-10 space-y-4 text-left animate-scale-up">
                  <h3 className="text-lg font-bold text-[#12303A]">Apply for {applyingJob.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    You are applying to our <strong>{applyingJob.department}</strong> division in <strong>{applyingJob.location}</strong>.
                  </p>
                  
                  {appliedSuccess ? (
                    <div className="p-4 bg-green-50 rounded-2xl border border-green-200 text-center space-y-2">
                      <span className="block font-bold text-green-800 text-sm">Application Sent!</span>
                      <p className="text-xs text-green-600">
                        Our compliance talent scouts will review your ASCP transcripts and resume details shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={submitApplication} className="space-y-3">
                      <div>
                        <label className="block text-xs font-semibold text-[#12303A] mb-1">ASCP Credential Number *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. MT-ASCP-190283"
                          className="w-full px-4 py-2 border border-gray-200 rounded-xl text-xs focus:ring-2 focus:ring-[#0D5C63]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#12303A] mb-1">Resume Link or Full Name *</label>
                        <input
                          type="text"
                          required
                          value={resumeName}
                          onChange={(e) => setResumeName(e.target.value)}
                          placeholder="e.g. John Doe, MS, MLS"
                          className="w-full px-4 py-2 border border-gray-200 rounded-xl text-xs focus:ring-2 focus:ring-[#0D5C63]"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#12303A] text-white py-2.5 rounded-xl text-xs font-bold hover:bg-[#0D5C63] transition-all"
                      >
                        Submit Application
                      </button>
                    </form>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= SECTION D: TESTIMONIALS ================= */}
        {activeSection === 'testimonials' && (
          <div className="space-y-10 animate-fade-in">
            <div className="max-w-2xl text-left space-y-2">
              <span className="text-xs font-mono font-bold text-[#0D5C63] uppercase tracking-wider block">
                ENDORSEMENTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#12303A]">
                What diagnostic pioneers say about our validation work
              </h2>
              <p className="text-xs text-gray-500 leading-relaxed">
                Read direct endorsements from commercial laboratory directors and chief pathology officers who navigated CAP accreditation with BunniRocks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-[#0D5C63]/10 shadow-sm space-y-6 text-left">
                <p className="text-sm sm:text-base text-[#12303A] italic leading-relaxed font-light">
                  "BunniRocks is the ultimate partner for Next-Generation Sequencing (NGS) validation. They established our dry-lab pipeline standards, wrote 400 pages of wet-lab validation logs, and coordinated directly with the New York CLEP reviewers. They saved us six months of licensing delay."
                </p>
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-[#0D5C63] text-white flex items-center justify-center font-bold text-xs">CV</div>
                  <div>
                    <h4 className="text-xs font-bold text-[#12303A]">Dr. Catherine Voss, MD, PhD</h4>
                    <p className="text-[10px] text-gray-500">Executive Director, OncoPath Cancer Centers</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-[#0D5C63]/10 shadow-sm space-y-6 text-left">
                <p className="text-sm sm:text-base text-[#12303A] italic leading-relaxed font-light">
                  "Faced with consecutive state citations regarding competency assessments (GEN.555), our hospital network brought in BunniRocks. They centralized our training files, retrained our supervisors, and successfully defended our corrective action plans. Simply outstanding."
                </p>
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-[#12303A] text-white flex items-center justify-center font-bold text-xs">GV</div>
                  <div>
                    <h4 className="text-xs font-bold text-[#12303A]">Gerald Vance, MS, MT(ASCP)</h4>
                    <p className="text-[10px] text-gray-500">Senior Pathology Coordinator, MetroHealth regional network</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
