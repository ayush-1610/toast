import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact GIVORO – Get in Touch</title>
        <meta name="description" content="Contact GIVORO for partnership, support, or questions. Fill out the form or reach us via email, phone, or LinkedIn." />
        <meta property="og:title" content="Contact GIVORO – Get in Touch" />
        <meta property="og:description" content="Contact GIVORO for partnership, support, or questions. Fill out the form or reach us via email, phone, or LinkedIn." />
      </Head>
      <div className="relative min-h-screen flex flex-col items-center justify-center bg-neutral py-32 px-4">
        {/* Subtle background image */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <img
            src="/images/Creative_technology-min.png"
            alt="Tech Illustration"
            className="opacity-10 w-3/4 max-w-4xl mx-auto object-contain select-none"
            style={{ filter: 'blur(2px)' }}
          />
        </div>
        {/* Main content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">How can we help?</h1>
            <h2 className="text-lg md:text-2xl text-gray-700 font-medium max-w-2xl mx-auto">Get in touch with our sales and support teams for demos, onboarding support, or product questions.</h2>
          </div>
          {/* Cards Row */}
          <div className="flex flex-col md:flex-row gap-8 w-full justify-center mb-16">
            {/* Sales Card */}
            <div className="flex-1 bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col gap-4 border border-gray-200 min-w-[260px] max-w-md">
              <div className="flex items-center gap-3 text-blue-600 text-lg font-bold">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M19.5 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-10.5A2.25 2.25 0 0 1 4.5 17.25V6.75A2.25 2.25 0 0 1 6.75 4.5h10.5A2.25 2.25 0 0 1 19.5 6.75Z" stroke="currentColor" strokeWidth="1.5"/><path d="M7.5 8.25h9M7.5 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                Sales
              </div>
              <p className="text-gray-700">Speak to our sales team about plans, pricing, enterprise contracts, or request a demo.</p>
              <a href="mailto:info@givoro.com" className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors text-sm">Talk to sales <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M5.47 11.47a.75.75 0 0 0 1.06 1.06l4-4a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 1 0-1.06 1.06L8.44 8l-2.97 2.97Z" fill="currentColor"/></svg></a>
            </div>
            {/* Support Card */}
            <div className="flex-1 bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col gap-4 border border-gray-200 min-w-[260px] max-w-md">
              <div className="flex items-center gap-3 text-blue-600 text-lg font-bold">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 21c4.97 0 9-3.582 9-8 0-4.418-4.03-8-9-8s-9 3.582-9 8c0 4.418 4.03 8 9 8Z" stroke="currentColor" strokeWidth="1.5"/><path d="M9.5 10.5a2.5 2.5 0 1 1 5 0c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5Z" stroke="currentColor" strokeWidth="1.5"/><path d="M12 13v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                Help & Support
              </div>
              <p className="text-gray-700">Ask product questions, report problems, or leave feedback.</p>
              <a href="mailto:support@givoro.com" className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors text-sm">Contact support <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M5.47 11.47a.75.75 0 0 0 1.06 1.06l4-4a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 1 0-1.06 1.06L8.44 8l-2.97 2.97Z" fill="currentColor"/></svg></a>
            </div>
          </div>
          {/* Lower resources/info section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mt-8">
            <div className="bg-white/80 rounded-2xl shadow p-6 flex flex-col gap-2 border border-gray-100">
              <span className="font-bold text-gray-900">Join the community</span>
              <span className="text-gray-700 text-sm">More than 10,000 GIVORO users share questions and best practices in our Slack community.</span>
              <a href="#" className="text-blue-600 font-semibold text-sm mt-2 inline-flex items-center gap-1 hover:underline">Join Slack <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M7.18 3.89a.75.75 0 0 0-.13 1.49l2.3.21-4.88 4.88a.75.75 0 0 0 1.06 1.06l4.88-4.88.21 2.3a.75.75 0 1 0 1.49-.14l-.35-3.89a.75.75 0 0 0-.68-.68l-3.89-.35Z" fill="currentColor"/></svg></a>
            </div>
            <div className="bg-white/80 rounded-2xl shadow p-6 flex flex-col gap-2 border border-gray-100">
              <span className="font-bold text-gray-900">General communication</span>
              <span className="text-gray-700 text-sm">For other queries, please get in touch with us via email.</span>
              <a href="mailto:info@givoro.com" className="text-blue-600 font-semibold text-sm mt-2 inline-flex items-center gap-1 hover:underline"><svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M11 2c1.4 0 2.1.00007 2.63.27.47.24.85.62 1.09 1.09.27.53.28 1.23.28 2.63v4c0 1.4-.01 2.1-.28 2.63-.24.47-.62.85-1.09 1.09C1.07 12.23 1.02 11.74 1 10.93V6c0-1.23.00002-1.92.18-2.43.09-.21.41-.56.82-.8C2.9 2 3.6 2 5 2h6Zm-1.97 5.68c-.61.45-1.44.45-2.06 0L2.53 4.45c-.001.01-.002.02-.003.03C2.5 4.82 2.5 5.28 2.5 6v4c0 .72.001 1.18.03 1.52.03.32.07.41.08.43.1.19.25.34.44.43.02.01.11.05.43.08.34.03.8.03 1.52.03h6c.72 0 1.18-.001 1.52-.03.32-.03.41-.07.43-.08.19-.09.34-.24.44-.43.01-.02.05-.11.08-.43.03-.34.03-.8.03-1.52V6c0-.72-.001-1.18-.03-1.52-.01-.1-.02-.2-.03-.3l-4.44 3.23ZM5 3.5c-.53 0-.91.001-1.21.01l4.06 2.95c.09.06.21.06.3 0l4.06-2.95C11.91 3.5 11.53 3.5 11 3.5H5Z" fill="currentColor"/></svg>info@givoro.com</a>
            </div>
            <div className="bg-white/80 rounded-2xl shadow p-6 flex flex-col gap-2 border border-gray-100">
              <span className="font-bold text-gray-900">Documentation</span>
              <span className="text-gray-700 text-sm">Get an overview of GIVORO's features, integrations, and how to use them.</span>
              <a href="#" className="text-blue-600 font-semibold text-sm mt-2 inline-flex items-center gap-1 hover:underline">GIVORO Docs <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M5.47 11.47a.75.75 0 0 0 1.06 1.06l4-4a.75.75 0 0 0 0-1.06l-4-4a.75.75 0 1 0-1.06 1.06L8.44 8l-2.97 2.97Z" fill="currentColor"/></svg></a>
            </div>
            <div className="bg-white/80 rounded-2xl shadow p-6 flex flex-col gap-2 border border-gray-100">
              <span className="font-bold text-gray-900">Developers</span>
              <span className="text-gray-700 text-sm">Learn how to use the GIVORO API and SDK to extend our platform.</span>
              <a href="#" className="text-blue-600 font-semibold text-sm mt-2 inline-flex items-center gap-1 hover:underline">GIVORO API <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M7.18 3.89a.75.75 0 0 0-.13 1.49l2.3.21-4.88 4.88a.75.75 0 0 0 1.06 1.06l4.88-4.88.21 2.3a.75.75 0 1 0 1.49-.14l-.35-3.89a.75.75 0 0 0-.68-.68l-3.89-.35Z" fill="currentColor"/></svg></a>
            </div>
          </div>
          {/* Status bar */}
          <div className="flex justify-center mt-12">
            <a href="#" className="flex items-center gap-2 text-blue-600 text-xs font-medium hover:underline">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" clipRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.78-8.57a.88.88 0 0 0-.04-1.2.77.77 0 0 0-1.13.04L7.15 9.19 5.33 7.48a.77.77 0 0 0-1.13.07.88.88 0 0 0 .07 1.2l2.01 1.9c.54.51 1.36.47 1.86-.09l3.64-4.12Z"/></svg>
              All systems operational
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
