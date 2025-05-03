// Simple API fetcher for demonstration
export async function fetchPosts() {
  // Example: use JSONPlaceholder
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  if (!res.ok) throw new Error('Failed to fetch posts');
  return res.json();
}
