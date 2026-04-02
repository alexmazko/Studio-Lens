import React, { useState } from 'react';
import { Camera, Aperture, Globe, Share2, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../translations';

export const Header: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <header className="border-b border-studio-700 bg-studio-900/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-accent-gold p-1.5 rounded-sm">
            <Aperture className="w-6 h-6 text-studio-900" />
          </div>
          <h1 className="text-xl font-serif font-semibold tracking-wide text-studio-50">
            STUDIO <span className="text-accent-gold">LENS</span> AI
          </h1>
        </div>
        <div className="flex items-center space-x-3 sm:space-x-4 text-sm text-studio-400">
          <span className="hidden lg:inline">{t('subtitle')}</span>
          <span className="w-px h-4 bg-studio-700 hidden lg:block"></span>
          
          <div className="flex items-center gap-2 sm:gap-3">
             <button 
                onClick={handleShare}
                className={`flex items-center gap-2 px-3 py-1.5 rounded text-xs font-bold transition-all ${copied ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-studio-800 hover:bg-studio-700 text-studio-200 border border-studio-700'}`}
             >
                {copied ? <Check className="w-3 h-3" /> : <Share2 className="w-3 h-3" />}
                <span className="hidden sm:inline">{copied ? t('linkCopied') : t('shareApp')}</span>
             </button>

             <div className="flex items-center gap-1 bg-studio-800 rounded px-2 py-1 border border-studio-700">
                <Globe className="w-3 h-3 text-studio-400" />
                <select 
                    value={language} 
                    onChange={(e) => setLanguage(e.target.value as Language)}
                    className="bg-transparent border-none text-xs text-studio-200 focus:ring-0 cursor-pointer outline-none uppercase font-semibold"
                >
                    <option value="en">EN</option>
                    <option value="ru">RU</option>
                    <option value="et">ET</option>
                </select>
             </div>
             <span className="flex items-center space-x-1">
                <Camera className="w-4 h-4" />
                <span>v2.0</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
