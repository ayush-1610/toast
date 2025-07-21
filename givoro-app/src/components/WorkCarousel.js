import React from 'react';

const cases = [
  {
    client: 'Brand A',
    campaign: 'City Launch',
    image: '/images/work1.jpg',
    metrics: '1.2M samples / 9.4M QR scans',
  },
  {
    client: 'Brand B',
    campaign: 'Festival Activation',
    image: '/images/work2.jpg',
    metrics: '800K samples / 5.1M QR scans',
  },
  {
    client: 'Brand C',
    campaign: 'Retail Blitz',
    image: '/images/work3.jpg',
    metrics: '2.0M samples / 12.2M QR scans',
  },
  {
    client: 'Brand D',
    campaign: 'Sustainability Drive',
    image: '/images/work4.jpg',
    metrics: '500K samples / 2.8M QR scans',
  },
];

export default function WorkCarousel() {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-heading text-primary mb-8">Signature Work</h2>
      <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
        {cases.map((c, i) => (
          <div
            key={i}
            className="relative min-w-[320px] max-w-sm h-80 rounded-2xl overflow-hidden shadow-card bg-black/10 snap-center group cursor-pointer"
          >
            <img
              src={c.image}
              alt={`${c.client} ${c.campaign}`}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4 bg-primary/80 text-accent px-3 py-1 rounded-full text-xs font-semibold">
              {c.client} · {c.campaign}
            </div>
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-accent text-lg font-bold">{c.metrics}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href="/work" className="inline-block px-8 py-3 rounded-full bg-primary text-accent font-bold shadow hover:bg-secondary transition-colors">See All Work</a>
      </div>
    </div>
  );
} 