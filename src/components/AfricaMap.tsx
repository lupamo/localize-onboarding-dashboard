"use client"

import { useState, useEffect } from "react"
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps"

import { AFRICAN_COUNTRIES, AFRICAN_ISO_NUMERICS, getGapColor } from "@/lib/africanCountries"
import { AfricanCountry } from "@/types"

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

interface Props {
  selectedCountry: AfricanCountry | null
  detectedCountry: AfricanCountry | null
  onCountryClick: (country: AfricanCountry) => void
}

export default function AfricaMap({ selectedCountry, detectedCountry, onCountryClick }: Props) {
  const [tooltipContent, setTooltipContent] = useState<string | null>(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })

  const getFill = (geoId: string): string => {
    const country = AFRICAN_COUNTRIES[geoId]
    if (!country) return "#e5e7eb" // non-African countries

    if (selectedCountry?.isoNumeric === geoId) return "#1D9E75"
    if (detectedCountry?.isoNumeric === geoId && !selectedCountry) return "#1D9E75"

    return getGapColor(country.gap)
  }

  const getStroke = (geoId: string): string => {
    if (selectedCountry?.isoNumeric === geoId) return "#0f6e56"
    if (detectedCountry?.isoNumeric === geoId) return "#0f6e56"
    return "#ffffff"
  }

  return (
    <div className="relative w-full h-full bg-sky-50 rounded-xl overflow-hidden">
      {/* Legend */}
      <div className="absolute top-3 left-3 z-10 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-xs space-y-1.5 shadow-sm border border-gray-100">
        <p className="font-medium text-gray-700 mb-2">Editor gap</p>
        {[
          { gap: "critical", label: "Critical (<50 editors)" },
          { gap: "high",     label: "High (50–200)" },
          { gap: "medium",   label: "Medium (200–500)" },
          { gap: "low",      label: "Active (500+)" },
        ].map(({ gap, label }) => (
          <div key={gap} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-sm shrink-0"
              style={{ backgroundColor: getGapColor(gap as AfricanCountry["gap"]) }}
            />
            <span className="text-gray-600">{label}</span>
          </div>
        ))}
        <div className="flex items-center gap-2 pt-1 border-t border-gray-100">
          <span className="w-3 h-3 rounded-sm shrink-0 bg-emerald-600" />
          <span className="text-gray-600">Selected</span>
        </div>
      </div>

      {/* Tooltip */}
      {tooltipContent && (
        <div
          className="absolute z-20 bg-gray-900 text-white text-xs px-2 py-1 rounded pointer-events-none"
          style={{ left: tooltipPos.x + 12, top: tooltipPos.y - 28 }}
        >
          {tooltipContent}
        </div>
      )}

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 400, center: [20, 0] }}
        style={{ width: "100%", height: "100%" }}
      >
        <ZoomableGroup zoom={1} minZoom={1} maxZoom={6}>
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const geoId = String(geo.id).padStart(3, "0")
                const isAfrican = AFRICAN_ISO_NUMERICS.has(geoId)
                const country = AFRICAN_COUNTRIES[geoId]

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={getFill(geoId)}
                    stroke={getStroke(geoId)}
                    strokeWidth={isAfrican ? 0.5 : 0.3}
                    style={{
                      default: { outline: "none" },
                      hover: {
                        outline: "none",
                        fill: isAfrican ? "#1D9E75" : "#d1d5db",
                        cursor: isAfrican ? "pointer" : "default",
                      },
                      pressed: { outline: "none" },
                    }}
                    onMouseEnter={(e) => {
                      if (!isAfrican || !country) return
                      setTooltipContent(`${country.name} — ${country.activeEditors} editors`)
                      setTooltipPos({ x: e.clientX, y: e.clientY })
                    }}
                    onMouseMove={(e) => {
                      setTooltipPos({ x: e.clientX, y: e.clientY })
                    }}
                    onMouseLeave={() => setTooltipContent(null)}
                    onClick={() => {
                      if (!isAfrican || !country) return
                      onCountryClick(country)
                    }}
                  />
                )
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  )
}
