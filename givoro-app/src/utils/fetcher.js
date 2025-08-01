export async function fetcher(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Network response was not ok');
  return res.json();
}
