"use client"

import { Search, Filter, Play, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface PedagogyItem {
  type: "video" | "document"
  title: string
  duration?: string
  size?: string
}

interface PedagogyProps {
  items: PedagogyItem[]
  onAddClick: () => void
}

export function Pedagogy({ items, onAddClick }: PedagogyProps) {
  return (
    <div className="bg-white rounded-xl h-full border border-gray-200 p-4 mx-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
        <h3 className="text-lg font-medium">Pedagogy</h3>
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input placeholder="Search" className="pl-8 h-9 w-[200px] rounded-md" />
          </div>
          <Button variant="ghost" size="icon" className="h-9 w-9">
            <Filter className="h-4 w-4 text-pink-600" />
          </Button>
        </div>
          <Button onClick={onAddClick} className="bg-blue-500 hover:bg-blue-600 h-9">
            + Add
          </Button>
      </div>

      <div className="space-y-0 overflow-y-auto">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between py-3 border-b">
            <div className="flex items-center">
              {item.type === "video" ? <Play className="h-4 w-4 mr-2" /> : <FileText className="h-4 w-4 mr-2" />}
              <span>{item.title}</span>
            </div>
            <div className="text-sm text-gray-500">
              {item.duration && <span className="mr-4">{item.duration}</span>}
              {item.size && <span>{item.size}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
