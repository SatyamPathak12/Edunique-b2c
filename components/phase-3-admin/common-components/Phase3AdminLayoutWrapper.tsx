// app/principal/PrincipalLayoutWrapper.tsx
"use client";

// import { usePathname } from "next/navigation";
import Footer from '@/components/layout/Footer'
import { ReactNode } from "react";
import Navbar from './Navbar';

interface Props {
    children: ReactNode;
}

const Phase3AdminLayoutWrapper = ({ children }: Props) => {
    
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

export default Phase3AdminLayoutWrapper;
