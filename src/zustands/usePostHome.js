import { create } from "zustand";

const usePostHome = create((set) => ({
  postHome: [],
  setPostHome: (posts) => set({ postHome: posts }),
  clearPostHome: (post) =>
    set((state) => ({
      postHome: state.postHome.filter((p) => p._id !== post._id),
    })),
  updatePostHome: (updatedPost) =>
    set((state) => ({
      postHome: state.postHome.map((post) =>
        post._id === updatedPost?._id ? updatedPost : post
      ),
    })),
}));

export default usePostHome;
