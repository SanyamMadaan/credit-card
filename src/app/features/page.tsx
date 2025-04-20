'use client';

import RotatingPhone from '@/components/RotatingPhone';
import { phoneScreenshots } from '@/data/phoneScreenshots';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Experience the Future of Credit Card Management
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our app brings all your credit cards together in one place, making it easier than ever to manage your finances.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <RotatingPhone images={phoneScreenshots.map(screen => screen.image)} />
          </div>
          
          <div className="space-y-8">
            {phoneScreenshots.map((screen) => (
              <div key={screen.id} className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-2xl font-semibold text-white mb-2">{screen.title}</h3>
                <p className="text-gray-300">{screen.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 