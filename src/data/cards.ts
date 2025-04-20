export interface Card {
  id: string;
  name: string;
  issuer: string;
  annualFee: number;
  signupBonus: string;
  image: string;
  rating: number;
  rewardsRate?: string;
  benefits?: string[];
  category?: string;
  description?: string;
}

export const cards: Card[] = [
  {
    id: 'chase-sapphire-preferred',
    name: 'Chase Sapphire Preferred',
    issuer: 'Chase',
    annualFee: 95,
    signupBonus: '60,000 points after spending $4,000 in 3 months',
    image: '/images/chase-sapphire-preferred.png',
    rating: 4.8,
    rewardsRate: '2x points on travel and dining, 1x on all other purchases',
    benefits: [
      'Primary rental car insurance',
      'Trip cancellation/interruption insurance',
      'No foreign transaction fees',
      'Transfer points to airline and hotel partners',
    ],
    category: 'Travel',
    description: 'The Chase Sapphire Preferred® Card is a great choice for travelers who want to earn valuable rewards points on their everyday spending.',
  },
  {
    id: 'amex-platinum',
    name: 'American Express Platinum',
    issuer: 'American Express',
    annualFee: 695,
    signupBonus: '80,000 points after spending $6,000 in 6 months',
    image: '/images/amex-platinum.png',
    rating: 4.7,
    rewardsRate: '5x points on flights booked directly with airlines, 5x points on prepaid hotels booked through Amex Travel',
    benefits: [
      '$200 annual airline fee credit',
      '$200 annual Uber credit',
      'Access to Centurion Lounges',
      'Global Entry/TSA PreCheck credit',
      'Marriott Gold and Hilton Gold status',
    ],
    category: 'Premium Travel',
    description: 'The American Express Platinum Card® is a premium travel card that offers luxury benefits and high-end travel perks.',
  },
  {
    id: 'capital-one-venture',
    name: 'Capital One Venture',
    issuer: 'Capital One',
    annualFee: 95,
    signupBonus: '75,000 miles after spending $4,000 in 3 months',
    image: '/images/capital-one-venture.png',
    rating: 4.6,
    rewardsRate: '2x miles on every purchase',
    benefits: [
      'Global Entry/TSA PreCheck credit',
      'No foreign transaction fees',
      'Travel accident insurance',
      'Extended warranty protection',
    ],
    category: 'Travel',
    description: 'The Capital One Venture Rewards Credit Card is a great option for those who want simple, flexible travel rewards.',
  },
  {
    id: 'citi-double-cash',
    name: 'Citi Double Cash',
    issuer: 'Citi',
    annualFee: 0,
    signupBonus: 'N/A',
    image: '/images/citi-double-cash.png',
    rating: 4.5,
    rewardsRate: '2% cash back (1% when you buy, 1% when you pay)',
    benefits: [
      'No annual fee',
      'No foreign transaction fees',
      'Extended warranty protection',
      'Price rewind',
    ],
    category: 'Cash Back',
    description: 'The Citi Double Cash Card is a simple, no-frills cash back card that rewards you for both spending and paying on time.',
  },
  {
    id: 'discover-it',
    name: 'Discover it',
    issuer: 'Discover',
    annualFee: 0,
    signupBonus: 'Cashback Match™ (double all cash back earned in first year)',
    image: '/images/discover-it.png',
    rating: 4.4,
    rewardsRate: '5% cash back in rotating categories, 1% on all other purchases',
    benefits: [
      'No annual fee',
      'No foreign transaction fees',
      'Free FICO® Credit Score',
      'First year cashback match',
    ],
    category: 'Cash Back',
    description: 'The Discover it® Cash Back card is a great option for those who want to maximize cash back in rotating categories.',
  },
]; 