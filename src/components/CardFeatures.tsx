'use client';

import { motion } from 'framer-motion';
import { Card } from '@/data/cards';
import {
  GiftIcon,
  CreditCardIcon,
  BuildingLibraryIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  BanknotesIcon,
} from '@heroicons/react/24/outline';

interface CardFeaturesProps {
  card: Card;
}

export default function CardFeatures({ card }: CardFeaturesProps) {
  const features = [
    {
      title: 'Rewards Program',
      icon: GiftIcon,
      items: card.features.rewardsProgram || [],
    },
    {
      title: 'Welcome Benefits',
      icon: CreditCardIcon,
      items: card.features.welcomeBonus || [],
    },
    {
      title: 'Airport Lounge Access',
      icon: BuildingLibraryIcon,
      items: card.features.airportLounge || [],
    },
    {
      title: 'Insurance Coverage',
      icon: ShieldCheckIcon,
      items: card.features.insurance || [],
    },
    {
      title: 'Lifestyle Benefits',
      icon: UserGroupIcon,
      items: card.features.lifestyle || [],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-center mb-4">
            <feature.icon className="h-6 w-6 text-primary-600 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {feature.title}
            </h3>
          </div>
          <ul className="space-y-2">
            {feature.items.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + idx * 0.05 }}
                className="flex items-start text-gray-600 dark:text-gray-300"
              >
                <span className="mr-2 mt-1.5">•</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}

      {/* Fees and Charges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <div className="flex items-center mb-4">
          <BanknotesIcon className="h-6 w-6 text-primary-600 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Fees & Charges
          </h3>
        </div>
        <div className="space-y-2">
          <p className="text-gray-600 dark:text-gray-300">
            Annual Fee: ₹{card.features.fees?.annual.toLocaleString()}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Joining Fee: ₹{card.features.fees?.joiningFee.toLocaleString()}
          </p>
          {card.features.fees?.renewalFee && (
            <p className="text-gray-600 dark:text-gray-300">
              Renewal Fee: ₹{card.features.fees.renewalFee.toLocaleString()}
            </p>
          )}
          <div className="mt-4">
            <p className="text-gray-600 dark:text-gray-300">
              Interest Rates:
            </p>
            <ul className="mt-2 space-y-1">
              <li className="text-gray-600 dark:text-gray-300">
                • Purchase: {card.interestRates.purchase}% per month
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                • Cash Advance: {card.interestRates.cash}% per month
              </li>
              {card.interestRates.balanceTransfer && (
                <li className="text-gray-600 dark:text-gray-300">
                  • Balance Transfer: {card.interestRates.balanceTransfer}% per month
                </li>
              )}
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 