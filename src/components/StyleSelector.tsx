import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Palette, Layers, User, Home, Sparkles, Settings } from 'lucide-react';
import { PresetCategory, StylePreset } from '../types';

interface StyleSelectorProps {
  onSelect: (preset: StylePreset) => void;
  disabled?: boolean;
  hasImage?: boolean;
}

export const StyleSelector: React.FC<StyleSelectorProps> = ({ onSelect, disabled, hasImage }) => {
  const { t, presets } = useLanguage();

  const categories: { id: PresetCategory; icon: React.ReactNode; label: string }[] = [
    { id: 'portrait', icon: <User className="w-4 h-4" />, label: t('cat_portrait') },
    { id: 'architecture', icon: <Home className="w-4 h-4" />, label: t('cat_architecture') },
    { id: 'creative', icon: <Sparkles className="w-4 h-4" />, label: t('cat_creative') },
    { id: 'artistic', icon: <Palette className="w-4 h-4" />, label: t('cat_artistic') },
    { id: 'utility', icon: <Settings className="w-4 h-4" />, label: t('cat_utility') },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-studio-300 flex items-center gap-2">
          <Layers className="w-4 h-4 text-accent-gold" />
          {t('stylePreset')}
        </label>
        <span className="text-[10px] uppercase tracking-widest text-studio-500 font-bold">
          {t('selectToLoad')}
        </span>
      </div>
      
      <div className="space-y-8">
        {categories.map((cat) => {
          const catPresets = presets.filter(p => p.category === cat.id);
          if (catPresets.length === 0) return null;

          return (
            <div key={cat.id} className="space-y-3">
              <div className="flex items-center gap-2 border-b border-studio-800 pb-2">
                <span className="text-accent-gold">{cat.icon}</span>
                <h3 className="text-xs font-bold uppercase tracking-wider text-studio-400">
                  {cat.label}
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {catPresets.map((preset) => {
                  const isManual = preset.id === 'custom-manual';
                  const isButtonDisabled = disabled || (!hasImage && !isManual);

                  return (
                    <button
                      key={preset.id}
                      onClick={() => onSelect(preset)}
                      disabled={isButtonDisabled}
                      className="text-left group relative flex flex-col p-3 rounded-lg border border-studio-700 bg-studio-800/50 hover:border-accent-gold/50 hover:bg-studio-700/80 transition-all disabled:opacity-30 disabled:grayscale disabled:cursor-not-allowed overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-1 h-full bg-studio-600 group-hover:bg-accent-gold transition-colors"></div>
                      <div className="pl-2 pr-2">
                          <div className="flex items-center justify-between gap-2">
                            <span className="block text-sm font-semibold text-studio-100 group-hover:text-accent-gold transition-colors truncate">
                              {preset.name}
                            </span>
                            {preset.isNew && (
                              <span className="bg-accent-gold text-studio-900 text-[8px] font-black px-1.5 py-0.5 rounded-full">NEW</span>
                            )}
                          </div>
                          <span className="block text-[11px] text-studio-400 mt-1 leading-relaxed line-clamp-2">
                            {preset.description}
                          </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};