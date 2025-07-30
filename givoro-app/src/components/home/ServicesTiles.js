const services = [
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="text-blue-500 mx-auto mb-6"><path d="M12 24l8-8 8 8-8 8-8-8z" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
    ),
    title: 'Strategy & Consulting',
    desc: 'Market intelligence, campaign blueprints, KPI architecture',
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="text-blue-500 mx-auto mb-6"><circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
    ),
    title: 'Experience & Production',
    desc: 'Sourcing, custom‑pack, on‑ground logistics',
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="text-blue-500 mx-auto mb-6"><rect x="12" y="12" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
    ),
    title: 'Data & Analytics Platform',
    desc: 'Real‑time dashboards, predictive optimisation',
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="text-blue-500 mx-auto mb-6"><path d="M24 8v32M8 24h32" stroke="currentColor" strokeWidth="2"/></svg>
    ),
    title: 'Creative Studio',
    desc: 'QR‑driven storytelling, experiential design',
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="text-blue-500 mx-auto mb-6"><path d="M12 36l24-24" stroke="currentColor" strokeWidth="2"/></svg>
    ),
    title: 'Reputation & PR',
    desc: 'Narrative engineering for earned media',
  },
  {
    icon: (
      <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="text-blue-500 mx-auto mb-6"><path d="M24 4l8 40M24 4l-8 40" stroke="currentColor" strokeWidth="2"/></svg>
    ),
    title: 'Brand Partnerships',
    desc: 'Collaborative campaigns for maximum reach',
  },
];

export default function ServicesTiles() {
  return (
    <section className="py-24 bg-white">
      <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-50 py-6 sm:py-12 px-4">
  {services.map((s, i) => (
    <div
      key={i}
      className="group relative m-4 w-full max-w-sm cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:rounded-lg sm:px-10"
    >
      {/* Expanding circle background on hover */}
      <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>

      <div className="relative z-10 mx-auto max-w-md">
        {/* Icon Circle */}
        <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-10 w-10 text-white transition-all"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M22 12h-4l-3 9L9 3l-3 9H2"
            />
          </svg>
        </span>

        {/* Text and Description */}
        <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
          <h2 className="text-xl font-semibold text-gray-800 group-hover:text-white">{s.title}</h2>
          <p>{s.desc}</p>
        </div>

      </div>
    </div>
  ))}
</div>
    </section>

    
  );
} 



