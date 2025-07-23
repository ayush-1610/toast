import Head from 'next/head';
import dynamic from 'next/dynamic';

const ExpertiseSection = dynamic(
  () => import('../components/expertise/ExpertiseSection'),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          minHeight: '500px',
          maxHeight: '550px',
          width: '100%',
        }}
      />
    ),
  }
);

const expertiseItems = [
  {
    id: 'ai-innovation',
    title: 'AI Innovation',
    description: 'Harnessing the power of artificial intelligence to create the future of brands and businesses.',
    image: '/images/25_AI.webp',
    link: '#',
    bgColor: '#F5F5F3',
  },
  {
    id: 'digital-product-design',
    title: 'Digital Product and Experience Design',
    description: 'Accelerating client value creation through digital transformation.',
    image: '/images/Digital_Product-min.png',
    link: '#',
    bgColor: '#DDE2E7',
  },
  {
    id: 'brand-storytelling',
    title: 'Brand Storytelling and Content',
    description: 'Unforgettable narratives that build emotional resonance and inspire.',
    image: '/images/Brand_Storytelling.png',
    link: '#',
    bgColor: '#E6DACE',
  },
  {
    id: 'brand-design',
    title: 'Brand Design and Identity',
    description: 'Distinctive, authoritative and meaningful ideas that energise the organisation.',
    image: '/images/25_Brand_design.webp',
    link: '#',
    bgColor: '#C2D1D9',
  },
  {
    id: 'creative-technology',
    title: 'Creative Technology',
    description: 'Where vision meets pioneering innovation.',
    image: '/images/Creative_technology-min.png',
    link: '#',
    bgColor: '#DCE4D8',
  },
  {
    id: 'growth-strategy',
    title: 'Growth Strategy and Optimisation',
    description: 'Maximising growth potential with precision and purpose.',
    image: '/images/Growth_Strategy-min.png',
    link: '#',
    bgColor: '#DDE2E7',
  },
  {
    id: 'industrial-design',
    title: 'Industrial Design and Space',
    description: 'Integrating sustainable design principles with vision and advanced technologies to produce stunning environments.',
    image: '/images/Space-min.png',
    link: '#',
    bgColor: '#D1DAE3',
  },
];

export default function Expertise() {
  return (
    <>
      <Head>
        <title>GIVORO Expertise – Our Capabilities</title>
        <meta name="description" content="Explore the core capabilities and expertise at GIVORO." />
        <meta property="og:title" content="GIVORO Expertise – Our Capabilities" />
        <meta property="og:description" content="Explore the core capabilities and expertise at GIVORO." />
      </Head>
      <main className="font-serif">
        <header className="py-24 text-center" style={{ backgroundColor: '#F5F5F3' }}>
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-serif text-primary leading-tight">
              The most powerful force in the universe isn’t technology. <br />
              It’s imagination.
            </h1>
          </div>
        </header>

        <nav className="sticky top-0 bg-white/80 backdrop-blur-lg shadow-sm z-30" aria-label="Expertise sections">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-4 md:space-x-8 overflow-x-auto py-3">
              {expertiseItems.map((item) => (
                <a key={item.id} href={`#${item.id}`} className="block whitespace-nowrap px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors">
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div>
          {expertiseItems.map((item, index) => (
            <ExpertiseSection key={item.title} item={item} imageLeft={index % 2 !== 0} />
          ))}
        </div>

        <footer className="py-24 text-center" style={{ backgroundColor: '#F5F5F3' }}>
            <h2 className="text-4xl font-serif text-primary mb-6">The future, faster.</h2>
            <a href="/contact" className="inline-block px-8 py-3 rounded-full bg-primary text-accent font-bold shadow hover:bg-secondary transition-colors duration-300 transform hover:scale-105">
                Start a Project
            </a>
        </footer>
      </main>
    </>
  );
}
