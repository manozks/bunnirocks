import { BlogPost, CaseStudy, Leader, CareerOpportunity, FaqItem } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'cap-inspections-2026',
    title: 'Navigating CAP Inspection Checklists: 2026 Strategy Guide',
    excerpt: 'The College of American Pathologists frequently updates its peer-review checklists. Here is how to keep your laboratory ahead of the game.',
    date: 'June 14, 2026',
    category: 'Compliance',
    readTime: '6 min read',
    author: {
      name: 'Dr. Evelyn Martinez, PhD',
      role: 'Director of Pathology Advisory Services',
      avatar: 'EM'
    },
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600',
    content: `
### Understanding the College of American Pathologists (CAP) Peer-Review Process

The College of American Pathologists (CAP) Accreditation Program is recognized globally as the gold standard in laboratory quality assurance. Unlike other regulatory bodies, CAP uses a unique peer-review methodology, recruiting practicing laboratory professionals to conduct site inspections.

For lab managers, preparing for a CAP inspection can feel like aiming at a moving target. Checklists are updated annually, incorporating new technology standards, molecular diagnostics guidelines, and enhanced biosafety measures.

### 1. Maintain a Continuous Readiness Culture
The most common mistake laboratories make is "panic-preparing" three months before the inspection window opens. High-performing laboratories operate in a state of continuous readiness.
- **Bi-weekly Quality Audits:** Establish rotating internal audit teams that review randomly selected sections of the checklist every two weeks.
- **Traceability Drill:** Pick five random samples from the past six months and trace them from order entry to final report within two hours. If you cannot produce the entire audit trail, your documentation has a gap.

### 2. Address the Top 3 Deficiencies
Historically, CAP inspections yield the same common citations:
- **COM.01200 (Activity Menu):** The laboratory's active testing menu does not perfectly match the CAP activity list. Ensure your laboratory director reviews and updates this list quarterly.
- **GEN.55500 (Competency Assessment):** Training files must show direct observation, monitoring of recording, and review of intermediate test results. Our audit experts find that up to 45% of competency files are missing at least one of the six required elements for non-waived testing.
- **CHM.12100 (Reagent Labeling):** Reagents must be labeled with preparation date, expiration date, and storage instructions upon receipt or preparation.

### 3. Leverage Digital Compliance Dashboards
Modern laboratory consulting, such as BunniRocks' SaaS integration, eliminates binders and paper records. Moving your document control, competency tracking, and instrument logs into a secure digital environment ensures real-time compliance tracking that can be audited remotely at any time.

Our clients who transitioned from paper-based tracking to the BunniRocks SaaS dashboard saw a **94% reduction** in minor inspection citations and saved an average of 18 hours per week in regulatory prep.
    `
  },
  {
    id: 'clia-ld-requirements',
    title: 'New CLIA Rules for Laboratory Directors: Are You Qualified?',
    excerpt: 'Recent updates from CMS have tightened the qualification pathways for High-Complexity Laboratory Directors. Learn how this impacts your lab planning.',
    date: 'May 28, 2026',
    category: 'Accreditation',
    readTime: '8 min read',
    author: {
      name: 'Gerald Vance, MS, MT(ASCP)',
      role: 'Senior Lab Management Consultant',
      avatar: 'GV'
    },
    image: 'https://images.unsplash.com/photo-1579154204601-01588f35116f?auto=format&fit=crop&q=80&w=600',
    content: `
### CMS Tightens Qualification Pathways

The Centers for Medicare & Medicaid Services (CMS) has finalized its sweeping updates to the Clinical Laboratory Improvement Amendments (CLIA) personnel requirements. The goal is simple: raise the bar for clinical oversight to protect patient safety. However, for diagnostic start-ups, these new guidelines introduce significant recruitment and organizational hurdles.

### What Has Changed?

The core revision targets the educational and training standards for High-Complexity Laboratory Directors (HCLD). Under the new guidelines:
1. **Board Certification Strictness:** Ph.D. directors must possess specific, accredited board certifications (such as the ABB, ABCC, or ABMM) immediately upon hire—provisional status is no longer recognized.
2. **Documented Lab Experience:** The 20 hours of CME pathway has been replaced with a requirement for at least 2 years of hands-on laboratory experience supervising high-complexity testing.
3. **Multi-Site Directorship Limits:** CLIA limits a single individual to directing a maximum of five clinical laboratories. CMS is actively auditing digital signatures to enforce this rule strictly.

### Strategic Impact on Lab Planning

If you are planning a New Lab Build or looking to expand your test menu to include molecular sequencing (NGS), securing a qualified HCLD is your critical path item.

- **Pre-Build Recruitment:** Do not wait until your laboratory build-out is complete to source your director. A qualified HCLD must sign off on design drawings, biosafety setups, and primary validation protocols.
- **Outsourced Co-Directorship:** For early-stage biotech and clinical diagnostics ventures, partnering with a consulting group like BunniRocks provides fractional, pre-qualified Laboratory Directors to guide you through the initial CLI/CAP licensing phase without the overhead of a full-time executive salary.
    `
  },
  {
    id: 'ldt-fda-ruling-2026',
    title: 'The FDA Laboratory Developed Test (LDT) Final Rule: Roadmap to 2028',
    excerpt: 'The FDA phaseout of enforcement discretion for LDTs is actively progressing. We outline the immediate compliance milestones for clinical labs.',
    date: 'April 12, 2026',
    category: 'Industry News',
    readTime: '10 min read',
    author: {
      name: 'Samantha Albright, JD, RAC',
      role: 'VP of Regulatory & Quality Systems',
      avatar: 'SA'
    },
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=600',
    content: `
### The Regulatory Landscape Shakes Up

The FDA’s regulatory oversight of Laboratory Developed Tests (LDTs) is officially underway, following the phased rollback of enforcement discretion. For decades, laboratories designed, validated, and performed assays in-house under CLIA oversight without FDA premarket review.

That era is ending. By treating LDTs as medical devices (IVDs), the FDA is requiring labs to adopt medical device quality systems (21 CFR Part 820), report adverse events, and ultimately submit tests for 510(k) or De Novo clearance.

### Critical Phase Milestones

Laboratories must hit distinct compliance checkpoints to avoid severe enforcement actions:

* **Phase 1 (Active Now):** Medical Device Reporting (MDR) requirements and Correction & Removal reporting are fully active. Labs must establish formal procedures to identify and report serious adverse events.
* **Phase 2 (May 2027):** Labeling requirements, investigational use requirements, and registration & listing protocols must be in place.
* **Phase 3 (May 2028):** Complete Quality System (QS) requirements go live. All laboratories manufacturing LDTs must operate under formal design controls, purchasing controls, and document management.

### How Laboratories Must Prepare

This shift represents a massive cultural and operational pivot for academic medical centers, diagnostic labs, and oncology centers.

1. **Conduct a Portfolio Audit:** Categorize your LDTs. Some tests may qualify for FDA grandfathering provisions, while others will require full premarket submissions.
2. **Implement Design Controls:** If you are validating a new test, you must document the *entire* development history. This includes user needs, design inputs, design outputs, design verification, and design validation. CLIA validation alone is no longer sufficient.
3. **Upgrade Supplier Controls:** Establish formal qualification processes for all raw material vendors, ensuring they meet ISO 13485 standards.
    `
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'molecular-oncology-rapid-validation',
    title: 'Accelerating a High-Complexity Oncology Lab Build',
    client: 'OncoPath Diagnostics',
    clientType: 'Clinical Cancer Center',
    category: 'Launch & Validation',
    challenge: 'OncoPath needed to build a state-of-the-art Next-Generation Sequencing (NGS) laboratory from the ground up, validate their somatic mutation panel, and secure CLIA/CAP accreditation in under 9 months to meet clinical oncology contracts.',
    solution: 'BunniRocks provided full turn-key consulting: designed cleanroom airflow configurations, sourced qualified personnel, managed full wet-lab validation (300+ sample runs), and compiled a pre-audited digital CAP checklist.',
    metrics: [
      { label: 'Time-to-Accreditation', before: 'Estimated 18 Months', after: 'Completed in 8.2 Months', highlight: '54% Faster' },
      { label: 'Minor CAP Citations', before: 'Industry Avg: 4.8', after: '0 Deficiencies Found', highlight: 'Perfect Score' },
      { label: 'Validation Document Turnaround', before: 'Average 6 Weeks', after: 'Less than 48 Hours', highlight: 'SaaS Assisted' }
    ],
    logoText: 'ONCOPATH'
  },
  {
    id: 'health-system-consolidation',
    title: 'Integrating 14 Multi-Hospital Labs into a Central Core Laboratory',
    client: 'MetroHealth Regional Network',
    clientType: 'Hospital Network',
    category: 'Integrate & Optimize',
    challenge: 'MetroHealth operated 14 distinct diagnostic laboratories with disjointed SOPs, multiple LIS (Laboratory Information Systems), and varying quality control protocols, resulting in high overhead and redundant staffing costs.',
    solution: 'We engineered a comprehensive clinical lab integration master plan. Developed a unified, cloud-based Quality Management System (QMS), standardized reference ranges, restructured transportation logistics, and trained 180+ laboratory technicians.',
    metrics: [
      { label: 'Annual Operational Savings', before: '$12.4M Overhead', after: '$3.8M Saved Annually', highlight: '$3.8M Saved' },
      { label: 'Consolidated Test Turnaround', before: '24-48 Hours', after: 'Under 6 Hours for Core Panels', highlight: '75% Faster' },
      { label: 'Compliance Audit Score', before: '82% General Score', after: '99.4% Network-wide Standard', highlight: 'Best in Class' }
    ],
    logoText: 'METROHEALTH'
  },
  {
    id: 'pathology-revenue-recovery',
    title: 'Turning Around a Distressed Pathology Laboratory and Clearing FDA Warnings',
    client: 'Vanguard Histology Associates',
    clientType: 'Independent Pathology Provider',
    category: 'Performance & Compliance',
    challenge: 'Vanguard faced a state-level stop-work order and consecutive failed CLIA inspections due to severe documentation gaps in specimen labeling and high-complexity personnel file management.',
    solution: 'BunniRocks deployed an on-site interim Laboratory Manager, audited 100% of personnel files within 10 days, retrained workflow managers, and integrated our proprietary digital Compliance Tracking platform to verify daily specimen logs.',
    metrics: [
      { label: 'Sanction Resolution', before: 'Stop-Work Imposed', after: 'Fully Restored in 14 Days', highlight: 'Sanctions Lifted' },
      { label: 'Audit Compliance Rate', before: '56% Passing Rate', after: '100% Retest Performance', highlight: '100% compliant' },
      { label: 'Personnel Audit Completeness', before: '42% Missing Forms', after: '100% Certified Files', highlight: 'Audit Proof' }
    ],
    logoText: 'VANGUARD'
  }
];

