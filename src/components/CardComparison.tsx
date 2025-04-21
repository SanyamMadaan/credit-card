'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { StarIcon, XMarkIcon, PlusIcon } from '@heroicons/react/24/solid';
import CardItem from './CardItem';

interface Card {
  id: string;
  name: string;
  issuer: string;
  annualFee: number;
  signupBonus: string;
  image: string;
  rating: number;
  rewardsRate: string;
  benefits: string[];
  category: string;
  description: string;
  region: 'US' | 'IN';
}

interface CardComparisonProps {
  cards: Card[];
}

export default function CardComparison({ cards }: CardComparisonProps) {
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [isComparing, setIsComparing] = useState(false);

  const handleAddCard = (card: Card) => {
    if (selectedCards.length < 3 && !selectedCards.find(c => c.id === card.id)) {
      setSelectedCards([...selectedCards, card]);
    }
  };

  const handleRemoveCard = (cardId: string) => {
    setSelectedCards(selectedCards.filter(card => card.id !== cardId));
  };

  const toggleComparison = () => {
    setIsComparing(!isComparing);
  };

  const renderCard = (card: Card) => (
    <CardItem 
      {...card}
      signupBonus={card.signupBonus || 'No signup bonus available'}
      rewardsRate={card.rewardsRate || 'N/A'}
      benefits={card.benefits || []}
      category={card.category || 'Other'}
      description={card.description || `${card.name} credit card by ${card.issuer}`}
      region={card.region || 'US'}
    />
  );

  return (
    <div className="space-y-8">
      {/* Selected Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {selectedCards.map((card) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
          >
            <button
              onClick={() => handleRemoveCard(card.id)}
              className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
            >
              <XMarkIcon className="w-4 h-4" />
            </button>
            {renderCard(card)}
          </motion.div>
        ))}
        
        {selectedCards.length < 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[400px]"
          >
            <div className="text-center">
              <PlusIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Add a card to compare
              </p>
              <button
                onClick={toggleComparison}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Browse Cards
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Comparison Table */}
      {selectedCards.length > 1 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-700">
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                    Feature
                  </th>
                  {selectedCards.map((card) => (
                    <th key={card.id} className="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                      {card.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Annual Fee</td>
                  {selectedCards.map((card) => (
                    <td key={card.id} className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                      ${card.annualFee}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Signup Bonus</td>
                  {selectedCards.map((card) => (
                    <td key={card.id} className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                      {card.signupBonus}
                    </td>
                  ))}
                </tr>
                {selectedCards.some(card => card.rewardsRate) && (
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Rewards Rate</td>
                    {selectedCards.map((card) => (
                      <td key={card.id} className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                        {card.rewardsRate || 'N/A'}
                      </td>
                    ))}
                  </tr>
                )}
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">Rating</td>
                  {selectedCards.map((card) => (
                    <td key={card.id} className="px-6 py-4">
                      <div className="flex items-center">
                        <StarIcon className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm text-gray-900 dark:text-white">
                          {card.rating.toFixed(1)}
                        </span>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      )}

      {/* Available Cards Section */}
      {isComparing && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cards
            .filter(card => !selectedCards.find(c => c.id === card.id))
            .map((card) => (
              <motion.div
                key={card.id}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <button
                  onClick={() => handleAddCard(card)}
                  className="absolute top-2 right-2 p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
                >
                  <PlusIcon className="w-4 h-4" />
                </button>
                {renderCard(card)}
              </motion.div>
            ))}
        </motion.div>
      )}
    </div>
  );
} 