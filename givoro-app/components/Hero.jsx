'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero({ title, subtitle, primaryHref, primaryLabel, secondaryHref, secondaryLabel }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/id/1043/1200/800')" }}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg max-w-3xl">
        {title}
      </h1>
      <p className="mt-4 text-lg text-white max-w-xl">{subtitle}</p>
      <div className="mt-8 flex space-x-4">
        <Link href={primaryHref} className="px-6 py-3 bg-accent text-black font-semibold rounded">
          {primaryLabel}
        </Link>
        {secondaryHref && (
          <Link href={secondaryHref} className="px-6 py-3 border border-white text-white font-semibold rounded">
            {secondaryLabel}
          </Link>
        )}
      </div>
    </motion.section>
  );
}
