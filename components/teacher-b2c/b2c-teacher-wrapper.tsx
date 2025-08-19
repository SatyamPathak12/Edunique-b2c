'use client'

import { cn } from '@/lib/utils'

export default function B2CTeacherWrapper({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-gray-100">
            <div className={cn('relative z-10 container mx-auto bg-white px-4', className)}>{children}
            </div>
        </div>
    )
}
