
import React, { useState } from 'react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: any) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const services = {
    recruitment: [
      'Executive Recruitments',
      'Permanent Staffing',
      'Temporary Staffing',
      'Campus Hire/ Job Drives',
      'Talent Acquisition',
      'Manpower Consultancy'
    ],
    contract: [
      { name: 'Contract Staffing', subs: ['Specific Contract Staffing', 'Other Contract Staffing'] }
    ],
    hrSolutions: [
      'BackGround Verify',
      'Statutory Compliances',
      'RPO',
      'International Hiring',
      'NGO Staffing'
    ],
    payroll: [
      { name: 'Payroll Services', subs: ['Industry Payroll Services', 'Specific Payroll Services'] }
    ]
  };

  const NavButton = ({ id, label }: { id: string; label: string }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-orange-600 ${
        activeTab === id ? 'text-orange-600' : 'text-zinc-600 dark:text-zinc-400'
      }`}
    >
      {label}
    </button>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-zinc-100 dark:border-zinc-800 transition-all duration-500">
      {/* Top Utility Bar */}
      <div className="bg-black text-[10px] py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-zinc-400 font-bold uppercase tracking-widest">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <svg className="w-3 h-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              info@talentspeaks.com
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-3 h-3 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              +91 98765 43210
            </span>
          </div>
          <div className="flex gap-4">
            <button onClick={() => setActiveTab('ai')} className="text-orange-500 hover:text-white transition-colors">AI Advisor</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => setActiveTab('home')}
          >
            <div className="bg-orange-600 text-white p-2 rounded-lg mr-3 group-hover:bg-black dark:group-hover:bg-zinc-700 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-outfit text-xl font-black tracking-tight text-black dark:text-white uppercase">
                TALENT<span className="text-orange-600">SPEAKS</span>
              </span>
              <span className="text-[9px] font-bold tracking-[0.3em] text-zinc-400 dark:text-zinc-500 uppercase mt-1">HR SOLUTIONS</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            <NavButton id="home" label="Home" />
            <NavButton id="about" label="About Us" />
            
            {/* Services Dropdown */}
            <div className="relative group py-8">
              <button
                onClick={() => setActiveTab('services')}
                className={`flex items-center gap-1 text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-orange-600 ${
                  activeTab === 'services' ? 'text-orange-600' : 'text-zinc-600 dark:text-zinc-400'
                }`}
              >
                Service
                <svg className="w-3 h-3 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[calc(100vw-2rem)] max-w-[800px] bg-white dark:bg-zinc-900 shadow-2xl rounded-2xl border border-zinc-100 dark:border-zinc-800 p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-2 z-[60] grid grid-cols-1 md:grid-cols-3 gap-8 pointer-events-none group-hover:pointer-events-auto overflow-hidden">
                <div>
                  <h4 className="text-orange-600 text-[10px] font-black uppercase tracking-widest mb-4 border-b border-orange-100 dark:border-zinc-800 pb-2">Recruitment</h4>
                  <ul className="space-y-3">
                    {services.recruitment.map(s => (
                      <li key={s} className="text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-white cursor-pointer transition-colors" onClick={() => { setActiveTab('services'); }} >{s}</li>
                    ))}
                    {services.contract.map(s => (
                      <li key={s.name} className="space-y-2 mt-4">
                        <span className="text-xs font-bold text-black dark:text-zinc-200">{s.name}</span>
                        <ul className="pl-3 space-y-1 border-l border-orange-200 dark:border-zinc-800">
                          {s.subs.map(sub => <li key={sub} className="text-[10px] text-zinc-500 hover:text-orange-600 cursor-pointer" onClick={() => { setActiveTab('services'); }}>{sub}</li>)}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-orange-600 text-[10px] font-black uppercase tracking-widest mb-4 border-b border-orange-100 dark:border-zinc-800 pb-2">HR Solutions</h4>
                  <ul className="space-y-3">
                    {services.hrSolutions.map(s => (
                      <li key={s} className="text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-white cursor-pointer transition-colors" onClick={() => { setActiveTab('services'); }}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-orange-600 text-[10px] font-black uppercase tracking-widest mb-4 border-b border-orange-100 dark:border-zinc-800 pb-2">Payroll</h4>
                  <ul className="space-y-3">
                    {services.payroll.map(s => (
                      <li key={s.name} className="space-y-2">
                        <span className="text-xs font-bold text-black dark:text-zinc-200">{s.name}</span>
                        <ul className="pl-3 space-y-1 border-l border-orange-200 dark:border-zinc-800">
                          {s.subs.map(sub => <li key={sub} className="text-[10px] text-zinc-500 hover:text-orange-600 cursor-pointer" onClick={() => { setActiveTab('services'); }}>{sub}</li>)}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <NavButton id="contact" label="Contact" />

            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-orange-500 transition-all hover:scale-110 active:scale-95"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z"/></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>
              )}
            </button>

            <button 
              onClick={() => setActiveTab('ai')}
              className="bg-black dark:bg-zinc-100 dark:text-black text-white px-6 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-orange-600 dark:hover:bg-orange-600 dark:hover:text-white transition-all shadow-lg active:scale-95"
            >
              AI Coach
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
             <button onClick={toggleDarkMode} className="p-2 text-zinc-900 dark:text-orange-500">
               {isDarkMode ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z"/></svg> : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>}
             </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-zinc-900 dark:text-zinc-100">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass border-t border-zinc-100 dark:border-zinc-800 animate-fade-in-up max-h-[70vh] overflow-y-auto">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <button onClick={() => { setActiveTab('home'); setIsOpen(false); }} className={`block w-full text-left px-4 py-3 text-[11px] font-black uppercase tracking-[0.2em] ${activeTab === 'home' ? 'text-orange-600' : 'text-zinc-700 dark:text-zinc-300'}`}>Home</button>
            <button onClick={() => { setActiveTab('about'); setIsOpen(false); }} className={`block w-full text-left px-4 py-3 text-[11px] font-black uppercase tracking-[0.2em] ${activeTab === 'about' ? 'text-orange-600' : 'text-zinc-700 dark:text-zinc-300'}`}>About Us</button>
            <div className="px-4 py-2 border-l-2 border-orange-600 ml-4">
              <p className="text-[10px] font-black uppercase text-orange-600 mb-2">Service</p>
              <div className="grid grid-cols-1 gap-4">
                <ul className="text-[10px] space-y-2 font-bold text-zinc-500">
                  <li className="text-black dark:text-white uppercase">Staffing</li>
                  <li>Permanent Staffing</li>
                  <li>Temporary Staffing</li>
                  <li>Campus Hire</li>
                  <li className="text-black dark:text-white uppercase pt-2">HR & Payroll</li>
                  <li>Payroll Services</li>
                  <li>Compliance</li>
                  <li>RPO</li>
                </ul>
              </div>
            </div>
            <button onClick={() => { setActiveTab('contact'); setIsOpen(false); }} className={`block w-full text-left px-4 py-3 text-[11px] font-black uppercase tracking-[0.2em] ${activeTab === 'contact' ? 'text-orange-600' : 'text-zinc-700 dark:text-zinc-300'}`}>Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
