import React, { useState } from 'react';
import { X, CheckCircle2, ShieldAlert, Send } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
}

export default function Modal({ isOpen, onClose, initialType = 'Comprehensive QMS Audit' }: ModalProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    labType: 'Clinical Diagnostics',
    needs: initialType,
    customMessage: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formState.name.trim()) tempErrors.name = 'Full name is required';
    if (!formState.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      tempErrors.email = 'Please provide a valid email';
    }
    if (!formState.organization.trim()) tempErrors.organization = 'Organization name is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#12303A]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Content Container */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#0D5C63]/10 overflow-hidden transform transition-all animate-scale-up z-10 max-h-[90vh] overflow-y-auto">
        
        {/* Decorative top accent */}
        <div className="h-2 bg-gradient-to-r from-[#0D5C63] via-[#E63946] to-[#12303A]" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-[#12303A]/60 hover:text-[#12303A] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 bg-[#EAF6F5] rounded-2xl flex items-center justify-center mx-auto text-[#0D5C63]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#12303A]">Assessment Request Received!</h3>
              <p className="mt-2 text-sm text-[#12303A]/80 leading-relaxed">
                Thank you for reaching out to <strong>BunniRocks</strong>. One of our credentialed clinical consultants will review your laboratory configuration and contact you within <strong>2 hours</strong> to schedule your diagnostic consultation.
              </p>
            </div>
            <div className="p-4 bg-[#EAF6F5] rounded-2xl border border-[#0D5C63]/10 text-xs font-mono text-[#0D5C63] text-left">
              <span className="font-bold block mb-1">PROVISIONAL ASSIGNMENT:</span>
              <span>Case ID: BR-{Math.floor(Math.random() * 90000) + 10000} | Assigned Expert: Dr. E. Martinez</span>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormState({
                  name: '',
                  email: '',
                  phone: '',
                  organization: '',
                  labType: 'Clinical Diagnostics',
                  needs: 'Comprehensive QMS Audit',
                  customMessage: '',
                });
                onClose();
              }}
              className="w-full bg-[#12303A] hover:bg-[#0D5C63] text-white py-3 rounded-xl text-sm font-semibold transition-all shadow-md"
            >
              Back to Site
            </button>
          </div>
        ) : (
          <div className="p-6 sm:p-8">
            <div className="mb-6">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#EAF6F5] text-xs font-mono text-[#0D5C63] font-bold uppercase tracking-wider mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E63946] animate-pulse"></span>
                <span>Immediate Priority Booking</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#12303A]">Request Laboratory Assessment</h3>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                Provide basic diagnostic specifications below. Our senior consultants deliver targeted, zero-obligation gap evaluations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name Input */}
              <div>
                <label className="block text-xs font-semibold text-[#12303A] mb-1">Your Full Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Sarah Connor, MD"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:ring-2 focus:ring-[#0D5C63] focus:border-[#0D5C63] outline-none transition-all ${
                    errors.name ? 'border-[#E63946] bg-red-50/20' : 'border-gray-200'
                  }`}
                />
                {errors.name && <p className="text-[11px] text-[#E63946] mt-0.5">{errors.name}</p>}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#12303A] mb-1">Corporate Email *</label>
                  <input
                    type="email"
                    placeholder="sconnor@healthnetwork.org"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:ring-2 focus:ring-[#0D5C63] focus:border-[#0D5C63] outline-none transition-all ${
                      errors.email ? 'border-[#E63946] bg-red-50/20' : 'border-gray-200'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-[#E63946] mt-0.5">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#12303A] mb-1">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 019-2834"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#0D5C63] focus:border-[#0D5C63] outline-none transition-all"
                  />
                </div>
              </div>

              {/* Organization */}
              <div>
                <label className="block text-xs font-semibold text-[#12303A] mb-1">Organization / Facility Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Northeast Regional Medical Lab"
                  value={formState.organization}
                  onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm focus:ring-2 focus:ring-[#0D5C63] focus:border-[#0D5C63] outline-none transition-all ${
                    errors.organization ? 'border-[#E63946] bg-red-50/20' : 'border-gray-200'
                  }`}
                />
                {errors.organization && <p className="text-[11px] text-[#E63946] mt-0.5">{errors.organization}</p>}
              </div>

              {/* Lab Type & Needs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#12303A] mb-1">Laboratory Category</label>
                  <select
                    value={formState.labType}
                    onChange={(e) => setFormState({ ...formState, labType: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm bg-white focus:ring-2 focus:ring-[#0D5C63] focus:border-[#0D5C63] outline-none"
                  >
                    <option value="Clinical Diagnostics">Clinical Diagnostics</option>
                    <option value="Hospital Laboratory">Hospital Laboratory</option>
                    <option value="Reference Laboratory">Reference Laboratory</option>
                    <option value="Biotech / Pharm Facility">Biotech / Pharm Facility</option>
                    <option value="Oncology Somatic Lab">Oncology Somatic Lab</option>
                    <option value="Research & Development">Research & Development</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#12303A] mb-1">Consulting Goal</label>
                  <select
                    value={formState.needs}
                    onChange={(e) => setFormState({ ...formState, needs: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm bg-white focus:ring-2 focus:ring-[#0D5C63] focus:border-[#0D5C63] outline-none"
                  >
                    <option value="Comprehensive QMS Audit">Comprehensive QMS Audit</option>
                    <option value="New Lab Build & Planning">New Lab Build & Planning</option>
                    <option value="Assay Validation Support">Assay Validation Support</option>
                    <option value="CAP/CLIA Inspection Defense">CAP/CLIA Inspection Defense</option>
                    <option value="FDA LDT Compliance Pathway">FDA LDT Compliance Pathway</option>
                    <option value="Fractional Lab Directorship">Fractional Lab Directorship</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-[#12303A] mb-1">Specific Deficiencies or Timelines (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Detail any upcoming inspections, critical instrumentation validation needs, or specific compliance gaps..."
                  value={formState.customMessage}
                  onChange={(e) => setFormState({ ...formState, customMessage: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-[#0D5C63] focus:border-[#0D5C63] outline-none transition-all resize-none"
                />
              </div>

              {/* Security notice */}
              <div className="flex items-start space-x-2 p-3 bg-gray-50 rounded-xl text-[10px] text-gray-500 leading-normal border border-gray-100">
                <ShieldAlert className="w-4 h-4 text-[#0D5C63] shrink-0 mt-0.5" />
                <span>
                  <strong>HIPAA Secure Transmission:</strong> BunniRocks respects absolute confidentiality. Your lab layouts, operational metrics, and inquiries are protected by active NDAs upon entry.
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#12303A] hover:bg-[#0D5C63] text-white py-3 rounded-xl text-sm font-semibold transition-all flex items-center justify-center space-x-2 shadow-lg shadow-[#12303A]/15 cursor-pointer disabled:bg-gray-400"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    <span>Analyzing Request...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Diagnostic Inquiry</span>
                  </>
                )}
              </button>

            </form>
          </div>
        )}

      </div>
    </div>
  );
}
