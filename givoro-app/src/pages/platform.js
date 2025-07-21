import PlatformIntro from '../components/platform/PlatformIntro';
import FeatureList from '../components/platform/FeatureList';
import HowItWorks from '../components/platform/HowItWorks';
import Head from 'next/head';

export default function Platform() {
  return (
    <>
      <Head>
        <title>GIVORO Platform – Real-World Campaign Tracking & Analytics</title>
        <meta name="description" content="Discover GIVORO’s tech platform: real-time dashboard, geo-tracking, automation, ROI analytics, and CRM integration." />
        <meta property="og:title" content="GIVORO Platform – Real-World Campaign Tracking & Analytics" />
        <meta property="og:description" content="Discover GIVORO’s tech platform: real-time dashboard, geo-tracking, automation, ROI analytics, and CRM integration." />
      </Head>
      <main className="p-8 max-w-4xl mx-auto bg-neutral rounded-2xl shadow-card fade-in-up">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-heading text-primary mb-2">Technology Platform</h1>
          <p className="text-lg text-gray-900">Our platform connects the dots between real-world interactions and digital follow-up. Monitor, analyze, and optimize every campaign in real time.</p>
        </header>
        <section className="mb-8">
          <PlatformIntro />
          <h2 className="text-2xl font-heading text-primary mb-4 mt-8">Key Features</h2>
          <FeatureList />
        </section>
        <hr className="my-10 border-gray-200" />
        <section>
          <h2 className="text-2xl font-heading text-primary mb-4">How It Works</h2>
          <HowItWorks />
        </section>
      </main>
    </>
  );
}
