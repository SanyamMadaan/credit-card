'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

interface CardFiltersProps {
  onFilterChange: (filters: FilterState) => void;
  categories: string[];
  issuers: string[];
}

interface FilterState {
  category: string;
  issuer: string;
  minIncome: number;
  maxAnnualFee: number;
  rewardsType: string[];
  features: string[];
}

export default function CardFilters({ onFilterChange, categories, issuers }: CardFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    category: '',
    issuer: '',
    minIncome: 0,
    maxAnnualFee: 100000,
    rewardsType: [],
    features: [],
  });

  const rewardsTypes = [
    'Cashback',
    'Travel Points',
    'Shopping Rewards',
    'Airline Miles',
    'Hotel Points',
  ];

  const featuresList = [
    'Airport Lounge Access',
    'Travel Insurance',
    'Purchase Protection',
    'Concierge Service',
    'Golf Privileges',
    'Movie Tickets',
    'Dining Privileges',
  ];

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const toggleFeature = (feature: string) => {
    const newFeatures = filters.features.includes(feature)
      ? filters.features.filter(f => f !== feature)
      : [...filters.features, feature];
    handleFilterChange('features', newFeatures);
  };

  const toggleRewardType = (type: string) => {
    const newTypes = filters.rewardsType.includes(type)
      ? filters.rewardsType.filter(t => t !== type)
      : [...filters.rewardsType, type];
    handleFilterChange('rewardsType', newTypes);
  };

  return (
    <div className="mb-8">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
      >
        <AdjustmentsHorizontalIcon className="h-5 w-5" />
        <span>Advanced Filters</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category
                </label>
                <select
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Issuer Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Card Issuer
                </label>
                <select
                  value={filters.issuer}
                  onChange={(e) => handleFilterChange('issuer', e.target.value)}
                  className="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="">All Issuers</option>
                  {issuers.map((issuer) => (
                    <option key={issuer} value={issuer}>
                      {issuer}
                    </option>
                  ))}
                </select>
              </div>

              {/* Income Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Minimum Income (₹)
                </label>
                <input
                  type="range"
                  min="0"
                  max="5000000"
                  step="100000"
                  value={filters.minIncome}
                  onChange={(e) => handleFilterChange('minIncome', Number(e.target.value))}
                  className="w-full"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  ₹{filters.minIncome.toLocaleString()}
                </p>
              </div>

              {/* Annual Fee Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Maximum Annual Fee (₹)
                </label>
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="1000"
                  value={filters.maxAnnualFee}
                  onChange={(e) => handleFilterChange('maxAnnualFee', Number(e.target.value))}
                  className="w-full"
                />
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  ₹{filters.maxAnnualFee.toLocaleString()}
                </p>
              </div>

              {/* Rewards Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Rewards Type
                </label>
                <div className="space-y-2">
                  {rewardsTypes.map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.rewardsType.includes(type)}
                        onChange={() => toggleRewardType(type)}
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Card Features
                </label>
                <div className="space-y-2">
                  {featuresList.map((feature) => (
                    <label key={feature} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.features.includes(feature)}
                        onChange={() => toggleFeature(feature)}
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 