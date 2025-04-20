'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import CompareCards from '@/components/CompareCards';
import LoadingSpinner from '@/components/LoadingSpinner';

function CompareContent() {
  const searchParams = useSearchParams();
  const cardIds = searchParams.get('cards')?.split(',') || [];

  return <CompareCards cardIds={cardIds} />;
}

export default function ComparePage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Compare Credit Cards
        </h1>
        <Suspense fallback={
          <div className="flex justify-center items-center min-h-[400px]">
            <LoadingSpinner />
          </div>
        }>
          <CompareContent />
        </Suspense>
      </div>
    </main>
  );
} 