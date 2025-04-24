'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { useComparison } from '@/context/ComparisonContext';
import { PlusIcon, MinusIcon, StarIcon } from '@heroicons/react/24/solid';
import { Card } from '@/data/cards';
import { useCompare } from '@/hooks/useCompare';
import CardImage from './CardImage';

type CardItemProps = Pick<Card, 'id' | 'name' | 'issuer' | 'annualFee' | 'signupBonus' | 'image' | 'rating' | 'rewardsRate' | 'benefits' | 'category' | 'description' | 'region' | 'applyLink'>;

const formatIndianCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

const formatCurrency = (amount: number, region: 'US' | 'IN') => {
  if (region === 'IN') {
    return formatIndianCurrency(amount);
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function CardItem({
  id,
  name,
  issuer,
  annualFee,
  signupBonus,
  image,
  rating,
  rewardsRate,
  benefits,
  category,
  description,
  region,
  applyLink,
}: CardItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addToComparison, removeFromComparison, isCardSelected } = useComparison();
  const selected = isCardSelected(id);
  const { addToCompare, removeFromCompare, isInCompare, isFull } = useCompare();

  const handleCompareClick = () => {
    const cardData = {
      id,
      name,
      issuer,
      annualFee,
      signupBonus,
      image,
      rating,
      rewardsRate,
      benefits,
      category,
      description,
      region,
      applyLink,
      features: {
        rewardsProgram: [],
        welcomeBonus: [],
        airportLounge: [],
        insurance: [],
        lifestyle: [],
        fees: {
          annual: annualFee,
          joiningFee: annualFee
        }
      },
      eligibility: {
        minIncome: 0,
        minAge: 21,
        maxAge: 100,
        employmentType: ['Salaried', 'Self-Employed']
      },
      interestRates: {
        purchase: 0,
        cash: 0
      }
    };

    if (selected) {
      removeFromComparison(id);
    } else {
      addToComparison(cardData);
    }

    if (isInCompare(id)) {
      removeFromCompare(id);
    } else {
      addToCompare(id);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg overflow-hidden"
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* Background gradient animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          backgroundPosition: isHovered ? ['0% 50%', '100% 50%'] : '0% 50%',
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Card content */}
      <div className="relative p-6 h-full flex flex-col">
        {/* Compare button */}
        <motion.button
          onClick={handleCompareClick}
          className={`absolute top-4 right-4 z-10 p-2 rounded-full ${
            selected
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
          } hover:scale-110 transition-all duration-200`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {selected ? (
            <MinusIcon className="h-5 w-5" />
          ) : (
            <PlusIcon className="h-5 w-5" />
          )}
        </motion.button>

        {/* Card image */}
        <motion.div
          className="relative h-56 mb-6 transform-gpu overflow-hidden rounded-xl bg-gradient-to-b from-gray-100 to-white dark:from-gray-700 dark:to-gray-800"
          animate={{
            rotateY: isHovered ? 10 : 0,
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-500/10" />
          <CardImage
            src={image}
            alt={`${name} credit card`}
            className="p-4"
          />
        </motion.div>

        {/* Card details */}
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              {name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{issuer}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-4 w-4 ${
                    i < rating
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                {rating.toFixed(1)}
              </span>
            </div>
            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300">
              {category}
            </span>
          </div>

          <div className="space-y-2">
            <div>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Annual Fee</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">
                {annualFee === 0 ? 'No Annual Fee' : formatCurrency(annualFee, region)}
              </p>
            </div>

            {signupBonus && (
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Welcome Bonus</p>
                <p className="text-gray-900 dark:text-white">{signupBonus}</p>
              </div>
            )}
          </div>

          <div className="pt-4">
            <Link
              href={`/cards/${id}`}
              className="block w-full text-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
} 