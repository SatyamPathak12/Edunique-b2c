# Authentication Documentation

## Fetching current logged in user: :-
```typescript
    import useSessionHook from "@/hooks/useSessionHook/useSessionHook";
    const activeUser = useSessionHook.getState().user;
```

## Fetching principal details (if logged in as principal) :-
```typescript
    import { usePrincipalHook } from "@/hooks/usePrincipalHook/usePrincipalHook";
    const {
        principal,              // Logged-in principal's info
        school,                 // Array of schools created by the principal
        teachers,               // List of teachers
        numberOfTeachers,       // Total teacher count
        numberOfStudents,       // Total student count
        students,               // Student list
        studentTabs,            // Unique grades/classes
        studentPerformanceData, // Avg score & top performer per grade
        studentPerformanceTab,  // Current selected grade tab
        fetchPrincipalData      // Function to load all above data
        } = usePrincipalHook();
```

## Fetching teacher deatails (if logged in as teacher) :-
```typescript
    import { useTeacherHook } from "@/hooks/useTeacherHook/useTeacherHook";
    const {
        teacher,       // Logged-in teacher's details
        fetchTeacher   // Function to fetch teacher info from Supabase
    } = useTeacherHook();
```

## Fetching student details (if logged in as student) :-
```typescript
    import useStudentsHook from "@/hooks/useStudentsHook/useStudentsHook";
    const {
        student,       // Logged-in student's details
        loading,       // Boolean indicating if fetch is in progress
        error,         // Error message if fetch fails
        fetchStudent,  // Function to fetch student info from Supabase
        clearStudent   // Function to clear student data from the store
    } = useStudentsHook();
```