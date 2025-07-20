const pillars = [
  'Audience Development',
  'Product Launches',
  'ROI & Attribution',
];

export default function ImpactPillars() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {pillars.map((p) => (
        <div key={p} className="border p-4 text-center rounded">{p}</div>
      ))}
    </div>
  );
}
