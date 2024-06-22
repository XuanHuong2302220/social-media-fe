import { create } from "zustand";

const usePost = create((set) => ({
  post: null,
  setPost: (newPost) => set({ post: newPost }),
  likes: {}, // Initialize likes as an object
  setLikes: (postId, newLikes) =>
    set((state) => ({
      likes: {
        ...state.likes,
        [postId]: newLikes,
      },
    })),
  comments: {},
  setComments: (postId, newComments) =>
    set((state) => ({
      comments: {
        ...state.comments,
        [postId]: newComments,
      },
    })),
  updatedPost: (updatedPost) =>
    set((state) => {
      if (state.post && state.post._id === updatedPost._id) {
        return { post: updatedPost };
      }
      return { post: state.post };
    }),
}));

export default usePost;
