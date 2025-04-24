'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { Card } from '@/data/cards';

interface ComparisonContextType {
  selectedCards: Card[];
  addToComparison: (card: Card) => void;
  removeFromComparison: (cardId: string) => void;
  clearComparison: () => void;
  isCardSelected: (cardId: string) => boolean;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export function ComparisonProvider({ children }: { children: ReactNode }) {
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);

  const addToComparison = (card: Card) => {
    if (selectedCards.length < 3 && !selectedCards.find(c => c.id === card.id)) {
      setSelectedCards([...selectedCards, card]);
    }
  };

  const removeFromComparison = (cardId: string) => {
    setSelectedCards(selectedCards.filter(card => card.id !== cardId));
  };

  const clearComparison = () => {
    setSelectedCards([]);
  };

  const isCardSelected = (cardId: string) => {
    return selectedCards.some(card => card.id === cardId);
  };

  return (
    <ComparisonContext.Provider
      value={{
        selectedCards,
        addToComparison,
        removeFromComparison,
        clearComparison,
        isCardSelected,
      }}
    >
      {children}
    </ComparisonContext.Provider>
  );
}

export function useComparison() {
  const context = useContext(ComparisonContext);
  if (context === undefined) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
} 