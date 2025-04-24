'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, getAllCards } from '@/data/cards';
import { useCompare } from '@/hooks/useCompare';
import { StarIcon } from '@heroicons/react/24/solid';
import { XMarkIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

export default function ComparePage() {
  const { compareList, removeFromCompare, clearCompare } = useCompare();
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const allCards = getAllCards();
    const selectedCards = allCards.filter(card => compareList.includes(card.id));
    setCards(selectedCards);
  }, [compareList]);

  if (cards.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-bold text-gray-200 mb-4">No Cards to Compare</h2>
        <p className="text-lg text-gray-400 mb-8">
          Add some cards to compare their features and benefits.
        </p>
        <Link
          href="/cards"
          className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Cards
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link
          href="/cards"
          className="inline-flex items-center text-gray-400 hover:text-gray-200 transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Cards
        </Link>
      </div>

      {/* Comparison Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-200">
          Compare Cards ({cards.length}/3)
        </h1>
        <button
          onClick={clearCompare}
          className="text-gray-400 hover:text-gray-200 transition-colors"
        >
          Clear All
        </button>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gray-800 rounded-xl p-6 relative"
          >
            <button
              onClick={() => removeFromCompare(card.id)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200 transition-colors"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <div className="relative h-48 mb-6">
              <Image
                src={card.image}
                alt={card.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            <h2 className="text-xl font-semibold text-gray-200 mb-4">{card.name}</h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400">Annual Fee</p>
                <p className="text-lg font-medium text-gray-200">₹{card.annualFee.toLocaleString()}</p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Welcome Bonus</p>
                <p className="text-lg font-medium text-gray-200">{card.signupBonus}</p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Rewards Rate</p>
                <p className="text-lg font-medium text-gray-200">{card.rewardsRate}</p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Category</p>
                <p className="text-lg font-medium text-gray-200">{card.category}</p>
              </div>

              <div>
                <p className="text-sm text-gray-400">Rating</p>
                <div className="flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <StarIcon
                        key={index}
                        className={`w-5 h-5 ${
                          index < card.rating
                            ? 'text-yellow-400'
                            : 'text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-200">{card.rating.toFixed(1)}</span>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-400">Key Benefits</p>
                <ul className="mt-2 space-y-2">
                  {(card.benefits || []).slice(0, 3).map((benefit, index) => (
                    <li key={index} className="flex items-start text-gray-200">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 