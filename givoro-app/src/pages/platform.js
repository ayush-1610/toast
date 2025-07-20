import Layout from '../components/layout/Layout';
import PlatformIntro from '../components/platform/PlatformIntro';
import FeatureList from '../components/platform/FeatureList';
import HowItWorks from '../components/platform/HowItWorks';

export default function Platform() {
  return (
    <Layout>
      <main className="p-8 max-w-3xl mx-auto">
        <PlatformIntro />
        <FeatureList />
        <div className="mt-4">
          <h2 className="text-2xl font-semibold mb-2">How It Works</h2>
          <HowItWorks />
        </div>
      </main>
    </Layout>
  );
}
