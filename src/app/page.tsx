'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
          Credit Card Compare
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Find the perfect credit card for your needs
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
        <Link href="/cards">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card p-8 text-center"
          >
            <h2 className="text-2xl font-semibold mb-2">Compare Cards</h2>
            <p className="text-gray-600 dark:text-gray-300">
              View and compare different credit cards
            </p>
          </motion.div>
        </Link>

        <Link href="/features">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="card p-8 text-center"
          >
            <h2 className="text-2xl font-semibold mb-2">Features</h2>
            <p className="text-gray-600 dark:text-gray-300">
              See our app features and benefits
            </p>
          </motion.div>
        </Link>
      </div>
    </main>
  );
}
