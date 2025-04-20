'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon, ArrowRightIcon, CheckIcon } from '@heroicons/react/24/solid';
import { cards } from '@/data/cards';

interface CardDetailPageProps {
  params: {
    id: string;
  };
}

export default function CardDetailPage({ params }: CardDetailPageProps) {
  const card = cards.find(c => c.id === params.id);

  if (!card) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/cards"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-8"
        >
          <ArrowRightIcon className="w-5 h-5 rotate-180 mr-2" />
          Back to Cards
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Card Image */}
            <div className="relative h-64 lg:h-full">
              <Image
                src={card.image}
                alt={card.name}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Card Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {card.name}
                </h1>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                    {card.issuer}
                  </span>
                  <div className="flex items-center">
                    <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {card.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300">
                {card.description}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Annual Fee</p>
                  <p className="text-xl font-semibold text-gray-900 dark:text-white">
                    ${card.annualFee}
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Signup Bonus</p>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {card.signupBonus}
                  </p>
                </div>
              </div>

              {card.rewardsRate && (
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Rewards Rate</p>
                  <p className="text-gray-900 dark:text-white">{card.rewardsRate}</p>
                </div>
              )}

              {card.benefits && card.benefits.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    Key Benefits
                  </h2>
                  <ul className="space-y-3">
                    {card.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckIcon className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex space-x-4 pt-4">
                <Link
                  href={`/compare?card=${card.id}`}
                  className="flex-1"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium"
                  >
                    Compare with Other Cards
                  </motion.button>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-lg font-medium"
                >
                  Apply Now
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 