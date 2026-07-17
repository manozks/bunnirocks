import React from 'react';
import { PageType } from '../types';
import { ShieldAlert, ArrowLeft, HelpCircle } from 'lucide-react';

interface NotFoundProps {
  navigateTo: (page: PageType) => void;
}

export default function NotFoundPage({ navigateTo }: NotFoundProps) {
  return (
    <div className="bg-[#EAF6F5]/40 min-h-screen pt-24 pb-20 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl border border-[#0D5C63]/10 p-8 sm:p-12 shadow-xl max-w-md w-full text-center space-y-6">
        
        {/* Visual Citation alert */}
        <div className="w-16 h-16 bg-red-50 text-[#E63946] rounded-2xl flex items-center justify-center mx-auto border border-red-100">
          <ShieldAlert className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold text-[#12303A] font-mono">404 Citation</h1>
          <span className="block text-xs font-mono font-bold text-[#E63946] uppercase tracking-wider">
            SOP PATHWAY NOT RETRIEVED
          </span>
          <p className="text-xs text-gray-500 leading-relaxed max-w-xs mx-auto">
            The requested technical compliance page is not found or has been archived under previous CAP checklist cycles.
          </p>
        </div>

        {/* Diagnostic help */}
        <div className="p-4 bg-[#EAF6F5] rounded-xl border border-[#0D5C63]/10 text-left flex items-start space-x-2">
          <HelpCircle className="w-5 h-5 text-[#0D5C63] shrink-0 mt-0.5" />
          <div className="text-[10px] text-gray-600 leading-normal">
            <strong>Diagnostic advice:</strong> Double check the active hash parameters (e.g. #home or #pricing), or click below to return immediately to the main dashboard.
          </div>
        </div>

        <button
          onClick={() => navigateTo('home')}
          className="w-full bg-[#12303A] hover:bg-[#0D5C63] text-white py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Dashboard</span>
        </button>

      </div>
    </div>
  );
}
