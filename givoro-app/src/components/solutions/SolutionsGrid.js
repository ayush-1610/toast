import SolutionCard from './SolutionCard';

const solutions = [
  {
    title: 'On-Ground Sampling & Activations',
    description: 'In-person product giveaways and brand activations to create memorable one-on-one consumer experiences.',
    icon: '🎁',
    alt: 'Product sampling',
  },
  {
    title: 'Outdoor & Street Advertising',
    description: 'Eye-catching outdoor media—billboards, posters, wrapped vehicles—focused on high-traffic locales.',
    icon: '🛣️',
    alt: 'Outdoor advertising',
  },
  {
    title: 'Interactive QR Engagement',
    description: 'QR codes and NFC tags connect offline interactions to online content or rewards, driving digital engagement.',
    icon: '📱',
    alt: 'QR engagement',
  },
  {
    title: 'Data & Analytics Integration',
    description: 'Every campaign is equipped for data capture and analysis, providing insight into performance and ROI.',
    icon: '📊',
    alt: 'Analytics',
  },
];

export default function SolutionsGrid() {
  return (
    <div className="bg-neutral rounded-2xl p-8 grid md:grid-cols-2 gap-10">
      {solutions.map((s) => (
        <SolutionCard key={s.title} title={s.title} icon={s.icon} alt={s.alt}>
          {s.description}
        </SolutionCard>
      ))}
    </div>
  );
}
