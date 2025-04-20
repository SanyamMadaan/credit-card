'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import cardsData from '@/data/cards.json';

export default function CardsPage() {
  const [cards] = useState(cardsData.cards);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
            Compare Credit Cards
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Find the perfect card for your lifestyle
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <div className="relative h-48">
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{card.name}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{card.rewardsRate}</p>
                
                <div className="space-y-2 mb-6">
                  <p className="text-sm">
                    <span className="font-medium">Annual Fee:</span> ${card.annualFee}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Signup Bonus:</span> {card.signupBonus}
                  </p>
                </div>
                
                <Link
                  href={card.applyUrl}
                  className="btn-primary block w-full text-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Apply Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
} 