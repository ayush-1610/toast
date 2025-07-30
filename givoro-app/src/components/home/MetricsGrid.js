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

export default function MetricsGrid() {
  return (
    <section className="py-24 bg-neutral">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-6 leading-tight">Our Scale & Capability</h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-2xl mx-auto">Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text used in design when creating content</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Left card: text then image */}
          <div className="flex flex-col justify-between h-full items-center text-center">
            <div className="flex flex-col items-center text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{cards[0].title}</h3>
              {cards[0].subtitle && <div className="text-lg font-semibold text-primary mb-2">{cards[0].subtitle}</div>}
              <p className="text-base text-gray-600">{cards[0].desc}</p>
            </div>
            <img src={cards[0].image} alt={cards[0].title} className="w-full h-48 object-cover" />
          </div>
          {/* Center card: image then text */}
          <div className="flex flex-col justify-between h-full items-center text-center">
            <img src={cards[1].image} alt={cards[1].title} className="w-full h-48 object-cover mb-6" />
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{cards[1].title}</h3>
              {cards[1].subtitle && <div className="text-lg font-semibold text-primary mb-2">{cards[1].subtitle}</div>}
              <p className="text-base text-gray-600">{cards[1].desc}</p>
            </div>
          </div>
          {/* Right card: text then image */}
          <div className="flex flex-col justify-between h-full items-center text-center">
            <div className="flex flex-col items-center text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{cards[2].title}</h3>
              {cards[2].subtitle && <div className="text-lg font-semibold text-primary mb-2">{cards[2].subtitle}</div>}
              <p className="text-base text-gray-600">{cards[2].desc}</p>
            </div>
            <img src={cards[2].image} alt={cards[2].title} className="w-full h-48 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
} 