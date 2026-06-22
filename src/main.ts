import { faqs } from './data/faqs';
import { blogs } from './data/blogs';
import { 
  calculateNewRegimeTax, 
  calculateOldRegimeTax, 
  calculateGST, 
  calculateEMI, 
  calculateHRA, 
  calculateTaxSavings 
} from './utils/calculators';

// --- DATA STRUCTURES ---

const services = [
  {
    title: 'GST Registration',
    icon: `<svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
    desc: 'Authorized GSTIN setups for proprietors, partnerships, and private companies within 3-7 operational days.',
    benefits: ['100% digital onboarding', 'Zero physical paperwork hassle', 'Includes active support for opening current accounts']
  },
  {
    title: 'GST Return Filing',
    icon: `<svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    desc: 'Accurate monthly and quarterly (QRMP) compliance, purchase book matches, and GSTR-1 & 3B audits.',
    benefits: ['99.9% invoice matching accuracy', 'Pre-reconciliation warnings', 'Zero late filing interest failures']
  },
  {
    title: 'Income Tax Return (ITR)',
    icon: `<svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 00-2 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
    desc: 'Personalized tax filing (ITR 1 to 4) for salaried earners, professionals, businesses, and senior citizens.',
    benefits: ['Maximum legal deduction audits', 'Fast approval, tracked refund approvals', 'Double check of Form 26AS matching']
  },
  {
    title: 'FSSAI Food License',
    icon: `<svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13c-1.657 0-3-1.343-3-3S10.343 2 12 2s3 1.343 3 3-1.343 3-3 3zm0 0c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"/></svg>`,
    desc: 'Get FSSAI Food License for restaurants, cafes, cloud kitchens, food manufacturers, retailers, and distributors with complete compliance assistance.',
    benefits: [
      'Quick online application process',
      'Applicable for all food businesses',
      'Expert documentation & compliance support'
    ]
},
  {
    title: 'Tax Accounting',
    icon: `<svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>`,
    desc: 'Bespoke bookkeeping, standard double-entry registers, and financial ledger compliance audits.',
    benefits: ['Cloud-accessible records database', 'P&L reconciliations', 'Pre-audit corporate diagnostics ready']
  },
  {
    title: 'Balance Sheet Preparation',
    icon: `<svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"/></svg>`,
    desc: 'Expert compilation of assets, liabilities, and equity statements designed specifically to secure bank loans.',
    benefits: ['Formatted for credit score approvals', 'Depreciation calculation integration', 'GAAP alignment profiles']
  },
  {
    title: 'Professional Tax (PT)',
    icon: `<svg class="w-6 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
    desc: 'Establishment enrolling (PTEC) and deduction tracking filings (PTRC) for Maharashtra based employees.',
    benefits: ['Zero payroll calculation failures', 'Timely remittance schedules tracking', 'Avoidance of statutory late fees']
  },
  {
    title: 'Udyam Registration',
    icon: `<svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`,
    desc: 'Official MSME certification, unlocking interest concessions, government tenders, and credit guarantees.',
    benefits: ['100% hassle-free government code', 'Zero-cost government file setups', 'Priority banking channel entries']
  },
  {
    title: 'Shop Act Licence',
    icon: `<svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
    desc: 'Mandatory commercial establishment licenses under Maharashtra municipal guidelines for local traders.',
    benefits: ['Valid address proof benchmarks', 'Fast generation (under 48 hrs)', 'Covers digital intimations']
  },
  {
    title: 'TDS Return Filing',
    icon: `<svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>`,
    desc: 'Quarterly withholding tax reporting (Form 24Q/26Q) and immediate generation of high-fidelity Form 16 credits.',
    benefits: ['Secures corporate payroll streams', 'Eliminates Section 234E penalty fees', 'Clean portal receipts tracking']
  }
];

const testimonials = [
  {
    name: 'Gajanan Deshmukh',
    role: 'Distributor, Deshmukh Agro Trade',
    initials: 'GD',
    text: 'Vishal Nimbekar managed our complicated GST transition seamlessly. His monthly GSTR-2B matching processes have saved us over ₹70,000 in false vendor claims. He resides in Washim as our absolute visual savior.',
    stars: 5
  },
  {
    name: 'Meera Kulkarni',
    role: 'Founder, Kulkarni Educational Academy',
    initials: 'MK',
    text: 'We were struggling with local Professional Tax PTRC configurations. Bartakke associates resolved our backlog in 2 business days. Their digital onboarding uploader works incredibly smoothly!',
    stars: 5
  },
  {
    name: 'Rajendra Jaiswal',
    role: 'Proprietor, Jaiswal Retail Saraf',
    initials: 'RJ',
    text: 'Our commercial balance sheets were repeatedly rejected by commercial banks. Aditya reconstructed our accounting trails to deliver a flawless ledger that cleared our enterprise loan inside a week.',
    stars: 5
  },
  {
    name: 'Vivek Gawande',
    role: 'Builder, Gawande Infrastructures',
    initials: 'VG',
    text: 'Securing structural Shop Act licenses and Udyam certification in Washim used to require endless municipal visits. Bartakke completed both applications inside 48 hours directly on our desktop screens.',
    stars: 5
  }
];

const caseStudies = [
  {
    title: 'Retail Store Trade Restructuring',
    target: 'Jaiswal Supermarket',
    challenge: 'Mismatched GSTR-2B registers risking a penalty of ₹1.8 Lakhs.',
    result: 'Reconciled 18 months of purchase books; secured full Input Tax Credit; zero penalty.',
    badge: 'GST Audit Success'
  },
  {
    title: 'SME Working Capital Cash Loan',
    target: 'Washim Oil Mills',
    challenge: 'Unstructured ledger sheets blocking a credit loan of ₹45 Lakhs.',
    result: 'Compiled standard corporate Balance Sheet under GAAP rules; loan released in 5 working days.',
    badge: 'Ledgers Redraft'
  },
  {
    title: 'Digital Shop Act & MSME Launch',
    target: 'Laxmi Electronics',
    challenge: 'Urgent contract requiring registered Udyam ID inside 3 business days.',
    result: 'Coordinated same-day Shop Act application and online Udyam filing with instant certificate activation.',
    badge: 'Licensing Onboarding'
  },
  {
    title: 'Strategic Annual Tax Shields',
    target: 'Senior Medical Practitioner',
    challenge: 'High tax liability on gross earnings over ₹18 Lakhs under old slabs.',
    result: 'Designed customized Section 106, 80D, 80C, and NPS split configurations; saved ₹1.15 Lakhs legally.',
    badge: 'Tax Saving'
  }
];

// --- STATE MANAGEMENT ---

let activeCalculator = 'income-tax';
let blogCurrentPage = 1;
const blogItemsPerPage = 6;
let blogCurrentCategory = 'all';
let blogSearchQuery = '';

let faqCurrentCategory = 'all';
let faqSearchQuery = '';

// --- STICKY FOOTER ELEMENT DETECTORS & UTILITIES ---

function showToast(message: string) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (toast && toastMsg) {
    toastMsg.textContent = message;
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    
    setTimeout(() => {
      toast.classList.remove('translate-y-0', 'opacity-100');
      toast.classList.add('translate-y-20', 'opacity-0');
    }, 4000);
  }
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

// --- RENDERING HANDLERS ---

function renderServices() {
  const target = document.getElementById('services-grid');
  if (!target) return;

  target.innerHTML = services.map((s, index) => `
    <div class="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:border-[#F97316]/50 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
      <div class="flex flex-col gap-4">
        <div class="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F97316]">
          ${s.icon}
        </div>
        <h3 class="font-heading font-extrabold text-[#0B1220] text-lg">${s.title}</h3>
        <p class="text-xs text-slate-550 leading-relaxed font-light">${s.desc}</p>
        <ul class="space-y-2 mt-2">
          ${s.benefits.map(b => `
            <li class="flex items-center gap-2">
              <svg class="w-3.5 h-3.5 text-[#F97316] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/></svg>
              <span class="text-[11px] text-slate-600 font-semibold font-sans">${b}</span>
            </li>
          `).join('')}
        </ul>
      </div>
      <div class="pt-6 border-t border-slate-100 mt-6 w-full flex items-center justify-between">
        <span class="text-[10px] uppercase font-bold tracking-wider text-slate-450 font-sans">verified compliance</span>
        <button onclick="window.onboxInquire('${s.title}')" class="text-xs font-bold text-[#F97316] hover:text-[#0B1220] select-none cursor-pointer">Inquire Now &rarr;</button>
      </div>
    </div>
  `).join('');
}

