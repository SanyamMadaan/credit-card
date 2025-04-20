'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/solid';
import cardsData from '@/data/cards.json';
import { useState } from 'react';

interface ComparePageProps {
  searchParams: {
    card?: string;
  };
}

export default function ComparePage({ searchParams }: ComparePageProps) {
  const selectedCardId = searchParams.card;
  const selectedCard = selectedCardId
    ? cardsData.cards.find((c) => c.id === selectedCardId)
    : null;
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  if (selectedCardId && !selectedCard) {
    notFound();
  }

  const comparisonCards = selectedCard
    ? cardsData.cards.filter((c) => c.id !== selectedCard.id)
    : cardsData.cards;

  const handleImageError = (cardId: string) => {
    setImageErrors(prev => ({ ...prev, [cardId]: true }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
        >
          ← Back to Home
        </Link>

        <h1 className="text-3xl font-bold mb-8">Compare Credit Cards</h1>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-xl shadow-xl">
            <thead>
              <tr className="border-b">
                <th className="p-4 text-left">Feature</th>
                {selectedCard && (
                  <th className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="relative h-24 w-40 mb-2">
                        {!imageErrors[selectedCard.id] ? (
                          <Image
                            src={selectedCard.image}
                            alt={selectedCard.name}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            onError={() => handleImageError(selectedCard.id)}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
                            <span className="text-gray-500 text-sm">Image not available</span>
                          </div>
                        )}
                      </div>
                      <span className="font-semibold">{selectedCard.name}</span>
                    </div>
                  </th>
                )}
                {comparisonCards.map((card) => (
                  <th key={card.id} className="p-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="relative h-24 w-40 mb-2">
                        {!imageErrors[card.id] ? (
                          <Image
                            src={card.image}
                            alt={card.name}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 33vw"
                            onError={() => handleImageError(card.id)}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
                            <span className="text-gray-500 text-sm">Image not available</span>
                          </div>
                        )}
                      </div>
                      <span className="font-semibold">{card.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-semibold">Annual Fee</td>
                {selectedCard && (
                  <td className="p-4 text-center">${selectedCard.annualFee}</td>
                )}
                {comparisonCards.map((card) => (
                  <td key={card.id} className="p-4 text-center">
                    ${card.annualFee}
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">Signup Bonus</td>
                {selectedCard && (
                  <td className="p-4 text-center">{selectedCard.signupBonus}</td>
                )}
                {comparisonCards.map((card) => (
                  <td key={card.id} className="p-4 text-center">
                    {card.signupBonus}
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">Rewards Rate</td>
                {selectedCard && (
                  <td className="p-4 text-center">{selectedCard.rewardsRate}</td>
                )}
                {comparisonCards.map((card) => (
                  <td key={card.id} className="p-4 text-center">
                    {card.rewardsRate}
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="p-4 font-semibold">Rating</td>
                {selectedCard && (
                  <td className="p-4 text-center">
                    <div className="flex items-center justify-center">
                      <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
                      {selectedCard.rating.toFixed(1)}
                    </div>
                  </td>
                )}
                {comparisonCards.map((card) => (
                  <td key={card.id} className="p-4 text-center">
                    <div className="flex items-center justify-center">
                      <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
                      {card.rating.toFixed(1)}
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-semibold">Apply Now</td>
                {selectedCard && (
                  <td className="p-4 text-center">
                    <Link
                      href={selectedCard.applyUrl}
                      className="btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply
                    </Link>
                  </td>
                )}
                {comparisonCards.map((card) => (
                  <td key={card.id} className="p-4 text-center">
                    <Link
                      href={card.applyUrl}
                      className="btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Apply
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
} 