'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cards } from '@/data/cards';
import Image from 'next/image';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface ApplyPageProps {
  params: {
    id: string;
  };
}

export default function ApplyPage({ params }: ApplyPageProps) {
  const [card, setCard] = useState(cards.find(c => c.id === params.id));
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    income: '',
    employment: 'employed',
  });

  if (!card) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Card Not Found</h1>
          <Link href="/cards" className="text-purple-400 hover:text-purple-300">
            Return to Cards
          </Link>
        </div>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the application to your backend
    alert('Application submitted successfully!');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/cards" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Back to Cards
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                Apply for {card.name}
              </h1>
              <p className="text-gray-400 mb-4">
                Complete the form below to apply for this card
              </p>
              <div className="bg-white/5 rounded-xl p-4 mb-4">
                <p className="text-sm text-gray-400">Annual Fee</p>
                <p className="text-xl font-semibold text-white">
                  {card.annualFee === 0 ? 'No Annual Fee' : `$${card.annualFee}`}
                </p>
              </div>
              {card.signupBonus && (
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-sm text-gray-400">Sign-up Bonus</p>
                  <p className="text-white">{card.signupBonus}</p>
                </div>
              )}
            </div>
            <div className="relative h-48 md:h-auto">
              <Image
                src={card.image}
                alt={card.name}
                fill
                className="object-contain"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="input w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="input w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="input w-full"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Annual Income
                </label>
                <input
                  type="number"
                  name="income"
                  required
                  value={formData.income}
                  onChange={handleInputChange}
                  className="input w-full"
                  placeholder="$"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Employment Status
                </label>
                <select
                  name="employment"
                  value={formData.employment}
                  onChange={handleInputChange}
                  className="input w-full appearance-none bg-transparent"
                >
                  <option value="employed" className="bg-background">Employed</option>
                  <option value="self-employed" className="bg-background">Self Employed</option>
                  <option value="student" className="bg-background">Student</option>
                  <option value="retired" className="bg-background">Retired</option>
                </select>
              </motion.div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary mt-8"
            >
              Submit Application
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
} 