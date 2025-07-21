import Head from 'next/head';

export default function Login() {
  return (
    <>
      <Head>
        <title>Login – GIVORO Platform</title>
        <meta name="robots" content="noindex" />
        <meta name="description" content="Login to GIVORO’s platform. This feature will be enabled soon." />
      </Head>
      <main className="p-8 max-w-md mx-auto text-center">
        <h1 className="text-3xl font-heading text-primary mb-4">Welcome back!</h1>
        <p className="mb-6 text-gray-700">Login to GIVORO’s Platform<br/>(Feature coming soon)</p>
        <form className="space-y-4" aria-disabled="true">
          <input type="email" placeholder="Email" className="w-full border p-2 rounded" disabled />
          <input type="password" placeholder="Password" className="w-full border p-2 rounded" disabled />
          <button type="submit" className="px-4 py-2 bg-primary text-white rounded-md opacity-50 cursor-not-allowed" disabled>Login</button>
        </form>
        <div className="mt-4 text-sm text-gray-500">Platform login will be available soon.</div>
      </main>
    </>
  );
}
