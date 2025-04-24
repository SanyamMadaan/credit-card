export type Region = 'US' | 'IN';

export type Rating = 1 | 2 | 3 | 4 | 5;

export type CardCategory = 
  | 'Travel'
  | 'Cashback'
  | 'Business'
  | 'Student'
  | 'Rewards'
  | 'Secured'
  | 'Premium';

export interface Benefit {
  title: string;
  description: string;
}

export interface Card {
  id: string;
  name: string;
  issuer: string;
  annualFee: number;
  signupBonus?: string;
  image: string;
  rating: Rating;
  rewardsRate: string;
  benefits: Benefit[];
  category: CardCategory;
  description: string;
  region: Region;
} 