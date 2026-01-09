
import React from 'react';

const AboutSection: React.FC = () => {
  const processSteps = [
    { title: 'Discovery', description: 'We deep dive into your company culture and specific talent needs.' },
    { title: 'Elite Sourcing', description: 'Our team uses AI and vast networks to find the hidden top 1%.' },
    { title: 'Rigorous Vetting', description: 'Candidates undergo intense skill and cultural alignment checks.' },
    { title: 'Seamless Placement', description: 'We manage the logistics for a smooth onboarding experience.' }
  ];

  return (
    <section className="bg-white dark:bg-zinc-950 transition-colors duration-500">
      {/* Intro Section */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-600 rounded-3xl -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
              alt="Team Collaboration" 
              className="rounded-3xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-3xl shadow-2xl border border-zinc-100 dark:border-zinc-800 max-w-xs hidden md:block">
               <p className="text-orange-600 font-black text-4xl mb-2">12+</p>
               <p className="text-black dark:text-white font-bold uppercase tracking-widest text-xs">Years of Excellence in HR Consulting</p>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-black text-orange-600 uppercase tracking-[0.3em] mb-4">About Our Agency</h2>
            <h3 className="text-4xl md:text-5xl font-black text-black dark:text-white mb-8 leading-tight">
              A Legacy of <span className="text-orange-600">Connecting</span> Greatness.
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg mb-8 leading-relaxed font-medium">
              Talent Speaks HR Solutions is a premier HR consulting and staffing agency dedicated to providing top-tier talent solutions to organizations worldwide. We understand that human capital is the most valuable asset of any business.
            </p>
            <div className="grid grid-cols-2 gap-8">
               <div className="p-6 bg-zinc-50 dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                  <h4 className="text-orange-600 font-black uppercase text-xs tracking-widest mb-3">Our Mission</h4>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm font-bold">To empower businesses by delivering the most talented individuals while simplifying the recruitment lifecycle.</p>
               </div>
               <div className="p-6 bg-black dark:bg-zinc-800 rounded-2xl">
                  <h4 className="text-orange-500 font-black uppercase text-xs tracking-widest mb-3">Our Vision</h4>
                  <p className="text-zinc-400 dark:text-zinc-300 text-sm font-bold">To become the global benchmark for strategic human capital management and ethical staffing practices.</p>
               </div>
            </div>
          </div>
        </div>

        {/* Why we are the best */}
        <div className="bg-zinc-900 dark:bg-zinc-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl mb-24">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600 opacity-10 rounded-full blur-[100px]"></div>
          <h3 className="text-sm font-black text-orange-500 uppercase tracking-[0.3em] mb-4">The TalentSpeaks Edge</h3>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-12">Why We Are The Best In The Industry</h2>
          <div className="grid md:grid-cols-3 gap-12 text-left">
            {[
              { title: 'Quality Sourcing', text: 'We use proprietary AI-driven vetting to ensure you only meet the top 1% of candidates.' },
              { title: 'Speed & Efficiency', text: 'Our specialized pipelines reduce your "Time-to-Hire" by over 60%.' },
              { title: 'Ethical Standards', text: 'We prioritize transparency and fairness for both clients and candidates.' }
            ].map((item, idx) => (
              <div key={idx} className="group p-8 rounded-3xl bg-zinc-800 hover:bg-zinc-700 transition-all">
                <div className="w-12 h-1 bg-orange-600 mb-6 group-hover:w-20 transition-all"></div>
                <h4 className="text-white font-black text-xl mb-4 uppercase tracking-tight">{item.title}</h4>
                <p className="text-zinc-400 font-medium text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How we deal with clients */}
        <div className="py-12">
          <div className="text-center mb-16">
            <h2 className="text-sm font-black text-orange-600 uppercase tracking-[0.3em] mb-4">Our Client Journey</h2>
            <h3 className="text-4xl font-black text-black dark:text-white leading-tight">How We Partner With You</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            <div className="absolute top-1/2 left-0 w-full h-1 bg-zinc-100 dark:bg-zinc-800 -z-10 hidden md:block"></div>
            {processSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-black dark:bg-zinc-800 text-white flex items-center justify-center font-black text-2xl mb-6 group-hover:bg-orange-600 transition-all relative">
                  {idx + 1}
                  <div className="absolute -inset-2 bg-orange-600/20 rounded-full blur scale-0 group-hover:scale-100 transition-transform"></div>
                </div>
                <h4 className="text-lg font-black text-black dark:text-white uppercase mb-3">{step.title}</h4>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 font-bold leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
