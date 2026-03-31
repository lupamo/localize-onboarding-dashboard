"use client"

import { AfricanCountry } from "@/types"

interface Props {
	country: AfricanCountry | null
	loading: boolean
	onDismiss: () => void
}

export default function LocationBanner({ country, loading, onDismiss }: Props) {
	if (!loading && country) return null
	
	return (
		<div className="flex items-center justify-between px-4 py-2 border-b border-emerald-200 text-sm">
			{loading ? (
				<span className='text-emerald-700'>Detecting your location....</span>
			) : country ? (
				<span className="text-emerald-800">
					Detected <strong>{country.name}</strong>-showing{" "}
					<strong>{country.languages[0]}</strong> Wikipedia tasks
				</span>
			) : null}
			<button onClick={onDismiss}
				className="ml-4 text-emerald-600 hover:text-emerald-900 font-medium"
			>
				x
			</button>
		</div>
	)
}