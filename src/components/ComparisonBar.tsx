'use client';

import { useComparison } from '@/context/ComparisonContext';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/solid';

const formatIndianCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export default function ComparisonBar() {
  const { selectedCards, removeFromComparison, clearComparison } = useComparison();

  if (selectedCards.length === 0) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg border-t border-gray-200 dark:border-gray-700 p-4 z-50"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Compare Cards ({selectedCards.length}/3)
          </h3>
          <button
            onClick={clearComparison}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            Clear All
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AnimatePresence>
            {selectedCards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative bg-gray-50 dark:bg-gray-700 rounded-lg p-4 flex items-center space-x-4"
              >
                <button
                  onClick={() => removeFromComparison(card.id)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
                <div className="relative h-16 w-24 flex-shrink-0">
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {card.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Annual Fee: {formatIndianCurrency(card.annualFee)}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        {selectedCards.length >= 2 && (
          <div className="mt-4 flex justify-center">
            <Link
              href="/compare"
              className="bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
            >
              Compare Now
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
} 