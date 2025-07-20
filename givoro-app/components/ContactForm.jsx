'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(data)),
      headers: { 'Content-Type': 'application/json' },
    });
    if (res.ok) {
      setStatus('Thanks for reaching out!');
      e.target.reset();
    } else {
      setStatus('Something went wrong.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
      <input name="name" type="text" placeholder="Name" className="w-full border p-2" required />
      <input name="email" type="email" placeholder="Email" className="w-full border p-2" required />
      <input name="company" type="text" placeholder="Company" className="w-full border p-2" />
      <textarea name="message" placeholder="Message" className="w-full border p-2" rows="4" />
      <div className="flex space-x-2">
        <input name="budget" type="text" placeholder="Budget Range" className="w-full border p-2" />
        <input name="timeline" type="text" placeholder="Timeline" className="w-full border p-2" />
      </div>
      <button type="submit" className="px-4 py-2 bg-accent text-black font-semibold rounded">Send</button>
      {status && <p className="text-sm mt-2" role="status">{status}</p>}
    </form>
  );
}
