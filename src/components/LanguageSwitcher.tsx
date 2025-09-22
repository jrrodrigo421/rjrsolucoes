import React from 'react';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const languages = [
  { code: 'pt', name: '', flag: 'Português-br' },
  { code: 'en', name: '', flag: 'Inglês' },
  { code: 'es', name: '', flag: 'Espanhol' },
];

export default function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
      >
        <Globe size={16} />
        <span className="text-sm font-medium">
          {languages.find(lang => lang.code === currentLanguage)?.flag}
        </span>
      </button>

      {isOpen && (
        <div className="absolute w-[130%] top-full mt-2 right-0 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                onLanguageChange(language.code);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2 ${currentLanguage === language.code ? 'bg-gray-100' : ''
                }`}
            >
              <span>{language.flag}</span>
              <span className="text-gray-800 text-sm">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}