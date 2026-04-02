import React from 'react';
import { AspectRatio } from '../types';
import { Square, RectangleHorizontal, RectangleVertical, Monitor, Smartphone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface AspectRatioSelectorProps {
  value: AspectRatio;
  onChange: (ratio: AspectRatio) => void;
  disabled?: boolean;
}

export const AspectRatioSelector: React.FC<AspectRatioSelectorProps> = ({ value, onChange, disabled }) => {
  const { t } = useLanguage();

  const ratios: { id: AspectRatio; label: string; icon: React.ReactNode }[] = [
    { id: '1:1', label: t('square'), icon: <Square className="w-4 h-4" /> },
    { id: '3:4', label: t('portrait'), icon: <RectangleVertical className="w-4 h-4" /> },
    { id: '4:3', label: t('landscape'), icon: <RectangleHorizontal className="w-4 h-4" /> },
    { id: '16:9', label: t('cinema'), icon: <Monitor className="w-4 h-4" /> },
    { id: '9:16', label: t('story'), icon: <Smartphone className="w-4 h-4" /> },
  ];

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-studio-300">
        {t('outputFormat')}
      </label>
      <div className="grid grid-cols-5 gap-2">
        {ratios.map((ratio) => (
          <button
            key={ratio.id}
            onClick={() => onChange(ratio.id)}
            disabled={disabled}
            className={`
              flex flex-col items-center justify-center p-2 rounded-lg border transition-all
              ${value === ratio.id 
                ? 'bg-accent-gold text-studio-900 border-accent-gold shadow-lg shadow-accent-gold/20' 
                : 'bg-studio-800 border-studio-700 text-studio-400 hover:border-studio-500 hover:text-studio-200'}
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            `}
            title={ratio.label}
          >
            <div className="mb-1">{ratio.icon}</div>
            <span className="text-[10px] font-medium uppercase tracking-wide">{ratio.id}</span>
          </button>
        ))}
      </div>
    </div>
  );
};