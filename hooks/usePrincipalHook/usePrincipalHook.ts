import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import useSessionHook from "@/hooks/useSessionHook/useSessionHook";

interface PrincipalState {
  principal: any | null;
  teachers: any[];
  school: any[];
  numberOfTeachers: number;
  numberOfStudents: number;
  students: any[];
  studentTabs: string[];
  studentPerformanceData: any[];
  studentPerformanceTab: string;
  fetchPrincipalData: () => Promise<void>;
}

export const usePrincipalHook = create<PrincipalState>()(
  persist(
    (set) => ({
      principal: null,
      teachers: [],
      school: [],
      numberOfTeachers: 0,
      numberOfStudents: 0,
      students: [],
      studentTabs: [],
      studentPerformanceData: [],
      studentPerformanceTab: "",

      fetchPrincipalData: async () => {
        const supabase = createClientComponentClient();
        let activeUser = useSessionHook.getState().user;
        const setUser = useSessionHook.getState().setUser;

        // 🛑 If no user in Zustand → fetch from Supabase
        if (!activeUser) {
          const { data, error } = await supabase.auth.getUser();
          if (error || !data.user) {
            console.error("No user found", error);
            return;
          }
          activeUser = data.user;
          setUser(activeUser);
        }

        console.log("Logged in user:", activeUser);

        // 2️⃣ Fetch principal
        const { data: principalData, error: principalError } = await supabase
          .from("principals")
          .select("*")
          .eq("email", activeUser.email)
          .single();

        if (principalError || !principalData) {
          console.error("Principal fetch error", principalError);
          return;
        }
        set({ principal: principalData });

        // 3️⃣ Fetch school
        const { data: schoolData, error: schoolError } = await supabase
          .from("schools")
          .select("*")
          .eq("created_by", principalData.user_id);

        if (schoolError) {
          console.error("School fetch error", schoolError);
          return;
        }
        if (!schoolData?.length) return;
        set({ school: schoolData });

        const schoolId = schoolData[0].id;

        // 4️⃣ Count students
        const { count: studentCount, error: studentError } = await supabase
          .from("students")
          .select("*", { count: "exact", head: true })
          .eq("school_id", schoolId);

        if (studentError) console.error("Error counting students:", studentError);
        else set({ numberOfStudents: studentCount || 0 });

        // 5️⃣ Count teachers
        const { data: teacherData, count: teacherCount, error: teacherError } =
          await supabase
            .from("teachers")
            .select("*", { count: "exact" })
            .eq("school_id", schoolId);

        if (teacherError) console.error("Error counting teachers:", teacherError);
        else {
          set({ numberOfTeachers: teacherCount || 0, teachers: teacherData || [] });
        }

        // 6️⃣ Dummy avgScore & progress
        const teachersWithExtra = (teacherData ?? []).map((teacher) => ({
          ...teacher,
          avgScore: Math.floor(Math.random() * 50) + 50,
          progress: "+5%",
        }));

        // 7️⃣ Fetch students
        const { data: studentsData, error: studentsError } = await supabase
          .from("students")
          .select("id, name, grade")
          .eq("school_id", schoolId);

        if (studentsError) return;
        if (!studentsData) return;
        set({ students: studentsData });

        // 8️⃣ Grades
        const grades = [...new Set(studentsData.map((s) => s.grade))].sort(
          (a, b) => a - b
        );
        set({
          studentTabs: grades,
          studentPerformanceTab: grades[0] || "",
        });

        // 9️⃣ Student performance per grade
        const grouped = grades.map((grade) => {
          const studentsInGrade = studentsData.filter((s) => s.grade === grade);
          const avgScore = (Math.random() * 40 + 60).toFixed(1);
          const topPerformer =
            studentsInGrade[Math.floor(Math.random() * studentsInGrade.length)]
              ?.name || "-";
          return { id: grade, class: grade, avgScore, topPerformer };
        });

        set({ studentPerformanceData: grouped });
      },
    }),
    {
      name: "principal-storage", // 🔑 localStorage key
      partialize: (state) => ({
        principal: state.principal,
        teachers: state.teachers,
        school: state.school,
        numberOfTeachers: state.numberOfTeachers,
        numberOfStudents: state.numberOfStudents,
        students: state.students,
        studentTabs: state.studentTabs,
        studentPerformanceData: state.studentPerformanceData,
        studentPerformanceTab: state.studentPerformanceTab,
      }),
    }
  )
);
