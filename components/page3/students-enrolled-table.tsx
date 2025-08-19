import Image from "next/image"

interface Student {
  id: string
  name: string
  avatar: string
  date: string
  exam1: number
  exam2: number
  total: string
}

interface StudentsEnrolledTableProps {
  students: Student[]
}

export function StudentsEnrolledTable({ students }: StudentsEnrolledTableProps) {
  return (
    <div className="bg-white rounded-lg">
      <h3 className="text-lg font-medium mb-4">Students Enrolled</h3>
      <div className="overflow-y-auto max-h-[400px]">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="text-left text-gray-600">
              <th className="py-3 px-4 font-medium">Student name</th>
              <th className="py-3 px-4 font-medium">Date</th>
              <th className="py-3 px-4 font-medium text-center">Exam 1</th>
              <th className="py-3 px-4 font-medium text-center">Exam 2</th>
              <th className="py-3 px-4 font-medium text-center">Total</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id} className={`${index % 2 === 0 ? "bg-blue-50" : "bg-white"} hover:bg-gray-50`}>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <Image
                      src={"/page3/dashboard/stprofile.png"}
                      alt={student.name}
                      width={32}
                      height={32}
                      className="rounded-full mr-3"
                    />
                    <span>{student.name}</span>
                  </div>
                </td>
                <td className="py-3 px-4">{student.date}</td>
                <td className="py-3 px-4 text-center">{student.exam1}</td>
                <td className="py-3 px-4 text-center">{student.exam2}</td>
                <td className="py-3 px-4 text-center">{student.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
