import SolutionCard from './SolutionCard';

const solutions = [
  { title: 'Campaign Planning', description: 'Strategic on-ground execution.' },
  { title: 'Product Design', description: 'Custom-branded utility items.' },
  { title: 'Tracking & Automation', description: 'QR codes and distribution tech.' },
  { title: 'Analytics', description: 'Monitor impact in real time.' },
];

export default function SolutionsGrid() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {solutions.map((s) => (
        <SolutionCard key={s.title} title={s.title}>{s.description}</SolutionCard>
      ))}
    </div>
  );
}
