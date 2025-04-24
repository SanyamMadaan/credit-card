'use client';

import Image from 'next/image';
import { useState } from 'react';

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function CardImage({ src, alt, className = '' }: CardImageProps) {
  const [error, setError] = useState(false);

  // Fallback image when the main image fails to load
  const fallbackImage = '/images/cards/card-placeholder.png';

  return (
    <div className={`relative w-full h-full ${className}`}>
      <Image
        src={error ? fallbackImage : src}
        alt={alt}
        fill
        className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
        onError={() => setError(true)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
      />
    </div>
  );
} 