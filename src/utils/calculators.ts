import { TaxRegimeOutput } from '../types';

/**
 * 1. Income Tax Calculator (FY 2025-26)
 * New Regime Slabs:
 * - Up to ₹3,00,000: Nil
 * - ₹3,00,001 to ₹7,00,000: 5%
 * - ₹7,00,001 to ₹10,00,000: 10%
 * - ₹10,00,001 to ₹12,00,000: 15%
 * - ₹12,00,001 to ₹15,00,000: 20%
 * - Above ₹15,00,000: 30%
 * Standard Deduction: ₹75,000 in New Regime, ₹50,000 in Old Regime.
 * Tax Rebate: Up to ₹7,00,000 (New Regime offers tax rebate up to ₹7 Lakhs taxable income, meaning Net Tax is 0 if taxable income <= ₹7,00,000. Under Old Regime, rebate is up to ₹5 Lakhs if taxable income <= ₹5,00,000).
 * Let's calculate exactly!
 */
export function calculateNewRegimeTax(annualSalary: number, otherIncome: number): TaxRegimeOutput {
  const standardDeduction = 75000;
  const grossIncome = annualSalary + otherIncome;
  const taxableIncome = Math.max(0, grossIncome - standardDeduction);

  let taxAmount = 0;

  if (taxableIncome > 300000) {
    if (taxableIncome <= 700000) {
      taxAmount += (taxableIncome - 300000) * 0.05;
    } else {
      taxAmount += 400000 * 0.05; // 5% of (7L - 3L)
      if (taxableIncome <= 1000000) {
        taxAmount += (taxableIncome - 700000) * 0.10;
      } else {
        taxAmount += 300000 * 0.10; // 10% of (10L - 7L)
        if (taxableIncome <= 1200000) {
          taxAmount += (taxableIncome - 1000000) * 0.15;
        } else {
          taxAmount += 200000 * 0.15; // 15% of (12L - 10L)
          if (taxableIncome <= 1500000) {
            taxAmount += (taxableIncome - 1200000) * 0.20;
          } else {
            taxAmount += 300000 * 0.20; // 20% of (15L - 12L)
            taxAmount += (taxableIncome - 1500000) * 0.30;
          }
        }
      }
    }
  }

  // Rebate under Section 87A (New Regime rebate up to 7 Lakhs taxable income)
  let rebate = 0;
  if (taxableIncome <= 700000) {
    rebate = taxAmount;
  }

  const netTaxAmount = Math.max(0, taxAmount - rebate);
  const cess = netTaxAmount * 0.04;
  const totalTax = netTaxAmount + cess;
  const effectiveRate = grossIncome > 0 ? (totalTax / grossIncome) * 100 : 0;

  return {
    taxableIncome,
    taxAmount,
    standardDeduction,
    effectiveRate,
    rebate,
    cess,
    totalTax
  };
}

export function calculateOldRegimeTax(
  annualSalary: number,
  otherIncome: number,
  deductions80C: number, // Max 1,50,000
  deductions80D: number, // Max 75,000
  hraExempt: number
): TaxRegimeOutput {
  const standardDeduction = 50000;
  const totalDeductions = Math.min(150000, deductions80C) + Math.min(75000, deductions80D) + hraExempt + standardDeduction;
  const grossIncome = annualSalary + otherIncome;
  const taxableIncome = Math.max(0, grossIncome - totalDeductions);

  let taxAmount = 0;

  // Slabs:
  // - Up to ₹2,50,000: Nil
  // - ₹2,50,001 to ₹5,00,000: 5%
  // - ₹5,00,001 to ₹10,00,000: 20%
  // - Above ₹10,00,000: 30%
  if (taxableIncome > 250000) {
    if (taxableIncome <= 500000) {
      taxAmount += (taxableIncome - 250000) * 0.05;
    } else {
      taxAmount += 250000 * 0.05; // 5% of (5L - 2.5L)
      if (taxableIncome <= 1000000) {
        taxAmount += (taxableIncome - 500000) * 0.20;
      } else {
        taxAmount += 500000 * 0.20; // 20% of (10L - 5L)
        taxAmount += (taxableIncome - 1000000) * 0.30;
      }
    }
  }

  // Rebate under Section 87A (Old Regime rebate up to 5 Lakhs taxable income)
  let rebate = 0;
  if (taxableIncome <= 500000) {
    rebate = taxAmount;
  }

  const netTaxAmount = Math.max(0, taxAmount - rebate);
  const cess = netTaxAmount * 0.04;
  const totalTax = netTaxAmount + cess;
  const effectiveRate = grossIncome > 0 ? (totalTax / grossIncome) * 100 : 0;

  return {
    taxableIncome,
    taxAmount,
    standardDeduction,
    effectiveRate,
    rebate,
    cess,
    totalTax
  };
}


