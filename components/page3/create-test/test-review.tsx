"use client"

import { Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TestReviewProps {
  testData: {
    title: string
    description: string
    scheduledFor: string
    batch: string
    time: string
    totalPoints: number
    passPoints: number
    expiryDate: string
  }
  questions: {
    id: number
    text: string
    options: string[]
    correctAnswers: string
    points: number
  }[]
  onEdit: () => void
  onCancel: () => void
  onSave: () => void
  onPublish: () => void
}

export function TestReview({ testData, questions, onEdit, onCancel, onSave, onPublish }: TestReviewProps) {
  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Review</h3>

      <div className="border-b pb-6 mb-6">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold">{testData.title}</h2>
            <p className="text-gray-600 mt-2">{testData.description}</p>
          </div>
          <Button variant="ghost" size="icon" onClick={onEdit}>
            <Pencil className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-4 text-sm">
          <div>
            <span className="text-gray-600">Scheduled for:</span>{" "}
            <span className="text-pink-500">{testData.scheduledFor}</span>
          </div>
          <div>
            <span className="text-gray-600">Batch:</span> {testData.batch}
          </div>
          <div>
            <span className="text-gray-600">Time:</span> {testData.time}
          </div>
          <div>
            <span className="text-gray-600">Total Point:</span> {testData.totalPoints}
          </div>
          <div>
            <span className="text-gray-600">Pass at:</span> {testData.passPoints}
          </div>
          <div>
            <span className="text-gray-600">Expiry Date:</span> {testData.expiryDate}
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <h4 className="text-lg font-medium">Questions</h4>

        {questions.map((question, index) => (
          <div key={question.id} className="border-b pb-6 mb-6">
            <div className="flex justify-between items-start">
              <h3 className="font-medium">
                {index + 1}. {question.text}
              </h3>
              <Button variant="ghost" size="icon" onClick={onEdit}>
                <Pencil className="h-4 w-4" />
              </Button>
            </div>

            <div className="mt-4 ml-6">
              <h5 className="text-sm font-medium mb-2">Options</h5>
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="mb-2">
                  <div className="text-sm">
                    <span className="text-gray-600">Option {optionIndex + 1}:</span> {option}
                  </div>
                </div>
              ))}

              <div className="mt-4 flex justify-between">
                <div>
                  <span className="text-sm text-gray-600">Correct Answer:</span>{" "}
                  <span className="text-sm">{question.correctAnswers}</span>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Points:</span>{" "}
                  <span className="text-sm">{question.points}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end space-x-2 mt-8">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="outline" onClick={onSave}>
          Save
        </Button>
        <Button onClick={onPublish} className="bg-blue-500 hover:bg-blue-600">
          Publish
        </Button>
      </div>
    </div>
  )
}