export const LEADERS: Leader[] = [
  {
    name: 'Dr. Evelyn Martinez, PhD',
    role: 'Co-Founder & Chief Regulatory Officer',
    bio: 'Over 20 years of experience leading high-complexity pathology laboratories and serving as an active CAP Peer Inspector. Formerly Director of Clinical Laboratories at Chicago Academic Medicine.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    linkedin: 'https://linkedin.com/in/evelyn-martinez-bunnirocks'
  },
  {
    name: 'Gerald Vance, MS, MT(ASCP)',
    role: 'Director of Laboratory Planning & Operations',
    bio: 'Architect of over 40 successful commercial and hospital laboratory build-outs. Specialist in clinical automation, biosafety cabinet design, and complex diagnostic workflow optimization.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    linkedin: 'https://linkedin.com/in/gerald-vance-bunnirocks'
  },
  {
    name: 'Samantha Albright, JD, RAC',
    role: 'VP of Regulatory & Quality Assurance',
    bio: 'An expert attorney specializing in FDA medical device compliance and LDT regulatory strategies. Former legal counsel to leading molecular diagnostics and pharmacogenomics startups.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    linkedin: 'https://linkedin.com/in/samantha-albright-bunnirocks'
  },
  {
    name: 'Marcus Chen, PhD',
    role: 'Chief Technology Officer',
    bio: 'Pioneer of digital healthcare frameworks, with 12+ years building HIPAA-compliant SaaS platforms. Formerly software lead at a major diagnostics systems manufacturer.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    linkedin: 'https://linkedin.com/in/marcus-chen-bunnirocks'
  }
];

