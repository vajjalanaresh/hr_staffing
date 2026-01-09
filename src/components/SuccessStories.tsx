
import React from 'react';

const SuccessStories: React.FC = () => {
  const stories = [
    {
      title: 'Hyper-Scale Expansion',
      client: 'Global Fintech Unicorn',
      result: '50+ Elite Engineers in 90 Days',
      description: 'When a top-tier Fintech needed to scale their engineering department overnight, we deployed a dedicated RPO squad that vetted 2,000+ candidates to find the perfect 50.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'C-Suite Transformation',
      client: 'Fortune 500 Retailer',
      result: 'Strategic CEO Placement in 6 Weeks',
      description: 'A multi-billion dollar retailer needed a visionary leader. Our executive search methodology identified a passive industry veteran who increased shareholder value by 15% in their first year.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Operational Excellence',
      client: 'Industrial Manufacturing Hub',
      result: '65% Reduction in Time-to-Hire',
      description: 'By implementing a standardized temporary staffing and payroll framework across 5 international plants, we eliminated operational bottlenecks and saved $2.4M annually.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-zinc-950 transition-colors duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-black text-orange-600 uppercase tracking-[0.3em] mb-4">Case Studies</h2>
            <h3 className="font-outfit text-4xl md:text-5xl font-black text-black dark:text-white leading-tight">
              Success Stories in <span className="text-orange-600">Manpower Solutions</span>
            </h3>
          </div>
          <button className="px-8 py-4 bg-black dark:bg-zinc-800 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-orange-600 transition-all shrink-0">
            View All Reports
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div 
              key={idx} 
              className="group relative p-10 bg-zinc-50 dark:bg-zinc-900 rounded-[3rem] border border-zinc-100 dark:border-zinc-800 hover:border-orange-500/50 transition-all duration-500"
            >
              <div className="mb-10 text-orange-600 group-hover:scale-110 transition-transform duration-500">
                {story.icon}
              </div>
              
              <div className="mb-8">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-2 block">{story.client}</span>
                <h4 className="font-outfit text-2xl font-black text-black dark:text-white mb-4 group-hover:text-orange-600 transition-colors">{story.title}</h4>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium leading-relaxed">
                  {story.description}
                </p>
              </div>

              <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
                <p className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-2">Key Result</p>
                <p className="text-lg font-black text-orange-600">{story.result}</p>
              </div>
              
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-orange-600/5 rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
