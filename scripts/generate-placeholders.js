const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Import card data
const usCards = require('../src/data/cards.json').cards;
const indianCards = require('../src/data/indianCards.json').cards;

// Combine all card IDs
const cards = [
  ...usCards.map(card => card.id),
  ...indianCards.map(card => card.id)
];

const width = 400;
const height = 250;

// Create the cards directory if it doesn't exist
const cardsDir = path.join(process.cwd(), 'public', 'images', 'cards');
if (!fs.existsSync(cardsDir)) {
  fs.mkdirSync(cardsDir, { recursive: true });
}

cards.forEach(cardName => {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Create gradient background
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#1a365d');
  gradient.addColorStop(1, '#2d3748');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Add card chip design
  ctx.fillStyle = '#ffd700';
  ctx.fillRect(50, 100, 60, 40);
  
  // Add card number dots
  ctx.fillStyle = '#ffffff';
  for (let i = 0; i < 4; i++) {
    ctx.beginPath();
    ctx.arc(100 + (i * 30), 160, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  // Card name
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(cardName.replace(/-/g, ' ').toUpperCase(), width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(cardsDir, `${cardName}.png`), buffer);

  console.log(`Generated placeholder for: ${cardName}`);
}); 