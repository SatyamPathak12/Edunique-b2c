import { cn } from '@/lib/utils'
import React from 'react'

export default function MaxWidthWrapper({ children, className = '' }: { children: React.ReactNode; className?: string }) {
	return <div className={cn(' max-w-[94rem]  mx-auto', className)}>{children}</div>
}
