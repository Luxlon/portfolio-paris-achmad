"use client"
import { useState } from "react"
import { Download } from "lucide-react"

export default function DownloadButton() {
  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      // download file dari public/
      const link = document.createElement("a")
      link.href = "/cv Paris Achmad Fauzan.pdf"
      link.download = "CV_Paris_Achmad_Fauzan.pdf"
      link.click()
    }, 2000)
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg 
                 bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-900
                 text-white font-medium shadow-md 
                 hover:from-neutral-700 hover:via-neutral-600 hover:to-neutral-800 
                 transition disabled:opacity-50"
    >
      {loading ? (
        <span className="animate-pulse">Loading...</span>
      ) : (
        <>
          <Download className="w-4 h-4" />
          Download CV
        </>
      )}
    </button>
  )
}
