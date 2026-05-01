"use client"

import { useState, useCallback } from "react"
import dynamic from "next/dynamic"
import { AfricanCountry, Task } from "@/types"
import { fetchTasks } from "@/lib/api"
import CountryPanel from "@/components/CountryPanel"

// Dynamically import map to avoid SSR issues with react-simple-maps
const AfricaMap = dynamic(() => import("@/components/AfricaMap"), { ssr: false })

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState<AfricanCountry | null>(null)
  const [tasks, setTasks] = useState<Task[]>([])
  const [tasksLoading, setTasksLoading] = useState(false)

  const loadTasks = useCallback(async (country: AfricanCountry) => {
    setTasksLoading(true)
    try {
      const data = await fetchTasks(
        country.wikiLang,
        country.stubCategory,
        country.citationCategory
      )
      setTasks(data)
    } catch (err) {
      console.error("Failed to load tasks:", err)
      setTasks([])
    } finally {
      setTasksLoading(false)
    }
  }, [])

  const handleCountryClick = (country: AfricanCountry) => {
    setSelectedCountry(country)
    loadTasks(country)
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
      {/* {showBanner && (
        <LocationBanner
          country={detectedCountry}
          loading={locationLoading}
          onDismiss={() =ßßß> setShowBanner(false)}
        />
      )} */}

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Map */}
        <div className="flex-1 p-4">
          <AfricaMap
            selectedCountry={selectedCountry}
            onCountryClick={handleCountryClick}
          />
        </div>

        {/* Side panel */}
        <div className="w-80 bg-white border-l border-gray-200 overflow-hidden shrink-0">
          <CountryPanel
            country={selectedCountry}
            tasks={tasks}
            tasksLoading={tasksLoading}
          />
        </div>
      </div>
    </div>
  )
}