'use client';

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'compareList';
const MAX_COMPARE = 3;

export function useCompare() {
  const [compareList, setCompareList] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setCompareList(JSON.parse(stored));
    }
  }, []);

  const addToCompare = (cardId: string) => {
    if (compareList.length >= MAX_COMPARE) {
      return false;
    }
    const newList = [...compareList, cardId];
    setCompareList(newList);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
    return true;
  };

  const removeFromCompare = (cardId: string) => {
    const newList = compareList.filter(id => id !== cardId);
    setCompareList(newList);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
  };

  const clearCompare = () => {
    setCompareList([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  const isInCompare = (cardId: string) => {
    return compareList.includes(cardId);
  };

  return {
    compareList,
    addToCompare,
    removeFromCompare,
    clearCompare,
    isInCompare,
    isFull: compareList.length >= MAX_COMPARE
  };
} 