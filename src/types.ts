export type PageType =
  | 'home'
  | 'services'
  | 'solutions'
  | 'industries'
  | 'features'
  | 'resources'
  | 'research'
  | 'blog'
  | 'blog-detail'
  | 'case-studies'
  | 'case-study-detail'
  | 'pricing'
  | 'faq'
  | 'contact'
  | 'careers'
  | 'privacy'
  | 'terms'
  | 'cookie-policy'
  | 'about'
  | 'leadership'
  | 'testimonials'
  // Consulting Subpages
  | 'consulting-builds'
  | 'consulting-validation'
  | 'consulting-management'
  | 'consulting-integrations'
  | 'consulting-planning'
  | 'consulting-performance'
  | 'consulting-compliance'
  | 'consulting-advising'
  | 'consulting-pathology';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  category: 'Compliance' | 'Lab Management' | 'Industry News' | 'Accreditation';
  readTime: string;
  image: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  clientType: string;
  challenge: string;
  solution: string;
  metrics: {
    label: string;
    before: string;
    after: string;
    highlight: string;
  }[];
  category: string;
  logoText: string;
}

export interface Leader {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

export interface CareerOpportunity {
  id: string;
  title: string;
  department: 'Consulting' | 'Operations' | 'Sales' | 'Technology';
  location: string;
  type: 'Full-time' | 'Contract' | 'Part-time';
  description: string;
  requirements: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Compliance' | 'Billing' | 'Process' | 'Accreditation';
}
