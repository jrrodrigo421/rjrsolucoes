import React from 'react';
import { Code, Database, Cog, Shield, BarChart3, Zap } from 'lucide-react';

interface ServicesProps {
  translations: any;
}

const services = [
  {
    icon: Code,
    color: '#dc2626',
    key: 'development'
  },
  {
    icon: Database,
    color: '#ef4444',
    key: 'dataAnalytics'
  },
  {
    icon: Cog,
    color: '#f87171',
    key: 'automation'
  },
  {
    icon: Shield,
    color: '#374151',
    key: 'security'
  },
  {
    icon: BarChart3,
    color: '#dc2626',
    key: 'business'
  },
  {
    icon: Zap,
    color: '#ef4444',
    key: 'consulting'
  }
];

export default function Services({ translations }: ServicesProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-6">
            {translations.services.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.key}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-[#dc2626]/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-6">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${service.color}20` }}
                  >
                    <Icon size={32} color={service.color} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  {translations.services[service.key].title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {translations.services[service.key].description}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <span className="text-sm font-medium text-[#dc2626] group-hover:text-[#ef4444] transition-colors duration-300">
                    {translations.services.learnMore} →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}