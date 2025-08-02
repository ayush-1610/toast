'use client';

const cards = [
   {
    image: '/images/work1.jpg',
    title: 'Strategic Scale',
    subtitle: 'Mass Distribution, Done Right',
    desc: 'Our system enables the rollout of branded essentials — custom-packed and geo-targeted — across urban hotspots, events, and high-footfall zones, ensuring real-world visibility where it matters most.',
  },
  {
    image: '/images/work2.jpg',
    title: 'ROI That Speaks Your Language',
    subtitle: 'Results You Can Measure',
    desc: 'With every hand-off, GIVORO brings quantifiable media value — with hyper-local relevance and cost-efficiency that outperform traditional formats.',
  },
  {
    image: '/images/work3.jpg',
    title: 'Always‑On Execution: Precision Ops, City to Street.',
    subtitle: '',
    desc: 'From tier‑1 metros to last-mile streets, our trained ground teams and smart logistics ensure your campaign never misses a beat — on time, on brand, every time. No delays. No gaps. Just execution you can count on.',
  },
];

export default function HoverCards() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Work Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-80 object-cover transform duration-500 group-hover:blur-sm group-hover:scale-105"
              />

              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition duration-500"></div>

              {/* Title (initial center, moves up on hover) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-2xl font-semibold text-center transform transition-all duration-500 group-hover:-translate-y-16">
                  {card.title}
                </h3>
              </div>

              {/* Description (hidden initially, fade & slide in on hover) */}
              <div className="absolute bottom-6 px-4 text-center opacity-0 transform translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-white">
                <p className="text-sm">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
