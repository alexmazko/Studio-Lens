import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { ImageUploader } from './components/ImageUploader';
import { PromptEditor } from './components/PromptEditor';
import { ResultView } from './components/ResultView';
import { AspectRatioSelector } from './components/AspectRatioSelector';
import { StyleSelector } from './components/StyleSelector';
import { ImageState, AspectRatio, StylePreset } from './types';
import { editImageWithGemini } from './services/gemini';
import { Loader2, AlertCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from './contexts/LanguageContext';

// Synthesized sound effect for success state
const playSuccessSound = () => {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    
    const ctx = new AudioContext();
    const now = ctx.currentTime;
    
    // Elegant "Glass" Chime (C6 Major Triad)
    const notes = [1046.50, 1318.51, 1567.98]; // C6, E6, G6
    
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.type = 'sine';
      osc.frequency.value = freq;
      
      // Staggered start time for arpeggio effect
      const startTime = now + (i * 0.05);
      
      // Envelope: Fast attack, long exponential decay
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(0.08, startTime + 0.02); // Low volume for subtlety
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 2.0);
      
      osc.start(startTime);
      osc.stop(startTime + 2.0);
    });
  } catch (e) {
    // Fail silently if audio context is blocked or not supported
    console.error("Audio playback failed", e);
  }
};

// Synthesized sound effect for error/declined state
const playErrorSound = () => {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;
    
    const ctx = new AudioContext();
    const now = ctx.currentTime;
    
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    
    // Low sine drop (Thud/Decline)
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(150, now);
    osc1.frequency.exponentialRampToValueAtTime(100, now + 0.3);
    
    gain1.gain.setValueAtTime(0, now);
    gain1.gain.linearRampToValueAtTime(0.2, now + 0.05);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    
    osc1.start(now);
    osc1.stop(now + 0.4);

    // Subtle sawtooth "buzz" for error feedback
    osc2.type = 'sawtooth';
    osc2.frequency.setValueAtTime(100, now);
    osc2.frequency.linearRampToValueAtTime(80, now + 0.3);
    
    gain2.gain.setValueAtTime(0, now);
    gain2.gain.linearRampToValueAtTime(0.1, now + 0.05);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
    
    osc2.start(now);
    osc2.stop(now + 0.4);
    
  } catch (e) {
    console.error("Audio playback failed", e);
  }
};

