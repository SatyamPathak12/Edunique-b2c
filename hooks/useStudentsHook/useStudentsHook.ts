'use client'

import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import useSessionHook from '../useSessionHook/useSessionHook' // ✅ Import session store

interface Student {
  id: string
  name: string
  email: string
  // Add other fields from "students" table
}

interface StudentState {
  student: Student | null
  loading: boolean
  error: string | null
  fetchStudent: () => Promise<void>
  clearStudent: () => void
}

const supabase = createClientComponentClient()

const useStudentsHook = create<StudentState>()(
  persist(
    (set) => ({
      student: null,
      loading: false,
      error: null,

      fetchStudent: async () => {
        set({ loading: true, error: null })

        // ✅ Get user from session store
        const { user } = useSessionHook.getState()

        if (!user) {
          set({ error: 'No active session found.', loading: false })
          return
        }

        // 2️⃣ Fetch student data from DB
        const { data: studentData, error: studentError } = await supabase
          .from('students')
          .select('*')
          .eq('email', user.email)
          .single()

        if (studentError || !studentData) {
          console.error('Error fetching student data:', studentError)
          set({
            error: studentError?.message || 'Unable to fetch student data',
            loading: false,
          })
          return
        }

        set({ student: studentData, loading: false })
      },

      clearStudent: () => set({ student: null }),
    }),
    {
      name: 'student-storage', // 🔑 key in localStorage
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ student: state.student }), // ✅ Only persist student, not loading/error
    }
  )
)

export default useStudentsHook
