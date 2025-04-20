'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CreditCardIcon, ChartBarIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center z-10 px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Smart Credit Card Comparison
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Find the perfect credit card that matches your lifestyle and spending habits
          </p>
          <Link href="/cards">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-2 mx-auto"
            >
              Compare Cards Now
              <ArrowRightIcon className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
            >
              <CreditCardIcon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Comprehensive Comparison</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Compare hundreds of credit cards across multiple categories and find the best match for you
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
            >
              <ChartBarIcon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Recommendations</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get personalized card recommendations based on your spending patterns and preferences
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg"
            >
              <SparklesIcon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Exclusive Benefits</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Access special offers, rewards, and benefits from our partner credit card issuers
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Card?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who have found their ideal credit card match
          </p>
          <Link href="/cards">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold"
            >
              Get Started Now
            </motion.button>
          </Link>
        </div>
      </section>
    </main>
  );
}
