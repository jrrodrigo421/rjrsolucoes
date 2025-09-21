import React, { useState, useRef } from 'react';
import LanguageSwitcher from './components/LanguageSwitcher';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { translations } from './translations';

function App() {
  const [language, setLanguage] = useState('pt');
  const contactRef = useRef<HTMLElement>(null);

  const currentTranslations = translations[language as keyof typeof translations];

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src="/public/logo.png"
              alt="RJR Soluções Logo"
              className="w-10 h-10"
            />
            <div className="text-2xl font-bold bg-gradient-to-r from-[#f87171] to-[#dc2626] bg-clip-text text-transparent">
              RJR Soluções
            </div>
          </div>
          <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Hero translations={currentTranslations} onContactClick={scrollToContact} />
        <Services translations={currentTranslations} />
        <About translations={currentTranslations} />
        <section ref={contactRef}>
          <Contact translations={currentTranslations} />
        </section>
      </main>

      {/* Footer */}
      <Footer translations={currentTranslations} />

      {/* Custom Styles */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-delay-1 {
          0% { opacity: 0; transform: translateY(20px); }
          20% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-delay-2 {
          0% { opacity: 0; transform: translateY(20px); }
          40% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-delay-3 {
          0% { opacity: 0; transform: translateY(20px); }
          60% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-fade-in-delay-1 {
          animation: fade-in-delay-1 1.2s ease-out;
        }
        
        .animate-fade-in-delay-2 {
          animation: fade-in-delay-2 1.6s ease-out;
        }
        
        .animate-fade-in-delay-3 {
          animation: fade-in-delay-3 2s ease-out;
        }
        
        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
}

export default App;