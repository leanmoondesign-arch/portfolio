export interface CaseStudy {
  id: string;
  title: string;
  summary: string;
  category: "Work" | "Personal";
  stack: string[];
  impact?: string[];
  problem?: string;
  solution?: string;
  execution?: string;
  vision?: string;
  features?: string[];
  images?: string[];
  demo?: string | { label: string; url: string }[];
  github?: string;
  privacyNotice?: string;
}
