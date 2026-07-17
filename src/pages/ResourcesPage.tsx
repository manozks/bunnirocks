import React, { useState } from 'react';
import { PageType } from '../types';
import {
  Calculator,
  ChevronRight,
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  Clock,
  Sparkles,
  ArrowRight,
  AlertTriangle,
  Download,
  BookOpen,
  FileText
} from 'lucide-react';

interface ResourcesPageProps {
  navigateTo: (page: PageType) => void;
  openContactModal: (type?: string) => void;
}

export default function ResourcesPage({ navigateTo, openContactModal }: ResourcesPageProps) {
  // Gap Analysis interactive tool state
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, boolean>>({
    directorActive: false,
    competencyDocumented: false,
    instrumentQCLogs: false,
    validationComplete: false,
    sopDocumented: false,
  });
  const [calculating, setCalculating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Roadmap Generator states
  const [buildType, setBuildType] = useState<'clinical' | 'molecular' | 'histology'>('molecular');

  const handleCheckbox = (key: string) => {
    setAnswers((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const runAnalysis = () => {
    setCalculating(true);
    setTimeout(() => {
      setCalculating(false);
      setShowResult(true);
    }, 1200);
  };

  const getRiskScore = () => {
    const trueCount = Object.values(answers).filter(Boolean).length;
    if (trueCount === 5) return { label: 'LOW RISK', score: 100, color: 'text-green-600 bg-green-50 border-green-200', desc: 'Your facility demonstrates optimal compliance readiness. Focus on maintaining rotating continuous audits.' };
    if (trueCount >= 3) return { label: 'MODERATE RISK', score: 60, color: 'text-amber-600 bg-amber-50 border-amber-200', desc: 'Critical gaps detected in personnel documentation or logs. Resolve these prior to your audit window opening.' };
    return { label: 'SEVERE CRITICAL RISK', score: 20, color: 'text-red-600 bg-red-50 border-red-200', desc: 'Immediate jeopardy. Sourcing board-qualified directors and compiling validation folders is required immediately.' };
  };

  const risk = getRiskScore();

  const getRoadmapSteps = () => {
    switch (buildType) {
      case 'clinical':
        return [
          { phase: 'Month 1-2', title: 'Facility Design & HVAC Pressurization', desc: 'Calculate air flows, map emergency plumbing, layout accessioning paths.' },
          { phase: 'Month 3-4', title: 'Instrumentation Sourcing & LIS Interface', desc: 'Source chemistry automation setups, validate HL7 pipelines with patient charts.' },
          { phase: 'Month 5-6', title: 'Validation Runs & Certificate of Compliance', desc: 'Run accuracy panels, establishing normal ranges, CMS State Dept application.' }
        ];
      case 'histology':
        return [
          { phase: 'Month 1-2', title: 'Ventilation hoods & Chemical Safety planning', desc: 'Exhaust monitoring systems, formalin chemical response rules, safety placards.' },
          { phase: 'Month 3-4', title: 'Specimen positive identification embedding', desc: 'Establish block barcoding loops, pathologist consensual slide checks.' },
          { phase: 'Month 5-6', title: 'Digital scanner validation and test deployment', desc: 'Validate slide high-throughput scanners as medical devices (FDA compliance).' }
        ];
      case 'molecular':
      default:
        return [
          { phase: 'Month 1-2', title: 'Molecular somatics layout cleanroom design', desc: 'Layout clean molecular workflow sequencing to prevent aerosol carryovers.' },
          { phase: 'Month 3-4', title: 'NGS wet-lab validation and SOP compilations', desc: 'Evaluate accuracy, LOD, precision, establish somatic oncology checklists.' },
          { phase: 'Month 5-6', title: 'HCLD board director assignment & CAP audit', desc: 'Deploy certified High-Complexity Laboratory Director and execute mock peer audits.' }
        ];
    }
  };

  return (
    <div className="bg-[#EAF6F5]/30 min-h-screen pt-24 pb-20 text-left animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs text-gray-400 mb-8 font-mono">
          <button onClick={() => navigateTo('home')} className="hover:text-[#0D5C63]">HOME</button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#12303A] font-bold uppercase">RESOURCES & CALCULATORS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Tools */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Header segment */}
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-[#0D5C63] uppercase tracking-wider block">
                LABORATORY UTILITIES
              </span>
              <h1 className="text-3xl font-extrabold text-[#12303A] tracking-tight">
                Accreditation Roadmaps & Diagnostic Checklists
              </h1>
              <p className="text-sm text-gray-500 leading-relaxed font-light">
                Utilize our proprietary interactive gap tools below to calculate compliance exposure and generate custom-calibrated construction Gantt charts.
              </p>
            </div>

            {/* TOOL 1: Gap Analysis Calculator */}
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#0D5C63]/10 shadow-sm space-y-6">
              <div className="flex items-center space-x-2">
                <Calculator className="w-5 h-5 text-[#0D5C63]" />
                <h3 className="text-lg font-bold text-[#12303A]">Clinical Compliance Gap Analyzer</h3>
              </div>

              {showResult ? (
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 space-y-6 animate-fade-in">
                  
                  {/* Results metrics */}
                  <div className={`p-4 rounded-xl border text-center ${risk.color}`}>
                    <span className="block text-[10px] font-mono font-bold uppercase tracking-widest">Calculated Readiness Category</span>
                    <span className="block text-2xl font-black font-mono mt-1">{risk.label}</span>
                    <span className="block text-xs font-medium mt-1">Ready Score: {risk.score} / 100</span>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed font-light">
                    {risk.desc}
                  </p>

                  {/* Dynamic checklist suggestions based on answer gaps */}
                  <div className="space-y-3 pt-2">
                    <span className="block text-[10px] font-mono font-bold text-gray-400 uppercase">Immediate Remediation Requirements:</span>
                    <ul className="space-y-2 text-xs text-gray-700 font-medium">
                      {!answers.directorActive && (
                        <li className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-[#E63946] mr-2 shrink-0" />
                          <span>Source board-certified High-Complexity Lab Director immediately. Pathologists must sign off on assay menus.</span>
                        </li>
                      )}
                      {!answers.competencyDocumented && (
                        <li className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-[#E63946] mr-2 shrink-0" />
                          <span>Establish 6-element competency trackers for all laboratory technicians immediately.</span>
                        </li>
                      )}
                      {!answers.instrumentQCLogs && (
                        <li className="flex items-start">
                          <AlertTriangle className="w-4 h-4 text-[#E63946] mr-2 shrink-0" />
                          <span>Standardize daily reagent labeling, cold-storage monitors, and preventative calibration files.</span>
                        </li>
                      )}
                      {Object.values(answers).every(Boolean) && (
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-[#0D5C63] mr-2 shrink-0" />
                          <span>Remediation clear! Your laboratory is ready. Request a formal mock audit to verify checklist alignment.</span>
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-4">
                    <button
                      onClick={() => setShowResult(false)}
                      className="bg-[#EAF6F5] hover:bg-gray-100 text-[#0D5C63] text-xs font-bold px-6 py-2.5 rounded-xl cursor-pointer"
                    >
                      Re-Calculate
                    </button>
                    <button
                      onClick={() => openContactModal(`Remediation audit checklist query (Score: ${risk.score})`)}
                      className="bg-[#12303A] hover:bg-[#0D5C63] text-white text-xs font-bold px-6 py-2.5 rounded-xl cursor-pointer"
                    >
                      Request Formal Audit Review
                    </button>
                  </div>

                </div>
              ) : (
                <div className="space-y-4 text-left">
                  <span className="block text-xs text-gray-500 leading-normal mb-2">
                    Toggle your active laboratory compliance measures below. Our engine immediately generates exposure categories and remediation lists.
                  </span>

                  <div className="space-y-3">
                    <label className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 border border-gray-100 transition-all">
                      <input
                        type="checkbox"
                        checked={answers.directorActive}
                        onChange={() => handleCheckbox('directorActive')}
                        className="mt-0.5 rounded text-[#0D5C63] focus:ring-[#0D5C63]"
                      />
                      <div>
                        <span className="block text-xs font-bold text-[#12303A]">Active Pre-Qualified Laboratory Director (HCLD)</span>
                        <span className="block text-[10px] text-gray-500">Board certified director signing off on all QC proficiency runs and menus.</span>
                      </div>
                    </label>

                    <label className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 border border-gray-100 transition-all">
                      <input
                        type="checkbox"
                        checked={answers.competencyDocumented}
                        onChange={() => handleCheckbox('competencyDocumented')}
                        className="mt-0.5 rounded text-[#0D5C63] focus:ring-[#0D5C63]"
                      />
                      <div>
                        <span className="block text-xs font-bold text-[#12303A]">ASCP Competency Records (GEN.555)</span>
                        <span className="block text-[10px] text-gray-500">6-Element bi-annual direct observations documented for high-complexity test staff.</span>
                      </div>
                    </label>

                    <label className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 border border-gray-100 transition-all">
                      <input
                        type="checkbox"
                        checked={answers.instrumentQCLogs}
                        onChange={() => handleCheckbox('instrumentQCLogs')}
                        className="mt-0.5 rounded text-[#0D5C63] focus:ring-[#0D5C63]"
                      />
                      <div>
                        <span className="block text-xs font-bold text-[#12303A]">Standardized Daily Instrument & Temp QC Logs</span>
                        <span className="block text-[10px] text-gray-500">Documented calibration checks, maintenance records, and cold-chain logs.</span>
                      </div>
                    </label>

                    <label className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 border border-gray-100 transition-all">
                      <input
                        type="checkbox"
                        checked={answers.validationComplete}
                        onChange={() => handleCheckbox('validationComplete')}
                        className="mt-0.5 rounded text-[#0D5C63] focus:ring-[#0D5C63]"
                      />
                      <div>
                        <span className="block text-xs font-bold text-[#12303A]">Full Wet-lab / Dry-lab Validation Files</span>
                        <span className="block text-[10px] text-gray-500">Pre-documented AMR, analytical accuracy, limit of detection, and report catalogs.</span>
                      </div>
                    </label>

                    <label className="flex items-start space-x-3 p-3 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 border border-gray-100 transition-all">
                      <input
                        type="checkbox"
                        checked={answers.sopDocumented}
                        onChange={() => handleCheckbox('sopDocumented')}
                        className="mt-0.5 rounded text-[#0D5C63] focus:ring-[#0D5C63]"
                      />
                      <div>
                        <span className="block text-xs font-bold text-[#12303A]">Approved SOP & Document Control system</span>
                        <span className="block text-[10px] text-gray-500">Clinical SOPs reviewed and version controlled with digital signatures.</span>
                      </div>
                    </label>
                  </div>

                  <button
                    onClick={runAnalysis}
                    disabled={calculating}
                    className="w-full bg-[#12303A] hover:bg-[#0D5C63] text-white py-3 rounded-xl text-xs font-bold transition-all disabled:bg-gray-400 mt-4 flex items-center justify-center space-x-2"
                  >
                    {calculating ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Analyzing Exposure Risk...</span>
                      </>
                    ) : (
                      <>
                        <span>Calculate Readiness score</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* TOOL 2: Construction Roadmap Gantt Generator */}
            <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#0D5C63]/10 shadow-sm space-y-6">
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-[#0D5C63]" />
                <h3 className="text-lg font-bold text-[#12303A]">Interactive Lab Build Gantt Roadmap</h3>
              </div>

              {/* Selector */}
              <div className="flex space-x-2 bg-gray-100 p-1 rounded-xl">
                {(['clinical', 'molecular', 'histology'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setBuildType(type)}
                    className={`flex-1 text-center py-2 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer ${
                      buildType === type ? 'bg-[#0D5C63] text-white' : 'text-gray-500 hover:text-[#0D5C63]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              {/* Roadmap steps visual list */}
              <div className="space-y-4">
                {getRoadmapSteps().map((st, idx) => (
                  <div key={idx} className="flex items-start p-4 bg-[#EAF6F5]/40 rounded-2xl border border-[#0D5C63]/5">
                    <span className="w-10 h-10 bg-[#0D5C63]/10 text-[#0D5C63] rounded-xl flex items-center justify-center font-bold text-xs shrink-0 mr-4 font-mono">
                      {st.phase}
                    </span>
                    <div className="text-left space-y-1">
                      <h4 className="font-bold text-xs sm:text-sm text-[#12303A]">{st.title}</h4>
                      <p className="text-[11px] text-gray-500 leading-relaxed font-light">{st.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

          {/* Right Column: PDF Download Card decks */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-[#0D5C63]/10 shadow-sm space-y-4">
              <span className="block text-xs font-mono font-bold text-[#0D5C63] uppercase tracking-wider">
                Regulatory Guidebooks
              </span>
              <p className="text-xs text-gray-500 leading-relaxed">
                Download our detailed clinical briefings compiled by Board peer reviewers.
              </p>

              {/* Guide Deck */}
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <FileText className="w-5 h-5 text-[#0D5C63]" />
                    <div className="text-left">
                      <span className="block text-xs font-bold text-[#12303A]">FDA LDT Handbook</span>
                      <span className="block text-[9px] text-gray-400 font-mono">PDF (12.4 MB) // 2026 Edition</span>
                    </div>
                  </div>
                  <button onClick={() => openContactModal('Download: FDA LDT Handbook')} className="p-2 rounded-lg bg-white border hover:border-[#0D5C63] text-[#0D5C63]">
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <FileText className="w-5 h-5 text-[#0D5C63]" />
                    <div className="text-left">
                      <span className="block text-xs font-bold text-[#12303A]">CAP Checklist Prep</span>
                      <span className="block text-[9px] text-gray-400 font-mono">PDF (8.1 MB) // 2026 updates</span>
                    </div>
                  </div>
                  <button onClick={() => openContactModal('Download: CAP Checklist Prep')} className="p-2 rounded-lg bg-white border hover:border-[#0D5C63] text-[#0D5C63]">
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="p-3 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <FileText className="w-5 h-5 text-[#0D5C63]" />
                    <div className="text-left">
                      <span className="block text-xs font-bold text-[#12303A]">ISO 15189 Transition</span>
                      <span className="block text-[9px] text-gray-400 font-mono">PDF (16.2 MB) // Quality book</span>
                    </div>
                  </div>
                  <button onClick={() => openContactModal('Download: ISO 15189 Transition')} className="p-2 rounded-lg bg-white border hover:border-[#0D5C63] text-[#0D5C63]">
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Consultation block */}
            <div className="bg-[#12303A] text-white p-6 rounded-3xl text-left space-y-4 border border-[#0D5C63]/30">
              <span className="text-[10px] font-mono font-bold text-[#0D5C63] uppercase tracking-widest block">
                FREE DEMO
              </span>
              <h3 className="font-bold text-sm sm:text-base">Need help translating these calculations?</h3>
              <p className="text-[11px] text-gray-300 leading-relaxed font-light">
                Our board-certified scientists will review your specific testing menus and generate an authorized, full-scale custom gap timeline within 48 hours.
              </p>
              <button
                onClick={() => openContactModal('Custom gap calculation evaluation')}
                className="w-full bg-[#0D5C63] hover:bg-white hover:text-[#12303A] text-white text-xs font-bold py-2.5 rounded-xl transition-all"
              >
                Book Evaluation Session
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
