import React from 'react';
import { Shield, Eye, Users, Award } from 'lucide-react';

interface AboutProps {
  translations: any;
}

export default function About({ translations }: AboutProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-[#1a1a1a] to-[#374151] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#dc2626]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ef4444]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {translations.about.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {translations.about.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <Shield className="text-[#dc2626] mb-4" size={32} />
                <h3 className="text-lg font-bold text-white mb-2">
                  {translations.about.pillars.security.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {translations.about.pillars.security.description}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <Eye className="text-[#f87171] mb-4" size={32} />
                <h3 className="text-lg font-bold text-white mb-2">
                  {translations.about.pillars.transparency.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {translations.about.pillars.transparency.description}
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#dc2626]/20 to-[#ef4444]/20 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                {translations.about.mission.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {translations.about.mission.description}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="grid grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-[#dc2626] mb-2">150+</div>
                  <div className="text-gray-300">{translations.about.stats.projects}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#f87171] mb-2">98%</div>
                  <div className="text-gray-300">{translations.about.stats.satisfaction}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#374151] mb-2">5+</div>
                  <div className="text-gray-300">{translations.about.stats.years}</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#dc2626] mb-2">24/7</div>
                  <div className="text-gray-300">{translations.about.stats.support}</div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <Users className="text-[#f87171]" size={24} />
                <span className="text-white font-medium">{translations.about.features.team}</span>
              </div>
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <Award className="text-[#dc2626]" size={24} />
                <span className="text-white font-medium">{translations.about.features.quality}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}