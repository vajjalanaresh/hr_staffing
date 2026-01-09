
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import AIConsultant from './components/AIConsultant';
import StatsSection from './components/StatsSection';
import Testimonials from './components/Testimonials';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ClientLogos from './components/ClientLogos';
import WhyChooseUs from './components/WhyChooseUs';
import ImageMarquee from './components/ImageMarquee';
import SuccessStories from './components/SuccessStories';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'services' | 'ai' | 'about' | 'contact'>('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <>
            <Hero onCtaClick={() => setActiveTab('contact')} />
            <ImageMarquee />
            <ClientLogos />
            <StatsSection />
            <AboutSection />
            <ServicesSection onServiceClick={() => setActiveTab('services')} />
            <WhyChooseUs />
            <SuccessStories />
            <Testimonials />
            <ContactSection />
          </>
        );
      case 'services':
        return <ServicesSection />;
      case 'ai':
        return <AIConsultant />;
      case 'about':
        return <AboutSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <Hero onCtaClick={() => setActiveTab('contact')} />;
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-500 bg-white dark:bg-zinc-950">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
      <main className="pt-20">
        {renderContent()}
      </main>
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;
