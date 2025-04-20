'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

interface CardItemProps {
  id: string;
  name: string;
  issuer: string;
  annualFee: number;
  signupBonus: string;
  image: string;
  rating: number;
}

export default function CardItem({
  id,
  name,
  issuer,
  annualFee,
  signupBonus,
  image,
  rating,
}: CardItemProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card-hover bg-white rounded-xl p-6 shadow-md"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <StarIcon className="h-5 w-5 text-yellow-400" />
          <span className="text-gray-700">{rating.toFixed(1)}</span>
        </div>
        <span className="text-sm text-gray-500">{issuer}</span>
      </div>
      
      <div className="relative h-40 mb-4">
        {!imageError ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
            <span className="text-gray-500">Image not available</span>
          </div>
        )}
      </div>
      
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      
      <div className="space-y-2 mb-4">
        <p className="text-sm text-gray-600">
          <span className="font-medium">Annual Fee:</span> ${annualFee}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium">Signup Bonus:</span> {signupBonus}
        </p>
      </div>
      
      <div className="flex space-x-3">
        <Link
          href={`/cards/${id}`}
          className="btn-secondary flex-1 text-center"
        >
          View Details
        </Link>
        <Link
          href={`/compare?card=${id}`}
          className="btn-primary flex-1 text-center"
        >
          Compare
        </Link>
      </div>
    </motion.div>
  );
} 