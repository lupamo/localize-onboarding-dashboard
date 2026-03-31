'use client'
import { AfricanCountry } from "@/types"
import { getGapColor } from "@/lib/africanCountries"
import TaskFeed from './TaskFeed'
import { Task } from "@/types"
import { get } from "http"

interface Props {
	country: AfricanCountry | null
	tasks: Task[]
	tasksLoading: boolean
}

const GAP_LABELS = {
	critical: "Critical",
	high: "High",
	medium: "Medium",
	low: "Low",
}

export default function CountryPanel({ country, tasks, tasksLoading }: Props) {
	return (
		<div className="flex flex-col h-full">
			<div className="p-4 border-b border-gray-100">
				{country ? (
					<>
						<div className='flex items-start justify-between gap-2 mb-3'>
							<h2 className="text-lg font-semibold text-gray-900">{country.name}</h2>
							<span
							 className='text-sm font-medium px-2 py-1 rounded full shrink-0'
							 style={{
								backgroundColor: getGapColor(country.gap) + "22",
								color: getGapColor(country.gap),
							 }}
							>
								{GAP_LABELS[country.gap]}								
							</span>
						</div>
						<div className="grid grid-cols-2 gap-2 text-sm">
							<div className='bg-gray-50 rounded-lg p-2'>
								<p className="text-xs text-gray-400">Active Editors</p>
								<p className="font-semibold text-gray-800">{country.activeEditors}</p>
							</div>
							<div className="bg-gray-50 rounded-lg p-2">
								<p className="text-xs text-gray-400 mb-0.5">Wiki Languages</p>
								<p className="font-semibold text-gray-800">{country.wikiLang}.wikipedia.org</p>
							</div>
						</div>
						<div className="m-2">
							<p className="text-xs text-gray-400 mb-1">Languages</p>
							<div className='flex flex-wrap gap-1'>
								{country.languages.map((lang) => (
									<span
										key={lang}
										className="text-xs bg-gray text-gray-600 px-2 py-0.5 rounded-full"
									>
										{lang}
									</span>
								))}
							</div>
						</div>
					</>
				) : (
					<div>
						<h2 className="text-lg font-semibold texy-gray-900">Contribution Tasks</h2>
						<p className="text-sm text-gray-400 mt-1">Select a country to get started</p>
					</div>
				)}
			</div>
			{/* TaskFeed */}
			<div className='flex-1 overlow-y-auto p-4'>
				<TaskFeed
					tasks={tasks}
					loading={tasksLoading}
					countryName={country ? country.name : null}
				/>
			</div>
		</div>
	)
}
