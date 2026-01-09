
import React, { useState } from 'react';

interface JobBoardProps {
  limit?: number;
  onSeeAll?: () => void;
}

const JobBoard: React.FC<JobBoardProps> = ({ limit, onSeeAll }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const jobs = [
    { id: 1, title: 'Senior VP of Engineering', company: 'FutureTech', location: 'London / Remote', type: 'Full-time', salary: '£180k+', tags: ['Leadership', 'Architecture'] },
    { id: 2, title: 'Lead Creative Strategist', company: 'Vivid Agency', location: 'Dubai, UAE', type: 'Full-time', salary: '$140k - $190k', tags: ['Creative', 'Strategy'] },
    { id: 3, title: 'Operations Specialist', company: 'Swift Delivery', location: 'New York, NY', type: 'Contract', salary: '$110/hr', tags: ['Ops', 'Logistics'] },
  ];

  const displayJobs = limit ? jobs.slice(0, limit) : jobs.filter(j => 
    j.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    j.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-24 bg-zinc-50 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-orange-600 uppercase tracking-[0.3em] mb-4">Elite Openings</h2>
          <p className="text-4xl font-black text-black">Curated Career Opportunities</p>
        </div>

        <div className="space-y-6">
          {displayJobs.map((job) => (
            <div key={job.id} className="bg-white p-8 rounded-[2rem] border border-zinc-100 hover:shadow-2xl transition-all flex flex-col md:flex-row md:items-center justify-between group">
              <div className="flex items-center gap-8">
                <div className="w-20 h-20 rounded-2xl bg-black text-orange-500 flex items-center justify-center font-black text-2xl group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                  {job.company.charAt(0)}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-black mb-2">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400 font-bold uppercase tracking-widest">
                    <span className="flex items-center text-orange-600">
                      {job.company}
                    </span>
                    <span>{job.location}</span>
                    <span className="bg-zinc-100 text-zinc-800 px-3 py-1 rounded-lg text-xs">
                      {job.type}
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 md:mt-0 flex items-center gap-8">
                <p className="text-2xl font-black text-black hidden sm:block">{job.salary}</p>
                <button className="bg-orange-600 text-white px-10 py-4 rounded-2xl font-black hover:bg-black transition-all shadow-xl shadow-orange-100 group-hover:shadow-none">
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>

        {limit && (
          <div className="mt-16 text-center">
            <button 
              onClick={onSeeAll}
              className="bg-zinc-900 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-orange-600 transition-all inline-flex items-center gap-3"
            >
              Discover More Roles
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobBoard;
