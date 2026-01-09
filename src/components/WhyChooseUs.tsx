
import React from 'react';

const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'Industry Expertise',
      description: 'With over a decade of experience, we understand the nuances of diverse sectors, from cutting-edge Tech to traditional Manufacturing.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Personalized Approach',
      description: 'We don’t believe in one-size-fits-all. Every client is assigned a dedicated talent partner who learns your specific business DNA.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: 'Advanced Vetting',
      description: 'Our proprietary multi-stage screening process includes AI-assisted skill assessment and deep behavioral analysis.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-600 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 -right-24 w-64 h-64 bg-zinc-700 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-black text-orange-500 uppercase tracking-[0.3em] mb-4">The TalentSpeaks Difference</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Why Forward-Thinking <span className="text-orange-500">Companies</span> Choose Us.
            </h3>
            <p className="text-zinc-400 text-lg mb-12 max-w-xl leading-relaxed">
              We bridge the gap between ambitious business goals and the elite talent required to achieve them. Our methodology is built on trust, transparency, and technical precision.
            </p>
            
            <div className="space-y-8">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-zinc-800 flex items-center justify-center text-orange-500 shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                    {reason.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">{reason.title}</h4>
                    <p className="text-zinc-500 leading-relaxed font-medium">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
             <div className="relative z-10 p-2 bg-white rounded-[3rem] shadow-2xl">
               <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop" 
                alt="Strategy Meeting" 
                className="rounded-[2.5rem] w-full object-cover h-[500px]"
               />
               {/* Floating Badge */}
               <div className="absolute -bottom-10 -left-10 bg-orange-600 p-8 rounded-3xl shadow-2xl animate-bounce-slow">
                 <p className="text-4xl font-black">95%</p>
                 <p className="text-xs font-black uppercase tracking-widest text-orange-100">Client Satisfaction</p>
               </div>
             </div>
             {/* Decorative Elements */}
             <div className="absolute -top-10 -right-10 w-40 h-40 border-8 border-orange-500/20 rounded-full"></div>
             <div className="absolute bottom-1/4 -right-10 w-20 h-20 bg-zinc-800 rounded-2xl rotate-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
