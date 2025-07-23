const insights = [
  {
    title: 'Hand‑to‑Hand Media: The Next Attention Frontier',
    link: '/platform#insights',
  },
  {
    title: 'QR 2.0: Designing Scannable Stories',
    link: '/platform#insights',
  },
  {
    title: 'Circular Sampling: Utility & Sustainability',
    link: '/platform#insights',
  },
];

export default function InsightsTeaser() {
  return (
    <section className="py-16 bg-neutral">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading text-primary text-center mb-10">Insights & Thought Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, i) => (
            <a key={i} href={insight.link} className="block bg-white rounded-2xl shadow-card p-6 hover:shadow-lg transition-all text-primary text-lg font-semibold text-center">
              {insight.title} <span className="ml-2 text-accent">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 