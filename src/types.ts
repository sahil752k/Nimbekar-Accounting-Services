/**
 * Nimbekar Accounting Services - Shared Type Declarations
 */

export interface FAQItem {
  id: string;
  category: 'GST' | 'Income Tax' | 'Tax Saving' | 'Business Registration' | 'Accounting' | 'Compliance';
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  category: 'GST' | 'Income Tax' | 'Tax Saving' | 'Business Registration' | 'Accounting' | 'Compliance';
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  slug: string;
}

export interface TaxRegimeOutput {
  taxableIncome: number;
  taxAmount: number;
  standardDeduction: number;
  effectiveRate: number;
  rebate: number;
  cess: number;
  totalTax: number;
}
