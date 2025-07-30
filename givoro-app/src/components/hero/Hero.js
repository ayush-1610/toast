import Link from 'next/link';
import { AuroraBackground } from './AuroraBackground';

export default function Hero() {
  return (
    <AuroraBackground>
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center p-8 bg-cover bg-center overflow-hidden">
      {/* Animated overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl md:text-7xl font-heading font-extrabold text-primary fade-in-up mb-4" style={{ lineHeight: 1.1 }}>
          Reimagining Reach.<br className="hidden md:block" /> One Hand-off at a Time.
        </h1>
        <p className="mt-2 text-lg md:text-2xl text-black max-w-2xl fade-in-up delay-1">
          We turn branded utility into trackable engagement.<br className="hidden md:block" /> Give value. Get visibility.
        </p>
      </div>
    </section>
    </AuroraBackground>
  );
}
