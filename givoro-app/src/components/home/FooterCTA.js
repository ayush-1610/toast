export default function FooterCTA() {
  return (
    <section className="relative min-h-[420px] flex items-center justify-center bg-black overflow-hidden">
      {/* Background image */}
      <img
        src="/images/work4.jpg"
        alt="Aviation background"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-70 z-0"
        style={{ filter: 'brightness(0.5)' }}
      />
      {/* Overlay for extra darkness */}
      <div className="absolute inset-0 bg-black/70 z-0" />
      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between min-h-[420px]">
        <div className="flex-1 flex flex-col justify-center items-start py-12">
          <div className="text-white text-lg mb-4 font-medium">Ready to create tangible brand moments?</div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">Ready to create tangible brand moments?</h1>
          <p className="text-white/90 text-lg mb-8 max-w-xl">Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text.</p>
        </div>
        <div className="flex-1 flex justify-end items-center w-full md:w-auto">
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-lg border border-white text-white bg-black/60 hover:bg-white hover:text-black transition font-semibold text-lg shadow-lg"
          >
            Book a Consultation
            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
} 