import { cards } from '@/data/cards';
import CardItem from './CardItem';

interface CompareCardsProps {
  cardIds: string[];
}

export default function CompareCards({ cardIds }: CompareCardsProps) {
  const selectedCards = cards.filter(card => cardIds.includes(card.id));

  if (selectedCards.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-gray-600 dark:text-gray-300">
          No cards selected for comparison. Please select cards to compare.
        </p>
      </div>
    );
  }

  const renderCard = (card: typeof cards[0]) => (
    <CardItem 
      {...card}
      signupBonus={card.signupBonus || 'No signup bonus available'}
      rewardsRate={card.rewardsRate || 'N/A'}
      benefits={card.benefits || []}
      category={card.category || 'Other'}
      description={card.description || `${card.name} credit card by ${card.issuer}`}
      region={card.region || 'US'}
    />
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {selectedCards.map(card => (
        <div key={card.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          {renderCard(card)}
          <div className="mt-4 space-y-2">
            <ComparisonDetail label="Annual Fee" value={`$${card.annualFee}`} />
            <ComparisonDetail label="Signup Bonus" value={card.signupBonus || 'No signup bonus'} />
            <ComparisonDetail label="Rating" value={card.rating.toFixed(1)} />
            {card.rewardsRate && (
              <ComparisonDetail label="Rewards Rate" value={card.rewardsRate} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function ComparisonDetail({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-sm text-gray-600 dark:text-gray-400">{label}:</span>
      <span className="text-sm font-medium text-gray-900 dark:text-white">{value}</span>
    </div>
  );
} 