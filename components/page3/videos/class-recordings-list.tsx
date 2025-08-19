import { Play, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const classRecordings = [
  {
    id: "1",
    class: "Class 3",
    subject: "Maths",
    topic: "Number Systems",
    period: 6,
    date: "12/05/2025",
    shared: false,
  },
  {
    id: "2",
    class: "Class 3",
    subject: "Maths",
    topic: "Number Systems",
    period: 5,
    date: "11/05/2025",
    shared: false,
  },
  {
    id: "3",
    class: "Class 3",
    subject: "Maths",
    topic: "Number Systems",
    period: 4,
    date: "10/05/2025",
    shared: true,
  },
  {
    id: "4",
    class: "Class 3",
    subject: "Maths",
    topic: "Number Systems",
    period: 3,
    date: "9/05/2025",
    shared: true,
  },
  {
    id: "5",
    class: "Class 3",
    subject: "Maths",
    topic: "Number Systems",
    period: 2,
    date: "8/05/2025",
    shared: true,
  },
  {
    id: "6",
    class: "Class 3",
    subject: "Maths",
    topic: "Number Systems",
    period: 2,
    date: "7/05/2025",
    shared: true,
  },
]

export function ClassRecordingsList() {
  return (
    <div className="space-y-4">
      {classRecordings.map((recording) => (
        <div key={recording.id} className="border rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">{recording.class}</h3>
              <p className="text-sm">
                {recording.subject} - <span className="font-bold">{recording.topic}</span>
              </p>
              <p className="text-sm">
                Period - <span className="text-pink-500 font-medium">{recording.period}</span>
              </p>
              <p className="text-sm">Date: {recording.date}</p>
            </div>

            <div className="flex items-center space-x-2">
              {recording.shared ? (
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs flex items-center">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Shared
                </div>
              ) : (
                <Button variant="outline" size="sm" className="flex items-center gap-1 text-blue-500 border-blue-500">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </Button>
              )}

              <Button variant="ghost" size="icon" className="rounded-full bg-gray-100 h-10 w-10">
                <Play className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
