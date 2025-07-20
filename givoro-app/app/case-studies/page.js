import { getCaseStudies } from '../../lib/sanity';
import CaseStudyCard from '../../components/CaseStudyCard';

export const metadata = {
  title: 'Case Studies | GIVORO',
};

export default async function CaseStudies() {
  const cases = await getCaseStudies();
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Case Studies</h1>
      {cases && cases.length ? (
        cases.map(c => (
          <CaseStudyCard key={c._id} {...c} />
        ))
      ) : (
        <p>More case studies will be added soon.</p>
      )}
    </main>
  );
}