/**
 * 2. GST Calculator
 */
export interface GSTResult {
  originalAmount: number;
  gstAmount: number;
  cgst: number;
  sgst: number;
  totalAmount: number;
}

export function calculateGST(amount: number, rate: number, isExclusive: boolean): GSTResult {
  let gstAmount = 0;
  let totalAmount = 0;
  let originalAmount = amount;

  if (isExclusive) {
    // Amount is exclusive of GST
    gstAmount = amount * (rate / 100);
    totalAmount = amount + gstAmount;
  } else {
    // Amount is inclusive of GST
    gstAmount = amount - (amount * (100 / (100 + rate)));
    originalAmount = amount - gstAmount;
    totalAmount = amount;
  }

  const cgst = gstAmount / 2;
  const sgst = gstAmount / 2;

  return {
    originalAmount,
    gstAmount,
    cgst,
    sgst,
    totalAmount
  };
}


/**
 * 3. EMI Calculator
 */
export interface EMIResult {
  monthlyEmi: number;
  totalInterest: number;
  totalAmount: number;
}

export function calculateEMI(principal: number, annualRate: number, tenureYears: number): EMIResult {
  const r = annualRate / 12 / 100; // monthly rate
  const n = tenureYears * 12; // total status in months

  let monthlyEmi = 0;
  if (r > 0) {
    monthlyEmi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  } else {
    monthlyEmi = principal / n;
  }

  const totalAmount = monthlyEmi * n;
  const totalInterest = totalAmount - principal;

  return {
    monthlyEmi,
    totalInterest,
    totalAmount
  };
}


/**
 * 4. HRA Calculator
 * Exempt HRA is lease of:
 * 1. Actual HRA received
 * 2. Rent paid minus 10% of (Basic Salary + DA)
 * 3. 50% of (Basic + DA) for Metros, or 40% for Non-Metros
 */
export interface HRAResult {
  exemptHRA: number;
  taxableHRA: number;
  rule1: number;
  rule2: number;
  rule3: number;
}

export function calculateHRA(
  basicSalary: number,
  hraReceived: number,
  rentPaid: number,
  isMetro: boolean
): HRAResult {
  const rule1 = hraReceived;
  const rule2 = Math.max(0, rentPaid - (basicSalary * 0.1));
  const rule3 = isMetro ? (basicSalary * 0.5) : (basicSalary * 0.4);

  const exemptHRA = Math.min(rule1, rule2, rule3);
  const taxableHRA = Math.max(0, hraReceived - exemptHRA);

  return {
    exemptHRA,
    taxableHRA,
    rule1,
    rule2,
    rule3
  };
}


/**
 * 5. Tax Saving Selector
 * Calculates potential tax savings under old regime depending on marginal tax slab
 */
export function calculateTaxSavings(
  deductions80C: number,
  deductions80D: number,
  deductionsNPS: number,
  estimatedTaxBracketPercent: number
): number {
  const totalDeductions = Math.min(150000, deductions80C) + Math.min(75000, deductions80D) + Math.min(50000, deductionsNPS);
  const directSavings = totalDeductions * (estimatedTaxBracketPercent / 100);
  const cessSavings = directSavings * 0.04;
  return directSavings + cessSavings;
}
