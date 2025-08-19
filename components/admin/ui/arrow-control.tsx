'use client'

import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ArrowControl({
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
    <div
      className={`flex items-center gap-2.5 text-sm border border-[#E5E7EB] text-black bg-[#F9FAFB] px-3 py-2 rounded-xl ${className}`}
    >
      <CircleArrowLeft
        className="w-4 h-4 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation()
          leftOnClick()
        }}
      />
      <span className="min-w-[40px] text-center font-medium">{text}</span>
      <CircleArrowRight
        className="w-4 h-4 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation()
          RightOnClick()
        }}
      />
    </div>
  )
}
