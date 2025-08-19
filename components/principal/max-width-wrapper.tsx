import { cn } from '@/lib/utils'
import React from 'react'

export default function MaxWidthWrapper({ children, className = '' }: { children: React.ReactNode; className?: string }) {
	return <div className={cn('container px-4 mx-auto', className)}>{children}</div>
}
