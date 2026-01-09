
import React from 'react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "HR Director at TechFlow",
    content: "Talent Speaks completely transformed our hiring pipeline. They truly find the best employees, making our work significantly lighter. The quality of candidates is unmatched.",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    name: "David Chen",
    role: "CEO of InnovateX",
    content: "The professionalism and speed of Talent Speaks are incredible. They understood our culture immediately and provided three perfect hires in under two weeks. A game-changer.",
    avatar: "https://i.pravatar.cc/150?u=david"
  },
  {
    name: "Marcus Thorne",
    role: "Operations Manager",
    content: "Recruitment used to be my biggest headache. With Talent Speaks, I just give them a brief and they deliver excellence. They really do make our work less.",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-900/10 rounded-full blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-sm font-black text-orange-500 uppercase tracking-[0.3em] mb-6">Testimonials</h2>
        <p className="text-4xl md:text-5xl font-black text-white mb-16 max-w-3xl mx-auto leading-tight">
          What Our Partners Say About Us
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-zinc-800/50 backdrop-blur-sm p-10 rounded-[2.5rem] border border-zinc-700/50 hover:border-orange-500/50 transition-all duration-500 group text-left flex flex-col justify-between">
              <div>
                <div className="flex mb-6">
                  {[1, 2, 3, 4, 5].map(star => (
                    <svg key={star} className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-300 text-lg italic leading-relaxed mb-10 group-hover:text-white transition-colors">
                  "{t.content}"
                </p>
              </div>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-2xl border-2 border-zinc-700 group-hover:border-orange-500 transition-all" />
                <div>
                  <h4 className="text-white font-black text-lg">{t.name}</h4>
                  <p className="text-zinc-500 text-sm font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
