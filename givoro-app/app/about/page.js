import Image from 'next/image';
import { getTeam } from '../../lib/sanity';

export const metadata = {
  title: 'About | GIVORO',
};

export default async function About() {
  const team = await getTeam();
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">GIVORO is building a new kind of advertising — one that’s useful, traceable, and designed to leave an impression. We help brands reach people where it matters most: their hands.</p>
      <p className="mb-8">To make every branded product serve two purposes: utility and influence. We deliver visibility that moves, informs, and converts.</p>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Leadership</h2>
        {team && team.length ? (
          <ul className="space-y-6">
            {team.map(member => (
              <li key={member._id} className="flex space-x-4">
                {member.image && (
                  <Image src={member.image} alt={member.name} width={80} height={80} className="rounded-full" />
                )}
                <div>
                  <h3 className="font-semibold">{member.name}</h3>
                  <p className="text-sm text-gray-600">{member.role}</p>
                  <p className="text-sm mt-1">{member.bio}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Team information coming soon.</p>
        )}
      </section>
    </main>
  );
}
