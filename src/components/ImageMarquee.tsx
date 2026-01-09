
import React from 'react';

const ImageMarquee: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
  ];

  return (
    <div className="relative py-12 bg-white dark:bg-zinc-950 overflow-hidden border-b border-zinc-100 dark:border-zinc-900">
      <div className="flex gap-6 animate-scroll-images whitespace-nowrap">
        {images.concat(images).map((img, idx) => (
          <div key={idx} className="w-[350px] h-[250px] shrink-0 rounded-[2rem] overflow-hidden shadow-xl hover:scale-105 transition-transform duration-500 group">
            <img src={img} className="w-full h-full object-cover" alt="Professional Work Context" />
            <div className="absolute inset-0 bg-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll-images {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-images {
          display: flex;
          width: fit-content;
          animation: scroll-images 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ImageMarquee;