function renderTestimonials() {
  const target = document.getElementById('testimonials-grid');
  if (!target) return;

  target.innerHTML = testimonials.map(t => `
    <div class="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-2xl flex flex-col justify-between gap-6 hover:border-[#F97316]/40 shadow-sm hover:shadow-md transition-all">
      <p class="text-xs text-slate-600 italic leading-relaxed font-sans">"${t.text}"</p>
      
      <div class="flex items-center justify-between gap-4 border-t border-slate-100 pt-4 w-full">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-[#0B1220] font-bold font-mono text-sm border border-slate-200">
            ${t.initials}
          </div>
          <div class="text-left">
            <span class="block text-xs font-bold text-[#0B1220] font-heading">${t.name}</span>
            <span class="block text-[10px] text-slate-400 font-sans">${t.role}</span>
          </div>
        </div>
        <div class="flex flex-col items-end shrink-0 gap-1">
          <div class="flex text-amber-500 gap-0.5">
            ${Array(t.stars).fill(`<svg class="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`).join('')}
          </div>
          <span class="text-[9px] uppercase tracking-wider text-[#25D366] font-mono font-semibold">Verified Client</span>
        </div>
      </div>
    </div>
  `).join('');
}

function renderCaseStudies() {
  const target = document.getElementById('case-studies-grid');
  if (!target) return;

  target.innerHTML = caseStudies.map(cs => `
    <div class="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 text-left flex flex-col justify-between h-full hover:border-[#F97316]/40 shadow-sm hover:shadow-md transition-all">
      <div>
        <span class="inline-block px-2.5 py-0.5 bg-orange-50 border border-orange-100 rounded-full text-[9px] font-extrabold text-[#F97316] tracking-wider uppercase mb-4">${cs.badge}</span>
        <h3 class="font-heading font-extrabold text-[#0B1220] text-[15px] leading-snug">${cs.title}</h3>
        <span class="block text-[10px] text-slate-400 mt-1 font-sans">CLIENT: ${cs.target}</span>
        
        <p class="text-xs text-slate-500 mt-4 leading-relaxed font-light">
          <strong class="text-slate-800 font-bold">Challenge:</strong> ${cs.challenge}
        </p>
      </div>
      <div class="border-t border-slate-100 pt-4 mt-4 text-xs text-slate-500">
        <strong class="text-[#25D366] font-bold">Resolved:</strong> ${cs.result}
      </div>
    </div>
  `).join('');
}

// --- FAQS ENGINE ---

function renderFAQs() {
  const container = document.getElementById('faqs-accordion-container');
  if (!container) return;

  const filtered = faqs.filter(f => {
    const matchesCat = faqCurrentCategory === 'all' || f.category === faqCurrentCategory;
    const matchesSearch = f.question.toLowerCase().includes(faqSearchQuery.toLowerCase()) || 
                          f.answer.toLowerCase().includes(faqSearchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="text-center py-10 text-slate-500">
        <p class="font-bold">No matched questions inside database.</p>
        <p class="text-xs mt-1">Refine your keywords or select another classification.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map((f, idx) => `
    <div class="faq-item border border-slate-200 bg-slate-50 rounded-xl overflow-hidden transition-all">
      <button data-faq-id="${f.id}" class="faq-trigger w-full flex items-center justify-between p-5 text-left font-heading font-extrabold text-[#0B1220] hover:text-[#F97316] text-xs sm:text-sm select-none outline-none cursor-pointer">
        <span>${f.question}</span>
        <svg class="w-4 h-4 text-slate-400 transform transition-transform duration-300 trigger-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"/></svg>
      </button>
      <div class="faq-content hidden max-h-0 overflow-hidden transition-all duration-300 ease-in-out border-t border-slate-100 bg-white">
        <p class="p-5 text-xs text-slate-600 leading-relaxed font-normal font-sans">${f.answer}</p>
      </div>
    </div>
  `).join('');

  // Re-attach triggers
  document.querySelectorAll('.faq-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const parent = trigger.parentElement;
      if (!parent) return;
      const content = parent.querySelector('.faq-content') as HTMLElement;
      const icon = trigger.querySelector('.trigger-icon') as HTMLElement;

      if (content.classList.contains('hidden')) {
        // Expand
        content.classList.remove('hidden');
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.classList.add('rotate-180');
        parent.classList.add('border-[#F97316]/40', 'bg-white', 'shadow-sm');
      } else {
        // Collapse
        content.style.maxHeight = '0px';
        icon.classList.remove('rotate-180');
        parent.classList.remove('border-[#F97316]/40', 'bg-white', 'shadow-sm');
        setTimeout(() => {
          content.classList.add('hidden');
        }, 300);
      }
    });
  });
}

// --- BLOGS CATALOG ENGINE ---

function renderBlogs() {
  const container = document.getElementById('blog-posts-container');
  if (!container) return;

  const filtered = blogs.filter(b => {
    const matchesCat = blogCurrentCategory === 'all' || b.category === blogCurrentCategory;
    const matchesQuery = b.title.toLowerCase().includes(blogSearchQuery.toLowerCase()) || 
                         b.excerpt.toLowerCase().includes(blogSearchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const emptyState = document.getElementById('blog-empty-state');
  if (filtered.length === 0) {
    container.innerHTML = '';
    emptyState?.classList.remove('hidden');
    document.getElementById('blog-pagination')?.classList.add('hidden');
    return;
  }

  emptyState?.classList.add('hidden');
  document.getElementById('blog-pagination')?.classList.remove('hidden');

  // Page index limits
  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / blogItemsPerPage);
  
  // Adjust bounds
  if (blogCurrentPage > totalPages) blogCurrentPage = Math.max(1, totalPages);
  
  const startIndex = (blogCurrentPage - 1) * blogItemsPerPage;
  const endIndex = Math.min(startIndex + blogItemsPerPage, totalItems);
  
  const paginatedItems = filtered.slice(startIndex, endIndex);

  container.innerHTML = paginatedItems.map(b => `
    <article class="bg-white overflow-hidden border border-slate-200/80 rounded-2xl flex flex-col justify-between hover:border-[#F97316]/40 shadow-sm hover:shadow-md transition-all text-left">
      <div class="p-6 flex flex-col gap-3">
        <span class="inline-block px-2.5 py-0.5 bg-orange-50 border border-orange-100 rounded-full text-[9px] font-extrabold text-[#F97316] tracking-wider uppercase self-start mb-1">${b.category}</span>
        <h3 class="font-heading font-extrabold text-[#0B1220] text-base leading-snug hover:text-[#F97316] transition-colors"><a href="#contact" onclick="window.onboxInquire('Query about Article: ${b.title}')">${b.title}</a></h3>
        <p class="text-xs text-slate-500 font-light leading-relaxed font-sans">${b.excerpt}</p>
      </div>
      
      <div class="px-6 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
        <div class="flex flex-col">
          <span class="text-[10px] text-slate-700 font-bold font-heading">By ${b.author}</span>
          <span class="text-[9px] text-slate-400 uppercase tracking-widest font-mono mt-0.5">${b.date}</span>
        </div>
        <span class="text-[9px] px-2 py-1 bg-slate-50 border border-slate-100 text-slate-500 font-semibold font-mono rounded select-none shrink-0">${b.readTime}</span>
      </div>
    </article>
  `).join('');

  // Update Pagination Controls Info
  const prevBtn = document.getElementById('btn-blog-prev') as HTMLButtonElement;
  const nextBtn = document.getElementById('btn-blog-next') as HTMLButtonElement;
  const pageInfo = document.getElementById('blog-page-info');

  if (prevBtn && nextBtn && pageInfo) {
    prevBtn.disabled = blogCurrentPage === 1;
    nextBtn.disabled = blogCurrentPage === totalPages;
    pageInfo.textContent = `Page ${blogCurrentPage} of ${totalPages || 1}`;
  }
}

// --- INTERACTIVE CALCULATORS ENGINE ---

function renderActiveCalculator() {
  const container = document.getElementById('calculator-workbench');
  if (!container) return;

  if (activeCalculator === 'income-tax') {
    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
        <!-- Input section (7 cols) -->
        <div class="md:col-span-6 space-y-5">
          <h3 class="font-heading font-extrabold text-white text-base">FY 2025-26 Standard Projections</h3>
          
          <div class="flex flex-col gap-1.5">
            <div class="flex justify-between items-center">
              <label class="text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-450">Annual Salary (CTC)</label>
              <span class="text-xs font-mono font-bold text-accent" id="lbl-sal">₹12,00,000</span>
            </div>
            <input type="range" id="input-salary" min="300000" max="5000000" step="50000" value="1200000" class="w-full accent-accent h-1.5 bg-slate-800 rounded-lg cursor-pointer" />
          </div>

          <div class="flex flex-col gap-1.5">
            <div class="flex justify-between items-center">
              <label class="text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-450">Other Incomes (Rent, Shares)</label>
              <span class="text-xs font-mono font-bold text-accent" id="lbl-other">₹0</span>
            </div>
            <input type="range" id="input-other" min="0" max="1000000" step="25000" value="0" class="w-full accent-accent h-1.5 bg-slate-800 rounded-lg cursor-pointer" />
          </div>

          <div class="flex flex-col gap-1.5">
            <div class="flex justify-between items-center">
              <label class="text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-450">Sec. 80C Investment (Old regime only)</label>
              <span class="text-xs font-mono font-bold text-accent" id="lbl-80c">₹1,50,000</span>
            </div>
            <input type="range" id="input-80c" min="0" max="150000" step="10000" value="150000" class="w-full accent-accent h-1.5 bg-slate-800 rounded-lg cursor-pointer" />
          </div>

          <div class="flex flex-col gap-1.5">
            <div class="flex justify-between items-center">
              <label class="text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-450">Sec. 80D Insurance (Old regime only)</label>
              <span class="text-xs font-mono font-bold text-accent" id="lbl-80d">₹25,000</span>
            </div>
            <input type="range" id="input-80d" min="0" max="75000" step="5000" value="25000" class="w-full accent-accent h-1.5 bg-slate-800 rounded-lg cursor-pointer" />
          </div>

          <div class="flex flex-col gap-1.5">
            <div class="flex justify-between items-center">
              <label class="text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-450">HRA Tax Exemptions (Old regime only)</label>
              <span class="text-xs font-mono font-bold text-accent" id="lbl-hra">₹0</span>
            </div>
            <input type="range" id="input-hra-exempt" min="0" max="400000" step="10000" value="0" class="w-full accent-accent h-1.5 bg-slate-800 rounded-lg cursor-pointer" />
          </div>
        </div>

        <!-- Output side compared (5 cols) -->
        <div class="md:col-span-6 bg-slate-950/40 p-5 rounded-2xl border border-slate-850 flex flex-col justify-between gap-6">
          <div>
            <h4 class="font-heading font-extrabold text-white text-xs uppercase tracking-widest text-[#D4AF37]">Regimes Evaluation</h4>
            <span class="text-[10px] text-slate-550 block mt-0.5">Calculated using statutory new amendments</span>
            
            <div class="grid grid-cols-2 gap-4 mt-6">
              <div class="p-3.5 bg-slate-900 border border-[#D4AF37]/15 rounded-xl">
                <span class="block text-[9px] uppercase tracking-wider text-slate-400 font-semibold font-mono">New Tax Regime</span>
                <span class="block text-xl font-heading font-extrabold text-white mt-1" id="tax-val-new">₹0</span>
                <span class="block text-[9px] text-slate-500 mt-1 font-mono">deductions absent</span>
              </div>
              <div class="p-3.5 bg-slate-900 border border-slate-800 rounded-xl">
                <span class="block text-[9px] uppercase tracking-wider text-slate-400 font-semibold font-mono">Old Tax Regime</span>
                <span class="block text-xl font-heading font-extrabold text-white mt-1" id="tax-val-old">₹0</span>
                <span class="block text-[9px] text-slate-500 mt-1 font-mono" id="tax-ded-total-old">Deductions enabled</span>
              </div>
            </div>

            <!-- Best Choice Recommendation Tag -->
            <div class="mt-6 p-4 rounded-xl text-center text-xs font-bold font-heading border" id="regime-recommendation-tag">
              --
            </div>
          </div>

          <button onclick="window.onboxInquire('I need customized ITR calculation analysis')" class="w-full py-3 bg-secondary text-white font-bold rounded-lg text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all select-none cursor-pointer">
            Lock in and File Now
          </button>
        </div>
      </div>
    `;

    // Bind tax inputs listeners
    const sliderSal = document.getElementById('input-salary') as HTMLInputElement;
    const sliderOther = document.getElementById('input-other') as HTMLInputElement;
    const slider80c = document.getElementById('input-80c') as HTMLInputElement;
    const slider80d = document.getElementById('input-80d') as HTMLInputElement;
    const sliderHRA = document.getElementById('input-hra-exempt') as HTMLInputElement;

    const runTaxModel = () => {
      const ctc = Number(sliderSal.value);
      const other = Number(sliderOther.value);
      const dec80c = Number(slider80c.value);
      const dec80d = Number(slider80d.value);
      const hra = Number(sliderHRA.value);

      document.getElementById('lbl-sal')!.textContent = formatCurrency(ctc);
      document.getElementById('lbl-other')!.textContent = formatCurrency(other);
      document.getElementById('lbl-80c')!.textContent = formatCurrency(dec80c);
      document.getElementById('lbl-80d')!.textContent = formatCurrency(dec80d);
      document.getElementById('lbl-hra')!.textContent = formatCurrency(hra);

      const newTaxOutput = calculateNewRegimeTax(ctc, other);
      const oldTaxOutput = calculateOldRegimeTax(ctc, other, dec80c, dec80d, hra);

      document.getElementById('tax-val-new')!.textContent = formatCurrency(newTaxOutput.totalTax);
      document.getElementById('tax-val-old')!.textContent = formatCurrency(oldTaxOutput.totalTax);
      
      const savedSum = Math.abs(oldTaxOutput.totalTax - newTaxOutput.totalTax);
      const recomNode = document.getElementById('regime-recommendation-tag') as HTMLElement;
      
      if (newTaxOutput.totalTax < oldTaxOutput.totalTax) {
        recomNode.className = 'mt-6 p-4 rounded-xl text-center text-xs font-bold font-heading border border-[#25D366]/20 bg-emerald-500/5 text-[#25D366]';
        recomNode.textContent = `RECOMMENDED: New Regime saves you ${formatCurrency(savedSum)}`;
      } else if (newTaxOutput.totalTax > oldTaxOutput.totalTax) {
        recomNode.className = 'mt-6 p-4 rounded-xl text-center text-xs font-bold font-heading border border-accent/20 bg-accent/5 text-[#D4AF37]';
        recomNode.textContent = `RECOMMENDED: Old Regime saves you ${formatCurrency(savedSum)}`;
      } else {
        recomNode.className = 'mt-6 p-4 rounded-xl text-center text-xs font-bold font-heading border border-slate-800 bg-slate-900/40 text-slate-350';
        recomNode.textContent = 'Both tax regimes lead to matching liability results';
      }
    };

    [sliderSal, sliderOther, slider80c, slider80d, sliderHRA].forEach(node => {
      node?.addEventListener('input', runTaxModel);
    });

    runTaxModel();
  } 

  else if (activeCalculator === 'gst') {
    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
        <!-- Input section (6 cols) -->
        <div class="md:col-span-6 space-y-6">
          <h3 class="font-heading font-extrabold text-white text-base">GST Calibration Slab</h3>
          
          <div class="flex flex-col gap-1.5">
            <label class="text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-450">Base Billing Amount (INR)</label>
            <input type="number" id="input-gst-base" value="10000" class="bg-slate-950 border border-slate-800 rounded px-4 py-3.5 text-sm text-white focus:outline-none focus:border-accent font-mono" />
          </div>

          <!-- GST Toggle rates -->
          <div class="flex flex-col gap-2">
            <label class="text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-450">Tax Slabs (GST Rate)</label>
            <div class="grid grid-cols-4 gap-2.5">
              <button data-rate="5" class="gst-rate-btn py-2.5 rounded-lg text-xs font-bold border border-slate-800 text-slate-350 bg-slate-950 outline-none cursor-pointer">5%</button>
              <button data-rate="12" class="gst-rate-btn py-2.5 rounded-lg text-xs font-bold border border-slate-800 text-slate-350 bg-slate-950 outline-none cursor-pointer">12%</button>
              <button data-rate="18" class="gst-rate-btn active py-2.5 rounded-lg text-xs font-bold border border-accent text-accent bg-accent/5 outline-none cursor-pointer">18%</button>
              <button data-rate="28" class="gst-rate-btn py-2.5 rounded-lg text-xs font-bold border border-slate-800 text-slate-350 bg-slate-950 outline-none cursor-pointer">28%</button>
            </div>
          </div>

          <!-- Exclusive / inclusive check -->
          <div class="flex flex-col gap-2">
            <label class="text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-450">Tax Position</label>
            <div class="grid grid-cols-2 gap-3">
              <button id="btn-gst-exclusive" class="gst-pos-btn active py-3 border border-accent rounded-lg text-xs font-bold text-accent bg-accent/5 cursor-pointer">Exclusive (+ GST)</button>
              <button id="btn-gst-inclusive" class="gst-pos-btn py-3 border border-slate-800 rounded-lg text-xs font-bold text-slate-350 bg-slate-950 cursor-pointer">Inclusive (GST Built-in)</button>
            </div>
          </div>
        </div>

        <!-- Output section (6 cols) -->
        <div class="md:col-span-6 bg-slate-950/40 p-5 rounded-2xl border border-slate-850 flex flex-col justify-between gap-6">
          <div class="space-y-4">
            <h4 class="font-heading font-extrabold text-white text-xs uppercase tracking-widest text-secondary">Final Invoice Split</h4>
            
            <div class="divide-y divide-slate-850 text-xs">
              <div class="py-3.5 flex justify-between">
                <span class="text-slate-400">Recorded Net Base</span>
                <span class="font-mono font-bold text-white" id="gst-val-base">₹0</span>
              </div>
              <div class="py-3.5 flex justify-between">
                <span class="text-slate-400">Total GST Calculated</span>
                <span class="font-mono font-bold text-accent" id="gst-val-tax">₹0</span>
              </div>
              <div class="py-3.5 flex justify-between pl-4 border-l-2 border-accent/20">
                <span class="text-slate-500">CGST Segment Split (Center)</span>
                <span class="font-mono text-slate-400" id="gst-val-cgst">₹0</span>
              </div>
              <div class="py-3.5 flex justify-between pl-4 border-l-2 border-accent/20">
                <span class="text-slate-500">SGST Segment Split (State)</span>
                <span class="font-mono text-slate-400" id="gst-val-sgst">₹0</span>
              </div>
              <div class="py-4 flex justify-between text-base font-bold border-t border-slate-700">
                <span class="text-white">Gross Total (Payable)</span>
                <span class="font-mono text-secondary" id="gst-val-total">₹0</span>
              </div>
            </div>
          </div>

          <button onclick="window.onboxInquire('I want to register GST compliance mapping')" class="w-full py-3 bg-[#D4AF37] text-primary font-bold rounded-lg text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all select-none cursor-pointer">
            Export GST Calculations
          </button>
        </div>
      </div>
    `;

    // GST model engine
    let selectedRate = 18;
    let isExclusive = true;

    const baseInput = document.getElementById('input-gst-base') as HTMLInputElement;
    const btnExcl = document.getElementById('btn-gst-exclusive') as HTMLButtonElement;
    const btnIncl = document.getElementById('btn-gst-inclusive') as HTMLButtonElement;

    const runGstModel = () => {
      const baseVal = Math.max(0, Number(baseInput.value) || 0);
      const res = calculateGST(baseVal, selectedRate, isExclusive);

      document.getElementById('gst-val-base')!.textContent = formatCurrency(res.originalAmount);
      document.getElementById('gst-val-tax')!.textContent = formatCurrency(res.gstAmount);
      document.getElementById('gst-val-cgst')!.textContent = formatCurrency(res.cgst);
      document.getElementById('gst-val-sgst')!.textContent = formatCurrency(res.sgst);
      document.getElementById('gst-val-total')!.textContent = formatCurrency(res.totalAmount);
    };

    // Bind rates buttons clicks
    document.querySelectorAll('.gst-rate-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.gst-rate-btn').forEach(b => b.classList.remove('border-accent', 'text-accent', 'bg-accent/5'));
        document.querySelectorAll('.gst-rate-btn').forEach(b => b.classList.add('border-slate-800', 'text-slate-350', 'bg-slate-950'));
        btn.classList.add('border-accent', 'text-accent', 'bg-accent/5');
        btn.classList.remove('border-slate-800', 'text-slate-350', 'bg-slate-950');
        
        selectedRate = Number(btn.getAttribute('data-rate'));
        runGstModel();
      });
    });

    btnExcl.addEventListener('click', () => {
      btnIncl.classList.remove('border-accent', 'text-accent', 'bg-accent/5');
      btnIncl.classList.add('border-slate-800', 'text-slate-350', 'bg-slate-950');
      btnExcl.classList.add('border-accent', 'text-accent', 'bg-accent/5');
      btnExcl.classList.remove('border-slate-800', 'text-slate-350', 'bg-slate-950');
      isExclusive = true;
      runGstModel();
    });

    btnIncl.addEventListener('click', () => {
      btnExcl.classList.remove('border-accent', 'text-accent', 'bg-accent/5');
      btnExcl.classList.add('border-slate-800', 'text-slate-350', 'bg-slate-950');
      btnIncl.classList.add('border-accent', 'text-accent', 'bg-accent/5');
      btnIncl.classList.remove('border-slate-800', 'text-slate-350', 'bg-slate-950');
      isExclusive = false;
      runGstModel();
    });

    baseInput.addEventListener('input', runGstModel);
    runGstModel();
  } 

  else if (activeCalculator === 'emi') {
    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
        <!-- Inputs (7 cols) -->
        <div class="md:col-span-6 space-y-6">
          <h3 class="font-heading font-extrabold text-white text-base">Amortization Siders</h3>
          
          <div class="flex flex-col gap-1.5">
            <div class="flex justify-between items-center">
              <label class="text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-450">Required Loan Amount</label>
              <span class="text-xs font-mono font-bold text-accent" id="lbl-emi-pr">₹5,00,000</span>
            </div>
            <input type="range" id="input-emi-principal" min="50000" max="10000000" step="50000" value="500000" class="w-full accent-accent h-1.5 bg-slate-800 rounded-lg cursor-pointer" />
          </div>

          <div class="flex flex-col gap-1.5">
            <div class="flex justify-between items-center">
              <label class="text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-450">Interest Rate (% Per Annum)</label>
              <span class="text-xs font-mono font-bold text-accent" id="lbl-emi-rate">9.5%</span>
            </div>
            <input type="range" id="input-emi-rate" min="5" max="22" step="0.1" value="9.5" class="w-full accent-accent h-1.5 bg-slate-800 rounded-lg cursor-pointer" />
          </div>

          <div class="flex flex-col gap-1.5">
            <div class="flex justify-between items-center">
              <label class="text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-450">Tenure (In Years)</label>
              <span class="text-xs font-mono font-bold text-accent" id="lbl-emi-tenure">5 Years</span>
            </div>
            <input type="range" id="input-emi-tenure" min="1" max="25" step="1" value="5" class="w-full accent-accent h-1.5 bg-slate-800 rounded-lg cursor-pointer" />
          </div>
        </div>

        <!-- Outputs (5 cols) -->
        <div class="md:col-span-6 bg-slate-950/40 p-5 rounded-2xl border border-slate-850 flex flex-col justify-between gap-6">
          <div class="space-y-4">
            <h4 class="font-heading font-extrabold text-white text-xs uppercase tracking-widest text-[#D4AF37]">repayment Evaluation</h4>
            
            <div class="divide-y divide-slate-850 text-xs">
              <div class="py-4 text-center">
                <span class="block text-[10px] uppercase tracking-wider text-slate-450">Monthly Repayment (EMI)</span>
                <span class="block text-3.5xl font-heading font-extrabold text-accent mt-1.5" id="val-emi-monthly">₹0</span>
              </div>
              <div class="py-3 flex justify-between mt-3">
                <span class="text-slate-400">Principal Requested</span>
                <span class="font-mono text-white" id="val-emi-requested">₹0</span>
              </div>
              <div class="py-3 flex justify-between">
                <span class="text-slate-400">Total Interest Payable</span>
                <span class="font-mono text-slate-350" id="val-emi-interest-total">₹0</span>
              </div>
              <div class="py-3 flex justify-between">
                <span class="text-slate-400">Total Capital Cost</span>
                <span class="font-mono font-bold text-white" id="val-emi-pay-total">₹0</span>
              </div>
            </div>
          </div>

          <button onclick="window.onboxInquire('I need current auditing for commercial bank loan approvals')" class="w-full py-3 bg-secondary text-white font-bold rounded-lg text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all select-none cursor-pointer">
            Inquire for Loan Balance sheets
          </button>
        </div>
      </div>
    `;

    const prSl = document.getElementById('input-emi-principal') as HTMLInputElement;
    const rateSl = document.getElementById('input-emi-rate') as HTMLInputElement;
    const yearSl = document.getElementById('input-emi-tenure') as HTMLInputElement;

    const runEmiModel = () => {
      const p = Number(prSl.value);
      const r = Number(rateSl.value);
      const t = Number(yearSl.value);

      document.getElementById('lbl-emi-pr')!.textContent = formatCurrency(p);
      document.getElementById('lbl-emi-rate')!.textContent = r + '%';
      document.getElementById('lbl-emi-tenure')!.textContent = t + ' Years';

      const emiRes = calculateEMI(p, r, t);

      document.getElementById('val-emi-monthly')!.textContent = formatCurrency(emiRes.monthlyEmi);
      document.getElementById('val-emi-requested')!.textContent = formatCurrency(p);
      document.getElementById('val-emi-interest-total')!.textContent = formatCurrency(emiRes.totalInterest);
      document.getElementById('val-emi-pay-total')!.textContent = formatCurrency(emiRes.totalAmount);
    };

    [prSl, rateSl, yearSl].forEach(node => {
      node?.addEventListener('input', runEmiModel);
    });

    runEmiModel();
  } 

  else if (activeCalculator === 'hra') {
    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
        <!-- Inputs -->
        <div class="md:col-span-6 space-y-5">
          <h3 class="font-heading font-extrabold text-white text-base">HRA Exemption Variables</h3>
          
          <div class="flex flex-col gap-1.5">
            <div class="flex justify-between items-center">
              <label class="text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-450">Basic Salary + DA (Monthly)</label>
              <span class="text-xs font-mono font-bold text-accent" id="lbl-hra-basic">₹40,000</span>
            </div>
            <input type="range" id="input-h-basic" min="10000" fill="indigo" max="250000" step="2000" value="40000" class="w-full accent-accent h-1.5 bg-slate-800 rounded-lg cursor-pointer" />
          </div>

          <div class="flex flex-col gap-1.5">
            <div class="flex justify-between items-center">
              <label class="text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-450">Actual HRA Received (Monthly)</label>
              <span class="text-xs font-mono font-bold text-accent" id="lbl-hra-rec">₹15,000</span>
            </div>
            <input type="range" id="input-h-rec" min="0" max="100000" step="1000" value="15000" class="w-full accent-accent h-1.5 bg-slate-800 rounded-lg cursor-pointer" />
          </div>

          <div class="flex flex-col gap-1.5">
            <div class="flex justify-between items-center">
              <label class="text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-450">Actual Rent Paid (Monthly)</label>
              <span class="text-xs font-mono font-bold text-accent" id="lbl-hra-paid">₹12,00/month</span>
            </div>
            <input type="range" id="input-h-paid" min="0" max="100000" step="1000" value="12000" class="w-full accent-accent h-1.5 bg-slate-800 rounded-lg cursor-pointer" />
          </div>

          <!-- Metro switch -->
          <div class="flex flex-col gap-2">
            <label class="text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-450">Residence Classification</label>
            <div class="grid grid-cols-2 gap-3">
              <button id="btn-hra-nonmetro" class="hra-metro-btn active py-3 border border-accent rounded-lg text-xs font-bold text-accent bg-accent/5 cursor-pointer">Non Metro Area (40% Cap)</button>
              <button id="btn-hra-metro" class="hra-metro-btn py-3 border border-slate-800 rounded-lg text-xs font-bold text-slate-300 bg-slate-950 cursor-pointer">Metro (50% Cap)</button>
            </div>
          </div>
        </div>

        <!-- Output (5 cols) -->
        <div class="md:col-span-6 bg-slate-950/40 p-5 rounded-2xl border border-slate-850 flex flex-col justify-between gap-6">
          <div class="space-y-4">
            <h4 class="font-heading font-extrabold text-white text-xs uppercase tracking-widest text-[#D4AF37]">Taxable HRA splits</h4>
            
            <div class="p-4 bg-slate-900 border border-slate-800 rounded-xl grid grid-cols-2 gap-4 text-center">
              <div>
                <span class="block text-[8px] uppercase tracking-wider text-[#25D366] font-semibold">Exempt HRA (Free)</span>
                <span class="block text-lg font-heading font-extrabold text-[#25D366] mt-1" id="val-hra-exempt">₹0</span>
              </div>
              <div>
                <span class="block text-[8px] uppercase tracking-wider text-secondary font-semibold">Taxable HRA (Charged)</span>
                <span class="block text-lg font-heading font-extrabold text-secondary mt-1" id="val-hra-taxable">₹0</span>
              </div>
            </div>

            <div class="divide-y divide-slate-850 text-xs">
              <span class="block text-[9px] text-slate-500 uppercase font-mono mt-2">Clause evaluations computed:</span>
              <div class="py-2.5 flex justify-between pr-2 mt-1">
                <span class="text-slate-550">1. Actual Allowances received</span>
                <span class="font-mono text-slate-350" id="val-hra-r1">₹0</span>
              </div>
              <div class="py-2.5 flex justify-between pr-2">
                <span class="text-slate-550">2. Rent paid above 10% basic salary</span>
                <span class="font-mono text-slate-350" id="val-hra-r2">₹0</span>
              </div>
              <div class="py-2.5 flex justify-between pr-2">
                <span class="text-slate-550">3. Territorial cap (Maharashtra limits)</span>
                <span class="font-mono text-slate-350" id="val-hra-r3">₹0</span>
              </div>
            </div>
          </div>

          <button onclick="window.onboxInquire('I need personalized HRA deduction advice')" class="w-full py-3 bg-[#D4AF37] text-primary font-bold rounded-lg text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all select-none cursor-pointer">
            Claim HRA Exemption Tax Advice
          </button>
        </div>
      </div>
    `;

    const sBasic = document.getElementById('input-h-basic') as HTMLInputElement;
    const sRec = document.getElementById('input-h-rec') as HTMLInputElement;
    const sPaid = document.getElementById('input-h-paid') as HTMLInputElement;
    const btnMetro = document.getElementById('btn-hra-metro') as HTMLButtonElement;
    const btnNonMetro = document.getElementById('btn-hra-nonmetro') as HTMLButtonElement;

    let isMetro = false;

    const runHraModel = () => {
      const basic = Number(sBasic.value);
      const rec = Number(sRec.value);
      const paid = Number(sPaid.value);

      document.getElementById('lbl-hra-basic')!.textContent = formatCurrency(basic);
      document.getElementById('lbl-hra-rec')!.textContent = formatCurrency(rec);
      document.getElementById('lbl-hra-paid')!.textContent = formatCurrency(paid);

      const hraRes = calculateHRA(basic, rec, paid, isMetro);

      document.getElementById('val-hra-exempt')!.textContent = formatCurrency(hraRes.exemptHRA);
      document.getElementById('val-hra-taxable')!.textContent = formatCurrency(hraRes.taxableHRA);
      document.getElementById('val-hra-r1')!.textContent = formatCurrency(hraRes.rule1);
      document.getElementById('val-hra-r2')!.textContent = formatCurrency(hraRes.rule2);
      document.getElementById('val-hra-r3')!.textContent = formatCurrency(hraRes.rule1 === 0 ? 0 : hraRes.rule3);
    };

    btnMetro.addEventListener('click', () => {
      btnNonMetro.classList.remove('border-accent', 'text-accent', 'bg-accent/5');
      btnNonMetro.classList.add('border-slate-800', 'text-slate-300', 'bg-slate-950');
      btnMetro.classList.add('border-accent', 'text-accent', 'bg-accent/5');
      btnMetro.classList.remove('border-slate-800', 'text-slate-300', 'bg-slate-950');
      isMetro = true;
      runHraModel();
    });

    btnNonMetro.addEventListener('click', () => {
      btnMetro.classList.remove('border-accent', 'text-accent', 'bg-accent/5');
      btnMetro.classList.add('border-slate-800', 'text-slate-300', 'bg-slate-950');
      btnNonMetro.classList.add('border-accent', 'text-accent', 'bg-accent/5');
      btnNonMetro.classList.remove('border-slate-800', 'text-slate-300', 'bg-slate-950');
      isMetro = false;
      runHraModel();
    });

    [sBasic, sRec, sPaid].forEach(n => n.addEventListener('input', runHraModel));
    runHraModel();
  } 

  else if (activeCalculator === 'tax-saving') {
    container.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
        <!-- Inputs (7 cols) -->
        <div class="md:col-span-6 space-y-5">
          <h3 class="font-heading font-extrabold text-white text-base">Deduction Tax-Shields</h3>
          
          <div class="flex flex-col gap-1.5">
            <div class="flex justify-between items-center">
              <label class="text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-450">Planned Section 80C Investments</label>
              <span class="text-xs font-mono font-bold text-accent" id="lbl-sav-80c">₹1,50,000</span>
            </div>
            <input type="range" id="input-sav-80c" min="0" max="150000" step="5000" value="150000" class="w-full accent-accent h-1.5 bg-slate-800 rounded-lg cursor-pointer" />
          </div>

          <div class="flex flex-col gap-1.5">
            <div class="flex justify-between items-center">
              <label class="text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-450">Planned Sec 80D Insurance Premium</label>
              <span class="text-xs font-mono font-bold text-accent" id="lbl-sav-80d">₹25,000</span>
            </div>
            <input type="range" id="input-sav-80d" min="0" max="75000" step="2500" value="25000" class="w-full accent-accent h-1.5 bg-slate-800 rounded-lg cursor-pointer" />
          </div>

          <div class="flex flex-col gap-1.5">
            <div class="flex justify-between items-center">
              <label class="text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-450">Planned Sec 80CCD(1b) NPS Contribution</label>
              <span class="text-xs font-mono font-bold text-accent" id="lbl-sav-nps">₹50,000</span>
            </div>
            <input type="range" id="input-sav-nps" min="0" max="50000" step="2500" value="50000" class="w-full accent-accent h-1.5 bg-slate-800 rounded-lg cursor-pointer" />
          </div>

          <!-- Estimated income bracket -->
          <div class="flex flex-col gap-2">
            <label class="text-[10px] uppercase font-mono tracking-wider font-semibold text-slate-450">Marginal Income Tax Bracket</label>
            <div class="grid grid-cols-3 gap-2.5">
              <button data-bracket="10" class="bkt-btn py-2.5 rounded-lg text-xs font-bold border border-slate-800 text-slate-350 bg-slate-950 outline-none cursor-pointer">10% Slab</button>
              <button data-bracket="20" class="bkt-btn py-2.5 rounded-lg text-xs font-bold border border-slate-800 text-slate-350 bg-slate-950 outline-none cursor-pointer">20% Slab</button>
              <button data-bracket="30" class="bkt-btn active py-2.5 rounded-lg text-xs font-bold border border-accent text-accent bg-accent/5 outline-none cursor-pointer">30% Slab</button>
            </div>
          </div>
        </div>

        <!-- Output (5 cols) -->
        <div class="md:col-span-6 bg-slate-950/40 p-5 rounded-2xl border border-slate-850 flex flex-col justify-between gap-6">
          <div class="space-y-4">
            <h4 class="font-heading font-extrabold text-white text-xs uppercase tracking-widest text-[#D4AF37]">Estimated Savings Outflow</h4>
            
            <div class="py-5 text-center bg-slate-900 border border-slate-800 rounded-xl">
              <span class="block text-[10px] uppercase tracking-wider text-[#25D366]">Total Net Tax Cash Saved</span>
              <span class="block text-3.5xl font-heading font-extrabold text-[#25D366] mt-2" id="val-sav-saved">₹0</span>
            </div>

            <div class="divide-y divide-slate-850 text-xs">
              <div class="py-3 flex justify-between">
                <span class="text-slate-400">Total Deductions Claimed</span>
                <span class="font-mono text-white" id="val-sav-dec">₹0</span>
              </div>
              <div class="py-3 flex justify-between">
                <span class="text-slate-400">Marginal Slab Applied</span>
                <span class="font-mono text-slate-350" id="val-sav-slab-recap">30%</span>
              </div>
            </div>
          </div>

          <button onclick="window.onboxInquire('I need comprehensive tax-saving optimizations planned')" class="w-full py-3 bg-secondary text-white font-bold rounded-lg text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all select-none cursor-pointer">
            Lock in Financial Strategy
          </button>
        </div>
      </div>
    `;

    const sl80c = document.getElementById('input-sav-80c') as HTMLInputElement;
    const sl80d = document.getElementById('input-sav-80d') as HTMLInputElement;
    const slNps = document.getElementById('input-sav-nps') as HTMLInputElement;

    let appliedBracket = 30;

    const runSavModel = () => {
      const c = Number(sl80c.value);
      const d = Number(sl80d.value);
      const n = Number(slNps.value);

      document.getElementById('lbl-sav-80c')!.textContent = formatCurrency(c);
      document.getElementById('lbl-sav-80d')!.textContent = formatCurrency(d);
      document.getElementById('lbl-sav-nps')!.textContent = formatCurrency(n);

      const netSavings = calculateTaxSavings(c, d, n, appliedBracket);
      const decSum = Math.min(150000, c) + Math.min(75000, d) + Math.min(50000, n);

      document.getElementById('val-sav-saved')!.textContent = formatCurrency(netSavings);
      document.getElementById('val-sav-dec')!.textContent = formatCurrency(decSum);
      document.getElementById('val-sav-slab-recap')!.textContent = appliedBracket + '%';
    };

    // Bracket loops
    document.querySelectorAll('.bkt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.bkt-btn').forEach(b => b.classList.remove('border-accent', 'text-accent', 'bg-accent/5'));
        document.querySelectorAll('.bkt-btn').forEach(b => b.classList.add('border-slate-800', 'text-slate-350', 'bg-slate-950'));
        btn.classList.add('border-accent', 'text-accent', 'bg-accent/5');
        btn.classList.remove('border-slate-800', 'text-slate-350', 'bg-slate-950');

        appliedBracket = Number(btn.getAttribute('data-bracket'));
        runSavModel();
      });
    });

    [sl80c, sl80d, slNps].forEach(n => n.addEventListener('input', runSavModel));
    runSavModel();
  }
}

