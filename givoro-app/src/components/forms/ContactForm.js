import { useState } from 'react';

export default function ContactForm({ setStep }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [showTooltip, setShowTooltip] = useState(false);
  const [animClass, setAnimClass] = useState('animate-fade-in');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (setStep) setStep(0.5); // halfway when typing
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAnimClass('animate-fade-out');
    if (setStep) setStep(1); // complete
    setTimeout(() => setSubmitted(true), 400);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-6 text-center shadow-md animate-fade-in">
        <p className="font-bold text-lg mb-1">Thank you!</p>
        <p>We’ll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form className={`space-y-6 relative ${animClass}`} onSubmit={handleSubmit} aria-label="Contact form">
      <div>
        <label htmlFor="name" className="block text-base font-semibold text-gray-800 mb-2">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Full Name"
          className="w-full rounded-2xl border border-gray-300 px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow-sm"
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div className="relative">
        <label htmlFor="email" className="block text-base font-semibold text-gray-800 mb-2">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Email address"
          className="w-full rounded-2xl border border-gray-300 px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow-sm"
          value={form.email}
          onChange={handleChange}
          onFocus={() => setShowTooltip(true)}
          onBlur={() => setShowTooltip(false)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        />
        {showTooltip && (
          <div className="absolute left-0 top-full mt-2 bg-gray-900 text-white text-xs rounded px-3 py-2 shadow-lg z-10 animate-fade-in">
            We'll never share your email with anyone else.
          </div>
        )}
      </div>
      <div>
        <label htmlFor="message" className="block text-base font-semibold text-gray-800 mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="How can we get better?"
          className="w-full rounded-2xl border border-gray-300 px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition placeholder-gray-400 shadow-sm resize-none"
          rows={4}
          value={form.message}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 rounded-2xl bg-blue-600 text-white font-bold text-base shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Send message
      </button>
    </form>
  );
}

// Animations (add to your global CSS if not present)
// .animate-fade-in { animation: fadeIn 0.4s; }
// .animate-fade-out { animation: fadeOut 0.4s; }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
