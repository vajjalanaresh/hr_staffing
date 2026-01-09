
import React, { useState, useEffect, useRef } from 'react';

const logos = [
  { name: 'Google', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
  { name: 'Amazon', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Microsoft', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
  { name: 'Netflix', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
  { name: 'Tesla', icon: 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg' },
  { name: 'Adobe', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg' },
  { name: 'Meta', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  { name: 'Apple', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' }
];

const ClientLogos: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (logos.length - 2));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + (logos.length - 2)) % (logos.length - 2));
  };

  return (
    <section className="py-16 bg-white dark:bg-zinc-950 border-b border-zinc-50 dark:border-zinc-900 relative overflow-hidden group transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-12">Trusted by Global Industry Leaders</p>
        
        <div className="relative">
          {/* Controls */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-white dark:bg-zinc-900 shadow-xl border border-zinc-100 dark:border-zinc-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-orange-600 hover:text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"/></svg>
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-white dark:bg-zinc-900 shadow-xl border border-zinc-100 dark:border-zinc-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-orange-600 hover:text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7"/></svg>
          </button>

          {/* Carousel Viewport */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-1000 ease-in-out gap-8 md:gap-16"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {logos.concat(logos.slice(0, 4)).map((logo, idx) => (
                <div key={idx} className="min-w-[40%] md:min-w-[20%] flex items-center justify-center p-4">
                  <div className="grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 transform hover:scale-110">
                    <img src={logo.icon} alt={logo.name} className="h-8 md:h-12 w-auto object-contain max-w-[120px] dark:invert" />
                    <p className="mt-4 text-[10px] font-black uppercase tracking-widest text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-500 dark:group-hover:text-zinc-400">{logo.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
