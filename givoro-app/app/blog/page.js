export const metadata = {
  title: 'Blog | GIVORO',
};

const posts = [];

export default function Blog() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      {posts.length ? (
        <ul className="space-y-4">{posts.map(p => <li key={p.title}>{p.title}</li>)}</ul>
      ) : (
        <p>Coming soon.</p>
      )}
    </main>
  );
}
