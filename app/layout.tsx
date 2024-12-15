import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { AppErrorBoundary } from './error-boundary';
import '@/lib/sentry';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Login - AI Isotec',
  description: 'Secure login page for AI Isotec platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppErrorBoundary>{children}</AppErrorBoundary>
      </body>
    </html>
  );
}