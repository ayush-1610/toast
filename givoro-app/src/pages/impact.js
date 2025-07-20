import Layout from '../components/layout/Layout';
import ImpactPillars from '../components/impact/ImpactPillars';

export default function Impact() {
  return (
    <Layout>
      <main className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Impact</h1>
        <ImpactPillars />
      </main>
    </Layout>
  );
}
