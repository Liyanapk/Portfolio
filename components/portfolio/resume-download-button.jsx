"use client"

import { Download } from "lucide-react"
import FlipCoinButton from "@/components/ui/flip-coin-button"

export function ResumeDownloadButton() {
  return (
    <a href="/Liyana-KP-Resume.pdf" download className="inline-flex">
      <FlipCoinButton>
        <span className="inline-flex items-center gap-5">
          {/* <Download className="h-4 w-4" /> */}
          <span>Download Resume</span>
        </span>
      </FlipCoinButton>
    </a>
  )
}
