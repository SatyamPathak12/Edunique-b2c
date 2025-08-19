import Image from "next/image"
import { Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TeacherProfileProps {
  name: string
  designation: string
  rating: number
  group: string
  dob: string
  experience: string
  qualification: string[]
  school: string
  unavailable: string
}

export function TeacherProfile({
  name,
  designation,
  rating,
  group,
  dob,
  experience,
  qualification,
  school,
  unavailable,
}: TeacherProfileProps) {
  return (
    <div className="flex items-start justify-between p-6 bg-white rounded-lg shadow-sm">
      <div className="flex gap-4">
        <div className="relative">
          <Image src="/placeholder-user.png" alt={name} width={80} height={80} className="rounded-full" />
        </div>
        <div>
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-sm text-gray-600">Designation: {designation}</p>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={i < rating ? "#FFD700" : "none"}
                stroke="#FFD700"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
            <span className="ml-1 text-sm text-gray-600">{rating} Star Rating</span>
          </div>
          <div className="mt-2">
            <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-md px-4 py-1 text-sm">{group}</Button>
          </div>
        </div>
      </div>

      <div className="flex-1 ml-8">
        <div className="grid grid-cols-1 gap-1 text-sm">
          <p className="whitespace-nowrap">
            <span className="font-medium">DOB:</span> {dob}
          </p>
          <p className="whitespace-nowrap">
            <span className="font-medium">Experience:</span> {experience}
          </p>
          {qualification.map((qual, index) => (
            <p key={index} className="whitespace-nowrap">
              <span className="font-medium">Qualification:</span> {qual}
            </p>
          ))}
          <p className="whitespace-nowrap">
            <span className="font-medium">School Name:</span> {school}
          </p>
          <p className="whitespace-nowrap">
            <span className="font-medium">Unavailable On:</span> {unavailable}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <Image
          src="/placeholder-user.png"
          alt="Teacher Video"
          width={120}
          height={100}
          className="rounded-lg mb-2 object-cover"
        />
        <p className="text-sm font-medium">Demo Video</p>
        <Button variant="ghost" size="icon" className="absolute top-4 right-4">
          <Pencil className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
