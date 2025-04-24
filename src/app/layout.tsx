import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import { ComparisonProvider } from '@/context/ComparisonContext';
import ComparisonBar from '@/components/ComparisonBar';

const inter = Inter({ subsets: ['latin'] });

// Replace with your Google Analytics ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

export const metadata: Metadata = {
  title: 'Credit Card Comparison | Find the Best Credit Cards for US & India',
  description: 'Compare the best credit cards from top issuers in US and India. Find rewards cards, travel cards, and cashback cards with detailed comparisons and benefits.',
  keywords: 'credit cards, credit card comparison, rewards cards, travel cards, US credit cards, Indian credit cards, Chase Sapphire, American Express, SBI Card',
  openGraph: {
    title: 'Credit Card Comparison | Find the Best Credit Cards',
    description: 'Compare top credit cards from US and India with detailed benefits analysis',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Credit Card Comparison',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <ComparisonProvider>
          <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
            {children}
          </main>
          <ComparisonBar />
        </ComparisonProvider>
      </body>
    </html>
  );
}
