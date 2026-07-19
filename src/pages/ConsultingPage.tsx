import React from 'react';
import { PageType } from '../types';
import {
  FlaskConical,
  Activity,
  Users,
  Layers,
  Globe,
  TrendingUp,
  Shield,
  Award,
  FileText,
  CheckCircle,
  HelpCircle,
  Plus,
  ArrowRight,
  ShieldAlert,
  Dna,
  Server,
  Wrench,
  ChevronRight
} from 'lucide-react';

interface ConsultingPageProps {
  subPage: PageType;
  navigateTo: (page: PageType) => void;
  openContactModal: (type?: string) => void;
}

export default function ConsultingPage({ subPage, navigateTo, openContactModal }: ConsultingPageProps) {
  
  // Custom specifications based on the selected consulting area
  const getSubPageDetails = () => {
    switch (subPage) {
      case 'consulting-builds':
        return {
          category: 'Launch',
          title: 'New Laboratory Builds & Cleanroom Design',
          subtitle: 'Designing high-throughput, compliant biosafety facilities from concept to validation.',
          desc: 'A clinical laboratory is not a standard office. It requires precise HVAC air pressurization, strict hazardous material storage, specialized automation layouts, and ergonomic biosafety sequencing to avoid cross-contamination of clinical samples.',
          icon: FlaskConical,
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
          requirements: [
            'BSL-2 or BSL-3 diagnostic airflow balance calculations',
            'Sourcing high-throughput clinical instrumentation (Roche, Beckman, Illumina)',
            'Cleanroom molecular sequencing dry-lab configuration',
            'Emergency backup generator load specs and hazard protection zoning',
            'Emergency eyewash and safety shower plumbing compliance'
          ],
          deliverables: [
            'Full CAD/Revit layout architectural schematics',
            'Airflow balancing maps (negative pressure rooms for somatic testing)',
            'Instrument electricity and plumbing requirement matrices',
            'Pre-construction regulatory review documentation'
          ]
        };

      case 'consulting-validation':
        return {
          category: 'Launch',
          title: 'High-Complexity Assay & Test Validation',
          subtitle: 'Wet-lab and dry-lab clinical validation files that stand up to rigorous peer review.',
          desc: 'Whether introducing high-complexity Next-Generation Sequencing (NGS), PCR infectious disease panels, or classic clinical chemistry, CMS and CAP require detailed, pre-documented evidence of analytical performance.',
          icon: Activity,
          image: 'https://manozks.github.io/bunnirocks/lab-tube.jpg',
          requirements: [
            'Accuracy, Precision, and Analytical Measurement Range (AMR) parameters',
            'Limit of Detection (LOD) and Limit of Quantitation (LOQ) wet-lab runs',
            'Interference studies (bilirubin, hemolysis, lipemia testing)',
            'Reference interval establishing (normal vs abnormal parameters)',
            'Clinical utility and validation report compilation'
          ],
          deliverables: [
            'Comprehensive validation plan and wet-lab testing matrix',
            'Statistical analysis of validation run metrics (Correlation plots)',
            'SOP-011: Standard Operating Procedure for active assay testing',
            'Complete peer-review validation binder ready for CAP/CLIA directors signature'
          ]
        };

      case 'consulting-management':
        return {
          category: 'Launch',
          title: 'Clinical Laboratory Management Services',
          subtitle: 'Interim directors, certified administrators, and robust daily operations oversight.',
          desc: 'High-complexity diagnostic laboratories must operate under strict, credentialed personnel. We source certified lab managers and provide fractional HCLD directors immediately to protect legal compliance and daily throughput quality.',
          icon: Users,
          image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
          requirements: [
            'Fulfilling Clinical Laboratory Improvement Amendments (CLIA) director status',
            'Active New York State SDOH Certificate of Qualification (CQ) placement',
            'Daily laboratory operations coaching and workflow leadership',
            'Quality control (QC) review and Proficiency Testing (PT) oversight',
            'Root-cause analysis and Corrective Actions (CAPA) implementation'
          ],
          deliverables: [
            'Fractional High-Complexity Laboratory Director (HCLD) assignment',
            'Weekly operational quality indicator scorecards',
            'Comprehensive personnel file audit (GEN.555 compliance)',
            'On-site or remote audit preparation drills'
          ]
        };

      case 'consulting-integrations':
        return {
          category: 'Integrate',
          title: 'Health System & LIS Integrations',
          subtitle: 'Standardizing laboratory information systems and QC loops across hospital networks.',
          desc: 'Hospital networks frequently expand by acquisition, resulting in disjointed laboratory systems, varying standard references, and fragmented diagnostic reports. We build smooth data loops that protect patient data integrity.',
          icon: Layers,
          image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=800',
          requirements: [
            'HL7 and FHIR clinical laboratory standard mapping',
            'Laboratory Information System (LIS) integration with Epic, Cerner, or custom EMRs',
            'Automated QC flags and diagnostic reporting synchronization',
            'Multi-site delta check protocols to catch specimen mix-ups',
            'HIPAA and SOC2 secure cloud transfer configuration'
          ],
          deliverables: [
            'Data pipeline mapping and API layout specifications',
            'HL7 interface validation reports ready for clinical launch',
            'SOP-102: LIS Downtime recovery procedures',
            'Automated multi-hospital reference interval matrices'
          ]
        };

      case 'consulting-planning':
        return {
          category: 'Integrate',
          title: 'Laboratory Layout Planning & Logistics',
          subtitle: 'Optimizing specimen routing, transportation logistics, and reagent storage footprint.',
          desc: 'Poor physical routing leads to delayed test results, degraded blood specimens, and increased operational costs. We model perfect layouts that align sample entry, accessioning, testing, and specimen archiving.',
          icon: Globe,
          image: 'https://images.unsplash.com/photo-1581093588401-f3c22d7a1f18?auto=format&fit=crop&q=80&w=800',
          requirements: [
            'Lean Six Sigma specimen routing and accessioning layouts',
            'Cold-chain transportation logistics (dry ice and ambient validation)',
            'Strategic reagent bulk storage and hazardous waste physical layouts',
            'Pneumatic tube transport safety and velocity studies',
            'Emergency specimen preservation mapping (cryogenic setups)'
          ],
          deliverables: [
            'Spaghetti diagrams of specimen workflow routing',
            'Optimized laboratory floor plan blueprint revisions',
            'Specimen courier logistics schedule and cold-chain logs',
            'Safety evacuation and chemical spill response placards'
          ]
        };

      case 'consulting-performance':
        return {
          category: 'Integrate',
          title: 'Performance & Turnaround Time (TAT) Improvement',
          subtitle: 'Streamlining lab throughput to exceed clinical provider expectations.',
          desc: 'In critical care and acute oncology, turnaround time can save lives. We identify operational bottlenecks, instrument downtime issues, and staffing constraints to accelerate your diagnostic timeline safely.',
          icon: TrendingUp,
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
          requirements: [
            'Accessioning bottleneck analysis (barcoding, automated sorting)',
            'Rethinking laboratory shifts and high-complexity personnel allocations',
            'Instrument maintenance scheduling and preventative logs',
            'Reflex testing auto-trigger configuration parameters',
            'Critical alert notification loop optimization'
          ],
          deliverables: [
            'Baseline TAT tracking and bottleneck heatmaps',
            'Optimized personnel shift scheduling spreadsheets',
            'Custom automated alert scripts for critical findings',
            'Clinical provider satisfaction scorecard templates'
          ]
        };

      case 'consulting-compliance':
        return {
          category: 'Optimize',
          title: 'CAP & CLIA Continuous Audit overlays',
          subtitle: 'Active gap monitoring, audit defense, and CMS citation mitigation.',
          desc: 'Don’t wait for your biennial inspection window to find out your laboratory director files or instrument calibration logs are missing. Our continuous audit model keeps your site inspection-ready 365 days a year.',
          icon: Shield,
          image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
          requirements: [
            'Biennial mock inspections using active CAP checklists',
            'CMS Plan of Correction (PoC) preparation and regulatory defense',
            'NY State CLEP laboratory director oversight logs',
            'Proficiency testing (PT) referral compliance mapping',
            'Pre-inspection drill exercises for laboratory staff'
          ],
          deliverables: [
            'Comprehensive mock audit findings scorecard',
            'Active gap remediation checklist (color-coded priority)',
            'Corrective and Preventative Actions (CAPA) templates',
            'Digital checklist upload and file storage sync'
          ]
        };

      case 'consulting-advising':
        return {
          category: 'Optimize',
          title: 'Regulatory Advising & QMS Construction',
          subtitle: 'Establishing robust quality frameworks that comply with ISO 15189.',
          desc: 'A clinical Quality Management System (QMS) must be structured, auditable, and easily maintained. We build custom-tailored QMS models incorporating SOP document controls, equipment maintenance alerts, and automated training logs.',
          icon: Award,
          image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
          requirements: [
            'ISO 15189 international laboratory standard transitions',
            'Standardized document control systems (version histories, direct signoffs)',
            'Quality Indicator tracking parameters (rejections, blood culture contamination)',
            'Internal audit scheduling and rotating reviewer rules',
            'Customer feedback loops and laboratory error logs'
          ],
          deliverables: [
            'Complete laboratory Quality Manual (ISO/CAP compliant)',
            'SOP-201: Quality Assurance & Continuous Improvement Standard',
            'Annual Quality Management review slide templates',
            'Configured digital QMS directory dashboard'
          ]
        };

      case 'consulting-pathology':
        default:
        return {
          category: 'Optimize',
          title: 'Pathology & Histology Lab Advisory',
          subtitle: 'Specialized workflow consulting for tissue diagnostics and digital pathology.',
          desc: 'Histology and cellular pathology represent distinct physical challenges: chemical fume handling, manual block embedding, slide tracking, and the integration of digital imaging scanners into clinical diagnosis.',
          icon: FileText,
          image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800',
          requirements: [
            'Formaldehyde monitoring systems and chemical hood compliance',
            'Slide barcoding and positive patient identification loops',
            'Digital pathology scanner validation (FDA guidance compliance)',
            'Pathology peer-review case slide distribution logs',
            'Immunohistochemistry (IHC) control tissue validation'
          ],
          deliverables: [
            'SOP-401: Formalin Safety & Spill Response protocol',
            'Digital pathology scanner validation file package',
            'Control block sourcing and tissue inventory logs',
            'Inter-pathologist slide consensus scorecards'
          ]
        };
    }
  };

  const details = getSubPageDetails();
  const IconComponent = details.icon;

  const sidebarLinks = [
    { label: 'New Lab Builds', page: 'consulting-builds' as PageType, cat: 'Launch' },
    { label: 'Test Validation', page: 'consulting-validation' as PageType, cat: 'Launch' },
    { label: 'Lab Management', page: 'consulting-management' as PageType, cat: 'Launch' },
    { label: 'Health Integrations', page: 'consulting-integrations' as PageType, cat: 'Integrate' },
    { label: 'Lab Layout Planning', page: 'consulting-planning' as PageType, cat: 'Integrate' },
    { label: 'Turnaround Time TAT', page: 'consulting-performance' as PageType, cat: 'Integrate' },
    { label: 'CAP & CLIA Auditing', page: 'consulting-compliance' as PageType, cat: 'Optimize' },
    { label: 'Regulatory QMS', page: 'consulting-advising' as PageType, cat: 'Optimize' },
    { label: 'Pathology Consulting', page: 'consulting-pathology' as PageType, cat: 'Optimize' }
  ];

  return (
    <div className="bg-[#EAF6F5]/30 min-h-screen pt-24 pb-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs text-gray-400 mb-8 font-mono">
          <button onClick={() => navigateTo('home')} className="hover:text-[#0D5C63]">HOME</button>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gray-500 font-bold uppercase">CONSULTING</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#0D5C63] font-bold uppercase">{details.category}</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#12303A] font-bold uppercase">{details.title.substring(0, 20)}...</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Sidebar Menu */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-[#0D5C63]/10 shadow-sm sticky top-28 space-y-4">
              <span className="block text-xs font-mono font-bold text-[#0D5C63] uppercase tracking-wider">
                Our Advisory Disciplines
              </span>
              <nav className="space-y-1">
                {sidebarLinks.map((link) => (
                  <button
                    key={link.page}
                    onClick={() => navigateTo(link.page)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-between ${
                      subPage === link.page
                        ? 'bg-[#0D5C63] text-white'
                        : 'text-[#12303A] hover:bg-[#EAF6F5] hover:text-[#0D5C63]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded ${
                      subPage === link.page ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {link.cat}
                    </span>
                  </button>
                ))}
              </nav>

              <div className="p-4 bg-[#EAF6F5] rounded-2xl border border-[#0D5C63]/10 space-y-2">
                <span className="block text-[10px] font-mono font-bold text-[#0D5C63]">IMMEDIATE DEFENSE?</span>
                <p className="text-[11px] text-gray-600 leading-normal">
                  Faced with CMS sanctions or a surprise state inspector check? Click below for immediate advice support.
                </p>
                <button
                  onClick={() => openContactModal('CRITICAL: State Inspection Citation')}
                  className="w-full bg-[#E63946] text-white text-[11px] font-bold py-2 rounded-xl text-center shadow"
                >
                  Request Emergency Response
                </button>
              </div>
            </div>
          </aside>

          {/* Right Main Content */}
          <main className="lg:col-span-8 space-y-10">
            
            {/* Header Area */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0D5C63]/10 border border-[#0D5C63]/20">
                <IconComponent className="w-4 h-4 text-[#0D5C63]" />
                <span className="text-[10px] font-mono font-bold text-[#0D5C63] tracking-widest uppercase">
                  {details.category} Capabilities
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#12303A] tracking-tight">
                {details.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed font-light">
                {details.subtitle}
              </p>
            </div>

            {/* Main Image */}
            <div className="aspect-[16:9] w-full rounded-3xl overflow-hidden shadow-sm border border-[#0D5C63]/5 relative bg-gray-100">
              <img
                src={details.image}
                alt={details.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Core Description */}
            <div className="bg-white p-8 rounded-3xl border border-[#0D5C63]/5 shadow-sm space-y-4">
              <h2 className="text-xl font-bold text-[#12303A]">Overview & Technical Context</h2>
              <p className="text-xs text-gray-600 leading-relaxed">
                {details.desc}
              </p>
            </div>

            {/* Two Column details: Checklists and deliverables */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Technical requirements Checklist */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#0D5C63]/10 shadow-sm space-y-4">
                <span className="text-xs font-mono font-bold text-[#0D5C63] uppercase tracking-wider block">
                  TECHNICAL CRITERIA COVERED
                </span>
                <ul className="space-y-3">
                  {details.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-[#0D5C63] mr-2.5 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Standard Deliverables list */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#0D5C63]/10 shadow-sm space-y-4">
                <span className="text-xs font-mono font-bold text-[#E63946] uppercase tracking-wider block">
                  PRIMARY DELIVERABLES INCLUDED
                </span>
                <ul className="space-y-3">
                  {details.deliverables.map((del, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-700 leading-relaxed">
                      <span className="w-5 h-5 bg-[#EAF6F5] rounded-md flex items-center justify-center text-[#0D5C63] text-[10px] font-mono font-bold mr-2.5 shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Action Card */}
            <div className="bg-[#12303A] text-white p-8 sm:p-10 rounded-3xl relative overflow-hidden border border-[#0D5C63]/30">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[#0D5C63]/25" />
              <div className="relative space-y-4 max-w-xl">
                <span className="text-[10px] font-mono font-bold text-[#0D5C63] tracking-widest uppercase">
                  GET THE COMPLIANCE ADVANTAGE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold">Deploy a board-certified advisor for {details.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Avoid costly laboratory planning errors, validation failures, or draft document loops. Our certified consulting crew is standing by.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => openContactModal(details.title)}
                    className="bg-[#0D5C63] hover:bg-[#0D5C63]/80 px-6 py-3 rounded-xl text-xs font-semibold text-white transition-all text-center cursor-pointer"
                  >
                    Request Consulting Proposal
                  </button>
                  <button
                    onClick={() => navigateTo('contact')}
                    className="border border-white/20 hover:border-white px-6 py-3 rounded-xl text-xs font-semibold text-white transition-all text-center cursor-pointer"
                  >
                    Speak with Dr. Martinez
                  </button>
                </div>
              </div>
            </div>

          </main>

        </div>
      </div>
    </div>
  );
}
