import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IUserStore {
  id?: string;
  user_name?: string;
  real_name?: string;
  email?: string;
  phone_number?: string;
  is_deleted?: boolean;
  head_pic?: string;
  create_time?: string;
  update_time?: string;
  access_token?: string;
  refresh_token?: string;
  updateState?: (state: Partial<IUserStore>) => void;
}

const initState: IUserStore = {};

const useUserStore = create<IUserStore>()(
  devtools(
    persist(
      set => ({
        ...initState,
        updateState: (data: any) =>
          set((state: any) => {
            Object.keys(data).forEach(key => {
              state[key] = data[key];
            });
            return { ...state };
          })
      }),
      {
        name: "user-store"
      }
    )
  )
);

export { useUserStore };
