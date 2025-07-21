import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center p-8 bg-neutral bg-cover bg-center overflow-hidden">
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-black/40 to-secondary/80 pointer-events-none z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl md:text-7xl font-heading font-extrabold text-primary fade-in-up mb-4" style={{ lineHeight: 1.1 }}>
          Reimagining Reach.<br className="hidden md:block" /> One Hand-off at a Time.
        </h1>
        <p className="mt-2 text-lg md:text-2xl text-black max-w-2xl fade-in-up delay-1">
          We turn branded utility into trackable engagement.<br className="hidden md:block" /> Give value. Get visibility.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 fade-in-up delay-2">
          <Link
            href="/solutions"
            className="px-8 py-4 rounded-full bg-accent text-primary font-bold text-lg shadow hover:bg-neutral hover:text-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent transform hover:scale-105"
          >
            Our Solutions
          </Link>
          <Link
            href="/platform"
            className="px-8 py-4 rounded-full border-2 border-primary text-primary font-bold text-lg shadow hover:bg-primary hover:text-accent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent transform hover:scale-105"
          >
            How It Works
          </Link>
        </div>
        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="scroll-cue text-3xl text-primary">↓</span>
          <span className="text-xs text-black mt-1">Scroll</span>
        </div>
      </div>
    </section>
  );
}
