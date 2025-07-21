import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/hero/Hero';
// New components to be created:
import WorkCarousel from '../components/WorkCarousel';
import CapabilitiesStrip from '../components/CapabilitiesStrip';
import MetricsBand from '../components/MetricsBand';
import InsightsGrid from '../components/InsightsGrid';
import BrandValues from '../components/BrandValues';
import ClientLogos from '../components/ClientLogos';
import CareersSlice from '../components/CareersSlice';

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-neutral min-h-screen">
        {/* Hero / Brand Proposition */}
        <section id="hero" className="relative">
          <Hero />
        </section>
        {/* 2-Column Image/Text Section (Hogarth-style) */}
        <section className="max-w-7xl mx-auto py-20 px-4 flex flex-col md:flex-row items-center gap-12 fade-in-up">
          <div className="flex-1 flex flex-col gap-8">
            <div>
              <h4 className="text-2xl font-heading text-primary mb-2">Making the future</h4>
              <p className="text-lg text-gray-900">At Hogarth Worldwide, we bring the best in human craft and technology together with creative, commerce and media to deliver seamless content experiences at scale. We’re not waiting for the future of content production - we’re making it.</p>
            </div>
            <div>
              <h4 className="text-2xl font-heading text-primary mb-2">Making the future</h4>
              <p className="text-lg text-gray-900">At Hogarth Worldwide, we bring the best in human craft and technology together with creative, commerce and media to deliver seamless content experiences at scale. We’re not waiting for the future of content production - we’re making it.</p>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/images/hogarth-future.png"
              alt="Hogarth logo"
              className="rounded-xl shadow-lg object-cover w-full max-w-xs md:max-w-sm"
              width={251}
              height={335}
              loading="lazy"
            />
          </div>
        </section>
        {/* By The Numbers Section */}
        <section className="bg-primary text-accent py-28">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">The world's most connected media company</h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-neutral opacity-90">Our work for the world's leading brands drives growth that fuels the global economy, shapes culture across countries, and brings frontier technology development to life</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="stat bg-secondary p-6 rounded-xl transition-transform duration-300 hover:-translate-y-2">
                <p className="text-5xl font-bold mb-2">40k+</p>
                <p className="font-semibold">Media experts</p>
                <p className="text-sm text-neutral opacity-80 mt-1">Planning media strategy and managing business outcomes</p>
              </div>
              <div className="stat bg-secondary p-6 rounded-xl transition-transform duration-300 hover:-translate-y-2">
                <p className="text-5xl font-bold mb-2">160</p>
                <p className="font-semibold">Offices in over 80 markets</p>
                <p className="text-sm text-neutral opacity-80 mt-1">From Auckland to San Francisco, and Cape Town to Reykjavik</p>
              </div>
              <div className="stat bg-secondary p-6 rounded-xl transition-transform duration-300 hover:-translate-y-2">
                <p className="text-5xl font-bold mb-2">$65B</p>
                <p className="font-semibold">In managed media</p>
                <p className="text-sm text-neutral opacity-80 mt-1">Trusted to drive ROI by the world's leading brands</p>
              </div>
            </div>
          </div>
        </section>
        {/* Signature Work / Case-Study Carousel */}
        <section id="work" className="max-w-7xl mx-auto py-24 px-4">
          <WorkCarousel />
        </section>
        {/* Capabilities Three-Pillar Strip */}
        <section id="capabilities" className="max-w-6xl mx-auto py-20 px-4">
          <CapabilitiesStrip />
        </section>
        {/* Impact Metrics Band (Dark Mode) */}
        <section id="impact" className="w-full py-20 bg-primary text-accent">
          <MetricsBand />
        </section>
        {/* Insights / Thought-Leadership Teaser */}
        <section id="insights" className="max-w-6xl mx-auto py-20 px-4">
          <InsightsGrid />
        </section>
        {/* Brand Values “Why We Matter” */}
        <section id="brand-values" className="w-full py-20">
          <BrandValues />
        </section>
        {/* Client Logo Carousel */}
        <section id="clients" className="max-w-7xl mx-auto py-20 px-4">
          <ClientLogos />
        </section>
        {/* Culture & Careers Slice */}
        <section id="careers" className="max-w-7xl mx-auto py-20 px-4">
          <CareersSlice />
        </section>
      </main>
      <Footer />
    </>
  );
}