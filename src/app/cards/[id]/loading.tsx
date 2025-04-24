export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse">
      {/* Card Header */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="w-full md:w-1/3">
          <div className="bg-gray-200 rounded-lg h-64 w-full"></div>
        </div>
        <div className="w-full md:w-2/3">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>

      {/* Card Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-4 bg-gray-200 rounded w-full"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Apply Button */}
      <div className="mt-8">
        <div className="h-12 bg-gray-200 rounded w-full md:w-1/3 mx-auto"></div>
      </div>
    </div>
  );
} 