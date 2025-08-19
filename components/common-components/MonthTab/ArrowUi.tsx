import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function ArrowUi({
	leftOnClick,
	RightOnClick,
	text = 'Next',
	className = '',
}: {
	leftOnClick: () => void
	RightOnClick: () => void
	text: string
	className?: string
}) {
	return (
		<button
			className=
				'flex gap-2 items-center text-sm px-1.5 py-2 border justify-between rounded-xl font-normal w-[9rem] shadow-none bg-[#F9FAFB] border-[#E5E7EB] tracking-tight'
		>
			<div onClick={leftOnClick} className="cursor-pointer">
				<CircleArrowLeft size={15}/>
			</div>
			{text}
			<div onClick={RightOnClick} className="cursor-pointer">
				<CircleArrowRight size={15}/>
			</div>
		</button>
	);
}
