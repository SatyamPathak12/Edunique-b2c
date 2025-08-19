interface ClassCompletionProgressProps {
    percentage: number
    studentsEnrolled: number
    averageScores: string
  }
  
  export function ClassCompletionProgress({ percentage, studentsEnrolled, averageScores }: ClassCompletionProgressProps) {
    return (
      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="flex justify-between">
          <div className="w-full pr-4">
            <h3 className="text-lg font-medium mb-1 text-[#1D5851]">Class Completion Progress</h3>
            <p className="text-lg font-bold">{percentage} %</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <div className="bg-[#1D5851] h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
            </div>
          </div>
          <div className="border-gray-400 pl-4 border-l-2 grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col">
              <p className="text-xl text-gray-600 font-bold">{studentsEnrolled}</p>
              <p className="text-sm text-[#1D5851]">Students Enrolled</p>
            </div>
            <div className="flex flex-col">
              <p className="text-xl text-gray-600 font-bold">{averageScores}</p>
              <p className="text-sm text-[#1D5851]">Average Scores</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  