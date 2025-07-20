import Image from 'next/image';

export const metadata = {
  title: 'Bottle Library | GIVORO',
};

const products = [
  { name: 'Water Bottle', image: 'https://picsum.photos/id/1080/300/300' },
  { name: 'Juice Bottle', image: 'https://picsum.photos/id/1079/300/300' },
  { name: 'Custom Merch', image: 'https://picsum.photos/id/1074/300/300' },
];

export default function BottleLibrary() {
  return (
    <main className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Bottle Library</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {products.map((p) => (
          <div key={p.name} className="border p-4 text-center rounded">
            <Image src={p.image} alt={p.name} width={300} height={300} className="object-cover mb-2" />
            <h2 className="font-semibold">{p.name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
