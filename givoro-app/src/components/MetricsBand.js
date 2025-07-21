import React, { useEffect, useRef, useState } from 'react';

const metrics = [
  { label: 'bottles distributed', value: 50000000, prefix: '', suffix: '+' },
  { label: 'total media value generated', value: 7800000000, prefix: '₹', suffix: '' },
  { label: 'tier-1 cities served', value: 28, prefix: '', suffix: '' },
  { label: 'avg. plastic saved/campaign', value: 0.4, prefix: '', suffix: 'kg' },
];

function animateCount(target, duration, callback) {
  let start = 0;
  let startTime = null;
  function animate(ts) {
    if (!startTime) startTime = ts;
    const progress = Math.min((ts - startTime) / duration, 1);
    callback(Math.floor(progress * (target - start) + start));
    if (progress < 1) requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

export default function MetricsBand() {
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(metrics.map(() => 0));
  const ref = useRef();

  useEffect(() => {
    function onScroll() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) setVisible(true);
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      metrics.forEach((m, i) => {
        animateCount(m.value, 1200 + i * 200, (val) => {
          setCounts((prev) => {
            const next = [...prev];
            next[i] = val;
            return next;
          });
        });
      });
    }
  }, [visible]);

  return (
    <div ref={ref} className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      {metrics.map((m, i) => (
        <div key={i} className="flex-1 text-center">
          <div className="text-4xl md:text-5xl font-heading font-extrabold text-accent mb-2">
            {m.prefix}{counts[i].toLocaleString()}{m.suffix}
          </div>
          <div className="text-base md:text-lg text-accent/80 uppercase tracking-wide">{m.label}</div>
        </div>
      ))}
    </div>
  );
}