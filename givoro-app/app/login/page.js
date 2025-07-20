export const metadata = {
  title: 'Login | GIVORO',
};

export default function Login() {
  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form className="space-y-4">
        <input type="email" placeholder="Email" className="w-full border p-2" required />
        <input type="password" placeholder="Password" className="w-full border p-2" required />
        <button type="submit" className="px-4 py-2 bg-black text-white rounded">Login</button>
      </form>
    </main>
  );
}
