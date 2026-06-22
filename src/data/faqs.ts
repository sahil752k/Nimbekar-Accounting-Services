import { FAQItem } from '../types';

export const faqs: FAQItem[] = [
  // GST Registrations & General Compliance
  {
    id: 'faq-1',
    category: 'GST',
    question: 'Who is required to obtain GST Registration in India?',
    answer: 'Any business with an annual turnover exceeding ₹40 Lakhs for goods (₹20 Lakhs for Special Category States) or ₹20 Lakhs for services (₹10 Lakhs for Special Category States) must obtain GST registration. Special categories like e-commerce sellers, interstate suppliers, and casual taxable persons require registration regardless of turnover.'
  },
  {
    id: 'faq-2',
    category: 'GST',
    question: 'How long does the GST registration process take in Washim?',
    answer: 'Usually, GST registration takes 3 to 7 working days once all necessary documents (PAN, Aadhaar, authorized premises proof, bank details) are uploaded. If a physical verification or clarification notice is issued by the GST department, it can take up to 15-20 days.'
  },
  {
    id: 'faq-3',
    category: 'GST',
    question: 'What documents are required for GST Registration of a sole proprietorship?',
    answer: 'You will need: 1) Permanent Account Number (PAN) Card of the proprietor, 2) Aadhaar Card, 3) Passport size photograph, 4) Proof of Business Address (Electricity bill, Index II or Consent letter from the landlord), 5) Bank Account Statement or Cancelled Cheque containing account details.'
  },
  {
    id: 'faq-4',
    category: 'GST',
    question: 'Can I cancel my GST registration voluntarily?',
    answer: 'Yes, if your business operations have ceased, or your annual turnover has dropped below the threshold limit, or you are no longer liable to be registered under any other provision, you can easily apply for the cancellation of GST registration via the official GST portal.'
  },
  {
    id: 'faq-5',
    category: 'GST',
    question: 'Is separate GST registration required for different branches in Maharashtra?',
    answer: 'No, a single GST registration covers all branch offices located within Maharashtra. You can designate one location as the Principal Place of Business and the remaining branches as Additional Places of Business under the same GSTIN.'
  },
  {
    id: 'faq-6',
    category: 'GST',
    question: 'What is Composition Scheme in GST?',
    answer: 'The Composition Scheme is a simplified scheme for small taxpayers with annual turnover up to ₹1.5 Crores (₹75 Lakhs for service providers). Taxpayers under this scheme pay GST at flat low rates (1% to 6%) and file quarterly simplified returns (CMP-08), but they cannot claim Input Tax Credit (ITC) or collect tax from customers.'
  },
  {
    id: 'faq-7',
    category: 'GST',
    question: 'What is GSTR-1 and what are its regular filing deadlines?',
    answer: 'GSTR-1 is the monthly or quarterly return that contains details of outward supplies (sales invoice details). For monthly filers, the deadline is the 11th of the succeeding month. For quarterly filers under the QRMP scheme, GSTR-1 (or IFF) is filed by the 13th of the month following the quarter.'
  },
  {
    id: 'faq-8',
    category: 'GST',
    question: 'What are the consequences of late filing of GST returns?',
    answer: 'Late filing of GST returns attracts a daily late fee of ₹50 per day (₹20 per day for NIL returns) under CGST and SGST combined, alongside an interest penalty of 18% per annum on the net cash tax liability.'
  },
  {
    id: 'faq-9',
    category: 'GST',
    question: 'What is the role of Input Tax Credit (ITC) in GST return filing?',
    answer: 'ITC allows you to reduce the GST you owe on sales by the amount of GST you already paid on your business purchases (inputs, capital goods, and input services). This avoids the cascading effect of taxation.'
  },
  {
    id: 'faq-10',
    category: 'GST',
    question: 'How does Nimbekar Accounting Services assist with GST Audits?',
    answer: 'We assist with complete documentation, reconciliation of GSTR-2B with GSTR-3B and purchase register, addressing show-cause notices from Tax Officers, and providing structural advice to ensure compliance during GST investigations.'
  },

  // Income Tax Return (ITR)
  {
    id: 'faq-11',
    category: 'Income Tax',
    question: 'What is the due date for filing individual Income Tax Returns in India?',
    answer: 'The standard due date for filing individual ITR (whose accounts are not subject to a tax audit) is July 31st of the relevant assessment year, unless extended by the Central Board of Direct Taxes (CBDT).'
  },
  {
    id: 'faq-12',
    category: 'Income Tax',
    question: 'Am I required to file an ITR if my income is below the taxable limit?',
    answer: 'Filing is highly recommended even for raw incomes below ₹3 Lakhs to establish financial credentials, facilitating visa processing, banking loans, and obtaining direct refunds of any tax deducted at source (TDS).'
  },
  {
    id: 'faq-13',
    category: 'Income Tax',
    question: 'What is the difference between New Tax Regime and Old Tax Regime?',
    answer: 'The New Tax Regime offers lower tax slab rates but withdraws almost all standard deductions (like Section 80C, 80D, HRA exemption). The Old Tax Regime features older, higher slab rates but allows various deductions to reduce taxable income.'
  },
  {
    id: 'faq-14',
    category: 'Income Tax',
    question: 'Which ITR form is appropriate for salaried employees with a house property?',
    answer: 'ITR-1 (Sahaj) is suitable for salaried individuals having income from salary, one house property, and other sources (interest income), provided total income does not exceed ₹50 Lakhs.'
  },
  {
    id: 'faq-15',
    category: 'Income Tax',
    question: 'What is Form 26AS and AIS?',
    answer: 'Form 26AS is a consolidated tax statement showing TDS, TCS, and tax payments. The Annual Information Statement (AIS) provides comprehensive details of all financial transactions like mutual fund purchases, high-value savings interest, and share trading.'
  },
  {
    id: 'faq-16',
    category: 'Income Tax',
    question: 'What is Presumptive Taxation Scheme under Section 44AD?',
    answer: 'It is a special scheme for small businesses with turnover up to ₹2 Crores (extended to ₹3 Crores under certain conditions). Tax is computed as a flat 8% of total turnover (or 6% in case of digital receipts) as deemed profits, exempting the business from maintaining detailed account books.'
  },
  {
    id: 'faq-17',
    category: 'Income Tax',
    question: 'Who needs a Tax Audit under Section 44AB?',
    answer: 'Businesses with annual turnover exceeding ₹10 Crores (where digital transactions exceed 95%) or ₹2 Crores (in normal cash operations) are subject to a mandatory tax audit by a chartered accountant.'
  },
  {
    id: 'faq-18',
    category: 'Income Tax',
    question: 'What happens if I file my ITR past the due date?',
    answer: 'Late ITR filing attracts a late fee under Section 234F of up to ₹5,000 (₹1,000 if total income is under ₹5 Lakhs) and disqualifies carrying forward capital losses to subsequent years.'
  },
  {
    id: 'faq-19',
    category: 'Income Tax',
    question: 'Can I revise an already filed ITR?',
    answer: 'Yes, if you discover any omission or wrong statement in your original return, you can file a Revised Return under Section 139(5) before December 31st of the assessment year.'
  },
  {
    id: 'faq-20',
    category: 'Income Tax',
    question: 'How do I track my Income Tax refund status?',
    answer: 'You can track your refund easily by logging into the Income Tax E-filing portal or via the NSDL TIN website by entering your PAN and corresponding Assessment Year.'
  },

  // Tax Saving & Optimization
  {
    id: 'faq-21',
    category: 'Tax Saving',
    question: 'What are the best tax-saving options under Section 80C?',
    answer: 'Popular options include Senior Citizens Savings Scheme, Public Provident Fund (PPF), National Pension System (NPS), tax-saving ELSS Mutual Funds, Life Insurance Premium, and Home Loan principal repayment up to a total ceiling of ₹1.5 Lakhs.'
  },
  {
    id: 'faq-22',
    category: 'Tax Saving',
    question: 'How much tax can I save via Health Insurance under Section 80D?',
    answer: 'You can deduct up to ₹25,000 for self, spouse, and children. An additional deduction of ₹25,000 is available for insuring parents (or ₹50,000 if parents are senior citizens), allowing up to ₹75,000 - ₹1,00,000 in total deductions.'
  },
  {
    id: 'faq-23',
    category: 'Tax Saving',
    question: 'What is Section 80CCD(1B) and how does it save additional tax?',
    answer: 'Section 80CCD(1B) allows an exclusive additional deduction of up to ₹50,000 for contributions made to the National Pension System (NPS), which is over and above the ₹1.5 Lakhs limit of Section 80C.'
  },
  {
    id: 'faq-24',
    category: 'Tax Saving',
    question: 'Is HRA tax benefit available if I live in my parents rent house?',
    answer: 'Yes! You can pay rent to your parents and claim HRA exemption. However, your parents must file taxes declaring that rent as their income, and you should execute a valid rental agreement.'
  },
  {
    id: 'faq-25',
    category: 'Tax Saving',
    question: 'How does a Home Loan save income tax?',
    answer: 'You can claim a tax deduction under Section 24(b) on home loan interest of up to ₹2 Lakhs per year. The principal repayment can also be claimed under Section 80C within its general ₹1.5 Lakhs limit.'
  },
  {
    id: 'faq-26',
    category: 'Tax Saving',
    question: 'What is Section 80GG for claiming rent deduction without HRA?',
    answer: 'If you are salaried or self-employed and do not receive HRA allowance, you can claim rent payment deduction under Section 80GG up to a maximum limit of ₹5,000 per month.'
  },
  {
    id: 'faq-27',
    category: 'Tax Saving',
    question: 'Are education loans tax-deductible?',
    answer: 'Yes, interest paid on higher education loans qualifies for standard deduction under Section 80E with no maximum monetary limit. This deduction is valid for a maximum of 8 continuous years.'
  },
  {
    id: 'faq-28',
    category: 'Tax Saving',
    question: 'Can donations to charities save business tax?',
    answer: 'Donations made to recognized charitable institutions, relief funds, and research associations qualify for a 50% or 100% tax deduction under Section 80G.'
  },
  {
    id: 'faq-29',
    category: 'Tax Saving',
    question: 'Is interest earned from saving bank accounts taxable?',
    answer: 'Under Section 80TTA, individuals can deduct saving bank interest up to ₹10,000 per year. For senior citizens, Section 80TTB permits interest deduction up to ₹50,000 across savings and FD accounts.'
  },
  {
    id: 'faq-30',
    category: 'Tax Saving',
    question: 'How do indexation benefits lower capital gains tax on properties?',
    answer: 'Indexation adjusts the purchase price of an asset using the Cost Inflation Index (CII) issued by the CBDT. This increases your recorded purchase cost, thereby reducing taxable long-term capital gains.'
  },

  // Business Registrations
  {
    id: 'faq-31',
    category: 'Business Registration',
    question: 'Why is Shop Act Licence mandatory in Maharashtra?',
    answer: 'The Maharashtra Shops and Establishments Act makes it legally mandatory for every commercial establishment in Maharashtra to obtain a Shop Act Licence within 30 days of commencing operations. It acts as official address proof for opening business bank accounts.'
  },
  {
    id: 'faq-32',
    category: 'Business Registration',
    question: 'What is Udyam Registration and how does it help MSMEs?',
    answer: 'Udyam Registration is a free digital identification system issued by the Ministry of MSME. It provides crucial benefits including Collateral-Free Bank Loans, subsidy on patent costs, electricity bill concessions, protection against delayed payments, and priority sector lending.'
  },
  {
    id: 'faq-33',
    category: 'Business Registration',
    question: 'What is the validity of a Shop Act Licence in Washim?',
    answer: 'Under the new simplified systems (Intimation/Registration of Maharashtra Shops Act), businesses with 0 to 9 employees receive lifetime valid certificates that do not require periodic renewals. Establishments with 10 or more employees receive certificates valid for 1 to 10 years, which require timely renewal.'
  },
  {
    id: 'faq-34',
    category: 'Business Registration',
    question: 'What documents are required for Udyam (MSME) Registration?',
    answer: 'Udyam Registration is fully integrated with GST and income tax portals. The only essential requirements are your Aadhaar Card (linked to physical mobile number) and PAN Card.'
  },
  {
    id: 'faq-35',
    category: 'Business Registration',
    question: 'What is the Professional Tax (PT) employer registration in Maharashtra?',
    answer: 'Employers in Maharashtra must register for PT: 1) PTRC (Professional Tax Registration Certificate) to deduct and deposit taxes for salary earners earning above ₹10,000, and 2) PTEC (Professional Tax Enrolment Certificate) to pay the annual proprietorship tax of ₹2,500.'
  },
  {
    id: 'faq-36',
    category: 'Business Registration',
    question: 'What is a Partnership Deed and does it need registration?',
    answer: 'A Partnership Deed is a legal layout defining terms, capital, and profit-sharing ratio among partners. Partnership firm registration is optional in some states, but highly mandatory in Maharashtra to legally enforce contract rights.'
  },
  {
    id: 'faq-37',
    category: 'Business Registration',
    question: 'What are the main requirements for Sole Proprietorship setup in Washim?',
    answer: 'A Sole Proprietorship does not have a central government registry. It is established by acquiring two business registrations: for example, 1) GST Registration, 2) Shop Act Licence of Maharashtra, or a current bank account under the entity name.'
  },
  {
    id: 'faq-38',
    category: 'Business Registration',
    question: 'Can an individual switch their sole proprietorship into a private limited company?',
    answer: 'Yes! A sole proprietorship can be fully converted into a Private Limited Company or One Person Company (OPC) by drafting a takeover agreement and applying for fresh incorporation with the Ministry of Corporate Affairs (MCA).'
  },
  {
    id: 'faq-39',
    category: 'Business Registration',
    question: 'What registration is needed to sell products online via Amazon or Flipkart?',
    answer: 'To sell products online, both GST Registration and a Business Bank Account are mandatory requirements under Indian E-commerce laws.'
  },
  {
    id: 'faq-40',
    category: 'Business Registration',
    question: 'What is an Import Export Code (IEC) and who needs it?',
    answer: 'An IEC is a unique 10-digit code issued by the DGFT department required by any Indian enterprise looking to import goods or export services from or into foreign markets.'
  },

  // Accounting & Compliance
  {
    id: 'faq-41',
    category: 'Accounting',
    question: 'Why is professional tax accounting crucial for small businesses in Washim?',
    answer: 'Accurate accounting helps track cashflows, secures working capital bank loans, matches GSTR balances to avoid hefty tax audit penalties, and lets owners confidently strategize expansion budgets.'
  },
  {
    id: 'faq-42',
    category: 'Accounting',
    question: 'What are the primary components of a professional Balance Sheet?',
    answer: 'A complete balance sheet contains three major blocks: 1) Assets (property, equipment, cash, inventory), 2) Liabilities (outstanding vendor invoices, bank loans, standard provisions), and 3) Shareholder or Proprietary Equity.'
  },
  {
    id: 'faq-43',
    category: 'Accounting',
    question: 'How often should a local dealer reconcile purchase invoices with GST GSTR-2B?',
    answer: 'Reconciliation should be conducted on a monthly basis before filing GSTR-3B. This ensures you only claim Input Tax Credits that have been actually deposited by your raw vendors.'
  },
  {
    id: 'faq-44',
    category: 'Accounting',
    question: 'Who is required to file a TDS return?',
    answer: 'Any business or individual who has deducted TDS while executing payouts (e.g., salary, rent, commission, contract fees) must file quarterly TDS returns (Form 24Q, 26Q, 27Q) online.'
  },
  {
    id: 'faq-45',
    category: 'Accounting',
    question: 'What is the penalty for not filing TDS returns on time?',
    answer: 'Failure to file TDS returns attracts a mandatory late fee of ₹200 per day under Section 234E, alongside an additional discretionary penalty up to ₹1 Lakh under Section 271H.'
  },
  {
    id: 'faq-46',
    category: 'Accounting',
    question: 'How do physical accounting ledgers compare to cloud accounting tools?',
    answer: 'Cloud accounting tools provide real-time bank reconciliation, digital layouts for immediate balance reviews, paperless records searchable in seconds, and zero risk of physical inventory file damage.'
  },
  {
    id: 'faq-47',
    category: 'Accounting',
    question: 'Can Nimbekar Accounting Services assist with old-system account backlogs?',
    answer: 'Yes, we reconstruct backlogs by analyzing raw bank statements, trade invoices, purchase receipts, and tax records to compile authentic balance sheets ready for audits.'
  },
  {
    id: 'faq-48',
    category: 'Accounting',
    question: 'What is Depreciation and why does it affect taxable income?',
    answer: 'Depreciation is the structural reduction in the value of physical capital assets over time. Claiming depreciation reduces recorded business net profit on paper, thereby legally lowering final income tax dues.'
  },
  {
    id: 'faq-49',
    category: 'Accounting',
    question: 'What are TDS rates for professional fees and rent payments?',
    answer: 'Generally, TDS under Section 194J for professional/technical fees is 2% or 10%. Under Section 194I, the TDS rate is 10% on land/building rent and 2% on plant/machinery rent, applicable if payments exceed ₹2.4 Lakhs annually.'
  },
  {
    id: 'faq-50',
    category: 'Accounting',
    question: 'How can our Washim business book a periodic consultation with Vishal D. Nimbekar?',
    answer: 'You can instantly book consultations using the reservation forms on our portal, clicking our float WhatsApp link, or dialing our verified lines at 9075739207 / 9075739207.'
  }
];
