'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import CardComparison from '@/components/CardComparison';
import { cards } from '@/data/cards';

export default function ComparePage() {
  const searchParams = useSearchParams();
  const [selectedCardIds, setSelectedCardIds] = useState<string[]>([]);

  useEffect(() => {
    const cardId = searchParams.get('card');
    if (cardId) {
      setSelectedCardIds([cardId]);
    }
  }, [searchParams]);

  const filteredCards = cards.filter(card => !selectedCardIds.includes(card.id));

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Compare Credit Cards
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Select up to 3 cards to compare their features and benefits
          </p>
        </div>

        <CardComparison cards={filteredCards} />
      </div>
    </main>
  );
} 