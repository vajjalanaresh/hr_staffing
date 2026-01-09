
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-black text-orange-600 uppercase tracking-[0.3em] mb-4">Contact Us</h2>
            <h3 className="text-4xl font-black text-black dark:text-white mb-8 leading-tight">Let's Discuss Your <span className="text-orange-600">Hiring Needs</span>.</h3>
            
            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-zinc-400 tracking-widest mb-1">Our Office</h4>
                  <p className="text-black dark:text-zinc-300 font-bold">123 Talent Tower, Business Bay<br />Hyderabad, Telangana 500081</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-black dark:bg-zinc-800 flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-zinc-400 tracking-widest mb-1">Email Support</h4>
                  <p className="text-black dark:text-zinc-300 font-bold">info@talentspeaks.com</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-orange-600 flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-zinc-400 tracking-widest mb-1">Working Hours</h4>
                  <p className="text-black dark:text-zinc-300 font-bold">Mon - Sat: 9:00 AM - 6:30 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-zinc-900 p-10 md:p-16 rounded-[3rem] shadow-2xl border border-zinc-100 dark:border-zinc-800 transition-all duration-500">
              <form className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-400">Full Name</label>
                  <input type="text" className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all font-bold text-black dark:text-white" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-400">Work Email</label>
                  <input type="email" className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all font-bold text-black dark:text-white" placeholder="john@company.com" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-400">Inquiry Type</label>
                  <select className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all font-bold text-black dark:text-white">
                    <option>Staffing Services</option>
                    <option>Statutory Compliance</option>
                    <option>Payroll Management</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-black uppercase tracking-widest text-zinc-400">Message</label>
                  <textarea rows={5} className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 rounded-2xl px-6 py-4 focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all font-bold text-black dark:text-white" placeholder="How can we help make your work easier?"></textarea>
                </div>
                <div className="md:col-span-2">
                  <button className="w-full bg-orange-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-black dark:hover:bg-zinc-100 dark:hover:text-black transition-all shadow-xl shadow-orange-100 dark:shadow-orange-900/20 transform active:scale-95">
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
