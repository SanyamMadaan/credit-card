const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

const cards = [
  'amex-platinum-travel',
  'amex-membership-rewards',
  'sbi-prime',
  'sbi-simplyclick',
  'axis-magnus',
  'axis-flipkart'
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

  // Background
  ctx.fillStyle = '#1a365d';
  ctx.fillRect(0, 0, width, height);

  // Card name
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(cardName.replace(/-/g, ' ').toUpperCase(), width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(cardsDir, `${cardName}.png`), buffer);
});

console.log('Placeholder images generated successfully!'); 