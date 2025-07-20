import Layout from '../components/layout/Layout';
import WhoWeAre from '../components/about/WhoWeAre';
import WhatWeDo from '../components/about/WhatWeDo';
import WhyWeMatter from '../components/about/WhyWeMatter';

export default function About() {
  return (
    <Layout>
      <div className="p-8 max-w-3xl mx-auto">
        <WhoWeAre />
        <WhatWeDo />
        <WhyWeMatter />
      </div>
    </Layout>
  );
}
