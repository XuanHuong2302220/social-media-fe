import { create } from "zustand";

const useComment = create((set) => ({
  comment: null,
  setComment: (comment) => set({ comment }),
  replyComments: [],
  setReplyComments: (replyComments) => set({ replyComments }),
}));
export default useComment;
