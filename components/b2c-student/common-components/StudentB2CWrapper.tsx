'use client'


export default function StudentB2CWrapper({ children }: { children: React.ReactNode; }) {
    return (
        <div className="bg-[#e3e3e3]">
            <div className="relative max-w-[90rem] mx-auto min-h-screen w-full p-2 md:p-4 lg:px-10 lg:py-6 overflow-hidden bg-[#e3e3e3]">
                {children}
            </div>
        </div>
    )
}
