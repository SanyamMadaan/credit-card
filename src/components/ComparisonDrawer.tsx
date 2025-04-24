import { motion, AnimatePresence } from 'framer-motion';
import { useComparison } from '@/context/ComparisonContext';
import Image from 'next/image';
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/solid';

export default function ComparisonDrawer() {
  const { selectedCards, removeFromComparison, clearComparison } = useComparison();

  if (selectedCards.length === 0) return null;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-2xl rounded-t-2xl p-4 z-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Compare Cards ({selectedCards.length}/3)
          </h3>
          <div className="flex items-center gap-4">
            <button
              onClick={clearComparison}
              className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              Clear All
            </button>
            {selectedCards.length > 1 && (
              <Link
                href="/compare"
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Compare Now
              </Link>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <AnimatePresence>
            {selectedCards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative bg-gray-50 dark:bg-gray-700 rounded-lg p-3"
              >
                <button
                  onClick={() => removeFromComparison(card.id)}
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <XMarkIcon className="h-5 w-5" />
                </button>
                <div className="flex items-center space-x-3">
                  <div className="relative w-16 h-10">
                    <Image
                      src={card.image}
                      alt={card.name}
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{card.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{card.issuer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
} 