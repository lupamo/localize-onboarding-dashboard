export interface AfricanCountry {
	isoNumeric: string
	isoAlpha2: string
	name: string
	languages: string[]
	wikiLang: string
	stubCategory: string
	citationCategory: string
	activeEditors: number
	gap: "critical" | "high" | "medium" | "low"
}

export interface Task {
	type: "translation" | "stub" | "citation"
	title: string
	url: string
	language: string
	description: string
}

export interface CountryTasks {
	country: AfricanCountry
	tasks: Task[]
	fetchedAt: number
}

// export interface DetectedLocation {
// 	countryCode: string
// 	countryName: string
// 	latitude: number
// 	longitude: number
// }s
