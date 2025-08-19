"use client";

import StudentNavbar from "./student-navbar";
import StudentNavbarNew from "./student-navbar-new";

export default function StudentWrapper({
  children,
  student = false,
  activeState,
}: {
  children: React.ReactNode;
  student?: boolean;
  activeState?: string;
}) {
  return (
    <div>
      {student ? <StudentNavbarNew activeState={activeState}/> : <StudentNavbar activeState={activeState}/>}
      {children}
    </div>
  );
}
