"use client"
import { useEffect, useState, useCallback } from "react"

import LocationBanner from "@/components/LocationBanner"

export default function Home() {
  const [showBanner, setShowBanner] = useState(true)
  // Detect location on mount
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Top bar */}
      <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shrink-0">
        <div>
          <h1 className="text-base font-semibold text-gray-900">
            African Contributor Onboarding Dashboard
          </h1>
          <p className="text-xs text-gray-400">
            Find where your contribution matters most
          </p>
        </div>
        <a
          href="https://www.wikipedia.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-400 hover:text-gray-600"
        >
          Powered by Wikimedia
        </a>
      </header>

      {/* Location banner */}
      {showBanner && (
        <LocationBanner
          onDismiss={() => setShowBanner(false)}
        />
      )}

    </div>
  )
}