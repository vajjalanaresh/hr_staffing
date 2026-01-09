
import React, { useState } from 'react';

interface ServicesSectionProps {
  onServiceClick?: () => void;
}

interface ServiceDetail {
  title: string;
  description: string;
  benefits: string[];
}

const serviceDetails: Record<string, ServiceDetail> = {
  'Executive Recruitments': {
    title: 'Executive Recruitments',
    description: 'Our executive search service is designed to identify and attract top-tier C-suite leaders and senior management who align with your strategic vision and corporate culture.',
    benefits: ['Confidential and targeted searches', 'Access to passive, high-level talent', 'Deep leadership assessment', 'Long-term cultural fit focus']
  },
  'Permanent Staffing': {
    title: 'Permanent Staffing',
    description: 'We help you build a solid foundation with permanent hires who are not just skilled, but also deeply committed to your organization\'s long-term growth.',
    benefits: ['Reduced employee turnover', 'Rigorous cultural alignment checks', 'Specialized talent sourcing', 'Comprehensive reference checks']
  },
  'Temporary Staffing': {
    title: 'Temporary Staffing',
    description: 'Maintain business continuity and agility with our flexible temporary staffing solutions, perfect for seasonal peaks, special projects, or medical leaves.',
    benefits: ['Rapid response to talent gaps', 'Reduced administrative overhead', 'Flexibility to scale up or down', 'Vetted and ready-to-work professionals']
  },
  'Campus Hire/ Job Drives': {
    title: 'Campus Hire/ Job Drives',
    description: 'Bridge the gap between academia and industry by hiring fresh, innovative talent from leading universities through our organized recruitment drives.',
    benefits: ['Fresh perspectives and innovation', 'Future leadership pipeline development', 'Employer branding on campus', 'Cost-effective entry-level hiring']
  },
  'Talent Acquisition': {
    title: 'Talent Acquisition',
    description: 'A strategic approach to identifying, attracting, and onboarding top talent to meet your current and future organizational needs.',
    benefits: ['Strategic workforce planning', 'Enhanced employer value proposition', 'Proactive talent pipelining', 'Metrics-driven recruitment strategies']
  },
  'Manpower Consultancy': {
    title: 'Manpower Consultancy',
    description: 'Leverage our expert advice on workforce optimization, organizational structure, and strategic human resource planning.',
    benefits: ['Organizational efficiency auditing', 'Strategic HR advisory', 'Market intelligence reports', 'Gap analysis and workforce planning']
  },
  'Contract Staffing (Main)': {
    title: 'Contract Staffing',
    description: 'Agile workforce models that allow you to engage specialized professionals for specific durations or project-based milestones.',
    benefits: ['Control over labor costs', 'Access to specialized expertise', 'Minimal long-term commitment', 'Simplified payroll for contractors']
  },
  'BackGround Verify': {
    title: 'Background Verification',
    description: 'Protect your organization by ensuring that your new hires have verifiable credentials and a clean professional history.',
    benefits: ['Risk mitigation and security', 'Credential and degree verification', 'Criminal record checks', 'Employment history validation']
  },
  'Statutory Compliances': {
    title: 'Statutory Compliances',
    description: 'Ensure your business stays on the right side of the law with our comprehensive HR compliance and audit services.',
    benefits: ['Avoidance of legal penalties', 'PF, ESI, and labor law management', 'Regular compliance audits', 'Policy drafting and updates']
  },
  'RPO': {
    title: 'Recruitment Process Outsourcing (RPO)',
    description: 'Transfer all or part of your recruitment processes to us to improve efficiency, reduce costs, and enhance candidate quality.',
    benefits: ['Scalable recruitment capacity', 'Advanced technology and tools', 'Consistency in hiring standards', 'Lower average cost-per-hire']
  },
  'International Hiring': {
    title: 'International Hiring',
    description: 'Expand your reach globally by sourcing elite talent from across international borders with full support on mobility and logistics.',
    benefits: ['Access to global talent pools', 'Niche skill acquisition', 'Cross-cultural team building', 'Assistance with global mobility']
  },
  'NGO Staffing': {
    title: 'NGO Staffing',
    description: 'Specialized recruitment services for non-profits and social impact organizations, finding individuals who share your mission.',
    benefits: ['Mission-aligned talent search', 'Understanding of social sector needs', 'Ethical recruitment practices', 'Support for diverse impact goals']
  },
  'Main Payroll Services': {
    title: 'Payroll Management',
    description: 'Streamline your operations with our precise and timely payroll services, including tax management and reporting.',
    benefits: ['Zero-error payroll processing', 'Timely salary disbursements', 'Tax and deduction compliance', 'Employee self-service portals']
  }
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ onServiceClick }) => {
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);

  const categories = [
    {
      title: 'Staffing & Recruitment',
      items: [
        'Executive Recruitments',
        'Permanent Staffing',
        'Temporary Staffing',
        'Campus Hire/ Job Drives',
        'Talent Acquisition',
        'Manpower Consultancy'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
      ),
      color: 'bg-orange-600'
    },
    {
      title: 'Contract Staffing',
      items: [
        'Contract Staffing (Main)',
        'Specific Contract Staffing',
        'Other Contract Staffing'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
      ),
      color: 'bg-zinc-900 dark:bg-orange-600'
    },
    {
      title: 'HR Solutions',
      items: [
        'BackGround Verify',
        'Statutory Compliances',
        'RPO',
        'International Hiring',
        'NGO Staffing'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.022.547l-2.387 2.387a2 2 0 001.414 3.414h15.828a2 2 0 001.414-3.414l-2.387-2.387zM12 11a4 4 0 100-8 4 4 0 000 8z" /></svg>
      ),
      color: 'bg-orange-600'
    },
    {
      title: 'Payroll Services',
      items: [
        'Main Payroll Services',
        'Industry Payroll Services',
        'Specific Payroll Services'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      ),
      color: 'bg-zinc-900 dark:bg-orange-600'
    }
  ];

  const handleItemClick = (item: string) => {
    const detail = serviceDetails[item] || {
      title: item,
      description: `Premium ${item} solutions designed for modern business environments. We focus on efficiency and high-impact results for our corporate clients.`,
      benefits: ['Streamlined processes', 'Dedicated talent advisor', 'Quality-first approach']
    };
    setSelectedService(detail);
  };

  const serviceVisuals = [
    { label: 'Executive Search', icon: '👤' },
    { label: 'Staffing', icon: '🤝' },
    { label: 'Payroll', icon: '💰' },
    { label: 'Compliance', icon: '⚖️' },
    { label: 'Consulting', icon: '📈' },
    { label: 'RPO', icon: '🌐' },
    { label: 'Training', icon: '🎓' },
    { label: 'Verification', icon: '✅' },
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-500 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-sm font-black text-orange-600 uppercase tracking-[0.3em] mb-4">Our HR Ecosystem</h2>
          <p className="text-4xl md:text-5xl font-black text-black dark:text-white leading-tight">
            Comprehensive <span className="text-orange-600">HR Solutions</span>
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="group bg-zinc-50 dark:bg-zinc-900 p-8 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 hover:bg-black dark:hover:bg-zinc-800 transition-all duration-500 flex flex-col"
            >
              <div className={`${cat.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-all shadow-lg`}>
                {cat.icon}
              </div>
              <h3 className="text-xl font-black text-black dark:text-zinc-100 group-hover:text-white mb-6 transition-colors uppercase tracking-tight">{cat.title}</h3>
              <ul className="flex-1 space-y-3 mb-8">
                {cat.items.map(item => (
                  <li 
                    key={item} 
                    onClick={() => handleItemClick(item)}
                    className="text-zinc-500 dark:text-zinc-400 group-hover:text-orange-500 font-bold text-[11px] uppercase tracking-wide flex items-center gap-2 cursor-pointer transition-colors"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-600 rounded-full shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="w-8 h-1 bg-orange-600 rounded-full group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Scroll Animation / Marquee */}
        <div className="relative py-12 border-t border-zinc-100 dark:border-zinc-800">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {serviceVisuals.concat(serviceVisuals).map((vis, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-zinc-50 dark:bg-zinc-900 px-8 py-4 rounded-full border border-zinc-100 dark:border-zinc-800 group hover:border-orange-500 transition-colors">
                <span className="text-2xl">{vis.icon}</span>
                <span className="text-xs font-black uppercase tracking-widest text-zinc-600 dark:text-zinc-400 group-hover:text-orange-600">{vis.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md animate-fade-in" 
            onClick={() => setSelectedService(null)}
          ></div>
          <div className="relative bg-white dark:bg-zinc-900 w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden animate-fade-in-up border border-zinc-100 dark:border-zinc-800">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-8 right-8 text-zinc-400 hover:text-orange-600 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <div className="p-12 md:p-16">
              <div className="inline-flex items-center py-1 px-4 rounded-full bg-orange-100 dark:bg-orange-600/20 text-orange-600 text-[10px] font-black uppercase tracking-widest mb-6">
                Premium Service
              </div>
              <h3 className="text-4xl font-black text-black dark:text-white mb-6 uppercase tracking-tighter leading-none">{selectedService.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-lg font-medium leading-relaxed mb-10">
                {selectedService.description}
              </p>
              <div className="space-y-4 mb-10">
                <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400">Key Advantages</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {selectedService.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-orange-600 flex items-center justify-center text-white shrink-0">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"/></svg>
                      </div>
                      <span className="text-sm font-bold text-black dark:text-zinc-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <button 
                onClick={() => setSelectedService(null)}
                className="w-full bg-black dark:bg-zinc-100 dark:text-black text-white py-5 rounded-2xl font-black text-lg hover:bg-orange-600 dark:hover:bg-orange-600 dark:hover:text-white transition-all transform active:scale-95 shadow-xl"
              >
                Inquire About This Service
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
