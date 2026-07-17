import React from 'react';
import { PageType } from '../types';
import { ChevronRight, ShieldCheck, FileText, ArrowLeft } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'cookie-policy';
  navigateTo: (page: PageType) => void;
}

export default function LegalPage({ type, navigateTo }: LegalPageProps) {
  
  const getLegalContent = () => {
    switch (type) {
      case 'terms':
        return {
          title: 'Terms of Service',
          lastUpdated: 'June 10, 2026',
          content: `
### 1. Acceptance of Terms
By accessing or using the BunniRocks compliance tracking platform or advisory services, you agree to comply with and be bound by these Terms of Service. These terms apply to all clinical laboratory personnel, health administrators, and directors accessing our SaaS overlay or hiring our consulting experts.

### 2. Clinical Responsibility & Disclaimers
While BunniRocks provides comprehensive standard operating procedures (SOPs), calibration monitoring templates, and mock audit feedback, **legal accountability for clinical diagnosis and final patient report sign-offs rests solely with your credentialed Laboratory Director.** Sourcing board-qualified directors is subject to state-specific regulations and agency backlogs.

### 3. Service Scope & NDAs
BunniRocks handles highly sensitive, proprietary diagnostic metrics, layout CAD blueprints, and personnel qualification qualifications. All interactions are protected under mutual non-disclosure agreements (NDAs) established immediately upon consultation sign-ups.

### 4. Software License & Security
We grant a non-transferable, non-exclusive license to access our HIPAA-secure cloud dashboard. Reverse-engineering document approval logs or attempting database injection attacks will result in immediate termination of clinical testing services and legal referrals.
          `
        };
      case 'cookie-policy':
        return {
          title: 'Cookie Policy',
          lastUpdated: 'April 20, 2026',
          content: `
### 1. Usage of Cookies
BunniRocks utilizes secure technical cookies and tracking technologies to optimize your compliance dashboard interactions, preserve secure login sessions, and log administrative quality actions.

### 2. Analytical Integrity
We use telemetry cookies (Google Analytics) to monitor how visitors navigate our resources catalog, layout planners, and ROI calculation sliders. No patient demographics or PHI (Protected Health Information) is ever recorded or tracked using marketing cookies.

### 3. Managing Preferences
Laboratory managers can disable cookie allowances inside standard browser settings. However, disabling technical session cookies will lock interactive document sign-off modules.
          `
        };
      case 'privacy':
      default:
        return {
          title: 'Privacy Policy & HIPAA Statement',
          lastUpdated: 'May 15, 2026',
          content: `
### 1. Confidentiality of Patient Demographics (HIPAA compliance)
BunniRocks is fully committed to protecting laboratory data. Our SaaS platform acts strictly as an overlay, and we operate as a **Business Associate** under active Business Associate Agreements (BAAs). We do not store, process, or sell individually identifiable Protected Health Information (PHI).

### 2. Information Sourced
We source facility contact information, clinical testing menus, instrumentation lists (e.g. Somatic Next-Generation Sequencers, automated chemistry setups), and ASCP employee qualifications for the sole purpose of rendering compliance audits and personnel validations.

### 3. Security Frameworks
All connections to our dashboard utilize TLS 1.3 encryption. Internal audits are stored on SOC2 Type II accredited database clusters, with physical security logs, automated database cold backups, and biometric server room access restrictions.
          `
        };
    }
  };

  const legal = getLegalContent();

  return (
    <div className="bg-[#EAF6F5]/30 min-h-screen pt-24 pb-20 text-left animate-fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-3xl p-8 sm:p-12 border border-[#0D5C63]/10 shadow-sm space-y-6">
        
        {/* Back Button & Navigation */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <button
            onClick={() => navigateTo('home')}
            className="inline-flex items-center text-xs font-bold text-[#0D5C63] hover:underline cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" />
            <span>Back to Home</span>
          </button>
          
          <div className="flex items-center space-x-2 text-xs text-gray-400 font-mono">
            <span>LEGAL ARCHIVE</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#12303A] font-bold uppercase">{legal.title}</span>
          </div>
        </div>

        {/* Content Header */}
        <div className="space-y-2 text-left">
          <div className="inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full bg-gray-100 text-xs text-gray-500 font-mono">
            <FileText className="w-3.5 h-3.5 text-[#0D5C63]" />
            <span>ACTIVE STATUS</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#12303A] tracking-tight">{legal.title}</h1>
          <span className="block text-[10px] font-mono text-gray-400">LAST UPDATED: {legal.lastUpdated}</span>
        </div>

        {/* Legal texts markup */}
        <article className="prose prose-sm max-w-none text-xs text-gray-600 leading-relaxed space-y-6">
          {legal.content.split('\n\n').map((para, idx) => {
            if (para.startsWith('###')) {
              return (
                <h3 key={idx} className="text-sm font-bold text-[#12303A] pt-4 border-b border-gray-100 pb-1">
                  {para.replace('###', '').trim()}
                </h3>
              );
            }
            return <p key={idx}>{para.trim()}</p>;
          })}
        </article>

      </div>
    </div>
  );
}
