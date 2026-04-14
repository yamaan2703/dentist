import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const sfProDisplay = localFont({
  src: [
    {
      path: '../components/fonts/SF-Pro-Display-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../components/fonts/SF-Pro-Display-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../components/fonts/SF-Pro-Display-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../components/fonts/SF-Pro-Display-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-sf-pro-display',
});

export const metadata: Metadata = {
  title: 'Your Dental Clinic',
  description: 'Modern and trusted dental care landing page.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${sfProDisplay.variable} ${sfProDisplay.className} bg-white text-black antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
