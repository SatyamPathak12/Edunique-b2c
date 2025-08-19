import { Button } from "@/components/ui/button"

interface UpcomingClassProps {
  time: string
  title: string
  classNumber: string
}

export function UpcomingClass({ time, title, classNumber }: UpcomingClassProps) {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm h-full">
      <h3 className="text-lg font-medium text-pink-500 mb-4 pb-2 border-b-2">Upcoming Class</h3>
      <div className="flex items-center text-[#626262] justify-between mb-2 bg-gray-100 p-3 rounded-lg">
        <div className="text-xl font-bold bg-white p-2 rounded-lg">{time}</div>
        <div className="flex flex-col">
          <span className="font-medium">{title}</span>
          <span className="text-sm text-gray-600">Class {classNumber} •</span>
        </div>
        <Button className="bg-white border-2 border-blue-500 text-blue-500  hover:bg-blue-500 hover:text-white">Start</Button>
      </div>
    </div>
  )
}
