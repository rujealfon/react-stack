import { create } from 'zustand';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostState {
  posts: Post[];
  // eslint-disable-next-line no-unused-vars
  setPosts: (posts: Post[]) => void;
}

export const usePostStore = create<PostState>((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
}));
