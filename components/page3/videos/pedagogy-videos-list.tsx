import { Play } from "lucide-react"

const pedagogyVideos = [
  {
    id: "1",
    class: "Class 5",
    subject: "Maths",
    topic: "FRACTIONS",
    description: "Word Problems on Addition and Subtraction of Proper & Improper Fractions and Mixed Numbers",
    date: "12/05/2025",
  },
  {
    id: "2",
    class: "Class 5",
    subject: "Maths",
    topic: "FRACTIONS",
    description: "Word Problems on Addition and Subtraction of Proper & Improper Fractions and Mixed Numbers",
    date: "12/05/2025",
  },
  {
    id: "3",
    class: "Class 5",
    subject: "Maths",
    topic: "FRACTIONS",
    description: "Word Problems on Addition and Subtraction of Proper & Improper Fractions and Mixed Numbers",
    date: "12/05/2025",
  },
  {
    id: "4",
    class: "Class 5",
    subject: "Maths",
    topic: "FRACTIONS",
    description: "Word Problems on Addition and Subtraction of Proper & Improper Fractions and Mixed Numbers",
    date: "12/05/2025",
  },
  {
    id: "5",
    class: "Class 5",
    subject: "Maths",
    topic: "FRACTIONS",
    description: "Word Problems on Addition and Subtraction of Proper & Improper Fractions and Mixed Numbers",
    date: "12/05/2025",
  },
]

export function PedagogyVideosList() {
  return (
    <div className="space-y-4">
      {pedagogyVideos.map((video) => (
        <div key={video.id} className="border rounded-lg p-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium">{video.class}</h3>
              <p className="text-sm">
                {video.subject} - <span className="font-bold">{video.topic}</span>
              </p>
              <p className="text-sm">Topic - {video.description}</p>
              <p className="text-sm">Date: {video.date}</p>
            </div>

            <div className="flex items-center">
              <button className="rounded-full bg-gray-100 h-10 w-10 flex items-center justify-center">
                <Play className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
