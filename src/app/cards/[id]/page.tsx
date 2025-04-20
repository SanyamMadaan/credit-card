'use client';

import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/24/solid';
import cardsData from '@/data/cards.json';
import { useState } from 'react';

interface CardDetailsPageProps {
  params: {
    id: string;
  };
}

export default function CardDetailsPage({ params }: CardDetailsPageProps) {
  const card = cardsData.cards.find((c) => c.id === params.id);
  const [imageError, setImageError] = useState(false);
  
  if (!card) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <Link
          href="/"
          className="text-blue-600 hover:text-blue-800 mb-4 inline-block"
        >
          ← Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-64">
              {!imageError ? (
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
                  <span className="text-gray-500">Image not available</span>
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold">{card.name}</h1>
                <div className="flex items-center space-x-1">
                  <StarIcon className="h-5 w-5 text-yellow-400" />
                  <span className="text-gray-700">{card.rating.toFixed(1)}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{card.rewardsRate}</p>

              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-semibold mb-2">Annual Fee</h3>
                  <p className="text-gray-600">${card.annualFee}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Signup Bonus</h3>
                  <p className="text-gray-600">{card.signupBonus}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Key Benefits</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {card.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href={card.applyUrl}
                className="btn-primary inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 