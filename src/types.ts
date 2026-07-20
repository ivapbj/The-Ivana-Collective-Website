export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  iconName: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  description: string;
  results: string[];
  imageName: string;
  imageUrl: string;
  accentColor: string;
}

export interface Stage {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  items: string[];
}

export interface MethodStep {
  number: string;
  title: string;
  description: string;
  details: string;
}

export interface ResultMetric {
  metric: string;
  description: string;
  label: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  business: string;
  services: string[];
  avatarUrl?: string;
}

export interface PricingPackage {
  id: string;
  title: string;
  tagline: string;
  price: string;
  period: string;
  commitment: string;
  bestFor: string;
  deliverables: string[];
  isPopular: boolean;
}

export interface InsightArticle {
  id: string;
  category: string;
  title: string;
  summary: string;
  readTime: string;
  date: string;
  content: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  businessName?: string;
  message: string;
  timestamp: string;
}

export interface BookingSubmission {
  id: string;
  name: string;
  email: string;
  businessName?: string;
  websiteUrl?: string;
  date: string;
  timeSlot: string;
  notes?: string;
  timestamp: string;
}

export interface AuditRequest {
  businessName: string;
  location: string;
  websiteUrl?: string;
  services: string;
}

export interface AuditResponse {
  readinessScore: number;
  readinessLevel: string;
  executiveSummary: string;
  searchVisibilityAnalysis: {
    googleSearch: string;
    googleMaps: string;
    aiSearch: string;
  };
  actionablePlan: {
    websiteOptimizations: string[];
    localSeoTasks: string[];
    contentStrategy: string[];
  };
  customTips: string;
}