// --- SECURE UPLOAD PORTAL MODULE ---

function initUploadPortal() {
  const dropZone = document.getElementById('drag-drop-zone');
  const filePicker = document.getElementById('portal-file-picker') as HTMLInputElement;
  const idleView = document.getElementById('drop-zone-idle');
  const activeView = document.getElementById('drop-zone-active');
  const progressBar = document.getElementById('upload-progress-bar') as HTMLElement;
  const listTarget = document.getElementById('uploaded-files-list');
  const resetBtn = document.getElementById('btn-reset-portal');
  const statusTitle = document.getElementById('upload-status-title');

  if (!dropZone || !filePicker || !idleView || !activeView || !progressBar) return;

  // Open file picker on dropZone click (if idle)
  dropZone.addEventListener('click', (e) => {
    // Avoid double trigger if clicking elements inside or loops
    if (activeView.classList.contains('hidden')) {
      filePicker.click();
    }
  });

  filePicker.addEventListener('change', () => {
    if (filePicker.files && filePicker.files.length > 0) {
      handleFilesTransfer(Array.from(filePicker.files));
    }
  });

  // Drag and drop event traps
  ['dragenter', 'dragover'].forEach(event => {
    dropZone.addEventListener(event, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropZone.classList.add('border-accent', 'bg-slate-900/40');
    }, false);
  });

  ['dragleave', 'drop'].forEach(event => {
    dropZone.addEventListener(event, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropZone.classList.remove('border-accent', 'bg-slate-900/40');
    }, false);
  });

  dropZone.addEventListener('drop', (e: DragEvent) => {
    const dt = e.dataTransfer;
    if (dt && dt.files && dt.files.length > 0) {
      handleFilesTransfer(Array.from(dt.files));
    }
  });

  function handleFilesTransfer(files: File[]) {
    // Hide idle, show active
    idleView.classList.add('hidden');
    activeView.classList.remove('hidden');
    resetBtn?.classList.add('hidden');
    statusTitle!.textContent = 'Securing & Encrypting document tunnel...';

    // List files
    if (listTarget) {
      listTarget.innerHTML = files.map(f => `
        <li class="py-2 flex items-center justify-between font-mono gap-4 font-light text-[10px]">
          <span class="truncate text-slate-300">${f.name}</span>
          <span class="shrink-0 text-slate-500">(${(f.size / 1024 / 1024).toFixed(2)} MB)</span>
        </li>
      `).join('');
    }

    // Simulate progress upload
    let progress = 0;
    progressBar.style.width = '0%';
    
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        
        // Final success state
        progressBar.style.width = '100%';
        statusTitle!.textContent = 'Document crypt tunnel sealed! Received.';
        resetBtn?.classList.remove('hidden');
        showToast(`Securely uploaded ${files.length} legal documents.`);
      } else {
        progressBar.style.width = progress + '%';
      }
    }, 150);
  }

  resetBtn?.addEventListener('click', (e) => {
    e.stopPropagation(); // Avoid re-triggering file picker
    filePicker.value = '';
    idleView.classList.remove('hidden');
    activeView.classList.add('hidden');
  });
}

