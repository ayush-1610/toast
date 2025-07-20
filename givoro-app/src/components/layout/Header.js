import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-4 flex justify-between items-center border-b">
      <Link href="/" className="font-bold text-xl">GIVORO</Link>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/solutions">Solutions</Link>
        <Link href="/platform">Platform</Link>
        <Link href="/impact">Impact</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/auth/login">Login</Link>
        <Link href="/auth/signup">Sign Up</Link>
      </nav>
    </header>
  );
}
