"use client"
import { useState } from "react"
import NeumorphButton from "../ui/buttoncult"
import { Download } from "lucide-react"

export default function NeumorphButtonDemo() {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  return (
    <div className="flex justify-center w-full">
      <NeumorphButton
        intent="blackwhite"
        loading={loading}
        onClick={handleClick}
        className="rounded-full px-6 py-3 flex items-center gap-2"
      >
        {loading ? "Loading..." : (
          <>
            <Download className="w-4 h-4" />
            Download CV
          </>
        )}
      </NeumorphButton>
    </div>
  )
}
