import Image from "next/image"
import { Play, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const referenceVideos = [
  {
    id: "1",
    title: "Unitary Method concepts",
    description:
      "Unitary method is an important topic for maths. Unitary method is must to understand. Learn how to find the value of one item",
    thumbnail: "/placeholder.svg?height=200&width=300",
    class: "Class 5",
    uploadedOn: "2/05/2025",
  },
  {
    id: "2",
    title: "Unitary Method concepts",
    description:
      "Unitary method is an important topic for maths. Unitary method is must to understand. Learn how to find the value of one item",
    thumbnail: "/placeholder.svg?height=200&width=300",
    class: "Class 5",
    uploadedOn: "2/05/2025",
  },
  {
    id: "3",
    title: "Unitary Method concepts",
    description:
      "Unitary method is an important topic for maths. Unitary method is must to understand. Learn how to find the value of one item",
    thumbnail: "/placeholder.svg?height=200&width=300",
    class: "Class 5",
    uploadedOn: "2/05/2025",
  },
  {
    id: "4",
    title: "Unitary Method concepts",
    description:
      "Unitary method is an important topic for maths. Unitary method is must to understand. Learn how to find the value of one item",
    thumbnail: "/placeholder.svg?height=200&width=300",
    class: "Class 5",
    uploadedOn: "2/05/2025",
  },
]

export function ReferenceVideoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {referenceVideos.map((video) => (
        <div key={video.id} className="border rounded-lg overflow-hidden">
          <div className="relative">
            <div className="relative h-[200px] w-full">
              <Image src={"/page3/video-card.png"} alt={video.title} fill className="object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-pink-500 rounded-full p-3 cursor-pointer">
                  <Play className="h-6 w-6 text-white" />
                </div>
              </div>

              <div className="absolute bottom-0 right-0 bg-gray-800 text-white text-xs px-2 py-1 m-2">13:55</div>
            </div>
          </div>

          <div className="p-4">
            <h3 className="font-medium">{video.title}</h3>
            <p className="text-sm text-gray-600 mt-1 line-clamp-3">{video.description}</p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-xs text-gray-500">Uploaded on: {video.uploadedOn}</p>
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-red-500">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
