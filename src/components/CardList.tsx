'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CardItem from './CardItem';
import { Card, getAllCards } from '@/data/cards';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface CardListProps {
  region: 'US' | 'IN';
}

export default function CardList({ region }: CardListProps) {
  const [cards, setCards] = useState<Card[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Rating');
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.filter-dropdown')) {
        setIsCategoryOpen(false);
        setIsSortOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    const allCards = getAllCards();
    setCards(allCards);
  }, []);

  const categories = ['All', ...Array.from(new Set(cards.map(card => card.category)))];
  const sortOptions = ['Rating', 'Annual Fee', 'Name'];

  const filteredCards = cards
    .filter(card => {
      const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.issuer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || card.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'Rating':
          return b.rating - a.rating;
        case 'Annual Fee':
          return a.annualFee - b.annualFee;
        case 'Name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative z-50 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Search */}
        <div className="relative">
          <label className="block text-sm font-medium text-gray-300 mb-2">Search</label>
          <input
            type="text"
            placeholder="Search by name or issuer"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none"
          />
        </div>

        {/* Category Filter */}
        <div className="relative filter-dropdown">
          <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsCategoryOpen(!isCategoryOpen);
              setIsSortOpen(false);
            }}
            className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg flex items-center justify-between focus:ring-2 focus:ring-primary-500 focus:outline-none"
          >
            {selectedCategory}
            <ChevronDownIcon className={`w-5 h-5 transition-transform ${isCategoryOpen ? 'transform rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {isCategoryOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 right-0 mt-2 py-2 bg-gray-800 rounded-lg shadow-xl overflow-hidden"
                style={{ zIndex: 1000 }}
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsCategoryOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left text-white hover:bg-gray-700 focus:outline-none"
                  >
                    {category}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Sort Filter */}
        <div className="relative filter-dropdown">
          <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsSortOpen(!isSortOpen);
              setIsCategoryOpen(false);
            }}
            className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg flex items-center justify-between focus:ring-2 focus:ring-primary-500 focus:outline-none"
          >
            {sortBy}
            <ChevronDownIcon className={`w-5 h-5 transition-transform ${isSortOpen ? 'transform rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {isSortOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 right-0 mt-2 py-2 bg-gray-800 rounded-lg shadow-xl overflow-hidden"
                style={{ zIndex: 1000 }}
              >
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSortBy(option);
                      setIsSortOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left text-white hover:bg-gray-700 focus:outline-none"
                  >
                    {option}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="relative z-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredCards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <CardItem {...card} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
} 