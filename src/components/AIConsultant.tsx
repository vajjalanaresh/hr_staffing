
import React, { useState, useRef, useEffect } from 'react';
import { getHRConsultation } from '../services/geminiService';
import { ChatMessage } from '../../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Welcome to TalentSpeaks AI. I am your strategic partner for corporate talent management. How can I help you optimize your workforce strategy or find elite employees for your company today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getHRConsultation(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response || "Apologies, our talent database connection is momentarily interrupted." }]);
    setIsLoading(false);
  };

  return (
    <section className="py-24 bg-pattern min-h-[80vh]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-[2.5rem] shadow-3xl overflow-hidden border border-zinc-100 flex flex-col h-[700px]">
          {/* Header */}
          <div className="bg-black p-8 text-white flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-orange-600 flex items-center justify-center shadow-lg shadow-orange-600/20">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-black text-xl tracking-tight">TalentSpeaks AI</h3>
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Corporate HR Advisor</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-zinc-800 px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-orange-500">Online</span>
            </div>
          </div>

          {/* Chat Window */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-10 space-y-8 bg-zinc-50"
          >
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-6 rounded-3xl shadow-lg text-base font-medium leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user' 
                      ? 'bg-orange-600 text-white rounded-tr-none' 
                      : 'bg-white text-black rounded-tl-none border border-zinc-100'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-6 rounded-3xl shadow-lg border border-zinc-100 flex items-center gap-3">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-bounce"></div>
                    <div className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-8 bg-white border-t border-zinc-100">
            <div className="flex gap-4">
              <input 
                type="text" 
                placeholder="Discuss your staffing requirements or HR strategy..."
                className="flex-1 bg-zinc-50 border border-zinc-200 rounded-2xl px-6 py-4 text-black font-semibold focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 outline-none transition-all"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-black text-white px-8 rounded-2xl hover:bg-orange-600 disabled:opacity-50 transition-all shadow-xl transform active:scale-95"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
