'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import useSessionHook from '../useSessionHook/useSessionHook'; // ✅ Import session store

// ------------------------
// Interfaces / Types
// ------------------------
interface Teacher {
  id: string;
  name: string;
  email: string;
  [key: string]: any; // For any extra fields from the teachers table
}

interface TeacherState {
  teacher: Teacher | null;
  fetchTeacher: () => Promise<void>;
}

// ------------------------
// Zustand store
// ------------------------
export const useTeacherHook = create<TeacherState>()(
  persist(
    (set) => ({
      teacher: null,

      // ------------------------
      // Action: Fetch teacher from Supabase
      // ------------------------
      fetchTeacher: async () => {
        const supabase = createClientComponentClient();

        // Get logged-in user from session store
        const { user } = useSessionHook.getState();
        if (!user) {
          console.error('No user found in session store');
          return;
        }

        try {
          // Fetch teacher details from Supabase
          const { data: teacherData, error } = await supabase
            .from('teachers')
            .select('*')
            .eq('email', user.email)
            .single();

          if (error || !teacherData) {
            console.error('Teacher fetch error:', error);
            return;
          }

          // Update Zustand store
          set({ teacher: teacherData });
        } catch (err) {
          console.error('Unexpected error fetching teacher:', err);
        }
      },
    }),
    {
      name: 'teacher-store', // 📝 Persist key in localStorage
    }
  )
);
