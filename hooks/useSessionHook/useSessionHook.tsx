import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware';


const useSessionHook = create(persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null })
    }),
    {
      name: 'session-store', // storage key
      storage: createJSONStorage(() => localStorage)   // or sessionStorage
    }
  )
)

export default useSessionHook;