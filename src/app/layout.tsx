import Header from '@/components/header';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RestUp',
  description: 'Evaluate your sleep debt',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Header />
        {children}
      </body>
    </html>
  );
}
