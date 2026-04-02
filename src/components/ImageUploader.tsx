import React, { useRef, useState } from 'react';
import { Upload, Image as ImageIcon, X, Crop as CropIcon } from 'lucide-react';
import { ImageState } from '../types';
import { ImageCropper } from './ImageCropper';
import { useLanguage } from '../contexts/LanguageContext';

interface ImageUploaderProps {
  imageState: ImageState;
  onImageChange: (state: ImageState) => void;
  onError?: (error: string) => void;
  disabled?: boolean;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ imageState, onImageChange, onError, disabled }) => {
  const { t } = useLanguage();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isCropping, setIsCropping] = useState(false);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      if (onError) {
        onError('Please upload a valid image file (JPEG, PNG, WebP).');
      }
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      onImageChange({
        file: file,
        previewUrl: result,
        base64: result,
        mimeType: file.type,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (!disabled) setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (disabled) return;
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleClear = () => {
    onImageChange({
      file: null,
      previewUrl: null,
      base64: null,
      mimeType: null,
    });
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleCropComplete = async (newBase64: string) => {
    // Convert base64 to blob/file
    try {
        const res = await fetch(newBase64);
        const blob = await res.blob();
        // Create a new File object
        const newFile = new File([blob], imageState.file?.name || 'cropped.png', { type: 'image/png' });
        
        onImageChange({
            file: newFile,
            previewUrl: newBase64,
            base64: newBase64,
            mimeType: 'image/png'
        });
        setIsCropping(false);
    } catch (e) {
        console.error("Error applying crop", e);
    }
  };

  return (
    <div className="w-full">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleChange}
        accept="image/png, image/jpeg, image/jpg, image/webp"
        className="hidden"
        disabled={disabled}
      />

      {imageState.previewUrl ? (
        <div className="relative group rounded-lg overflow-hidden border border-studio-600 bg-studio-800 shadow-xl">
          <img
            src={imageState.previewUrl}
            alt="Original Upload"
            className="w-full h-auto max-h-[500px] object-contain mx-auto"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
             {!disabled && (
               <>
                 <button
                   onClick={() => setIsCropping(true)}
                   className="bg-studio-100 hover:bg-white text-studio-900 p-3 rounded-full backdrop-blur-sm transition-transform hover:scale-105 shadow-lg"
                   title={t('crop')}
                 >
                   <CropIcon className="w-6 h-6" />
                 </button>
                 <button
                   onClick={handleClear}
                   className="bg-red-500/90 hover:bg-red-600 text-white p-3 rounded-full backdrop-blur-sm transition-transform hover:scale-105 shadow-lg"
                   title={t('remove')}
                 >
                   <X className="w-6 h-6" />
                 </button>
               </>
             )}
          </div>
          <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded text-xs font-medium text-white">
            {t('original')}
          </div>
        </div>
      ) : (
        <div
          onClick={() => !disabled && fileInputRef.current?.click()}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`
            relative flex flex-col items-center justify-center w-full h-80 rounded-lg border-2 border-dashed
            transition-all duration-300 cursor-pointer overflow-hidden
            ${isDragging 
              ? 'border-accent-gold bg-studio-800/80 scale-[1.01]' 
              : 'border-studio-600 hover:border-studio-400 bg-studio-800/30 hover:bg-studio-800/50'}
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center px-4">
             <div className={`p-4 rounded-full mb-4 transition-colors ${isDragging ? 'bg-accent-gold/20' : 'bg-studio-700'}`}>
                {isDragging ? (
                    <Upload className="w-8 h-8 text-accent-gold" />
                ) : (
                    <ImageIcon className="w-8 h-8 text-studio-400" />
                )}
             </div>
            <p className="mb-2 text-lg font-serif text-studio-100">
              <span className="font-semibold text-accent-gold">{t('dragDrop')}</span> {t('dragDropDesc')}
            </p>
            <p className="text-sm text-studio-400">
              {t('dragDropSub')}
            </p>
          </div>
        </div>
      )}

      {isCropping && imageState.previewUrl && (
        <ImageCropper 
            imageSrc={imageState.previewUrl}
            onCancel={() => setIsCropping(false)}
            onCropComplete={handleCropComplete}
        />
      )}
    </div>
  );
};