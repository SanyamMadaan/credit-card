'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon, ArrowRightIcon, CreditCardIcon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

interface CardItemProps {
  id: string;
  name: string;
  issuer: string;
  annualFee: number;
  signupBonus: string;
  image: string;
  rating: number;
  rewardsRate: string;
  benefits: string[];
  category: string;
  description: string;
  region: 'US' | 'IN';
}

export default function CardItem({
  id,
  name,
  issuer,
  annualFee,
  signupBonus,
  image,
  rating,
  rewardsRate,
  benefits = [],
  category,
  description,
  region,
}: CardItemProps) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [imageSrc, setImageSrc] = useState(image);

  useEffect(() => {
    // Try to load image with a timestamp to prevent caching issues
    setImageSrc(`${image}?t=${Date.now()}`);
  }, [image]);

  const handleApplyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Open in new tab
    window.open(`/cards/${id}/apply`, '_blank');
  };

  return (
    <Link href={`/cards/${id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5, scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.3 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="group h-[500px] card p-6 flex flex-col cursor-pointer"
      >
        {/* Hover gradient effect */}
        <motion.div 
          className="hover-gradient rounded-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Card image */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative h-48 mb-6"
        >
          {!imageError ? (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={imageSrc}
                alt={name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                quality={90}
                className="object-contain transition-transform duration-500"
                onError={() => setImageError(true)}
                loading="eager"
              />
            </motion.div>
          ) : (
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-full h-full flex items-center justify-center bg-secondary/50 rounded-xl"
            >
              <CreditCardIcon className="w-12 h-12 text-muted-foreground" />
            </motion.div>
          )}
        </motion.div>

        {/* Card details */}
        <div className="flex-1 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <h3 className="text-xl font-bold text-gradient mb-1">{name}</h3>
            <p className="text-sm text-muted-foreground">{issuer}</p>
          </motion.div>

          {/* Rating and category */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-between mb-4"
          >
            <div className="flex items-center space-x-1">
              <StarIcon className="h-5 w-5 text-yellow-500" />
              <span className="font-medium">{rating.toFixed(1)}</span>
            </div>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium"
            >
              {category}
            </motion.span>
          </motion.div>

          {/* Annual fee */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-4"
          >
            <p className="text-sm text-muted-foreground">Annual Fee</p>
            <p className="font-semibold">
              {annualFee === 0 ? 'No Annual Fee' : `$${annualFee}`}
            </p>
          </motion.div>

          {/* Rewards */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex-1"
          >
            <p className="text-sm text-muted-foreground mb-2">Key Benefits</p>
            <ul className="space-y-2">
              {benefits.slice(0, 2).map((benefit: string, index: number) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-sm flex items-start"
                >
                  <span className="mr-2">•</span>
                  <span>{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Apply button */}
          <motion.button
            onClick={handleApplyClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full btn-primary mt-4 group relative overflow-hidden"
          >
            <motion.span
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0.8 }}
              className="relative z-10 flex items-center justify-center gap-2"
            >
              Apply Now
              <motion.span
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <ArrowRightIcon className="h-5 w-5" />
              </motion.span>
            </motion.span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20"
              initial={false}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </motion.div>
    </Link>
  );
} 