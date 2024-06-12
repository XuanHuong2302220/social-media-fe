import { create } from "zustand";

const useLikePost = create((set) => ({
  likes: [],
  setLike: (like) => set({ likes: like }),
}));

export default useLikePost;
