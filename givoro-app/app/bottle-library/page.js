export const metadata = {
  title: 'Bottle Library | GIVORO',
};

const products = [
  { name: 'Water Bottle', image: '/bottle1.jpg' },
  { name: 'Juice Bottle', image: '/bottle2.jpg' },
  { name: 'Custom Merch', image: '/bottle3.jpg' },
];

export default function BottleLibrary() {
  return (
    <main className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Bottle Library</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {products.map((p) => (
          <div key={p.name} className="border p-4 text-center">
            <div className="h-48 bg-gray-100 mb-2" />
            <h2 className="font-semibold">{p.name}</h2>
          </div>
        ))}
      </div>
    </main>
  );
}
