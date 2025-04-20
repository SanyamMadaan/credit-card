# Credit Card Comparison

A modern, responsive web application for comparing credit cards built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- Browse and compare credit cards
- Filter cards by category and search by name/issuer
- Sort cards by rating, annual fee, or name
- Detailed card information and benefits
- Side-by-side comparison of up to 3 cards
- Dark mode support
- Responsive design
- Smooth animations and transitions

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Heroicons](https://heroicons.com/) - Icon library
- TypeScript - Type safety

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/credit-card-comparison.git
   cd credit-card-comparison
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── cards/             # Card listing and detail pages
│   ├── compare/           # Card comparison page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── CardItem.tsx      # Card display component
│   └── CardComparison.tsx # Card comparison component
└── data/                 # Data files
    └── cards.ts          # Credit card data
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Design inspired by [CRED](https://cred.club/)
- Icons by [Heroicons](https://heroicons.com/)
