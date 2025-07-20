export const metadata = {
  title: 'Careers | GIVORO',
};

const jobs = [
  'Campaign Ops Manager',
  'Brand Designer',
  'Sales & Partnerships Executive',
];

export default function Careers() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Careers</h1>
      <p className="mb-4">Join a new-era ad-tech company where creativity meets on-ground precision.</p>
      <ul className="list-disc list-inside space-y-2">
        {jobs.map((job) => (
          <li key={job}>{job}</li>
        ))}
      </ul>
    </main>
  );
}
