'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CardItem from '@/components/CardItem';
import { cards } from '@/data/cards';
import { MagnifyingGlassIcon, FunnelIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

export default function CardsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('rating');
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  const categories = ['all', ...Array.from(new Set(cards
    .map(card => card.category || 'Other')
    .filter(Boolean)))];

  const filteredCards = cards
    .filter(card => {
      const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.issuer.toLowerCase().includes(searchTerm.toLowerCase());
      const cardCategory = card.category || 'Other';
      const matchesCategory = selectedCategory === 'all' || cardCategory === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .map(card => ({
      ...card,
      category: card.category || 'Other'
    }))
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'annualFee':
          return a.annualFee - b.annualFee;
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <main className="min-h-screen relative">
      {/* Background Effects */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
            }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
          >
            Browse Credit Cards
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Find the perfect credit card for your needs
          </motion.p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="sticky top-4 z-10 mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFilterVisible(!isFilterVisible)}
            className="md:hidden w-full btn-primary mb-4 flex items-center justify-center gap-2"
          >
            <AdjustmentsHorizontalIcon className="h-5 w-5" />
            {isFilterVisible ? 'Hide Filters' : 'Show Filters'}
          </motion.button>

          <AnimatePresence>
            {isFilterVisible && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="relative backdrop-blur-sm bg-card/30 rounded-3xl p-8 border border-border/5 shadow-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <motion.div
                    variants={itemVariants}
                    className="relative"
                  >
                    <label htmlFor="search" className="block text-sm font-medium text-muted-foreground mb-2">
                      Search
                    </label>
                    <div className="relative">
                      <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="text"
                        id="search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search by name or issuer"
                        className="input pl-10"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="category" className="block text-sm font-medium text-muted-foreground mb-2">
                      Category
                    </label>
                    <motion.select
                      whileFocus={{ scale: 1.02 }}
                      id="category"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="input appearance-none bg-transparent"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category} className="bg-background">
                          {category.charAt(0).toUpperCase() + category.slice(1)}
                        </option>
                      ))}
                    </motion.select>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="sort" className="block text-sm font-medium text-muted-foreground mb-2">
                      Sort By
                    </label>
                    <motion.select
                      whileFocus={{ scale: 1.02 }}
                      id="sort"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="input appearance-none bg-transparent"
                    >
                      <option value="rating" className="bg-background">Rating</option>
                      <option value="annualFee" className="bg-background">Annual Fee</option>
                      <option value="name" className="bg-background">Name</option>
                    </motion.select>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCards.map((card) => (
              <motion.div
                key={card.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                }}
              >
                <CardItem 
                  {...card} 
                  signupBonus={card.signupBonus || 'No signup bonus available'}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCards.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <FunnelIcon className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-xl text-muted-foreground">
              No cards match your current filters
            </p>
          </motion.div>
        )}
      </div>
    </main>
  );
} 