interface AffiliateLinks {
  [key: string]: string;
}

export const affiliateLinks: AffiliateLinks = {
  'chase-sapphire-preferred': 'https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred',
  'amex-platinum': 'https://www.americanexpress.com/us/credit-cards/card/platinum/',
  'amex-platinum-travel': 'https://www.americanexpress.com/in/credit-cards/card/platinum-travel/',
  'sbi-prime': 'https://www.sbicard.com/credit-cards/prime-credit-card',
};

export const getAffiliateLink = (cardId: string): string => {
  // In the future, you can add your affiliate tracking parameters here
  const baseUrl = affiliateLinks[cardId];
  // Example: return `${baseUrl}?referral=YOUR_AFFILIATE_ID`;
  return baseUrl;
};

export const trackCardClick = (cardId: string, cardName: string) => {
  // Implement analytics tracking here
  // Example with Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'card_click', {
      card_id: cardId,
      card_name: cardName,
      timestamp: new Date().toISOString(),
    });
  }
}; 