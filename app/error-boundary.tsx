'use client';

import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import logger from '@/lib/logger';

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-md w-full space-y-4">
        <h2 className="text-2xl font-bold text-red-600">Something went wrong</h2>
        <p className="text-gray-600">We're sorry, but there was an error:</p>
        <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto">
          {error.message}
        </pre>
        <button
          onClick={() => window.location.reload()}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export function AppErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error) => {
        logger.error('Application error:', error);
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}