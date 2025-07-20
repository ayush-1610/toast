export const metadata = {
  title: 'Services | GIVORO',
};

const services = [
  'Strategic Campaign Planning',
  'Custom Bottle/Utility Product Design',
  'QR Tracking & Distribution Tech',
  'Campaign Analytics Dashboard',
  'Political and Local Activation Support',
  'Brand Visibility Reporting',
];

export default function Services() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Services</h1>
      <ul className="list-disc list-inside space-y-2">
        {services.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </main>
  );
}
