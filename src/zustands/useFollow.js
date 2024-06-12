import { create } from "zustand";

const useFollow = create((set) => ({
  following: [],
  setFollowing: (following) => set({ following }),
  follower: [],
  setFollower: (follower) => set({ follower }),
}));

export default useFollow;
