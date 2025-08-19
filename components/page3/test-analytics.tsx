
import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";

interface TestAnalyticsProps {
  month: string;
  year: number;
  complete: number;
  incomplete: number;
  totalTests: number;
  averageScore: string;
}

export function TestAnalytics({

  complete,
  incomplete,
  totalTests,
  averageScore,
}: TestAnalyticsProps) {
  return (
    <div className="space-y-4 w-full p-4 max-w-md border border-[#E5E7EB] rounded-2xl bg-white">
      {/* Top bar + stats */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-md  sm:text-lg font-medium">Assesment</h3>
          <div className="flex items-center gap-2.5 text-sm border border-[#E5E7EB] text-black bg-[#F9FAFB] px-3 py-2 rounded-xl">
            <FiArrowLeftCircle className="w-4 h-4 cursor-pointer hover:text-black" />
            <span>June 2025</span>
            <FiArrowRightCircle className="w-4 h-4 cursor-pointer hover:text-black" />
          </div>
        </div>

        <div className="flex justify-between mx-2">
          <div className="flex flex-col justify-center items-center">
            <p className="text-md text-[#6B7280]">Complete</p>
            <p className="text-md font-semibold">
              {complete}/{totalTests}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-md text-[#6B7280]">Incomplete</p>
            <p className="text-md font-semibold text-[#FF3366]">{incomplete}</p>
          </div>
        </div>
      </div>

      {/* Average Scores */}
      <div className="bg-[#F3F4F6] rounded-2xl p-4 py-3">
        <div className="flex justify-between items-center">
          <p className="text-sm sm:text-md text-[#6B7280]">Average Scores</p>
          <p className="text-sm  sm:text-md font-medium text-[#3366FF]">{averageScore}</p>
        </div>
      </div>
    </div>
  );
}
