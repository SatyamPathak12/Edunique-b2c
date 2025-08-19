"use client"

import type React from "react"

import { useState } from "react"
import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface AddVideoDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddVideoDialog({ open, onOpenChange }: AddVideoDialogProps) {
  const [selectedClass, setSelectedClass] = useState("Class 3")
  const [topicName, setTopicName] = useState("")
  const [videoUrl, setVideoUrl] = useState("")
  const [uploadedFile, setUploadedFile] = useState<string | null>(null)
  const [description, setDescription] = useState("")

  const handleSubmit = () => {
    // Handle form submission
    console.log({
      selectedClass,
      topicName,
      videoUrl,
      uploadedFile,
      description,
    })

    // Reset form and close dialog
    resetForm()
    onOpenChange(false)
  }

  const resetForm = () => {
    setSelectedClass("Class 3")
    setTopicName("")
    setVideoUrl("")
    setUploadedFile(null)
    setDescription("")
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0].name)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Add Video</DialogTitle>
        </DialogHeader>

        <div className="space-y-2 py-2">
          <div>
            <label className="block text-sm font-medium mb-1">Select Class</label>
            <Select value={selectedClass} onValueChange={setSelectedClass}>
              <SelectTrigger>
                <SelectValue placeholder="Select class" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Class 1">Class 1</SelectItem>
                <SelectItem value="Class 2">Class 2</SelectItem>
                <SelectItem value="Class 3">Class 3</SelectItem>
                <SelectItem value="Class 4">Class 4</SelectItem>
                <SelectItem value="Class 5">Class 5</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Enter Topic Name</label>
            <Input
              value={topicName}
              onChange={(e) => setTopicName(e.target.value)}
              placeholder="Unitary Method concepts"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Enter Url</label>
            <Input
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=4MWBdsY0iOo"
            />
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-500">or</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Upload file</label>
            <div className="border rounded-md p-2 flex items-center">
              <label className="flex items-center cursor-pointer">
                <div className="bg-pink-100 text-pink-500 p-2 rounded-md mr-2">
                  <Upload className="h-5 w-5" />
                </div>
                <input type="file" className="hidden" onChange={handleFileChange} accept="video/*" />
              </label>
              <span className="text-sm text-gray-500 flex-1 truncate">{uploadedFile || "No file selected"}</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Write a Description</label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description Here...."
              rows={4}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white" onClick={handleSubmit}>
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