export const CAREERS: CareerOpportunity[] = [
  {
    id: 'sr-compliance-consultant',
    title: 'Senior Laboratory Compliance Consultant',
    department: 'Consulting',
    location: 'Boston, MA (Hybrid)',
    type: 'Full-time',
    description: 'Lead client laboratories through CAP/CLIA accreditation cycles, design robust Quality Management Systems (QMS), and serve as a technical subject matter expert during mock inspections.',
    requirements: [
      'Active ASCP certification (MT, MLS, or specialist designation).',
      'Minimum of 6 years of experience in a CAP-accredited clinical laboratory.',
      'Demonstrated experience preparing for and passing CAP/CLIA inspections.',
      'Mastery of clinical chemistry, molecular assays, or cellular pathology workflows.'
    ]
  },
  {
    id: 'lab-planning-architect',
    title: 'Lead Laboratory Planning & Design Engineer',
    department: 'Operations',
    location: 'Remote (US)',
    type: 'Full-time',
    description: 'Collaborate with biotech startups and hospital systems to create architectural layouts, design mechanical/HVAC specifications for diagnostic labs, and select instrumentation.',
    requirements: [
      'Degree in Biomedical Engineering, Architecture, or related laboratory science.',
      '4+ years designing clinical or research laboratory spaces.',
      'Deep understanding of biosafety levels (BSL-2, BSL-3), clinical workflows, and cleanroom standards.',
      'Proficiency in CAD/Revit and visual modeling software.'
    ]
  },
  {
    id: 'saas-product-engineer',
    title: 'Full-Stack Software Engineer (Compliance SaaS)',
    department: 'Technology',
    location: 'San Francisco, CA (Hybrid)',
    type: 'Full-time',
    description: 'Work directly with our regulatory experts to expand the BunniRocks compliance tracking platform. Build high-performance visualization tools, automated document flows, and HIPAA-secure logs.',
    requirements: [
      '3+ years of professional full-stack development experience.',
      'Expertise with React, TypeScript, and modern relational/NoSQL databases.',
      'Familiarity with SOC2, HIPAA compliance requirements, and secure software development.',
      'Strong passion for converting complex regulations into beautiful, intuitive UI.'
    ]
  }
];

