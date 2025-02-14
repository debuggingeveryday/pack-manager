import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type IItemStore = {
  item: any,
  addItem: () => void
}

export const useItemStore = create<IItemStore>()(
  persist(
    (set, get) => ({
      item: [],
      addItem: () => set((state) => ({item: {...state.item}}))
    }),
    {
      name: 'item-store', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)
