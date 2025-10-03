import { create } from "zustand";

export const useBlogStore = create((set) => ({
  id: sessionStorage.getItem("blogId") || null,
  setId: (id) => {
    sessionStorage.setItem("blogId", id);
    set({ id });
  },
}));