export const FAQS: FaqItem[] = [
  {
    category: 'Compliance',
    question: 'How does BunniRocks compare to generic consulting firms?',
    answer: 'Generic consulting groups focus on broad business frameworks. BunniRocks is exclusively focused on clinical, diagnostic, and research laboratory operations. Our consultants are credentialed scientists, former laboratory directors, and active CAP inspectors who speak your science fluently and understand the deep nuances of CLIA regulations, LIMS pipelines, and diagnostic equipment.'
  },
  {
    category: 'Accreditation',
    question: 'What is the standard timeline for a new lab build to get CLIA certified?',
    answer: 'Without professional guidance, setting up and licensing a new lab typically takes 12 to 18 months due to architectural redesigns, failed test validations, and backlogged state agencies. With BunniRocks’ structured Launch roadmap, we streamline instrumentation, personnel sourcing, and validation files to achieve full licensing and CAP accreditation in 6 to 9 months.'
  },
  {
    category: 'Process',
    question: 'How does your digital Compliance Tracking SaaS work with our current LIS?',
    answer: 'Our software acts as an overlay to your existing Laboratory Information System (LIS). While your LIS handles active patient results, BunniRocks manages the behind-the-scenes regulatory files: document control, equipment calibrations, personnel competency, mock audits, and corrective actions (CAPA).'
  },
  {
    category: 'Compliance',
    question: 'What are the penalties of non-compliance under CLIA rules?',
    answer: 'Failed inspections can trigger immediate sanctions, including civil monetary penalties, suspension of clinical testing privileges, or complete license revocation. Additionally, laboratory directors can face a two-year ban from directing any laboratory nationwide if a site is found to have "immediate jeopardy" deficiencies that go unresolved.'
  },
  {
    category: 'Accreditation',
    question: 'Can you help us transition our molecular assays to comply with the FDA LDT final rule?',
    answer: 'Yes. We have a dedicated FDA Regulatory advisory task force. We perform a gap analysis of your current clinical validation documents, establish formal medical-device quality system procedures (including design control and risk management), and compile your registration, listing, and premarket clearance files.'
  }
];

export const SERVICE_AREAS = [
  {
    title: 'CAP Accreditation Readiness',
    desc: 'Mock peer-review audits, immediate gap resolutions, and unified document management to guarantee a flawless CAP inspection cycle.',
    icon: 'ShieldCheck'
  },
  {
    title: 'CLIA Certification & Licensing',
    desc: 'Expert guidance navigating Certificate of Compliance or Certificate of Accreditation state channels for new and expanding laboratories.',
    icon: 'FileText'
  },
  {
    title: 'High-Complexity Test Validation',
    desc: 'Rigorous validation templates and scientific advisors to manage precision, accuracy, LOD, and clinical utility data packages for complex assays.',
    icon: 'TestTube'
  },
  {
    title: 'ISO 15189 Quality Management',
    desc: 'Comprehensive transition mapping to meet the global standard for clinical laboratory quality and technical competence.',
    icon: 'Globe'
  },
  {
    title: 'Laboratory Build & Planning',
    desc: 'HVAC calculations, workflow sequencing, instrumentation sourcing, and physical safety planning for optimized diagnostic output.',
    icon: 'Layout'
  },
  {
    title: 'Fractional Laboratory Directorship',
    desc: 'Pre-qualified, board-certified HCLD directors available to provide high-complexity clinical oversight and legal accountability.',
    icon: 'Users'
  }
];

export const INDUSTRIES = [
  {
    name: 'Hospital Health Systems',
    desc: 'Consolidating diagnostic workflows, optimizing multi-site equipment, and standardizing quality control measures across major healthcare networks.',
    stats: '34% Efficiency Gain'
  },
  {
    name: 'Biotech & Pharma Ventures',
    desc: 'Helping research startups establish GLP/CLIA environments to run high-throughput clinical trials and companion diagnostic validations.',
    stats: 'Zero FDA Citations'
  },
  {
    name: 'Commercial Reference Labs',
    desc: 'Scaling diagnostic assay volumes, integrating high-speed LIS, and securing premium multi-state licensure (NY SDOH, CA, FL).',
    stats: '99.8% Perfect Audits'
  },
  {
    name: 'Oncology Diagnostic Startups',
    desc: 'Deploying next-generation sequencing compliance templates and design controls to secure rapid molecular testing market entry.',
    stats: 'Under 9 Mo. Launch'
  }
];
