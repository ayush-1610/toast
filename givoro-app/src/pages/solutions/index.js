import Layout from '../../components/layout/Layout';
import SolutionsGrid from '../../components/solutions/SolutionsGrid';

export default function Solutions() {
  return (
    <Layout>
      <main className="p-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Solutions</h1>
        <SolutionsGrid />
      </main>
    </Layout>
  );
}
