"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface Question {
  id: number
  text: string
  options: string[]
  correctAnswers: number[]
  points: number
}

interface TestQuestionnaireFormProps {
  onPrevious: () => void
  onSave: () => void
  onReview: () => void
}

export function TestQuestionnaireForm({ onPrevious, onSave, onReview }: TestQuestionnaireFormProps) {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      text: "C# Test 1",
      options: ["C# Test 1", "C# Test 1", "C# Test 1", "C# Test 1"],
      correctAnswers: [1, 2],
      points: 4,
    },
    {
      id: 2,
      text: "C# Test 1",
      options: ["C# Test 1", "C# Test 1", "C# Test 1", "C# Test 1"],
      correctAnswers: [1],
      points: 4,
    },
  ])

  const addQuestion = () => {
    const newQuestion: Question = {
      id: questions.length + 1,
      text: "",
      options: ["", "", "", ""],
      correctAnswers: [],
      points: 1,
    }
    setQuestions([...questions, newQuestion])
  }

  const updateQuestionText = (id: number, text: string) => {
    setQuestions(questions.map((q) => (q.id === id ? { ...q, text } : q)))
  }

  const updateOptionText = (questionId: number, optionIndex: number, text: string) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === questionId) {
          const newOptions = [...q.options]
          newOptions[optionIndex] = text
          return { ...q, options: newOptions }
        }
        return q
      }),
    )
  }

  const toggleCorrectAnswer = (questionId: number, optionIndex: number) => {
    setQuestions(
      questions.map((q) => {
        if (q.id === questionId) {
          let newCorrectAnswers = [...q.correctAnswers]
          if (newCorrectAnswers.includes(optionIndex)) {
            newCorrectAnswers = newCorrectAnswers.filter((a) => a !== optionIndex)
          } else {
            newCorrectAnswers.push(optionIndex)
          }
          return { ...q, correctAnswers: newCorrectAnswers }
        }
        return q
      }),
    )
  }

  const updatePoints = (questionId: number, points: number) => {
    setQuestions(questions.map((q) => (q.id === questionId ? { ...q, points } : q)))
  }

  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Create Test Manually</h3>

      <div className="space-y-8">
        <h4 className="text-sm font-medium">Questions</h4>

        {questions.map((question, index) => (
          <div key={question.id} className="border-b pb-8 mb-8">
            <div className="flex items-start mb-4">
              <div className="mr-2 font-medium">{index + 1}.</div>
              <Input
                value={question.text}
                onChange={(e) => updateQuestionText(question.id, e.target.value)}
                placeholder="Question"
                className="flex-1"
              />
            </div>

            <div className="ml-6">
              <div className="flex justify-between items-center mb-2">
                <h5 className="text-sm font-medium">Options</h5>
                <div className="flex items-center">
                  <span className="text-sm mr-2">NO. of Options</span>
                  <Select value="4" onValueChange={() => {}}>
                    <SelectTrigger className="w-16">
                      <SelectValue placeholder="4" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="mb-2">
                  <div className="flex items-center mb-1">
                    <span className="text-sm text-gray-600 w-20">Option {optionIndex + 1}</span>
                    <Input
                      value={option}
                      onChange={(e) => updateOptionText(question.id, optionIndex, e.target.value)}
                      placeholder={`Option ${optionIndex + 1}`}
                    />
                  </div>
                </div>
              ))}

              <div className="mt-4">
                <h5 className="text-sm font-medium mb-2">Select Correct Answer</h5>
                <div className="flex items-center space-x-4">
                  {question.options.map((_, optionIndex) => (
                    <label key={optionIndex} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={question.correctAnswers.includes(optionIndex)}
                        onChange={() => toggleCorrectAnswer(question.id, optionIndex)}
                        className="mr-1 h-4 w-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                      />
                      <span className="text-sm">Option {optionIndex + 1}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <h5 className="text-sm font-medium">Points</h5>
                <Select
                  value={question.points.toString()}
                  onValueChange={(value) => updatePoints(question.id, Number.parseInt(value))}
                >
                  <SelectTrigger className="w-16">
                    <SelectValue placeholder="1" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-end">
          <Button onClick={addQuestion} variant="link" className="text-pink-500">
            <Plus className="h-4 w-4 mr-2" />
            Add More
          </Button>
        </div>
      </div>

      <div className="flex justify-end space-x-2 mt-8">
        <Button variant="outline" onClick={onPrevious}>
          Cancel
        </Button>
        <Button variant="outline" onClick={onSave}>
          Save
        </Button>
        <Button onClick={onReview} className="bg-blue-500 hover:bg-blue-600">
          Review
        </Button>
      </div>
    </div>
  )
}
