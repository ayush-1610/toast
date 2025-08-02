import Head from 'next/head';

export default function Platform() {
  return (
    <div>
      <div className='py-8'>
        <title>GIVORO Platform – Built to Perform, Designed to Convert</title>
        <meta name="description" content="GIVORO’s modular ad-tech platform gives you complete control — from creative design to street-level delivery to live ROI tracking." />
        <meta property="og:title" content="GIVORO Platform – Built to Perform, Designed to Convert" />
        <meta property="og:description" content="GIVORO’s modular ad-tech platform gives you complete control — from creative design to street-level delivery to live ROI tracking." />
      </div>
      <main className=" min-h-screen w-full text-black">
        {/* Hero Block / Headline Area */}
        <section className="max-w-5xl mx-auto pt-24 pb-16 px-4 text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Built to Perform, Designed to Convert</h1>
          <p className="text-lg md:text-2xl text-black max-w-2xl mb-10">GIVORO’s modular ad-tech platform gives you complete control — from creative design to street-level delivery to live ROI tracking.</p>
          {/* Placeholder for hero visual/animation */}
          <div className="w-full h-48 md:h-64 bg-gradient-to-r from-blue-900/30 via-blue-600/10 to-yellow-400/10 rounded-2xl flex items-center justify-center mb-4">
            {/* Place for hero image/animation */}
            <span className="text-gray-700 opacity-40">[Hero Visual Placeholder]</span>
          </div>
        </section>

        {/* Real-Time Dashboards */}
        <section className="max-w-4xl mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Live KPI Dashboards</h2>
            <p className="text-gray-800 mb-6">Track every campaign touchpoint across a single event or a 100+ zone rollout — all in real time.</p>
          </div>
          <div className="flex-1 flex items-center justify-center min-h-[200px] bg-[#18181c] rounded-xl border border-[#23232a]">
            {/* Placeholder for dashboard image/animation */}
            <span className="text-gray-700 opacity-40">[Dashboard Visual]</span>
          </div>
        </section>

        {/* Platform Summary */}
        <section className="max-w-4xl mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 flex items-center justify-center min-h-[200px] bg-[#18181c] rounded-xl border border-[#23232a]">
            {/* Placeholder for platform summary image/animation */}
            <span className="text-gray-700 opacity-40">[Platform Visual]</span>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">One Platform. Infinite Possibilities.</h2>
            <p className="text-gray-800 mb-2">From branded impressions to scan heatmaps to geographic reach — monitor everything.</p>
            <p className="text-gray-800">With modular controls to plan, adapt, and optimize on-ground impact at scale.</p>
          </div>
        </section>

        {/* Data-Backed Campaigning */}
        <section className="max-w-4xl mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Data-Powered On-Ground Advertising</h2>
            <p className="text-gray-800 mb-2">Launch campaigns that think for themselves. QR tech + utility handouts + precision targeting.</p>
            <p className="italic text-yellow-400">“It’s programmatic media, reimagined for the real world.”</p>
          </div>
          <div className="flex-1 flex items-center justify-center min-h-[200px] bg-[#18181c] rounded-xl border border-[#23232a]">
            {/* Placeholder for data/QR visual */}
            <span className="text-gray-700 opacity-40">[QR/Data Visual]</span>
          </div>
        </section>

        {/* 5-Step Flow: From Idea to Impact */}
        <section className="max-w-5xl mx-auto py-20 px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">From Idea to Impact — in 5 Steps</h2>
          <div className="grid md:grid-cols-5 gap-8">
            <div className="bg-[#18181c] rounded-xl border border-[#23232a] p-6 flex flex-col items-center text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">1</div>
              <div className="font-semibold mb-1 text-gray-100">Pick a Product</div>
              <div className="text-gray-300 text-sm">Choose your utility item: water bottles, juices, kits, or something custom.</div>
            </div>
            <div className="bg-[#18181c] rounded-xl border border-[#23232a] p-6 flex flex-col items-center text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">2</div>
              <div className="font-semibold mb-1 text-gray-100">Design & Upload</div>
              <div className="text-gray-300 text-sm">Upload your brand artwork — we handle printing, prepping, and packaging.</div>
            </div>
            <div className="bg-[#18181c] rounded-xl border border-[#23232a] p-6 flex flex-col items-center text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">3</div>
              <div className="font-semibold mb-1 text-gray-100">Set Goals</div>
              <div className="text-gray-300 text-sm">Choose audience segments, geographies, scan metrics, and lead capture forms.</div>
            </div>
            <div className="bg-[#18181c] rounded-xl border border-[#23232a] p-6 flex flex-col items-center text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">4</div>
              <div className="font-semibold mb-1 text-gray-100">Launch with Liveboards</div>
              <div className="text-gray-300 text-sm">Deploy campaigns across multiple delivery zones with real-time scan + heatmap tracking.</div>
            </div>
            <div className="bg-[#18181c] rounded-xl border border-[#23232a] p-6 flex flex-col items-center text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">5</div>
              <div className="font-semibold mb-1 text-gray-100">Automated Optimization</div>
              <div className="text-gray-300 text-sm">Our system auto-adjusts routes and batch sizes for max reach and conversion.</div>
            </div>
          </div>
        </section>

        {/* Placeholder for future: testimonials, logos, or more visuals */}
        <section className="max-w-5xl mx-auto py-16 px-4 text-center">
          <div className="w-full h-40 bg-gradient-to-r from-yellow-400/10 via-blue-600/10 to-blue-900/30 rounded-2xl flex items-center justify-center">
            <span className="text-gray-700 opacity-40">[More Visuals/Testimonials/Logos Placeholder]</span>
          </div>
        </section>
      </main>
    </div>
  );
}
