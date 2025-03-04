import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type Theme = "light" | "dark";

interface IAppStore {
  theme: Theme;
  toggleTheme: (theme: Theme) => void;
}

const useAppStore = create<IAppStore>()(
  devtools(
    persist(
      set => ({
        theme: "light",
        toggleTheme: (theme: Theme) => set(() => ({ theme: theme }))
      }),
      {
        name: "app-store"
      }
    )
  )
);

export { useAppStore };
