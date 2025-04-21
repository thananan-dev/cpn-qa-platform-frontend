import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const authStore = create(
  devtools(
    persist(
      (set) => ({
        user: null,
        token: null,
        isLoggedIn: false,
        saveCredential: (user, token) => set({ user, token, isLoggedIn: true }),
        logout: () => set({ user: null, token: null, isLoggedIn: false }),
      }),
      {
        name: "credential",
      }
    )
  )
);

export default authStore;
