import React, { useState } from 'react';
import { PageType } from '../types';
import {
  CheckCircle,
  HelpCircle,
  ChevronRight,
  Shield,
  Sparkles,
  Award,
  Users
} from 'lucide-react';

interface PricingPageProps {
  navigateTo: (page: PageType) => void;
  openContactModal: (type?: string) => void;
}

export default function PricingPage({ navigateTo, openContactModal }: PricingPageProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const tiers = [
    {
      name: 'Clinical Pioneer',
      desc: 'Perfect for local clinical setups or early-stage diagnostic labs.',
      priceMonthly: 799,
      priceAnnual: 639,
      popular: false,
      features: [
        'Cloud-based QMS SOP document controls',
        'Basic personnel record tracker',
        'Automated instrument calibration alerts',
        'Annual remote mock inspection (1 checklist)',
        'Standard HL7 email logging support'
      ],
      cta: 'Request Pioneer Trial'
    },
    {
      name: 'Laboratory Professional',
      desc: 'Our most popular plan, designed for commercial reference labs and somatic diagnostic sites.',
      priceMonthly: 1899,
      priceAnnual: 1499,
      popular: true,
      features: [
        'Unlimited QMS SOP version control files',
        '6-Element digital competency trackers',
        'Multi-site instrument QC calibration logs',
        'Bi-annual mock audits with peer inspectors',
        'Integrated HL7 and FHIR API synchronization',
        '24/7 Regulatory citation helpline support'
      ],
      cta: 'Deploy Professional Suite'
    },
    {
      name: 'Enterprise System',
      desc: 'Custom-calibrated for multi-site hospital health networks and nationwide clinical entities.',
      priceMonthly: 'Custom',
      priceAnnual: 'Custom',
      popular: false,
      features: [
        'Unlimited site configurations and syncs',
        'Dedicated pre-qualified fractional HCLD director placement',
        'On-site inspection week defense & pre-drills',
        'ISO 15189 global transition mapping',
        'Dedicated HIPAA enterprise database cluster',
        'Custom SLAs and dedicated technical support account managers'
      ],
      cta: 'Contact Enterprise Advisory'
    }
  ];

  return (
    <div className="bg-[#EAF6F5]/30 min-h-screen pt-24 pb-20 text-left animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs text-gray-400 mb-8 font-mono">
          <button onClick={() => navigateTo('home')} className="hover:text-[#0D5C63]">HOME</button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#12303A] font-bold uppercase">PRICING & PACKAGES</span>
        </div>

        {/* Header segment */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-mono font-bold text-[#0D5C63] uppercase tracking-widest px-3 py-1 bg-[#EAF6F5] rounded-full">
            Transparent SaaS & Advisory Tiers
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12303A] tracking-tight">
            Compliance safety, packaged with premium value
          </h1>
          <p className="text-xs text-gray-500 leading-relaxed max-w-xl mx-auto">
            Say goodbye to unexpected hourly fees. We combine our premium compliance tracking SaaS with hands-on, credentialed laboratory audits under one straightforward subscription.
          </p>

          {/* Toggle Billing Cycle */}
          <div className="flex items-center justify-center space-x-3 pt-4">
            <span className={`text-xs font-semibold ${billingCycle === 'monthly' ? 'text-[#0D5C63]' : 'text-gray-400'}`}>
              Monthly billing
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="w-12 h-6 bg-[#0D5C63] rounded-full p-1 relative transition-all cursor-pointer"
              aria-label="Toggle billing cycle"
            >
              <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${billingCycle === 'annual' ? 'right-1' : 'left-1'}`} />
            </button>
            <span className={`text-xs font-semibold ${billingCycle === 'annual' ? 'text-[#0D5C63]' : 'text-gray-400'} flex items-center`}>
              <span>Annual billing</span>
              <span className="ml-1.5 px-2 py-0.5 rounded-full bg-[#E63946] text-[9px] font-mono font-bold text-white uppercase animate-pulse">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl border shadow-sm p-8 flex flex-col justify-between relative text-left transition-all ${
                tier.popular
                  ? 'border-[#0D5C63] ring-2 ring-[#0D5C63]/20 shadow-lg'
                  : 'border-gray-200 hover:border-[#0D5C63]/50'
              }`}
            >
              {tier.popular && (
                <span className="absolute top-0 right-8 -translate-y-1/2 bg-[#E63946] text-white text-[9px] font-mono font-bold uppercase px-3 py-1 rounded-full tracking-wider">
                  Most Popular
                </span>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-[#12303A]">{tier.name}</h3>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    {tier.desc}
                  </p>
                </div>

                {/* Price Display */}
                <div className="py-4 border-t border-b border-gray-100 flex items-baseline">
                  {typeof tier.priceMonthly === 'string' ? (
                    <span className="text-3xl font-black text-[#12303A] font-mono">Custom Pricing</span>
                  ) : (
                    <>
                      <span className="text-4xl font-black text-[#12303A] font-mono">
                        ${billingCycle === 'annual' ? tier.priceAnnual : tier.priceMonthly}
                      </span>
                      <span className="text-xs text-gray-400 font-medium ml-2">/ month, billed {billingCycle}</span>
                    </>
                  )}
                </div>

                {/* Feature checklist */}
                <div className="space-y-3">
                  <span className="block text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">
                    WHAT IS INCLUDED:
                  </span>
                  <ul className="space-y-2.5">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs text-gray-700 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-[#0D5C63] mr-2 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => openContactModal(`${tier.name} package query`)}
                  className={`w-full py-3 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                    tier.popular
                      ? 'bg-[#0D5C63] hover:bg-[#12303A] text-white shadow'
                      : 'bg-[#EAF6F5] hover:bg-[#0D5C63] text-[#0D5C63] hover:text-white'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Security disclaimer */}
        <div className="bg-[#12303A] text-white p-6 rounded-3xl text-xs flex items-center justify-between flex-col md:flex-row gap-4 border border-[#0D5C63]/25 shadow">
          <div className="space-y-1 text-left">
            <span className="font-bold text-[#EAF6F5] block">Continuous Inspection Guarantee</span>
            <p className="text-gray-400 text-[11px] leading-relaxed">
              All plans include legal coverage for citation defense. If your clinical site is cited for QMS document controls during an audit week, we resolve it within 48 hours for free.
            </p>
          </div>
          <button
            onClick={() => openContactModal('Guarantee audit inquiry')}
            className="bg-[#0D5C63] hover:bg-white hover:text-[#12303A] px-5 py-2.5 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer"
          >
            Review Terms & Conditions
          </button>
        </div>

      </div>
    </div>
  );
}
