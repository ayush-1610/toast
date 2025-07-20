export const metadata = {
  title: 'Contact | GIVORO',
};

export default function Contact() {
  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full border p-2" required />
        <input type="email" placeholder="Email" className="w-full border p-2" required />
        <input type="text" placeholder="Company" className="w-full border p-2" />
        <textarea placeholder="Message" className="w-full border p-2" rows="4"></textarea>
        <button type="submit" className="px-4 py-2 bg-accent text-black font-semibold rounded">Send</button>
      </form>
    </main>
  );
}
