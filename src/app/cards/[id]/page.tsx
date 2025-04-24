import { notFound } from 'next/navigation';
import { getAllCards } from '@/data/cards';
import { Metadata } from 'next';
import CardDetails from './CardDetails';

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cards = getAllCards();
  const card = cards.find(c => c.id === params.id);

  if (!card) {
    return {
      title: 'Card Not Found',
    };
  }

  return {
    title: `${card.name} - Credit Card Details`,
    description: `Learn more about the ${card.name} credit card from ${card.issuer}. Annual fee: ₹${card.annualFee.toLocaleString()}, Category: ${card.category}`,
  };
}

export default function CardPage({ params }: Props) {
  const cards = getAllCards();
  const card = cards.find(c => c.id === params.id);

  if (!card) {
    notFound();
  }

  return <CardDetails card={card} />;
} 