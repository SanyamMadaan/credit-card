import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Card Not Found</h2>
      <p className="text-lg text-gray-600 mb-8">
        Sorry, we couldn't find the credit card you're looking for.
      </p>
      <Link
        href="/cards"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors duration-200"
      >
        View All Cards
      </Link>
    </div>
  );
} 