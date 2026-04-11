import { Task, DetectedLocation } from '@/types'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000"

export async function fetchTasks(
  lang: string,
  stubCategory: string,
  citationCategory: string
): Promise<Task[]> {
  const res = await fetch(
    `${BACKEND_URL}/tasks?lang=${lang}&stub_category=${encodeURIComponent(stubCategory)}&citation_category=${encodeURIComponent(citationCategory)}`
  )
  if (!res.ok) throw new Error("Failed to fetch tasks")
  return res.json()
}

export async function detectLocation(): Promise<DetectedLocation | null> {
  return new Promise((resolve) => {
    if (!navigator.geolocation) { resolve(null); return }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords
        try {
          const res = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          )
          const data = await res.json()
          resolve({
            countryCode: data.countryCode,
            countryName: data.countryName,
            latitude,
            longitude,
          })
        } catch (error) {
          console.error("Error fetching location data:", error)
          resolve(null)
        }
      },
      () => resolve(null),
      { timeout: 8000 }
    )
  })
}
