import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const router = typeof window !== 'undefined' ? require('next/router').useRouter() : { pathname: '' };
  const isHome = router.pathname === '/';
  return (
    <div className="flex flex-col min-h-screen bg-neutral">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
