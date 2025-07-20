import '../styles/globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'GIVORO | Ads That Serve',
  description: 'Experience a new era of on-ground advertising with GIVORO — real-world value, real-time visibility.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'GA_MEASUREMENT_ID');`,
          }}
        />
      </head>
      <body className="font-sans text-gray-900 bg-white flex flex-col min-h-screen">
        <header className="p-4 flex justify-between items-center border-b">
          <Link href="/" className="font-bold text-xl">GIVORO</Link>
          <nav className="space-x-4">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/bottle-library">Bottle Library</Link>
            <Link href="/how-it-works">How It Works</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <div className="flex-grow">{children}</div>
        <footer className="p-4 text-center border-t">© {new Date().getFullYear()} GIVORO</footer>
      </body>
    </html>
  );
}
