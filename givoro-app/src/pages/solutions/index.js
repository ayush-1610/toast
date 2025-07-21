import SolutionsGrid from '../../components/solutions/SolutionsGrid';
import Head from 'next/head';

export default function Solutions() {
  return (
    <>
      <Head>
        <title>GIVORO Solutions – Experiential Marketing Services</title>
        <meta name="description" content="Explore GIVORO’s on-ground marketing solutions: sampling, outdoor ads, QR engagement, and analytics." />
        <meta property="og:title" content="GIVORO Solutions – Experiential Marketing Services" />
        <meta property="og:description" content="Explore GIVORO’s on-ground marketing solutions: sampling, outdoor ads, QR engagement, and analytics." />
      </Head>
      <main className="p-8 max-w-4xl mx-auto bg-neutral rounded-2xl shadow-card fade-in-up">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-heading text-primary mb-2">Our Solutions</h1>
          <p className="text-lg text-gray-900">GIVORO’s offerings span physical and outdoor marketing channels—street-level activations, QR engagement, and data-driven analytics.</p>
        </header>
        <SolutionsGrid />
      </main>
    </>
  );
}
