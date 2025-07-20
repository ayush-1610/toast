export default function ContactForm() {
  return (
    <form className="space-y-4">
      <input type="text" placeholder="Name" className="w-full border p-2" required />
      <input type="email" placeholder="Email" className="w-full border p-2" required />
      <textarea placeholder="Message" className="w-full border p-2" rows="4" />
      <button type="submit" className="px-4 py-2 bg-accent text-black font-semibold rounded">Send</button>
    </form>
  );
}
