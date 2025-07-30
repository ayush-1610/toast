export default function PlatformTeaser() {
  return (
    <section className="py-20 bg-neutral flex justify-center items-center">
      <div className="max-w-6xl w-full mx-auto px-4">
        <div className="bg-[#101014] rounded-xl shadow-2xl flex flex-col md:flex-row items-stretch overflow-hidden border border-gray-800">
          {/* Left: Content */}
          <div className="flex-1 flex flex-col justify-center p-10 md:p-16">
            <span className="inline-block bg-blue-600 text-white text-xs font-bold rounded px-4 py-2 mb-8 tracking-wider">GIVORO PLATFORM</span>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">A smarter platform for real-world engagement</h3>
            <p className="text-lg text-gray-300 mb-6 max-w-xl">
              GIVORO isn’t just a distribution engine. It’s a technology-powered ecosystem that brings programmatic intelligence to offline media.<br/>
              Our platform equips advertisers with the ability to plan, launch, track, and optimize branded utility campaigns — across cities, festivals, and streets.
            </p>
            <p className="text-base text-gray-400 mb-8 max-w-xl">
              With GIVORO, every product hand-off becomes a data point, a conversation starter, and a measurable brand asset.
            </p>
            <a href="/platform" className="inline-flex items-center font-bold text-white bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg shadow text-lg w-max">
              Explore the GIVORO platform
              <span className="ml-2 text-2xl">→</span>
            </a>
          </div>
          {/* Right: Visual */}
          <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-900/60 via-blue-800/40 to-black p-8 md:p-0">
            <img
              src="/images/Creative_technology-min.png"
              alt="GIVORO Platform Visual"
              className="w-[340px] md:w-[420px] h-auto drop-shadow-2xl rounded-2xl"
              style={{ filter: 'brightness(1.2) drop-shadow(0 0 40px #2563eb)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
} 