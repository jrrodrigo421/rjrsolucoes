import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  translations: any;
}

export default function Footer({ translations }: FooterProps) {
  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#f87171] to-[#dc2626] bg-clip-text text-transparent mb-4">
              RJR Soluções
            </h3>
            <p className="text-gray-400 mb-4">
              {translations.footer.description}
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={16} />
                <span className="text-sm">rjr89000@gmail.com</span>
              </div>
              {/* <div className="flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                <span className="text-sm">+55 (11) 99999-9999</span>
              </div> */}
              {/* <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                <span className="text-sm">São Paulo, Brasil</span>
              </div> */}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#f87171]">
              {translations.footer.services}
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>{translations.services.development.title}</li>
              <li>{translations.services.dataAnalytics.title}</li>
              <li>{translations.services.automation.title}</li>
              <li>{translations.services.security.title}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#dc2626]">
              {translations.footer.company}
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">{translations.footer.about}</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">{translations.footer.ourServices}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{translations.footer.contact}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{translations.footer.privacy}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2025 RJR Soluções. {translations.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}