import React from 'react';
import { Download, RefreshCcw, Repeat, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ResultViewProps {
  imageUrl: string;
  onReset: () => void;
  onRedo?: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
  hasPrevious?: boolean;
  hasNext?: boolean;
  currentIndex?: number;
  totalResults?: number;
}

export const ResultView: React.FC<ResultViewProps> = ({ 
  imageUrl, 
  onReset, 
  onRedo,
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
  currentIndex = 0,
  totalResults = 0
}) => {
  const { t } = useLanguage();

  return (
    <div className="animate-fade-in space-y-4">
      <div className="relative group rounded-lg overflow-hidden border border-accent-gold/30 bg-studio-800 shadow-2xl shadow-black/50">
        <img
          src={imageUrl}
          alt="Edited Result"
          className="w-full h-auto max-h-[600px] object-contain mx-auto"
        />
        <div className="absolute top-3 left-3 bg-accent-gold/90 text-studio-900 px-3 py-1 rounded text-xs font-bold tracking-wider">
          {t('studioResult')} {totalResults > 1 && `(${currentIndex + 1}/${totalResults})`}
        </div>

        {/* Floating Navigation Overlay (visible on hover) */}
        {totalResults > 1 && (
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
             <button 
                onClick={(e) => { e.stopPropagation(); onPrevious?.(); }}
                disabled={!hasPrevious}
                className={`pointer-events-auto p-2 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 disabled:opacity-0 transition-all ${!hasPrevious ? 'invisible' : ''}`}
             >
               <ChevronLeft className="w-6 h-6" />
             </button>
             <button 
                onClick={(e) => { e.stopPropagation(); onNext?.(); }}
                disabled={!hasNext}
                className={`pointer-events-auto p-2 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 disabled:opacity-0 transition-all ${!hasNext ? 'invisible' : ''}`}
             >
               <ChevronRight className="w-6 h-6" />
             </button>
          </div>
        )}
      </div>

      {/* Explicit Navigation Bar */}
      {totalResults > 1 && (
        <div className="flex items-center justify-between bg-studio-800/50 p-2 rounded-lg border border-studio-700">
           <button 
              onClick={onPrevious}
              disabled={!hasPrevious}
              className="p-2 hover:bg-studio-700 rounded text-studio-300 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-xs font-medium uppercase tracking-wider flex items-center gap-1"
           >
             <ChevronLeft className="w-4 h-4" /> {t('previous')}
           </button>
           <span className="text-xs font-mono text-studio-500">
             {t('version')} {currentIndex + 1} {t('of')} {totalResults}
           </span>
           <button 
              onClick={onNext}
              disabled={!hasNext}
              className="p-2 hover:bg-studio-700 rounded text-studio-300 disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-xs font-medium uppercase tracking-wider flex items-center gap-1"
           >
             {t('next')} <ChevronRight className="w-4 h-4" />
           </button>
        </div>
      )}

      <div className="space-y-3">
        <a
          href={imageUrl}
          download={`studio-lens-edit-v${currentIndex + 1}.png`}
          className="w-full flex items-center justify-center gap-2 bg-accent-gold hover:bg-accent-goldHover text-studio-900 font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-accent-gold/10"
        >
          <Download className="w-5 h-5" />
          {t('download')}
        </a>
        
        <div className="grid grid-cols-2 gap-3">
          {onRedo && (
            <button
              onClick={onRedo}
              className="flex items-center justify-center gap-2 bg-studio-700 hover:bg-studio-600 text-studio-100 font-medium py-3 px-6 rounded-lg transition-colors border border-studio-600 hover:border-studio-500"
              title="Generate a new version"
            >
              <Repeat className="w-5 h-5" />
              {t('redo')}
            </button>
          )}
          <button
            onClick={onReset}
            className="flex items-center justify-center gap-2 bg-studio-800 hover:bg-studio-700 text-studio-300 hover:text-studio-100 font-medium py-3 px-6 rounded-lg transition-colors border border-studio-700"
          >
            <RefreshCcw className="w-5 h-5" />
            {t('editAnother')}
          </button>
        </div>
      </div>
    </div>
  );
};