export interface Card {
  id: string;
  name: string;
  issuer: string;
  annualFee: number;
  signupBonus?: string;
  image: string;
  rating: number;
  rewardsRate: string;
  benefits: string[];
  category: string;
  description: string;
  region: 'US' | 'IN';
}

export const cards: Card[] = [
  {
    id: 'chase-sapphire-preferred',
    name: 'Chase Sapphire Preferred',
    issuer: 'Chase',
    annualFee: 95,
    signupBonus: '60,000 points after spending $4,000 in 3 months',
    image: '/cardImages/chasesapphireimage.jpg',
    rating: 4.8,
    rewardsRate: '2x-5x points',
    benefits: [
      'No foreign transaction fees',
      'Travel insurance',
      'Purchase protection'
    ],
    category: 'Travel',
    description: 'Premium travel rewards card with flexible point redemption options.',
    region: 'US'
  },
  {
    id: 'amex-platinum',
    name: 'American Express Platinum',
    issuer: 'American Express',
    annualFee: 695,
    signupBonus: '100,000 points after spending $6,000 in 6 months',
    image: '/cardImages/americanexpress.jpg',
    rating: 4.7,
    rewardsRate: '5x points on flights and hotels',
    benefits: [
      'Airport lounge access',
      'Hotel status upgrades',
      'Annual travel credits'
    ],
    category: 'Premium Travel',
    description: 'Luxury travel card with premium benefits and exclusive perks.',
    region: 'US'
  },
  {
    id: 'amex-platinum-travel',
    name: 'American Express Platinum Travel Credit Card',
    issuer: 'American Express',
    annualFee: 3500,
    signupBonus: '50,000 reward points on spending ₹1,00,000 in 3 months',
    image: '/cardImages/americanexpresstravel.jpg',
    rating: 4.6,
    rewardsRate: '3x points on travel',
    benefits: [
      'Complimentary airport lounge access',
      'Travel insurance',
      'Taj Hotels privileges'
    ],
    category: 'Travel',
    description: 'Premium travel credit card with exclusive benefits for Indian travelers.',
    region: 'IN'
  },
  {
    id: 'sbi-prime',
    name: 'SBI Card PRIME',
    issuer: 'SBI',
    annualFee: 2999,
    signupBonus: '5,000 reward points on card activation',
    image: '/cardImages/sbiprime.jpg',
    rating: 4.5,
    rewardsRate: '2x-10x reward points',
    benefits: [
      'Movie ticket discounts',
      'Dining privileges',
      'Fuel surcharge waiver'
    ],
    category: 'Lifestyle',
    description: 'Premium lifestyle credit card with dining and entertainment benefits.',
    region: 'IN'
  }
];

export const getCardsByRegion = (region: 'US' | 'IN') => {
  return cards.filter(card => card.region === region);
};

export const getAllCards = () => cards; 