"use client";
import React from "react";
import StudentSidebarWrapper from "@/components/student-sidebar-wrapper";
import ProfileFormComponent from "./profile-component";


const StudentProfileForm = () => {

  return (
    <StudentSidebarWrapper>
      <ProfileFormComponent />
    </StudentSidebarWrapper>
  );
};

export default StudentProfileForm;
