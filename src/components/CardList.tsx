import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CardItem from './CardItem';
import { Card, getCardsByRegion } from '../data/cards';

interface CardListProps {
  region: 'US' | 'IN';
}

const CardList: React.FC<CardListProps> = ({ region }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const cards = getCardsByRegion(region);
  const categories = ['All', ...Array.from(new Set(cards.map(card => card.category)))];

  const filteredCards = selectedCategory === 'All'
    ? cards
    : cards.filter(card => card.category === selectedCategory);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all ${
              selectedCategory === category
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        layout
      >
        <AnimatePresence>
          {filteredCards.map((card) => (
            <motion.div
              key={card.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <CardItem 
                {...card}
                signupBonus={card.signupBonus || 'No signup bonus'}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default CardList; 