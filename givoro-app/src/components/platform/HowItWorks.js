const steps = [
  'Choose your product',
  'Production & Branding',
  'Distribution with QR tracking',
  'Monitor data in dashboard',
  'Optimize and repeat',
];

export default function HowItWorks() {
  return (
    <ol className="list-decimal list-inside space-y-2">
      {steps.map((s) => (
        <li key={s}>{s}</li>
      ))}
    </ol>
  );
}
