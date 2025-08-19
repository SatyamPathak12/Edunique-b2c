// app/principal/PrincipalLayoutWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ReactNode } from "react";
import PrincipalHeader from "./layout/PrincipalHeader";

interface Props {
    children: ReactNode;
}

const PrincipalLayoutWrapper = ({ children }: Props) => {
    const pathname = usePathname();

    // Check if it's the specific route
    const hideLayout = pathname.startsWith("/principal/registration");
   
    return (
        <>
             {!hideLayout && <PrincipalHeader />}
            <div className="bg-gray-100">{children}</div>
            {!hideLayout && <Footer />}
        </>
    );
};

export default PrincipalLayoutWrapper;
