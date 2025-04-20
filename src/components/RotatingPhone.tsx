'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface RotatingPhoneProps {
  images: string[];
}

const RotatingPhone = ({ images }: RotatingPhoneProps) => {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center">
      {/* Phone Frame */}
      <div className="relative w-[280px] h-[580px] rounded-[50px] border-[14px] border-gray-800 bg-gray-900 shadow-2xl overflow-hidden">
        {/* Phone Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150px] h-[30px] bg-gray-800 rounded-b-2xl z-10" />
        
        {/* Screen Content */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{
              rotateY: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="absolute inset-0"
                style={{
                  rotateY: `${(360 / images.length) * index}deg`,
                  transformOrigin: "center center",
                  backfaceVisibility: "hidden",
                }}
              >
                <Image
                  src={image}
                  alt={`Phone screen ${index + 1}`}
                  fill
                  className="object-cover"
                  priority
                  quality={100}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RotatingPhone; 