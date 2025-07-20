import Link from 'next/link';
import { getPosts } from '../../lib/sanity';

export const metadata = {
  title: 'Blog | GIVORO',
};

export default async function Blog() {
  const posts = await getPosts();
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      {posts && posts.length ? (
        <ul className="space-y-4">
          {posts.map(p => (
            <li key={p._id}>
              <Link href={`/blog/${p.slug.current}`} className="text-lg font-semibold hover:underline">
                {p.title}
              </Link>
              <p className="text-sm text-gray-600">{p.excerpt}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Coming soon.</p>
      )}
    </main>
  );
}
