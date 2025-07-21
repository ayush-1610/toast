import React from 'react';

const pillars = [
  {
    icon: '♞',
    title: 'Strategy & Consulting',
    desc: 'From campaign planning to hyper-local permit ops.'
  },
  {
    icon: '🧴',
    title: 'Experience & Production',
    desc: 'High-volume sourcing, premium packing, on-ground staffing.'
  },
  {
    icon: '📈',
    title: 'Data & Analytics Platform',
    desc: 'Real-time dashboard, QR cohort tracking, ROI attribution.'
  },
];

export default function CapabilitiesStrip() {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-between items-stretch">
      {pillars.map((p, i) => (
        <div key={i} className="flex-1 bg-accent rounded-xl shadow-card p-8 flex flex-col items-center text-center border border-gray-50">
          <span className="text-4xl mb-3 text-primary" role="img" aria-label={p.title}>{p.icon}</span>
          <h3 className="font-heading text-xl text-primary mb-2 font-bold">{p.title}</h3>
          <p className="text-gray-900 text-base">{p.desc}</p>
        </div>
      ))}
    </div>
  );
} 