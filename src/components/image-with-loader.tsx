"use client"
// components/ShowImage.tsx

import { useState } from 'react';
import Image from 'next/image';

interface ShowImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageWithLoader({ src, alt, className = '' }: ShowImageProps) {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div className={`relative aspect-video ${className}`}>
      {imageLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      )}
      <Image 
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        priority
        loading="eager"
        className="rounded-md"
        onLoadingComplete={() => setImageLoading(false)}
        onError={() => setImageLoading(false)}
      />
    </div>
  );
}