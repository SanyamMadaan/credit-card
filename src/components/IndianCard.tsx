'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface IndianCardProps {
  id: string;
  name: string;
  issuer: string;
  category: string;
  annualFee: number;
  joiningFee: number;
  signupBonus: string;
  rewardsRate: string;
  benefits: string[];
  image: string;
  rating: number;
  applyUrl: string;
  incomeRequirement: number;
  creditScore: number;
}

export default function IndianCard({
  name,
  issuer,
  category,
  annualFee,
  joiningFee,
  signupBonus,
  rewardsRate,
  benefits,
  image,
  rating,
  applyUrl,
  incomeRequirement,
  creditScore,
}: IndianCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 font-excalidraw"
    >
      <div className="relative h-48 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
        <div className="text-white text-center p-4">
          <h3 className="text-xl font-bold mb-2">{issuer}</h3>
          <p className="text-sm opacity-90">{name}</p>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h3>
            <p className="text-gray-600 dark:text-gray-400">{issuer}</p>
          </div>
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {category}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Annual Fee</p>
            <p className="font-medium text-gray-900 dark:text-white">₹{annualFee.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Joining Fee</p>
            <p className="font-medium text-gray-900 dark:text-white">₹{joiningFee.toLocaleString()}</p>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">Signup Bonus</p>
          <p className="font-medium text-gray-900 dark:text-white">{signupBonus}</p>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">Rewards Rate</p>
          <p className="font-medium text-gray-900 dark:text-white">{rewardsRate}</p>
        </div>

        <div className="flex items-center mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${
                  i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
            {rating.toFixed(1)}
          </span>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium text-gray-900 dark:text-white">Key Benefits</h4>
          <ul className="space-y-1">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-600 dark:text-gray-400">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <Link
            href={applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 