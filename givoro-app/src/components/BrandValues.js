import React from 'react';

const values = [
  {
    color: 'bg-primary text-accent',
    verb: 'Open',
    copy: 'We share campaign data in real time—no black boxes. Transparency is our default, so clients always know what’s happening and why.'
  },
  {
    color: 'bg-accent text-primary',
    verb: 'Optimistic',
    copy: 'We see every bottle as a chance to delight. Every campaign is an opportunity to create positive, memorable experiences for real people.'
  },
  {
    color: 'bg-secondary text-accent',
    verb: 'Extraordinary',
    copy: 'We merge street-scale reach with precision analytics. Our work is only extraordinary if it delivers both scale and measurable results.'
  },
];

export default function BrandValues() {
  return (
    <div className="flex flex-col md:flex-row w-full">
      {values.map((v, i) => (
        <div key={i} className={`flex-1 min-h-[220px] flex flex-col justify-center items-center p-10 ${v.color}`}>
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">{v.verb}</h3>
          <p className="max-w-md text-base md:text-lg opacity-90 text-center">{v.copy}</p>
        </div>
      ))}
    </div>
  );
} 