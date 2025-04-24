import { getCloudinaryUrl } from '@/utils/cloudinary';

export interface Card {
  id: string;
  name: string;
  issuer: string;
  category: string;
  annualFee: number;
  rating: number;
  image: string;
  signupBonus?: string;
  minIncome?: number;
  rewardsProgram?: string;
  benefits?: string[];
  region: 'US' | 'IN';
  rewardsRate: string;
  description: string;
  applyLink: string;
  features: {
    rewardsProgram?: string[];
    welcomeBonus?: string[];
    airportLounge?: string[];
    insurance?: string[];
    lifestyle?: string[];
    fees?: {
      annual: number;
      joiningFee: number;
      renewalFee?: number;
    };
  };
  eligibility: {
    minIncome: number;
    minAge: number;
    maxAge: number;
    employmentType: string[];
  };
  interestRates: {
    purchase: number;
    cash: number;
    balanceTransfer?: number;
  };
}

export const cards: Card[] = [
  {
    id: 'hdfc-regalia',
    name: 'HDFC Bank Regalia Credit Card',
    issuer: 'HDFC Bank',
    category: 'Travel',
    annualFee: 2500,
    rating: 4.6,
    image: 'https://res.cloudinary.com/dv3vxqkwd/image/upload/v1745515638/cards/rcomdkffzo0nxgeqb1gi.png',
    signupBonus: '10,000 reward points',
    applyLink: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards/regalia-gold-credit-card',
    minIncome: 1200000,
    rewardsProgram: '4x-8x reward points',
    benefits: [
      'Complimentary airport lounge access',
      'Milestone rewards',
      'Travel concierge'
    ],
    region: 'IN',
    rewardsRate: '4x-8x reward points',
    description: 'Premium travel credit card with comprehensive benefits.',
    features: {
      rewardsProgram: [
        '8X Reward Points on all Travel spends',
        '4X Reward Points on all other retail spends',
        'Up to 2% fuel surcharge waiver'
      ],
      welcomeBonus: ['10,000 Reward Points on first spend'],
      airportLounge: [
        '12 complimentary visits per year to domestic airport lounges',
        '6 complimentary visits per year to international airport lounges'
      ],
      insurance: [
        'Travel Insurance cover up to ₹1 Crore',
        'Lost Card Liability',
        'Purchase Protection'
      ],
      lifestyle: [
        'BookMyShow buy 1 get 1 offer',
        'Dining concierge',
        'Golf privileges at select courses'
      ],
      fees: {
        annual: 2500,
        joiningFee: 2500
      }
    },
    eligibility: {
      minIncome: 1200000,
      minAge: 21,
      maxAge: 60,
      employmentType: ['Salaried', 'Self-Employed']
    },
    interestRates: {
      purchase: 3.49,
      cash: 3.49,
      balanceTransfer: 3.49
    }
  },
  {
    id: 'sbi-prime',
    name: 'SBI Card PRIME',
    issuer: 'SBI',
    category: 'Lifestyle',
    annualFee: 2999,
    rating: 4.5,
    image: 'https://res.cloudinary.com/dv3vxqkwd/image/upload/v1745515572/cards/idblobo85bbxgruusz33.png',
    signupBonus: '5,000 reward points on card activation',
    applyLink: 'https://www.sbicard.com/en/personal/credit-cards/rewards/sbi-card-prime.page',
    minIncome: 600000,
    rewardsProgram: '2x-10x reward points',
    benefits: [
      'Movie ticket discounts',
      'Dining privileges',
      'Fuel surcharge waiver'
    ],
    region: 'IN',
    rewardsRate: '2x-10x reward points',
    description: 'Premium lifestyle credit card with dining and entertainment benefits.',
    features: {
      rewardsProgram: [
        '10X Reward Points on Dining, Movies, Grocery & Departmental stores',
        'Welcome Bonus of 5000 Reward Points',
        'Buy 1 Get 1 movie ticket on BookMyShow'
      ],
      welcomeBonus: ['5000 Reward Points on payment of membership fee'],
      airportLounge: ['8 complimentary visits per year to domestic airport lounges'],
      insurance: ['Air accident cover of ₹50 Lakhs'],
      lifestyle: [
        'Golf privileges at select courses',
        'Dining discounts at partner restaurants',
        'Complimentary movie tickets'
      ],
      fees: {
        annual: 2999,
        joiningFee: 2999,
        renewalFee: 2999
      }
    },
    eligibility: {
      minIncome: 600000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-Employed']
    },
    interestRates: {
      purchase: 3.35,
      cash: 3.35
    }
  },
  {
    id: 'axis-magnus',
    name: 'Axis Bank Magnus Credit Card',
    issuer: 'Axis Bank',
    category: 'Premium',
    annualFee: 12500,
    rating: 4.7,
    image: 'https://res.cloudinary.com/dv3vxqkwd/image/upload/v1745515663/cards/ylmk6rjgmw7gn84llwo9.png',
    signupBonus: '12,500 Edge Reward Points',
    applyLink: 'https://www.axisbank.com/retail/cards/credit-card/axis-bank-magnus-card',
    minIncome: 1800000,
    rewardsProgram: '5x-12x reward points',
    benefits: [
      'Complimentary airport lounge access',
      'Golf privileges',
      'Premium concierge services'
    ],
    region: 'IN',
    rewardsRate: '5x-12x reward points',
    description: 'Premium travel and lifestyle credit card with exclusive benefits.',
    features: {
      rewardsProgram: [
        '12X EDGE REWARD POINTS on International Spends',
        '8X EDGE REWARD POINTS on Dining, Travel',
        '2X EDGE REWARD POINTS on all other spends'
      ],
      welcomeBonus: ['12,500 EDGE REWARD POINTS'],
      airportLounge: [
        'Unlimited International Lounge Access',
        '16 Domestic Lounge Access per year'
      ],
      insurance: [
        'Travel Insurance up to ₹3 Crores',
        'Purchase Protection',
        'Lost Card Liability'
      ],
      lifestyle: [
        'Complimentary Golf rounds',
        'Premium Concierge Service',
        'Exclusive dining privileges'
      ],
      fees: {
        annual: 12500,
        joiningFee: 12500
      }
    },
    eligibility: {
      minIncome: 1800000,
      minAge: 18,
      maxAge: 70,
      employmentType: ['Salaried', 'Self-Employed', 'Business Owner']
    },
    interestRates: {
      purchase: 3.49,
      cash: 3.49
    }
  },
  {
    id: 'icici-emeralde',
    name: 'ICICI Bank Emeralde Credit Card',
    issuer: 'ICICI Bank',
    category: 'Premium',
    annualFee: 20000,
    rating: 4.8,
    image: 'https://res.cloudinary.com/dv3vxqkwd/image/upload/v1745515688/cards/ukvtnfxqcon9mng2fadk.png',
    signupBonus: '15,000 PAYBACK points',
    applyLink: 'https://buy.icicibank.com/cap-v2/getting-started',
    minIncome: 2000000,
    rewardsProgram: '4x-10x PAYBACK points',
    benefits: [
      'Priority Pass membership',
      'Luxury hotel privileges',
      'Personal concierge'
    ],
    region: 'IN',
    rewardsRate: '4x-10x PAYBACK points',
    description: 'Super premium credit card for the elite with exclusive lifestyle benefits.',
    features: {
      rewardsProgram: [
        '10X PAYBACK points on dining and travel',
        '4X PAYBACK points on all other spends',
        'Unlimited reward points'
      ],
      welcomeBonus: ['15,000 PAYBACK points on first spend'],
      airportLounge: [
        'Unlimited International Lounge Access with Priority Pass',
        'Unlimited Domestic Lounge Access'
      ],
      insurance: [
        'Travel Insurance up to ₹5 Crores',
        'Purchase Protection',
        'Zero Liability Protection'
      ],
      lifestyle: [
        'Luxury hotel collection benefits',
        '24/7 Personal concierge',
        'Premium golf program'
      ],
      fees: {
        annual: 20000,
        joiningFee: 20000
      }
    },
    eligibility: {
      minIncome: 2000000,
      minAge: 21,
      maxAge: 65,
      employmentType: ['Salaried', 'Self-Employed', 'Business Owner']
    },
    interestRates: {
      purchase: 3.50,
      cash: 3.50
    }
  }
];

export const getCardsByRegion = () => {
  return cards;
};

export const getAllCards = () => cards;

export const getCardsByCategory = (category: string) => {
  return cards.filter(card => card.category.toLowerCase() === category.toLowerCase());
};

export const getCardsByIssuer = (issuer: string) => {
  return cards.filter(card => card.issuer.toLowerCase() === issuer.toLowerCase());
};

export const getCardsByIncomeRange = (minIncome: number, maxIncome?: number) => {
  return cards.filter(card => {
    if (maxIncome) {
      return card.eligibility.minIncome >= minIncome && card.eligibility.minIncome <= maxIncome;
    }
    return card.eligibility.minIncome >= minIncome;
  });
}; 