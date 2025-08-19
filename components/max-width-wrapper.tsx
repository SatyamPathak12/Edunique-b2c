'use client'

import { cn } from '@/lib/utils'

export default function MaxWidthWrapper({ children, className = '' }: { children: React.ReactNode; className?: string }) {
	return (
		<div className="relative min-h-screen w-full overflow-hidden">
			{/* Background Layer */}
			<div
				className="absolute inset-0 bg-center bg-repeat z-0"
				style={{
					backgroundImage: "url('/Background2.png')",
					backgroundSize: '600px',
					filter: 'grayscale(10%) brightness(1.1) blur(0.5px)',
					opacity: 0.3,
				}}></div>
			{/* Bluish Overlay */}
			<div
				className="absolute inset-0 bg-[#517dfe] z-0"
				style={{
					opacity: 0.78, // increase to make it more blue
					mixBlendMode: 'multiply', // try "multiply" or "soft-light" too
				}}></div>

			{/* Content */}
			<div className={cn('relative z-10 max-w-screen-xl mx-auto px-4', className)}>{children}</div>
		</div>
	)
}
