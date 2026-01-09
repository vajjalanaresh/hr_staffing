
import React from 'react';

interface FooterProps {
  setActiveTab: (tab: any) => void;
}

const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-black text-zinc-400 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-8">
              <div className="bg-orange-600 text-white p-2 rounded-lg mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-outfit text-2xl font-black tracking-tight text-white uppercase">Talent<span className="text-orange-600">Speaks</span></span>
                <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-500 uppercase mt-1">HR SOLUTIONS</span>
              </div>
            </div>
            <p className="text-zinc-500 font-bold mb-8 leading-relaxed">
              We find the best employees for our clients. We make your recruitment process seamless and efficient.
            </p>
            <div className="flex space-x-5">
              {['LinkedIn', 'Twitter', 'Instagram'].map(platform => (
                <a key={platform} href="#" className="text-xs font-black uppercase tracking-widest text-zinc-600 hover:text-orange-600 transition-colors">
                  {platform}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Expertise</h4>
            <ul className="space-y-4 font-bold">
              <li><button onClick={() => setActiveTab('services')} className="hover:text-orange-600 transition-colors">Talent Acquisition</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-orange-600 transition-colors">Executive Search</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-orange-600 transition-colors">HR Strategy</button></li>
              <li><button onClick={() => setActiveTab('services')} className="hover:text-orange-600 transition-colors">Statutory Compliance</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Company</h4>
            <ul className="space-y-4 font-bold">
              <li><button onClick={() => setActiveTab('home')} className="hover:text-orange-600 transition-colors">Our Story</button></li>
              <li><button onClick={() => setActiveTab('about')} className="hover:text-orange-600 transition-colors">About Us</button></li>
              <li><button onClick={() => setActiveTab('contact')} className="hover:text-orange-600 transition-colors">Contact</button></li>
              <li><a href="#" className="hover:text-orange-600 transition-colors">Partnerships</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black uppercase tracking-widest text-sm mb-8">Global Access</h4>
            <p className="text-zinc-500 mb-6 font-bold">Stay updated on HR excellence.</p>
            <div className="flex bg-zinc-900 rounded-2xl p-1.5 focus-within:ring-2 ring-orange-600/50 transition-all">
              <input 
                type="email" 
                placeholder="Work Email"
                className="bg-transparent border-none rounded-l-lg px-4 py-2 w-full focus:ring-0 outline-none text-sm font-bold text-white"
              />
              <button className="bg-orange-600 text-white px-6 py-2 rounded-xl font-black hover:bg-white hover:text-black transition-all">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600">
          <p>© 2024 Talent Speaks HR Solutions. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
