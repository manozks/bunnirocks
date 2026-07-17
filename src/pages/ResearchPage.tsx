import React, { useState } from 'react';
import { PageType } from '../types';
import {
  TrendingUp,
  ChevronRight,
  BookOpen,
  Calculator,
  CheckCircle,
  HelpCircle,
  Sparkles,
  ArrowRight,
  FileText,
  Lock,
  Building,
  Dna
} from 'lucide-react';

interface ResearchProps {
  navigateTo: (page: PageType) => void;
  openContactModal: (type?: string) => void;
}

export default function ResearchPage({ navigateTo, openContactModal }: ResearchProps) {
  // ROI Calculator state variables
  const [staffCount, setStaffCount] = useState(12);
  const [hoursPrep, setHoursPrep] = useState(15); // hours per staff per week spent on paper logs
  const [averageWage, setAverageWage] = useState(45); // USD wage per hour of MLS staff

  const calculateROI = () => {
    // Annual time spent on regulatory tracking (weeks = 52)
    const currentHours = staffCount * hoursPrep * 52;
    const currentCost = currentHours * averageWage;

    // Moving to BunniRocks yields an average 78% reduction in paper prep time
    const savedHours = Math.round(currentHours * 0.78);
    const savedDollars = Math.round(currentCost * 0.78);

    return {
      currentCost: currentCost.toLocaleString(),
      savedHours: savedHours.toLocaleString(),
      savedDollars: savedDollars.toLocaleString(),
    };
  };

  const roi = calculateROI();

  const studies = [
    {
      title: 'Decentralized QMS: Optimizing Multi-site Turnaround Times',
      published: 'Journal of Pathology Automation, June 2026',
      excerpt: 'Evaluating the direct clinical correlation between decentralized digital quality networks and acute somatic mutation panel report delivery timelines.',
      author: 'Dr. Evelyn Martinez, PhD'
    },
    {
      title: 'Reducing False Deficiencies in Peer-Review Inspections',
      published: 'Compliance Intelligence Quarterly, March 2026',
      excerpt: 'A comprehensive study of over 300 CAP audits, analyzing how digital calibration trails prevent mistaken citations by rotating reviewer personnel.',
      author: 'Samantha Albright, JD, RAC'
    }
  ];

  return (
    <div className="bg-[#EAF6F5]/30 min-h-screen pt-24 pb-20 text-left animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs text-gray-400 mb-8 font-mono">
          <button onClick={() => navigateTo('home')} className="hover:text-[#0D5C63]">HOME</button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#12303A] font-bold uppercase">RESEARCH HUB & METRICS</span>
        </div>

        {/* Header segment */}
        <div className="max-w-2xl text-left space-y-2 mb-12">
          <span className="text-xs font-mono font-bold text-[#0D5C63] uppercase tracking-wider block">
            CLINICAL STUDIES & DATA
          </span>
          <h1 className="text-3xl font-extrabold text-[#12303A] tracking-tight">
            Laboratory Optimization Research & ROI Metrics
          </h1>
          <p className="text-xs text-gray-500 leading-relaxed">
            Review original compliance studies written by our board-credentialed inspectors, and calculate your custom operational ROI using our laboratory staff time calculator.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive ROI Calculator */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-[#0D5C63]/10 shadow-sm space-y-6">
            
            <div className="flex items-center space-x-2">
              <Calculator className="w-5 h-5 text-[#0D5C63]" />
              <h3 className="text-lg font-bold text-[#12303A]">Clinical Staff ROI Calculator</h3>
            </div>
            
            <p className="text-xs text-gray-500 leading-relaxed">
              Calculate how moving from manual paper binders to BunniRocks compliance tracking software saves MLS/ASCP technician labor hours and operational overhead annually.
            </p>

            <div className="space-y-4">
              {/* Variable A: Staff Count */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-[#12303A] mb-1">
                  <span>Number of Laboratory Technicians (ASCP):</span>
                  <span className="font-mono text-[#0D5C63] font-bold">{staffCount} Personnel</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="100"
                  value={staffCount}
                  onChange={(e) => setStaffCount(parseInt(e.target.value))}
                  className="w-full accent-[#0D5C63]"
                />
              </div>

              {/* Variable B: Prep Hours */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-[#12303A] mb-1">
                  <span>Paper Log Prep Hours per Staff / Week:</span>
                  <span className="font-mono text-[#0D5C63] font-bold">{hoursPrep} Hours</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="40"
                  value={hoursPrep}
                  onChange={(e) => setHoursPrep(parseInt(e.target.value))}
                  className="w-full accent-[#0D5C63]"
                />
              </div>

              {/* Variable C: Wage */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-[#12303A] mb-1">
                  <span>Average Wage (USD per Hour):</span>
                  <span className="font-mono text-[#0D5C63] font-bold">${averageWage} / Hr</span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="100"
                  value={averageWage}
                  onChange={(e) => setAverageWage(parseInt(e.target.value))}
                  className="w-full accent-[#0D5C63]"
                />
              </div>
            </div>

            {/* Calculations results card */}
            <div className="p-6 bg-[#EAF6F5] rounded-2xl border border-[#0D5C63]/15 space-y-4 text-center">
              <span className="block text-[10px] font-mono font-bold text-[#0D5C63] uppercase tracking-wider">
                CALCULATED ANNUAL COMPLIANCE SAVINGS
              </span>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-gray-100">
                  <span className="block text-[9px] font-mono font-bold text-gray-400 uppercase">TECHNICIAN LABOR SAVED</span>
                  <span className="block text-xl font-black text-[#0D5C63] font-mono mt-1">{roi.savedHours} Hrs</span>
                  <span className="block text-[9px] text-gray-400 mt-1">Reallocated to active testing</span>
                </div>
                <div className="bg-white p-4 rounded-xl border border-gray-100">
                  <span className="block text-[9px] font-mono font-bold text-gray-400 uppercase">RECOVERY OVERHEAD VALUE</span>
                  <span className="block text-xl font-black text-[#12303A] font-mono mt-1">${roi.savedDollars}</span>
                  <span className="block text-[9px] text-gray-400 mt-1">Annual salary recovery value</span>
                </div>
              </div>

              <p className="text-[10px] text-gray-500 leading-normal">
                Estimated current paper compliance spending: <strong>${roi.currentCost} / Yr</strong>. Calculations assume standard labor conversion rates of 78% automation gains as observed across BunniRocks clinical cohorts.
              </p>
            </div>

          </div>

          {/* Right Column: Research papers & files */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white p-6 rounded-3xl border border-[#0D5C63]/10 shadow-sm space-y-4 text-left">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5 text-[#0D5C63]" />
                <h3 className="font-bold text-[#12303A] text-sm sm:text-base">Scientific Publications</h3>
              </div>
              <p className="text-xs text-gray-500 leading-normal">
                Review verified technical publications evaluating our laboratory QMS methodologies.
              </p>

              {/* Studies details cards */}
              <div className="space-y-4 pt-2">
                {studies.map((std, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 space-y-2">
                    <span className="inline-flex px-2 py-0.5 rounded bg-[#EAF6F5] text-[9px] font-mono text-[#0D5C63] font-bold uppercase">
                      {std.published}
                    </span>
                    <h4 className="text-xs font-bold text-[#12303A] hover:text-[#0D5C63] transition-colors">
                      {std.title}
                    </h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed font-light">
                      {std.excerpt}
                    </p>
                    <span className="block text-[10px] text-gray-400 font-mono">Lead author: {std.author}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Request study print card */}
            <div className="bg-[#12303A] text-white p-6 rounded-3xl text-left space-y-3 border border-[#0D5C63]/25">
              <span className="text-[10px] font-mono font-bold text-[#0D5C63] uppercase tracking-wider block">
                PEER COHORTS
              </span>
              <h3 className="font-bold text-sm sm:text-base">Inquire about our oncology validation clinical metrics</h3>
              <p className="text-[11px] text-gray-300 leading-relaxed font-light">
                Need anonymized validation statistics, limit-of-detection AMR curves, or clinical efficacy files for somatic panels? Contact our review coordinators.
              </p>
              <button
                onClick={() => openContactModal('Request clinical somatic validation statistics')}
                className="w-full bg-[#0D5C63] hover:bg-white hover:text-[#12303A] text-white text-xs font-bold py-2.5 rounded-xl transition-all cursor-pointer"
              >
                Inquire About Studies
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
