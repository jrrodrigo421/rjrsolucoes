import React from 'react';
import { ArrowRight, Shield, Zap, BarChart3 } from 'lucide-react';

interface HeroProps {
  translations: any;
  onContactClick: () => void;
}

export default function Hero({ translations, onContactClick }: HeroProps) {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#dc2626] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#dc2626]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ef4444]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f87171]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-[#f87171] to-[#dc2626] bg-clip-text text-transparent animate-fade-in">
                {translations.hero.title}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed animate-fade-in-delay-1">
                {translations.hero.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Shield className="text-[#dc2626]" size={20} />
                <span className="text-sm font-medium">{translations.hero.security}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Zap className="text-[#f87171]" size={20} />
                <span className="text-sm font-medium">{translations.hero.innovation}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <BarChart3 className="text-[#374151]" size={20} />
                <span className="text-sm font-medium">{translations.hero.analytics}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
              <button
                onClick={onContactClick}
                className="group bg-gradient-to-r from-[#dc2626] to-[#ef4444] hover:from-[#ef4444] hover:to-[#dc2626] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                {translations.hero.cta}
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
              </button>
              <button className="border-2 border-white/30 hover:border-white/60 text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm">
                {translations.hero.learnMore}
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-[#dc2626] rounded-full animate-ping"></div>
                  <span className="text-white/80">{translations.hero.status}</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#f87171] mb-1">150+</div>
                    <div className="text-sm text-white/70">{translations.hero.projects}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#dc2626] mb-1">5+</div>
                    <div className="text-sm text-white/70">{translations.hero.experience}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}