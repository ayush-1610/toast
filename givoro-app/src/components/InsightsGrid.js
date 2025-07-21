import React from 'react';

const insights = [
  { tag: 'Insight', title: 'How on-ground media is reshaping brand engagement in 2025', link: '#' },
  { tag: 'Report', title: 'The ROI of QR-driven sampling: A data deep dive', link: '#' },
  { tag: 'POV', title: 'Why real-world goodwill beats digital impressions', link: '#' },
];

export default function InsightsGrid() {
  return (
    <div>
      <h2 className="text-3xl font-heading text-primary mb-8">Insights & Thought Leadership</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {insights.map((i, idx) => (
          <a key={idx} href={i.link} className="group bg-accent rounded-xl shadow-card p-8 flex flex-col justify-between border border-gray-50 hover:shadow-lg hover:scale-[1.03] transition-all duration-200 cursor-pointer">
            <span className="uppercase text-xs font-semibold text-primary mb-2">{i.tag}</span>
            <h3 className="font-heading text-lg text-primary mb-4 font-bold line-clamp-2">{i.title}</h3>
            <span className="mt-auto text-primary font-bold group-hover:translate-x-2 transition-transform">→</span>
          </a>
        ))}
      </div>
    </div>
  );
} 