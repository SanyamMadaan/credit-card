'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import IndianCard from '@/components/IndianCard';
import indianCardsData from '@/data/indianCards.json';

export default function IndianCardsPage() {
  const [cards] = useState(indianCardsData.cards);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('rating');

  const categories = ['all', ...Array.from(new Set(cards.map(card => card.category)))];
  
  const filteredCards = cards
    .filter(card => selectedCategory === 'all' || card.category === selectedCategory)
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'annualFee':
          return a.annualFee - b.annualFee;
        case 'incomeRequirement':
          return a.incomeRequirement - b.incomeRequirement;
        default:
          return 0;
      }
    });

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Indian Credit Cards
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Compare and find the best credit cards for your needs
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 mb-8">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Sort By
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <option value="rating">Rating</option>
              <option value="annualFee">Annual Fee</option>
              <option value="incomeRequirement">Income Requirement</option>
            </select>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCards.map((card) => (
            <IndianCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </main>
  );
} 