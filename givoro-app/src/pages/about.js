import WhoWeAre from '../components/about/WhoWeAre';
import WhatWeDo from '../components/about/WhatWeDo';
import WhyWeMatter from '../components/about/WhyWeMatter';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <div className='py-24'>
        <title>About GIVORO – Who We Are & What We Do</title>
        <meta name="description" content="Learn about GIVORO’s mission, team, and why our on-ground marketing approach matters." />
        <meta property="og:title" content="About GIVORO – Who We Are & What We Do" />
        <meta property="og:description" content="Learn about GIVORO’s mission, team, and why our on-ground marketing approach matters." />
      </div>
      <main className="p-8 max-w-3xl mx-auto bg-neutral rounded-2xl shadow-card fade-in-up">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-heading text-primary mb-2">About GIVORO</h1>
          <p className="text-lg text-gray-900">GIVORO emphasizes human connection—engaging real people with product experiences—as a core part of our marketing philosophy.</p>
        </header>
        <WhoWeAre />
        <WhatWeDo />
        <WhyWeMatter />
      </main>
    </>
  );
}
