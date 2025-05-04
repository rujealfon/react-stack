import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';
import { fetchPosts } from '../lib/api';
import type { Post } from '../lib/store';
import { usePostStore } from '../lib/store';

export const Route = createFileRoute('/sample-tanstack-zustand')({
  component: SampleTanstackZustand,
});

function SampleTanstackZustand() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    // staleTime: 0, // Data is always considered stale
    // refetchOnMount: 'always', // Always refetch when component mounts
  });
  const posts = usePostStore((state) => state.posts);
  const setPosts = usePostStore((state) => state.setPosts);

  // Sync TanStack Query results to Zustand
  useEffect(() => {
    if (data) setPosts(data);
  }, [data, setPosts]);

  return (
    <div style={{ padding: 24 }}>
      <h1>Sample: TanStack Query + Zustand</h1>
      <h2>Fetched via TanStack Query</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{String(error)}</p>}
      <ul>
        {data?.map((post: Post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <br />
            <span>{post.body}</span>
          </li>
        ))}
      </ul>
      <hr />
      <h2>Posts from Zustand Store</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <br />
            <span>{post.body}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
