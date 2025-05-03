import { create } from 'zustand';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostState {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
}

export const usePostStore = create<PostState>((set) => ({
  posts: [],
  setPosts: (posts) => set({ posts }),
}));
