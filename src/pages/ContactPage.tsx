import React, { useState } from 'react';
import { PageType } from '../types';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Calendar,
  Send,
  Lock,
  ChevronRight
} from 'lucide-react';

interface ContactPageProps {
  navigateTo: (page: PageType) => void;
  openContactModal: (type?: string) => void;
}

export default function ContactPage({ navigateTo, openContactModal }: ContactPageProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    labType: 'Clinical Lab',
    urgency: 'Standard (3-6 Months)',
    comments: ''
  });

  // Scheduling system state
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const days = ['Monday, July 20', 'Tuesday, July 21', 'Wednesday, July 22', 'Thursday, July 23'];
  const times = ['09:00 AM EST', '11:00 AM EST', '01:30 PM EST', '03:00 PM EST'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) return;
    setFormSubmitted(true);
  };

  const handleBookMeeting = () => {
    if (!selectedDay || !selectedTime) return;
    setBookingConfirmed(true);
  };

  return (
    <div className="bg-[#EAF6F5]/30 min-h-screen pt-24 pb-20 text-left animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs text-gray-400 mb-8 font-mono">
          <button onClick={() => navigateTo('home')} className="hover:text-[#0D5C63]">HOME</button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#12303A] font-bold uppercase">CONTACT US</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Info & Calendar scheduler */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-[#0D5C63] uppercase tracking-wider block">
                GET IN TOUCH
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12303A] tracking-tight">
                Connect with our senior laboratory advisors
              </h1>
              <p className="text-sm text-gray-500 leading-relaxed font-light">
                Faced with complex wet-lab validations, CAP checklist transitions, or upcoming state reviews? Arrange a direct scheduling call immediately.
              </p>
            </div>

            {/* Contact specifications card */}
            <div className="bg-white p-6 rounded-3xl border border-[#0D5C63]/10 shadow-sm space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#0D5C63] mr-3 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#12303A] uppercase tracking-wider">Corporate Headquarters</h4>
                  <p className="text-xs text-gray-600 mt-1">100 Federal Street, 24th Floor, Boston, MA 02110</p>
                </div>
              </div>

              <div className="flex items-center border-t border-gray-100 pt-4">
                <Mail className="w-5 h-5 text-[#0D5C63] mr-3 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-[#12303A] uppercase tracking-wider">Inquiries</h4>
                  <a href="mailto:compliance@bunnirocks.com" className="text-xs text-[#0D5C63] hover:underline">
                    compliance@bunnirocks.com
                  </a>
                </div>
              </div>

              <div className="flex items-center border-t border-gray-100 pt-4">
                <Phone className="w-5 h-5 text-[#0D5C63] mr-3 shrink-0" />
                <div>
                  <h4 className="text-xs font-bold text-[#12303A] uppercase tracking-wider">Advisory hotline</h4>
                  <a href="tel:+18005555227" className="text-xs text-[#0D5C63] hover:underline">
                    +1 (800) 555-LABS
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Scheduler */}
            <div className="bg-[#EAF6F5] p-6 rounded-3xl border border-[#0D5C63]/15 space-y-4 text-left">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-[#0D5C63]" />
                <h3 className="font-bold text-sm sm:text-base text-[#12303A]">Simulate Advisor Booking</h3>
              </div>

              {bookingConfirmed ? (
                <div className="p-4 bg-white rounded-2xl border border-green-200 text-center space-y-2">
                  <CheckCircle className="w-8 h-8 text-green-600 mx-auto" />
                  <span className="block font-bold text-[#12303A] text-sm">Meeting Requested!</span>
                  <p className="text-xs text-gray-500">
                    A clinical lead will call you on <strong>{selectedDay}</strong> at <strong>{selectedTime}</strong>.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Step A: Select Day */}
                  <div>
                    <span className="block text-[10px] font-mono font-bold text-gray-400 uppercase mb-2">1. Select Consultation Day:</span>
                    <div className="grid grid-cols-2 gap-2">
                      {days.map((day) => (
                        <button
                          key={day}
                          onClick={() => setSelectedDay(day)}
                          className={`p-2 rounded-xl text-[11px] font-semibold text-center border transition-all cursor-pointer ${
                            selectedDay === day
                              ? 'bg-[#0D5C63] text-white border-transparent'
                              : 'bg-white text-gray-600 border-gray-100 hover:border-[#0D5C63]'
                          }`}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step B: Select Time */}
                  {selectedDay && (
                    <div className="animate-slide-down">
                      <span className="block text-[10px] font-mono font-bold text-gray-400 uppercase mb-2">2. Select Time (EST):</span>
                      <div className="grid grid-cols-2 gap-2">
                        {times.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`p-2 rounded-xl text-[11px] font-semibold text-center border transition-all cursor-pointer ${
                              selectedTime === time
                                ? 'bg-[#0D5C63] text-white border-transparent'
                                : 'bg-white text-gray-600 border-gray-100 hover:border-[#0D5C63]'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Book Button */}
                  {selectedDay && selectedTime && (
                    <button
                      onClick={handleBookMeeting}
                      className="w-full bg-[#12303A] hover:bg-[#0D5C63] text-white text-xs font-bold py-2.5 rounded-xl transition-all"
                    >
                      Book Free Discovery Meeting
                    </button>
                  )}
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Complete Validated Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-[#0D5C63]/10 shadow-sm">
            <h3 className="text-xl font-bold text-[#12303A] mb-2">Request Laboratory Audit</h3>
            <p className="text-xs text-gray-500 mb-6 leading-relaxed">
              Have specific certification requirements or upcoming state inspection windows? Fill in basic laboratory configuration below.
            </p>

            {formSubmitted ? (
              <div className="p-8 text-center space-y-4 bg-[#EAF6F5]/50 rounded-2xl border border-[#0D5C63]/10">
                <CheckCircle className="w-12 h-12 text-[#0D5C63] mx-auto" />
                <h4 className="text-lg font-bold text-[#12303A]">Diagnostic Inquiry Logged!</h4>
                <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                  Thank you for submitting your laboratory data. Our ASCP credentialed consultant coordinator will call your corporate contact within <strong>2 hours</strong>.
                </p>
                <div className="p-3 bg-white rounded-xl text-[11px] font-mono text-[#0D5C63] text-left max-w-xs mx-auto border border-gray-100">
                  <strong>PROVISIONAL DETAILS:</strong>
                  <span className="block mt-1">Status: High Priority Assignment</span>
                  <span>Lead Inspector: Dr. Evelyn Martinez</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#12303A] mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Arthur Dent"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs focus:ring-2 focus:ring-[#0D5C63] focus:border-[#0D5C63] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#12303A] mb-1">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. adent@somaticlabs.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs focus:ring-2 focus:ring-[#0D5C63] focus:border-[#0D5C63] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#12303A] mb-1">Company / Facility *</label>
                    <input
                      type="text"
                      required
                      placeholder="Somatic Labs Boston"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs focus:ring-2 focus:ring-[#0D5C63] focus:border-[#0D5C63] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#12303A] mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 012-3456"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs focus:ring-2 focus:ring-[#0D5C63] focus:border-[#0D5C63] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#12303A] mb-1">Laboratory Type</label>
                    <select
                      value={formData.labType}
                      onChange={(e) => setFormData({ ...formData, labType: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs bg-white focus:ring-2 focus:ring-[#0D5C63]"
                    >
                      <option value="Clinical Lab">Clinical Lab</option>
                      <option value="Hospital Laboratory">Hospital Laboratory</option>
                      <option value="Reference Laboratory">Reference Laboratory</option>
                      <option value="Biotech Startups">Biotech Startups</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#12303A] mb-1">Accreditation Deadline</label>
                    <select
                      value={formData.urgency}
                      onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-xs bg-white focus:ring-2 focus:ring-[#0D5C63]"
                    >
                      <option value="Standard (3-6 Months)">Standard (3-6 Months)</option>
                      <option value="Immediate (Under 3 Months)">Immediate (Under 3 Months)</option>
                      <option value="General Planning / R&D">General Planning / R&D</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#12303A] mb-1">Detailed Specifications / Instrument Menus</label>
                  <textarea
                    rows={3}
                    placeholder="Describe diagnostic instrumentation (e.g. Illumina NextSeq, Roche Cobas), upcoming inspection dates, or critical personnel gaps..."
                    value={formData.comments}
                    onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-xl text-xs focus:ring-2 focus:ring-[#0D5C63] resize-none"
                  />
                </div>

                {/* Privacy secure badge */}
                <div className="flex items-start space-x-2 p-3 bg-gray-50 rounded-xl text-[10px] text-gray-500 border border-gray-100">
                  <Lock className="w-4 h-4 text-[#0D5C63] shrink-0 mt-0.5" />
                  <span>
                    <strong>Confidentiality Assured:</strong> BunniRocks operates under strict mutual NDAs. Sourcing validation matrices, client patient demographics (HIPAA constraints), and operational pipelines are encrypted.
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#12303A] hover:bg-[#0D5C63] text-white py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 shadow-lg shadow-[#12303A]/10 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Secure Request</span>
                </button>

              </form>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}
