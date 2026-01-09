
import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    { label: 'Successful Placements', value: '15,000+' },
    { label: 'Industry Partners', value: '750+' },
    { label: 'Active Candidates', value: '300,000+' },
    { label: 'Reduction in Client Workload', value: '65%' },
  ];

  return (
    <section className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <p className="text-4xl md:text-5xl font-black text-orange-500 mb-3 transform transition-transform group-hover:scale-110 duration-300">{stat.value}</p>
              <p className="text-zinc-400 text-xs font-black uppercase tracking-[0.2em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
