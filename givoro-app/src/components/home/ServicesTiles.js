import { FaLightbulb, FaCogs, FaChartBar, FaPaintBrush, FaBullhorn } from 'react-icons/fa';

const services = [
  {
    icon: <FaLightbulb className="text-3xl text-primary mb-3" />,
    title: 'Strategy & Consulting',
    desc: 'Market intelligence, campaign blueprints, KPI architecture',
  },
  {
    icon: <FaCogs className="text-3xl text-primary mb-3" />,
    title: 'Experience & Production',
    desc: 'Sourcing, custom‑pack, on‑ground logistics',
  },
  {
    icon: <FaChartBar className="text-3xl text-primary mb-3" />,
    title: 'Data & Analytics Platform',
    desc: 'Real‑time dashboards, predictive optimisation',
  },
  {
    icon: <FaPaintBrush className="text-3xl text-primary mb-3" />,
    title: 'Creative Studio',
    desc: 'QR‑driven storytelling, experiential design',
  },
  {
    icon: <FaBullhorn className="text-3xl text-primary mb-3" />,
    title: 'Reputation & PR',
    desc: 'Narrative engineering for earned media',
  },
];

export default function ServicesTiles() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading text-primary text-center mb-10">Services at a Glance</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {services.map((s, i) => (
            <div key={i} className="flex flex-col items-center bg-neutral rounded-2xl shadow-card p-6 text-center hover:shadow-lg transition-all">
              {s.icon}
              <h3 className="font-bold text-lg mb-2 text-primary">{s.title}</h3>
              <p className="text-gray-700 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 