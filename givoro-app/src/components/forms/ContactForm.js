import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Here you would send the form data to your backend or email service
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 text-green-800 rounded p-4 text-center">
        <p className="font-semibold mb-1">Thank you!</p>
        <p>We’ll be in touch shortly.</p>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit} aria-label="Contact form">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
        <input id="name" name="name" type="text" required placeholder="Your Name" className="w-full border p-2 rounded" value={form.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
        <input id="company" name="company" type="text" placeholder="Your Company (optional)" className="w-full border p-2 rounded" value={form.company} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
        <input id="email" name="email" type="email" required placeholder="your@email.com" className="w-full border p-2 rounded" value={form.email} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
        <input id="phone" name="phone" type="tel" placeholder="Your Phone (optional)" className="w-full border p-2 rounded" value={form.phone} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How can we help you? *</label>
        <textarea id="message" name="message" required placeholder="How can we help you?" className="w-full border p-2 rounded" rows={4} value={form.message} onChange={handleChange} />
      </div>
      <button type="submit" className="px-4 py-2 bg-accent text-black font-semibold rounded hover:bg-primary hover:text-white transition-colors">Send Message</button>
    </form>
  );
}
