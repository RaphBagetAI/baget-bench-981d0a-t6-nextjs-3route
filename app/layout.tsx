import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Shipyard - Developer Tools',
  description: 'Developer tools for shipping faster and easier',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col bg-light-stone">
          <nav className="bg-forest-green text-light-stone shadow-natural">
            <div className="container flex justify-between items-center py-4">
              <Link href="/" className="text-2xl font-fraunces font-bold">
                Shipyard
              </Link>
              <div className="space-x-4">
                <Link href="/" className="hover:text-warm-amber">
                  Home
                </Link>
                <Link href="/pricing" className="hover:text-warm-amber">
                  Pricing
                </Link>
                <Link href="/docs" className="hover:text-warm-amber">
                  Docs
                </Link>
              </div>
            </div>
          </nav>

          <main className="container flex-grow py-8">
            {children}
          </main>

          <footer>
            &copy; 2026 Bench 981d0a. Shipyard. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
