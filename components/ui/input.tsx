'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { Eye, EyeOff } from 'lucide-react'

function Input({ className, type, masked = false, ...props }: React.ComponentProps<'input'> & { masked?: boolean }) {
	const [showValue, setShowValue] = React.useState(!masked)

	return (
		<div className="relative w-full">
			<input
				type={showValue ? type : 'password'}
				data-slot="input"
				className={cn(
					'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
					'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
					'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
					'bg-white',
					className
				)}
				{...props}
			/>

			{masked &&
				(showValue ? (
					<EyeOff className="absolute top-1/2 -translate-y-1/2 right-4" size={20} onClick={() => setShowValue(prev => !prev)} />
				) : (
					<Eye className="absolute top-1/2 -translate-y-1/2 right-4" size={20} onClick={() => setShowValue(prev => !prev)} />
				))}
		</div>
	)
}

export { Input }
