import React, { useState, useRef } from 'react';
import ReactCrop, { type Crop, type PixelCrop } from 'react-image-crop';
import { Check, X, ZoomIn } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ImageCropperProps {
  imageSrc: string;
  onCropComplete: (base64: string) => void;
  onCancel: () => void;
}

export const ImageCropper: React.FC<ImageCropperProps> = ({ imageSrc, onCropComplete, onCancel }) => {
  const { t } = useLanguage();
  const [crop, setCrop] = useState<Crop>({
    unit: '%',
    width: 80,
    height: 80,
    x: 10,
    y: 10,
  });
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const generateCroppedImage = async () => {
    const image = imgRef.current;
    if (!image || !completedCrop) {
        onCancel();
        return;
    }

    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const pixelRatio = window.devicePixelRatio || 1;

    canvas.width = Math.floor(completedCrop.width * scaleX * pixelRatio);
    canvas.height = Math.floor(completedCrop.height * scaleY * pixelRatio);

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return;
    }

    ctx.scale(pixelRatio, pixelRatio);
    ctx.imageSmoothingQuality = 'high';

    const cropX = completedCrop.x * scaleX;
    const cropY = completedCrop.y * scaleY;
    const cropWidth = completedCrop.width * scaleX;
    const cropHeight = completedCrop.height * scaleY;

    ctx.drawImage(
      image,
      cropX,
      cropY,
      cropWidth,
      cropHeight,
      0,
      0,
      cropWidth,
      cropHeight,
    );

    const base64 = canvas.toDataURL('image/png', 1.0);
    onCropComplete(base64);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in">
      <div className="relative w-full max-w-4xl flex flex-col items-center h-[90vh]">
        <div className="flex items-center justify-between w-full mb-4 px-2">
            <h3 className="text-xl font-serif font-semibold text-white flex items-center gap-2">
                <ZoomIn className="w-5 h-5 text-accent-gold" />
                {t('cropTitle')}
            </h3>
            <button 
                onClick={onCancel}
                className="p-2 hover:bg-white/10 rounded-full transition-colors text-white/70 hover:text-white"
            >
                <X className="w-6 h-6" />
            </button>
        </div>

        <div 
            ref={containerRef}
            className="flex-1 flex items-center justify-center w-full overflow-auto bg-studio-900/50 rounded-lg border border-studio-700 p-4"
        >
          <ReactCrop
            crop={crop}
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(c) => setCompletedCrop(c)}
            className="max-h-full"
            style={{ maxHeight: '100%' }}
          >
            <img
              ref={imgRef}
              src={imageSrc}
              alt="Crop source"
              className="max-w-full max-h-[70vh] object-contain"
              onLoad={(e) => {
                  const { width, height } = e.currentTarget;
                  const w = width * 0.8;
                  const h = height * 0.8;
                  const x = (width - w) / 2;
                  const y = (height - h) / 2;
                  setCompletedCrop({
                      unit: 'px',
                      width: w,
                      height: h,
                      x,
                      y
                  });
              }}
            />
          </ReactCrop>
        </div>

        <div className="mt-6 flex gap-4 w-full max-w-md justify-center">
            <button
                onClick={onCancel}
                className="px-6 py-3 rounded-lg font-medium text-studio-300 border border-studio-600 hover:bg-studio-800 transition-colors w-1/2"
            >
                {t('cancel')}
            </button>
            <button
                onClick={generateCroppedImage}
                className="px-6 py-3 rounded-lg font-bold text-studio-900 bg-accent-gold hover:bg-accent-goldHover shadow-lg shadow-accent-gold/20 transition-all w-1/2 flex items-center justify-center gap-2"
            >
                <Check className="w-5 h-5" />
                {t('applyCrop')}
            </button>
        </div>
      </div>
    </div>
  );
};