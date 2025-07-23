const metrics = [
  {
    label: 'Distribution',
    value: 'Millions+',
    desc: 'Deploy millions of branded utilities in a single nationwide wave',
  },
  {
    label: 'Media Value',
    value: 'Prime‑time ROI',
    desc: 'Deliver ROI comparable to prime‑time broadcast spots',
  },
  {
    label: 'Coverage',
    value: 'Nationwide',
    desc: 'Operate in all metros & tier‑1 Indian cities with rapid rural extension',
  },
];

export default function MetricsGrid() {
  return (
    <section className="py-16 bg-primary text-accent">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-10">Our Scale & Capability</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((m, i) => (
            <div key={i} className="bg-secondary rounded-2xl p-8 shadow-card flex flex-col items-center hover:-translate-y-2 transition-all">
              <div className="text-4xl font-extrabold mb-2">{m.value}</div>
              <div className="font-semibold text-lg mb-1">{m.label}</div>
              <div className="text-sm opacity-80">{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 