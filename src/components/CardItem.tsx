'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon, ArrowRightIcon, CreditCardIcon, BanknotesIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

interface CardItemProps {
  id: string;
  name: string;
  issuer: string;
  annualFee: number;
  signupBonus: string;
  image: string;
  rating: number;
  rewardsRate?: string;
  benefits?: string[];
}

export default function CardItem({
  id,
  name,
  issuer,
  annualFee,
  signupBonus,
  image,
  rating,
  rewardsRate,
  benefits = [],
}: CardItemProps) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Card Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <StarIcon className="h-5 w-5 text-yellow-400" />
          <span className="text-gray-700 dark:text-gray-300 font-medium">{rating.toFixed(1)}</span>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
          {issuer}
        </span>
      </div>
      
      {/* Card Image */}
      <div className="relative h-48 mb-6">
        {!imageError ? (
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain transition-transform duration-300"
            style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-xl">
            <CreditCardIcon className="w-12 h-12 text-gray-400" />
          </div>
        )}
      </div>
      
      {/* Card Details */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h3>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
            <p className="text-sm text-gray-500 dark:text-gray-400">Annual Fee</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">${annualFee}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
            <p className="text-sm text-gray-500 dark:text-gray-400">Signup Bonus</p>
            <p className="text-lg font-semibold text-gray-900 dark:text-white">{signupBonus}</p>
          </div>
        </div>

        {rewardsRate && (
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            <BanknotesIcon className="w-5 h-5" />
            <span>{rewardsRate} rewards rate</span>
          </div>
        )}

        {benefits.length > 0 && (
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Key Benefits:</p>
            <ul className="space-y-1">
              {benefits.slice(0, 3).map((benefit, index) => (
                <li key={index} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      {/* Action Buttons */}
      <div className="mt-6 flex space-x-3">
        <Link
          href={`/cards/${id}`}
          className="flex-1"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center space-x-2"
          >
            <span>View Details</span>
            <ArrowRightIcon className="w-4 h-4" />
          </motion.button>
        </Link>
        <Link
          href={`/compare?card=${id}`}
          className="flex-1"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
          >
            Compare
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
} 