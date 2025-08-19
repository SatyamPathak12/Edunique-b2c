// app/principal/PrincipalLayoutWrapper.tsx
"use client";

// import { usePathname } from "next/navigation";
import Navbar from "@/components/b2c-admin/Navbar"
import Footer from '@/components/layout/Footer'
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const AdminB2CLayoutWrapper = ({ children }: Props) => {
    
    const headerUser = {
        name: "Educator Name",
        role: "Teacher",
        avatarSrc: "/principal/profile-image.jpg",
    };
    return (
        <>
           <Navbar user={headerUser}/>
            <div className="bg-[#E3E3E3]">{children}</div>
            <Footer />
        </>
    );
};

export default AdminB2CLayoutWrapper;
