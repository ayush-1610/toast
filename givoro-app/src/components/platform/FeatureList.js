const features = [
  'Dashboard for campaign stats',
  'QR tracking and engagement',
  'Automated distribution reporting',
];

export default function FeatureList() {
  return (
    <ul className="list-disc list-inside space-y-2">
      {features.map((f) => (
        <li key={f}>{f}</li>
      ))}
    </ul>
  );
}