const App: React.FC = () => {
  const { t, prompts, presets, language } = useLanguage();
  
  const [imageState, setImageState] = useState<ImageState>({
    file: null,
    previewUrl: null,
    base64: null,
    mimeType: null,
  });
  
  // Starting with an empty prompt as requested
  const [prompt, setPrompt] = useState<string>("");
  const [aspectRatio, setAspectRatio] = useState<AspectRatio>('1:1');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isHighQuality, setIsHighQuality] = useState(false);
  const [hasApiKey, setHasApiKey] = useState(false);
  
  // Starting with no selected preset ID
  const [currentPresetId, setCurrentPresetId] = useState<string>("");
  
  // Ref to track if user has manually edited the prompt
  const isPromptEditedRef = useRef(false);
  const promptEditorRef = useRef<HTMLTextAreaElement>(null);
  
  // History State
  const [resultHistory, setResultHistory] = useState<string[]>([]);
  const [currentResultIndex, setCurrentResultIndex] = useState<number>(-1);
  const [error, setError] = useState<string | null>(null);

  // Derived current URL
  const resultUrl = currentResultIndex >= 0 ? resultHistory[currentResultIndex] : null;

  // Sync prompt with language and preset selection ONLY if a preset is active
  useEffect(() => {
    if (currentPresetId && !isPromptEditedRef.current) {
      const activePreset = presets.find(p => p.id === currentPresetId);
      if (activePreset) {
        setPrompt(activePreset.prompt);
      }
    }
  }, [language, currentPresetId, presets]);

  // Check for API key on mount and when isHighQuality changes
  useEffect(() => {
    const checkApiKey = async () => {
      if ((window as any).aistudio) {
        const selected = await (window as any).aistudio.hasSelectedApiKey();
        setHasApiKey(selected);
      }
    };
    checkApiKey();
  }, [isHighQuality]);

  const handleOpenKeySelector = async () => {
    if ((window as any).aistudio) {
      await (window as any).aistudio.openSelectKey();
      setHasApiKey(true);
    }
  };

  const handleSelectPreset = (preset: StylePreset) => {
    setCurrentPresetId(preset.id);
    setPrompt(preset.prompt);
    isPromptEditedRef.current = false;

    // If it's the custom manual edit, focus the editor
    if (preset.id === 'custom-manual') {
      setTimeout(() => {
        promptEditorRef.current?.focus();
      }, 100);
    }
  };

  const handlePromptChange = (val: string) => {
    setPrompt(val);
    isPromptEditedRef.current = true;
    // If user clears the text manually, we unset the visual preset selection
    if (!val.trim()) {
        setCurrentPresetId("");
    }
  };

  const handleGenerate = async () => {
    const isCustomManual = currentPresetId === 'custom-manual';
    if (!isCustomManual && (!imageState.base64 || !imageState.mimeType)) return;
    if (!prompt.trim()) {
      setError(t('error'));
      playErrorSound();
      return;
    }

    setIsProcessing(true);
    setError(null);

    const model = isHighQuality ? 'gemini-3.1-flash-image-preview' : 'gemini-2.5-flash-image';

    try {
      const response = await editImageWithGemini(
        isCustomManual ? null : imageState.base64,
        isCustomManual ? null : imageState.mimeType,
        prompt,
        aspectRatio,
        model
      );

      if (response.error) {
        setError(response.error);
        playErrorSound();
      } else if (response.imageUrl) {
        setResultHistory(prev => [...prev, response.imageUrl!]);
        setCurrentResultIndex(resultHistory.length); 
        playSuccessSound();
      }
    } catch (e) {
      setError(t('connError'));
      playErrorSound();
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSafetyFix = () => {
    setPrompt(prev => {
        const cleanPrev = prev.trim();
        const cleanAttire = prompts.attire.trim();
        if (cleanPrev.includes(cleanAttire)) return cleanPrev;
        return cleanPrev ? `${cleanPrev}\n\n${cleanAttire}` : cleanAttire;
    });
    isPromptEditedRef.current = true;
    setError(null); 
  };

  const resetAll = () => {
    setImageState({
      file: null,
      previewUrl: null,
      base64: null,
      mimeType: null,
    });
    setResultHistory([]);
    setCurrentResultIndex(-1);
    setError(null);
    setPrompt("");
    setCurrentPresetId("");
    isPromptEditedRef.current = false;
  };

  const handlePrevious = () => {
    if (currentResultIndex > 0) {
      setCurrentResultIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentResultIndex < resultHistory.length - 1) {
      setCurrentResultIndex(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-studio-100 selection:bg-accent-gold/30 selection:text-white">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Input & Controls */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-serif text-white mb-2">{t('sourceTitle')}</h2>
                <p className="text-studio-400 text-sm">{t('sourceDesc')}</p>
              </div>
              <ImageUploader 
                imageState={imageState} 
                onImageChange={(newState) => {
                  setImageState(newState);
                  setResultHistory([]);
                  setCurrentResultIndex(-1); 
                  setError(null);
                }} 
                onError={(err) => {
                  setError(err);
                  playErrorSound();
                }}
                disabled={isProcessing}
              />

              <StyleSelector 
                onSelect={handleSelectPreset}
                disabled={isProcessing}
                hasImage={!!imageState.previewUrl}
              />

              <div className="p-4 bg-studio-800/50 border border-studio-700 rounded-lg space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-studio-100 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-accent-gold" />
                      High Quality Mode
                    </span>
                    <span className="text-[10px] text-studio-400">Uses Gemini 3.1 Flash for superior results</span>
                  </div>
                  <button 
                    onClick={() => setIsHighQuality(!isHighQuality)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${isHighQuality ? 'bg-accent-gold' : 'bg-studio-700'}`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isHighQuality ? 'translate-x-6' : 'translate-x-1'}`} />
                  </button>
                </div>

                {isHighQuality && !hasApiKey && (
                  <div className="p-3 bg-accent-gold/10 border border-accent-gold/30 rounded flex flex-col gap-3">
                    <p className="text-[11px] text-accent-gold leading-tight">
                      <strong>API Key Required:</strong> High Quality Mode requires a personal Gemini API key. Please select your key to continue.
                    </p>
                    <button 
                      onClick={handleOpenKeySelector}
                      className="text-[10px] font-black uppercase tracking-widest bg-accent-gold text-studio-900 px-3 py-1.5 rounded hover:bg-white transition-colors"
                    >
                      Select API Key
                    </button>
                    <a 
                      href="https://ai.google.dev/gemini-api/docs/billing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[9px] text-studio-500 underline text-center"
                    >
                      Learn about billing
                    </a>
                  </div>
                )}
              </div>
              
              {error && (
                <div className="p-4 bg-red-900/20 border border-red-800/50 rounded-lg flex flex-col items-start gap-3 text-red-200 animate-fade-in">
                  <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <p className="text-sm leading-relaxed">{error}</p>
                  </div>
                  
                  <div className="pl-8 pt-1 w-full">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 bg-red-950/30 rounded border border-red-900/50">
                          <p className="text-xs text-red-300/80 flex-1">
                              <strong>{t('safetyErrorTitle')}</strong> {t('safetyErrorDesc')}
                          </p>
                          <button
                              onClick={handleSafetyFix}
                              className="flex items-center gap-2 whitespace-nowrap text-xs bg-studio-100 hover:bg-white text-studio-900 font-semibold px-3 py-2 rounded shadow-sm transition-colors"
                          >
                              <ShieldCheck className="w-3.5 h-3.5" />
                              {t('applySafety')}
                          </button>
                      </div>
                  </div>
                </div>
              )}
            </div>

            <div className={`space-y-6 transition-all duration-500 ${imageState.previewUrl || currentPresetId === 'custom-manual' ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4 pointer-events-none grayscale'}`}>
              <div className="border-t border-studio-800 pt-6 space-y-6">
                <AspectRatioSelector 
                  value={aspectRatio}
                  onChange={setAspectRatio}
                  disabled={isProcessing}
                />

                <PromptEditor 
                  ref={promptEditorRef}
                  prompt={prompt} 
                  setPrompt={handlePromptChange} 
                  disabled={isProcessing} 
                />
              </div>
              
              <div className="pt-2">
                <button
                  onClick={handleGenerate}
                  disabled={isProcessing || (!imageState.previewUrl && currentPresetId !== 'custom-manual') || !prompt.trim()}
                  className={`
                    w-full py-4 rounded-lg font-bold text-lg tracking-wide flex items-center justify-center gap-3 shadow-lg transition-all
                    ${isProcessing || (!imageState.previewUrl && currentPresetId !== 'custom-manual') || !prompt.trim()
                      ? 'bg-studio-700 text-studio-500 cursor-not-allowed'
                      : 'bg-accent-gold hover:bg-accent-goldHover text-studio-900 hover:shadow-accent-gold/20 hover:-translate-y-0.5'}
                  `}
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>{t('developing')}</span>
                    </>
                  ) : (
                    <>
                      <span>{t('applyBtn')}</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Result */}
          <div className="space-y-6 sticky top-24">
             <div className="flex items-center justify-between">
                <h2 className="text-2xl font-serif text-white">{t('studioResult')}</h2>
                {resultUrl && !isProcessing && <span className="text-xs uppercase tracking-widest text-accent-gold font-bold">{t('ready')}</span>}
             </div>
             
             {resultUrl && !isProcessing ? (
               <ResultView 
                  imageUrl={resultUrl} 
                  onReset={resetAll} 
                  onRedo={handleGenerate}
                  onPrevious={handlePrevious}
                  onNext={handleNext}
                  hasPrevious={currentResultIndex > 0}
                  hasNext={currentResultIndex < resultHistory.length - 1}
                  currentIndex={currentResultIndex}
                  totalResults={resultHistory.length}
               />
             ) : (
               <div className="h-[400px] lg:h-[600px] border border-studio-700 rounded-lg bg-studio-800/20 flex flex-col items-center justify-center text-studio-500 p-8 text-center border-dashed">
                  {isProcessing ? (
                    <div className="flex flex-col items-center gap-4 animate-pulse">
                      <div className="w-16 h-16 rounded-full border-4 border-studio-700 border-t-accent-gold animate-spin"></div>
                      <p className="text-lg font-serif text-studio-300">{t('applying')}</p>
                      <p className="text-sm text-studio-500 max-w-xs">{t('usingModel')} {aspectRatio}.</p>
                    </div>
                  ) : (
                    <>
                      <div className="bg-studio-800 p-4 rounded-full mb-4">
                        <Sparkles className="w-8 h-8 opacity-50" />
                      </div>
                      <h3 className="text-lg font-medium text-studio-300 mb-2">{t('waiting')}</h3>
                      <p className="text-sm max-w-xs">{t('waitingDesc')}</p>
                    </>
                  )}
               </div>
             )}
          </div>

        </div>
      </main>
      
      <footer className="py-6 border-t border-studio-800 text-center text-studio-600 text-xs">
        <p>{t('footer')}</p>
      </footer>
    </div>
  );
};

export default App;