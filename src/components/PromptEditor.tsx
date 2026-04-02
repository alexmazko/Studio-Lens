import React, { forwardRef } from 'react';
import { Wand2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface PromptEditorProps {
  prompt: string;
  setPrompt: (p: string) => void;
  disabled?: boolean;
}

export const PromptEditor = forwardRef<HTMLTextAreaElement, PromptEditorProps>(
  ({ prompt, setPrompt, disabled }, ref) => {
    const { t } = useLanguage();

    return (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label htmlFor="prompt" className="block text-sm font-medium text-studio-300">
            {t('fineTune')}
          </label>
          <span className="text-xs text-studio-500">
              {t('fineTuneDesc')}
          </span>
        </div>
        <div className="relative">
          <textarea
            ref={ref}
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            disabled={disabled}
            placeholder={t('fineTuneDesc')}
            className="w-full h-32 bg-studio-800 border border-studio-600 rounded-lg p-3 text-studio-100 text-sm focus:ring-1 focus:ring-accent-gold focus:border-accent-gold placeholder-studio-500 resize-none transition-all"
          />
          <div className="absolute bottom-3 right-3 pointer-events-none">
              <Wand2 className="w-4 h-4 text-studio-600" />
          </div>
        </div>
      </div>
    );
  }
);

PromptEditor.displayName = 'PromptEditor';