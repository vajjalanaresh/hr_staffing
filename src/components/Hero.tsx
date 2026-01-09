
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" 
          alt="Modern Corporate Office" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent dark:from-zinc-950 dark:via-zinc-950/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center py-1.5 px-4 rounded-full bg-orange-600 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-xl">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            Elevating Human Capital Globally
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] mb-8 tracking-tighter">
            Elite <span className="text-orange-500">Talent</span> <br /> 
            Meets Infinite <br />
            Possibility.
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-2xl font-medium leading-relaxed">
            We don't just fill positions. We build high-performance teams that define industries and drive exponential growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={onCtaClick}
              className="px-12 py-5 bg-orange-600 text-white rounded-2xl font-black text-lg shadow-2xl shadow-orange-900/40 hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center"
            >
              Request Elite Talent
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="px-12 py-5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-black text-lg hover:bg-white/20 transition-all flex items-center justify-center">
              Our Methodology
            </button>
          </div>
        </div>
      </div>

      {/* Side Accent */}
      <div className="absolute right-0 bottom-0 top-0 w-1/3 pointer-events-none hidden lg:block">
        <div className="h-full w-full bg-gradient-to-l from-orange-600/10 to-transparent"></div>
      </div>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s ease-in-out infinite alternate;
        }
      `}</style>
    </section>
  );
};

export default Hero;