// --- LEAD FORMS & MODALS LIFE CYCLE ---

function initLeadEngagement() {
  const bookingModal = document.getElementById('booking-modal');
  const bookingClose = document.getElementById('booking-modal-close');
  const exitPopup = document.getElementById('exit-intent-popup');
  const exitClose = document.getElementById('exit-popup-close');

  // Trigger modal function
  window.onboxInquire = (serviceName?: string) => {
    if (bookingModal) {
      bookingModal.classList.remove('hidden');
      const serviceSelect = document.getElementById('m-service') as HTMLSelectElement;
      if (serviceSelect && serviceName) {
        // Search option match
        const option = Array.from(serviceSelect.options).find(o => o.value.toLowerCase().includes(serviceName.toLowerCase() || ''));
        if (option) {
          serviceSelect.value = option.value;
        }
      }
    }
  };

  // Close reservation modal
  bookingClose?.addEventListener('click', () => {
    bookingModal?.classList.add('hidden');
  });

  bookingModal?.addEventListener('click', (e) => {
    if (e.target === bookingModal) {
      bookingModal.classList.add('hidden');
    }
  });

  // Exit intent popup mechanism
  let exitTriggered = false;
  document.addEventListener('mouseleave', (e) => {
    if (e.clientY < 30 && !exitTriggered) {
      exitPopup?.classList.remove('hidden');
      exitTriggered = true;
    }
  });

  exitClose?.addEventListener('click', () => {
    exitPopup?.classList.add('hidden');
  });

  exitPopup?.addEventListener('click', (e) => {
    if (e.target === exitPopup) {
      exitPopup.classList.add('hidden');
    }
  });

  // Dynamic float CTAs links mapping
  document.getElementById('btn-sticky-book')?.addEventListener('click', () => {
    window.onboxInquire();
  });

  document.getElementById('header-consultation-btn')?.addEventListener('click', () => {
    window.onboxInquire('Audit');
  });

  document.getElementById('mobile-consultation-btn')?.addEventListener('click', () => {
    document.getElementById('mobile-dropdown')?.classList.add('hidden');
    window.onboxInquire('Audit');
  });

  document.getElementById('hero-cta-consult')?.addEventListener('click', () => {
    window.onboxInquire('Consultation');
  });

  // FORM SUBMISSIONS INTERCEPTORS
  
  // HELPER FOR REDIRECTING ENQUIRY & BOOKINGS TO ADITYA ON WHATSAPP
  function sendToWhatsApp(text: string) {
    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/917385590822?text=${encodedText}`;
    const link = document.createElement('a');
    link.href = waUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // 1. Page bottom Evaluation Ledger
  const contactForm = document.getElementById('contact-evaluation-ledger') as HTMLFormElement;
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = (document.getElementById('f-name') as HTMLInputElement).value;
    const phone = (document.getElementById('f-phone') as HTMLInputElement).value;
    const email = (document.getElementById('f-email') as HTMLInputElement).value;
    const service = (document.getElementById('f-service') as HTMLSelectElement).value;
    const message = (document.getElementById('f-message') as HTMLTextAreaElement).value;

    const waText = `*Inquiry from Nimbekar Accounting Servicess Web*\n\n` +
                   `• *Name:* ${name}\n` +
                   `• *Phone:* ${phone}\n` +
                   `• *Email:* ${email}\n` +
                   `• *Regulatory Service:* ${service}\n` +
                   `• *Message:* ${message}`;

    showToast(`Redirecting your inquiry to WhatsApp...`);
    setTimeout(() => {
      sendToWhatsApp(waText);
      contactForm.reset();
    }, 800);
  });

  // 2. Booking Modal form
  const modalForm = document.getElementById('modal-appointment-ledger') as HTMLFormElement;
  modalForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = (document.getElementById('m-name') as HTMLInputElement).value;
    const phone = (document.getElementById('m-phone') as HTMLInputElement).value;
    const service = (document.getElementById('m-service') as HTMLSelectElement).value;

    const waText = `*New Free Tax Consultation Booking*\n\n` +
                   `• *Trading Name:* ${name}\n` +
                   `• *WhatsApp Phone:* ${phone}\n` +
                   `• *Regulatory Target:* ${service}`;

    bookingModal?.classList.add('hidden');
    showToast(`Redirecting consultation booking to WhatsApp...`);
    setTimeout(() => {
      sendToWhatsApp(waText);
      modalForm.reset();
    }, 800);
  });

  // 3. Exit Intent lead
  const exitForm = document.getElementById('exit-lead-ledger') as HTMLFormElement;
  exitForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = (document.getElementById('e-name') as HTMLInputElement).value;
    const phone = (document.getElementById('e-phone') as HTMLInputElement).value;

    const waText = `*Compliance Audit Voucher Request (Exit-Intent)*\n\n` +
                   `• *Business Name:* ${name}\n` +
                   `• *WhatsApp Phone:* ${phone}\n` +
                   `• *Voucher Status:* ₹1,500 Audit Voucher Activated`;

    exitPopup?.classList.add('hidden');
    showToast(`Activating Free Audit Voucher on WhatsApp...`);
    setTimeout(() => {
      sendToWhatsApp(waText);
      exitForm.reset();
    }, 800);
  });

  // 4. Newsletter
  const newsForm = document.getElementById('newsletter-form') as HTMLFormElement;
  newsForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast(`Joined compliance newsletter loop.`);
    newsForm.reset();
  });
}

// --- INTERACTIVE ANOMALOUS COUNTER TICKER ---

function handleStatsAnimation() {
  const statsSection = document.getElementById('stats-counter-section');
  if (!statsSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('[data-target]').forEach(counterNode => {
          const node = counterNode as HTMLElement;
          const target = Number(node.getAttribute('data-target') || '0');
          let current = 0;
          const increment = Math.ceil(target / 45); // Speed adjustment
          
          const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
              node.textContent = target + (target < 100 ? '%' : '+');
              clearInterval(interval);
            } else {
              node.textContent = current + '+';
            }
          }, 35);
        });
        
        observer.unobserve(statsSection);
      }
    });
  }, { threshold: 0.35 });

  observer.observe(statsSection);
}

// --- MAIN RUNTIME LOOPS ---

function bindNavigationMenu() {
  const burger = document.getElementById('mobile-menu-toggle');
  const dropdown = document.getElementById('mobile-dropdown');

  burger?.addEventListener('click', () => {
    dropdown?.classList.toggle('hidden');
  });

  // Close mobile navigation dropdown when a menu link is tapped
  dropdown?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      dropdown.classList.add('hidden');
    });
  });
}

function initFaqFiltersAndSearch() {
  const searchBar = document.getElementById('faq-search-bar') as HTMLInputElement;
  
  searchBar?.addEventListener('input', () => {
    faqSearchQuery = searchBar.value;
    renderFAQs();
  });

  document.querySelectorAll('.faq-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.faq-filter-btn').forEach(b => {
        b.classList.remove('border-[#F97316]', 'bg-[#F97316]', 'text-white');
        b.classList.add('border-transparent', 'text-slate-600');
      });
      btn.classList.add('border-[#F97316]', 'bg-[#F97316]', 'text-white');
      btn.classList.remove('border-transparent', 'text-slate-600');

      faqCurrentCategory = btn.getAttribute('data-faq-cat') || 'all';
      renderFAQs();
    });
  });
}

function initBlogFiltersAndSearch() {
  const searchBar = document.getElementById('blog-search-bar') as HTMLInputElement;

  searchBar?.addEventListener('input', () => {
    blogSearchQuery = searchBar.value;
    blogCurrentPage = 1; // Reset to page 1 on active search
    renderBlogs();
  });

  document.querySelectorAll('.blog-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.blog-filter-btn').forEach(b => {
        b.classList.remove('border-[#F97316]', 'bg-[#F97316]', 'text-white', 'active');
        b.classList.add('border-slate-200', 'bg-slate-50', 'text-slate-600');
      });

      btn.classList.add('border-[#F97316]', 'bg-[#F97316]', 'text-white', 'active');
      btn.classList.remove('border-slate-200', 'bg-slate-50', 'text-slate-600');

      blogCurrentCategory = btn.getAttribute('data-cat') || 'all';
      blogCurrentPage = 1; // Reset page
      renderBlogs();
    });
  });

  // Pagination navigation listeners
  document.getElementById('btn-blog-prev')?.addEventListener('click', () => {
    if (blogCurrentPage > 1) {
      blogCurrentPage--;
      renderBlogs();
      document.getElementById('blogs')?.scrollIntoView({ behavior: 'smooth' });
    }
  });

  document.getElementById('btn-blog-next')?.addEventListener('click', () => {
    blogCurrentPage++;
    renderBlogs();
    document.getElementById('blogs')?.scrollIntoView({ behavior: 'smooth' });
  });
}

function initCalculatorsSelector() {
  document.querySelectorAll('.calc-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.calc-tab-btn').forEach(b => {
        b.classList.remove('active', 'border-[#F97316]', 'bg-white');
        b.classList.add('border-slate-200', 'bg-slate-50');
        const textSpan = b.querySelector('span');
        textSpan?.classList.remove('text-[#0B1220]');
        textSpan?.classList.add('text-slate-550');
        
        b.querySelector('svg')?.classList.remove('text-[#F97316]');
        b.querySelector('svg')?.classList.add('text-slate-400');
      });

      btn.classList.add('active', 'border-[#F97316]', 'bg-white');
      btn.classList.remove('border-slate-200', 'bg-slate-50');
      
      const textSpan = btn.querySelector('span');
      textSpan?.classList.add('text-[#0B1220]');
      textSpan?.classList.remove('text-slate-550');

      btn.querySelector('svg')?.classList.add('text-[#F97316]');
      btn.querySelector('svg')?.classList.remove('text-slate-400');

      activeCalculator = btn.getAttribute('data-calc') || 'income-tax';
      renderActiveCalculator();
    });
  });
}

// --- HIGH-FIDELITY 3D INTERACTIVE TILT HERO CARD ENGAGEMENT ---
function init3DTiltHeroCard() {
  const cardElement = document.getElementById('hero-tilt-card') as HTMLElement;
  const glowElement = document.getElementById('tilt-glow') as HTMLElement;
  if (!cardElement) return;

  cardElement.addEventListener('mousemove', (e: MouseEvent) => {
    const rect = cardElement.getBoundingClientRect();
    
    // Position of cursor relative to element bounding boundaries
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Smooth position update for flashlight spotlight tracing
    if (glowElement) {
      glowElement.style.left = `${x}px`;
      glowElement.style.top = `${y}px`;
    }
    
    // Rotations based on mouse coordinates relative to card width/height
    const halfWidth = rect.width / 2;
    const halfHeight = rect.height / 2;
    const rotateY = ((x - halfWidth) / halfWidth) * 11; // maximum tilt 11 degrees
    const rotateX = -((y - halfHeight) / halfHeight) * 11;
    
    // Apply stateful dynamic transform with scale depth
    cardElement.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.025, 1.025, 1.025)`;
  });

  cardElement.addEventListener('mouseleave', () => {
    // Smooth custom elastic reset when cursor leaves the boundary
    cardElement.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  });
}

// --- INHERENT HERO BG IMAGE SLIDESHOW (Cycles every 4 seconds) ---
function initHeroSlideshow() {
  const slides = document.querySelectorAll('.hero-slide');
  if (slides.length <= 1) return;

  let currentSlide = 0;
  setInterval(() => {
    slides[currentSlide].classList.remove('opacity-100');
    slides[currentSlide].classList.add('opacity-0');

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.remove('opacity-0');
    slides[currentSlide].classList.add('opacity-100');
  }, 4000);
}

// --- GLOBAL ACCESS HANGERS ---

declare global {
  interface Window {
    onboxInquire: (serviceName?: string) => void;
  }
}

// --- BOOTSTRAPPING ENGINE STATE ---

document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderTestimonials();
  renderCaseStudies();
  
  renderFAQs();
  initFaqFiltersAndSearch();
  
  renderBlogs();
  initBlogFiltersAndSearch();
  
  renderActiveCalculator();
  initCalculatorsSelector();
  
  initUploadPortal();
  initLeadEngagement();
  handleStatsAnimation();
  bindNavigationMenu();
  init3DTiltHeroCard();
  initHeroSlideshow();
});
