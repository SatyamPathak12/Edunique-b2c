import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TestAnalyticsProps {
  month: string;
  year: number;
  complete: number;
  incomplete: number;
  totalTests: number;
  averageScore: string;
}

export function QuizAnalytics({
  month,
  year,
  complete,
  incomplete,
  totalTests,
  averageScore,
}: TestAnalyticsProps) {
  return (
    <div className="space-y-4 w-full max-w-md">
      {/* Top bar + stats */}
      <div className="bg-[#f6f6f6] rounded-2xl p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Quizes</h3>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm font-semibold">{month} {year}</span>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <p className="text-sm text-gray-600">Complete</p>
            <p className="text-xl font-semibold">{complete}/{totalTests}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Incomplete</p>
            <p className="text-xl font-semibold text-pink-500">{incomplete}</p>
          </div>
        </div>
      </div>

      {/* Average Scores */}
      <div className="bg-[#f6f6f6] rounded-2xl p-4">
        <div className="flex justify-between items-center">
          <p className="text-md font-bold text-black">Average Scores</p>
          <p className="text-lg font-bold text-blue-500">{averageScore}</p>
        </div>
      </div>
    </div>
  );
}
