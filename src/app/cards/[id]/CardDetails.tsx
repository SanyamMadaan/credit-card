'use client';

import Image from 'next/image';
import Link from 'next/link';
import { StarIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { Card } from '@/data/cards';

interface Props {
  card: Card;
}

export default function CardDetails({ card }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/cards"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-6 group"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Cards
          </Link>
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl overflow-hidden mb-8"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-90" />
          
          {/* Card Image */}
          <div className="relative py-20 px-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.5,
                delay: 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="max-w-md mx-auto"
            >
              <div className="relative w-full aspect-[1.6] transform hover:scale-105 transition-transform duration-300">
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col md:flex-row md:items-center justify-between mb-8"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {card.name}
              </h1>
              <p className="text-xl text-gray-400">{card.issuer}</p>
            </div>
            <div className="flex items-center mt-4 md:mt-0">
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <StarIcon
                    key={index}
                    className={`w-6 h-6 ${
                      index < card.rating
                        ? 'text-yellow-400'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-2xl font-medium text-white">
                {card.rating.toFixed(1)}
              </span>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-semibold text-white mb-6">Benefits</h2>
              <ul className="space-y-4">
                {card.benefits?.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="flex items-start text-gray-300"
                  >
                    <span className="text-blue-400 mr-3">•</span>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Details Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-800/50 rounded-2xl p-6 backdrop-blur-sm"
            >
              <h2 className="text-2xl font-semibold text-white mb-6">Card Details</h2>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm text-gray-400">Annual Fee</dt>
                  <dd className="text-xl font-medium text-white">
                    ₹{card.annualFee.toLocaleString()}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-400">Category</dt>
                  <dd className="text-xl font-medium text-white">
                    {card.category}
                  </dd>
                </div>
                {card.signupBonus && (
                  <div>
                    <dt className="text-sm text-gray-400">Welcome Bonus</dt>
                    <dd className="text-xl font-medium text-white">
                      {card.signupBonus}
                    </dd>
                  </div>
                )}
                <div>
                  <dt className="text-sm text-gray-400">Rewards Rate</dt>
                  <dd className="text-xl font-medium text-white">
                    {card.rewardsRate}
                  </dd>
                </div>
              </dl>
            </motion.div>
          </div>

          {/* Apply Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <a
              href={card.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 group"
            >
              Apply Now
              <ArrowTopRightOnSquareIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 