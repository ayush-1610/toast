import { useState } from 'react';

const slides = [
  {
    image: '/images/work1.jpg',
    title: 'Spill the tea and knit',
    desc: 'Get inspired by outstanding decks that have helped teams close deals, secure funding, and drive decisions.',
  },
  {
    image: '/images/work2.jpg',
    title: 'Knit and Greet',
    desc: 'A showcase of communication strategies for high-performing teams.',
  },
  {
    image: '/images/work3.jpg',
    title: 'Neat and Knitters',
    desc: 'Insights on scaling after finding product-market fit.',
  },
  {
    image: '/images/Brand_Storytelling.png',
    title: 'Brand Storytelling',
    desc: 'How to craft compelling narratives that resonate with your audience.',
  },
  {
    image: '/images/Creative_technology-min.png',
    title: 'Creative Technology',
    desc: 'Leveraging technology to create unforgettable brand experiences.',
  },
];

export default function InsightsTeaser() {
  const [start, setStart] = useState(0);
  const visibleSlides = slides.slice(start, start + 3);
  const canScrollRight = start + 3 < slides.length;
  const canScrollLeft = start > 0;

  const next = () => {
    if (canScrollRight) setStart(start + 1);
  };
  const prev = () => {
    if (canScrollLeft) setStart(start - 1);
  };

  return (
    <section className="py-20 bg-neutral">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-4xl font-extrabold text-primary text-center mb-2">Insights & Thought Leadership</h2>
        <p className="text-lg text-gray-700 text-center mb-10">Get inspired by outstanding decks that have helped teams close deals, secure funding, and drive decisions.</p>
        <div className="relative w-full flex items-center justify-center">
          {/* Left Arrow (optional) */}
          {canScrollLeft && (
            <button onClick={prev} aria-label="Previous" className="absolute -left-10 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-30 border border-gray-200 hover:bg-primary hover:text-accent transition">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          )}
          {/* Cards */}
          <div className="flex gap-10 w-full justify-center items-center">
            {visibleSlides.map((slide, i) => (
              <div
                key={i}
                className="relative w-[340px] h-[440px] rounded-3xl shadow-2xl overflow-hidden flex flex-col justify-end bg-white group transition-all duration-500"
                style={{ background: `url(${slide.image}) center/cover no-repeat` }}
              >
                {/* Black gradient overlay at bottom, expands on hover */}
                <div className="absolute bottom-0 left-0 w-full h-2/5 group-hover:h-full bg-gradient-to-b from-transparent to-black/95 rounded-b-3xl flex flex-col justify-end transition-all duration-500 z-10"></div>
                {/* Card image zoom on hover */}
                <div className="absolute inset-0 z-0 transition-all duration-500 group-hover:scale-110" style={{ background: `url(${slide.image}) center/cover no-repeat` }} />
                {/* Card content: title and subtitle only */}
                <div className="relative z-20 p-6 flex flex-col h-2/5 justify-end">
                  <div className="text-2xl font-extrabold text-white mb-2 leading-tight drop-shadow-lg">{slide.title}</div>
                  <div className="text-white/90 text-base mb-2 drop-shadow-sm">{slide.desc}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Right Arrow */}
          {canScrollRight && (
            <button onClick={next} aria-label="Next" className="absolute -right-10 top-1/2 -translate-y-1/2 bg-white shadow p-2 rounded-full z-30 border border-gray-200 hover:bg-primary hover:text-accent transition">
              <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
} 