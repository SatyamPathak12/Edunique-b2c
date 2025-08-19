'use client'


export default function TeacherB2CWrapper({ children }: { children: React.ReactNode; }) {
    return (
        <div className="bg-[#e3e3e3]">
            <div className="relative max-w-[96rem] mx-auto min-h-screen w-full px-2 py-6 md:p-4 lg:px-10 lg:py-6 overflow-hidden bg-[#e3e3e3]">
                {children}
            </div>
        </div>
    )
}
