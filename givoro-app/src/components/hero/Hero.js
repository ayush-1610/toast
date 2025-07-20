import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-[url('/images/hero.jpg')] bg-cover bg-center">
      <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">Reimagining Reach. One Hand-off at a Time.</h1>
      <p className="mt-4 text-lg text-white max-w-xl">We turn branded utility into trackable engagement. Give value. Get visibility.</p>
      <div className="mt-8 flex space-x-4">
        <Link href="/solutions" className="px-6 py-3 bg-accent text-black font-semibold rounded">Our Solutions</Link>
        <Link href="/platform" className="px-6 py-3 border border-white text-white font-semibold rounded">How It Works</Link>
      </div>
    </section>
  );
}
