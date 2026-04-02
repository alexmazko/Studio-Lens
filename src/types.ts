export interface EditResponse {
  imageUrl?: string;
  error?: string;
}

export interface ImageState {
  file: File | null;
  previewUrl: string | null;
  base64: string | null;
  mimeType: string | null;
}

export type AspectRatio = '1:1' | '3:4' | '4:3' | '16:9' | '9:16';

export type PresetCategory = 'portrait' | 'architecture' | 'creative' | 'utility' | 'artistic';

export interface StylePreset {
  id: string;
  name: string;
  description: string;
  prompt: string;
  category: PresetCategory;
  isNew?: boolean;
}