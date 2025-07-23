import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/hero/Hero';
import ServicesTiles from '../components/home/ServicesTiles';
import MetricsGrid from '../components/home/MetricsGrid';
import PlatformTeaser from '../components/home/PlatformTeaser';
import InsightsTeaser from '../components/home/InsightsTeaser';
import FooterCTA from '../components/home/FooterCTA';


export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-neutral min-h-screen">
        {/* Hero Section */}
        <Hero />
        {/* Services at a Glance */}
        <ServicesTiles />
        {/* Our Scale & Capability */}
        <MetricsGrid />
        {/* Platform Teaser */}
        <PlatformTeaser />
        {/* Insights Teaser */}
        <InsightsTeaser />
        {/* Footer CTA */}
        <FooterCTA />
      </main>
      <Footer />
    </>
  );
}