import React, { useState } from 'react';
import { PageType, CaseStudy } from '../types';
import { CASE_STUDIES } from '../data';
import {
  ChevronRight,
  ShieldCheck,
  TrendingUp,
  Award,
  ArrowLeft,
  Briefcase,
  Layers,
  Dna,
  Users
} from 'lucide-react';

interface CaseStudiesProps {
  initialCaseId?: string | null;
  navigateTo: (page: PageType) => void;
  openContactModal: (type?: string) => void;
}

export default function CaseStudies({ initialCaseId = null, navigateTo, openContactModal }: CaseStudiesProps) {
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(initialCaseId);

  const handleSelectCase = (id: string) => {
    setSelectedCaseId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedCaseId(null);
  };

  // Find the active case study details
  const activeCase = CASE_STUDIES.find((cs) => cs.id === selectedCaseId);

  return (
    <div className="bg-[#EAF6F5]/30 min-h-screen pt-24 pb-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {activeCase ? (
          /* ================= DETAIL VIEW ================= */
          <div className="space-y-10 animate-fade-in">
            
            {/* Back Button & Breadcrumbs */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <button
                onClick={handleBack}
                className="inline-flex items-center text-xs font-bold text-[#0D5C63] hover:underline cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                <span>Back to Case Catalog</span>
              </button>

              <div className="flex items-center space-x-2 text-xs text-gray-400 font-mono">
                <button onClick={() => navigateTo('home')} className="hover:text-[#0D5C63]">HOME</button>
                <ChevronRight className="w-3 h-3" />
                <button onClick={handleBack} className="hover:text-[#0D5C63]">CASE STUDIES</button>
                <ChevronRight className="w-3 h-3" />
                <span className="text-[#12303A] font-bold uppercase">{activeCase.client.substring(0, 15)}...</span>
              </div>
            </div>

            {/* Header Jumbotron */}
            <div className="bg-[#12303A] text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden border border-[#0D5C63]/20">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#0D5C63]/15 blur-2xl" />
              <div className="relative space-y-4 max-w-3xl">
                <span className="inline-flex px-3 py-1 bg-[#0D5C63]/30 text-[#EAF6F5] rounded-full text-xs font-mono font-bold uppercase">
                  {activeCase.category}
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  {activeCase.title}
                </h1>
                <p className="text-sm text-gray-300 leading-relaxed font-light">
                  Partner Facility: <strong>{activeCase.client}</strong> ({activeCase.clientType})
                </p>
              </div>
            </div>

            {/* Metrics grid - Before vs After */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeCase.metrics.map((metric, idx) => (
                <div key={idx} className="bg-white p-6 sm:p-8 rounded-3xl border border-[#0D5C63]/10 shadow-sm space-y-4 text-center relative overflow-hidden">
                  <span className="block text-xs font-mono font-bold text-gray-400 uppercase tracking-wider">
                    {metric.label}
                  </span>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-xs text-gray-400 line-through">
                      <span className="block text-[9px] font-mono uppercase text-gray-400">BEFORE:</span>
                      {metric.before}
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-300" />
                    <div className="text-xl sm:text-2xl font-black text-[#0D5C63]">
                      <span className="block text-[9px] font-mono uppercase text-[#0D5C63]">AFTER:</span>
                      {metric.after}
                    </div>
                  </div>

                  <div className="inline-flex px-3 py-1 rounded-full bg-[#EAF6F5] text-[11px] font-mono font-bold text-[#0D5C63]">
                    {metric.highlight}
                  </div>
                </div>
              ))}
            </div>

            {/* Core Story Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-8 bg-white p-8 rounded-3xl border border-[#0D5C63]/10 shadow-sm space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#12303A]">The Challenge</h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-light">
                    {activeCase.challenge}
                  </p>
                </div>

                <div className="space-y-2 border-t border-gray-100 pt-6">
                  <h3 className="text-lg font-bold text-[#12303A]">The BunniRocks Solution</h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-light">
                    {activeCase.solution}
                  </p>
                </div>
              </div>

              {/* Sidebar Action card */}
              <div className="lg:col-span-4 bg-[#EAF6F5] p-6 rounded-3xl border border-[#0D5C63]/10 space-y-4">
                <span className="block text-xs font-mono font-bold text-[#0D5C63] uppercase tracking-wider">
                  CLINICAL IMPLICATIONS
                </span>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Every validation file, equipment layout, and LLIS routing plan we deploy is backed by certified peer inspectors. We defend your clinical workflows 100% of the way.
                </p>
                <button
                  onClick={() => openContactModal(`Inquiry: ${activeCase.client}`)}
                  className="w-full bg-[#12303A] hover:bg-[#0D5C63] text-white py-3 rounded-xl text-xs font-bold transition-all text-center cursor-pointer"
                >
                  Request Similar Roadmap
                </button>
              </div>

            </div>

          </div>
        ) : (
          /* ================= CATALOG LISTING ================= */
          <div className="space-y-10 animate-fade-in">
            
            {/* Header segment */}
            <div className="max-w-2xl text-left space-y-2">
              <span className="text-xs font-mono font-bold text-[#0D5C63] uppercase tracking-wider block">
                CASE CATALOG
              </span>
              <h1 className="text-3xl font-extrabold text-[#12303A] tracking-tight">
                Real-world success stories across diagnostic verticals
              </h1>
              <p className="text-xs text-gray-500 leading-relaxed">
                Review verified documentation of how BunniRocks resolved state sanctions, accelerated molecular sequencing cleanrooms, and standardized multi-site hospital quality metrics.
              </p>
            </div>

            {/* Catalog Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {CASE_STUDIES.map((cs) => (
                <div
                  key={cs.id}
                  onClick={() => handleSelectCase(cs.id)}
                  className="bg-white rounded-3xl border border-[#0D5C63]/10 shadow-sm overflow-hidden flex flex-col justify-between text-left cursor-pointer group hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  
                  {/* Decorative head */}
                  <div className="bg-[#12303A] px-6 py-4 text-white flex items-center justify-between">
                    <span className="font-mono font-bold text-xs tracking-widest text-gray-300">{cs.logoText}</span>
                    <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#0D5C63]/30 text-[#EAF6F5]">
                      {cs.category}
                    </span>
                  </div>

                  <div className="p-6 space-y-4 flex-1">
                    <h3 className="text-base font-bold text-[#12303A] group-hover:text-[#0D5C63] transition-colors leading-snug">
                      {cs.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {cs.challenge.substring(0, 160)}...
                    </p>

                    {/* Metric Highlights snippet */}
                    <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-xs">
                      <span className="text-gray-400 font-medium">Core Metric Gain:</span>
                      <span className="font-extrabold text-[#0D5C63] font-mono">
                        {cs.metrics[0].after}
                      </span>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelectCase(cs.id);
                      }}
                      className="w-full bg-[#EAF6F5] group-hover:bg-[#0D5C63] group-hover:text-white py-2.5 rounded-xl text-center text-xs font-bold text-[#0D5C63] transition-all cursor-pointer"
                    >
                      Read Study Report
                    </button>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
