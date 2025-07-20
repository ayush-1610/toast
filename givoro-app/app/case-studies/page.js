export const metadata = {
  title: 'Case Studies | GIVORO',
};

const cases = [
  {
    title: 'Pune Political Outreach 2024',
    problem: 'Low visibility in local wards',
    solution: '12,000 branded water bottles across 10 stalls over 5 days with live scan tracking',
    results: '11,200 scans, 21% re-scan rate, QR survey collected 450+ email leads',
  },
];

export default function CaseStudies() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Case Studies</h1>
      {cases.map((c) => (
        <article key={c.title} className="mb-6">
          <h2 className="text-2xl font-semibold">{c.title}</h2>
          <p><strong>Problem:</strong> {c.problem}</p>
          <p><strong>Solution:</strong> {c.solution}</p>
          <p><strong>Results:</strong> {c.results}</p>
        </article>
      ))}
    </main>
  );
}
