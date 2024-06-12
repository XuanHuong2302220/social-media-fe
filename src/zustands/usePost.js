import { create } from "zustand";

const usePost = create((set) => ({
  posts: [],
  setPost: (post) => set({ posts: post }),
}));

export default usePost;
