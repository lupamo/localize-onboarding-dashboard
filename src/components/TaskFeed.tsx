'use client'

import { Task } from "@/types"

interface Props {
	tasks: Task[]
	loading: boolean
	countryName: string | null
}

const TYPE_CONFIG = {
	translation: {
		label: "Translate",
		color: "bg-blue-100 text-blue-800",
		description: "Missing in this Wikipedia",
	},
	stub: {
		label: "Expand",
		color: "bg-amber-100 text-amber-800",
		description: "show articles needinf expansion",
	},
	citation: {
		label: "Cite",
		color: "bg-red-100 text-red-800",
		description: 'Need references',
	}
}

export default function TaskFeed({ tasks, loading, countryName}: Props) {
	if (loading) {
		return (
			<div className="space-y-3">
				{[...Array(7)].map((_, i) => (
					<div key={i} className='h-4 bg-gray-100 rounded-lg animate-pulse'></div>
				))}
			</div>
		)
	}
	if (!countryName) {
		return (
			<div className="flex flex-col items-center justify-center h-48 text-gray-400 text-sm text-center px-4">
				<p>Click a country on map to see contribution tasks</p>
			</div>
		)
	}
	if (tasks.length == 0) {
		return (
			<div className="flex flex-col items-center justify-center h-48 text-gray-400 text-sm text-center px-4">
				<p>No tasks found for {countryName} right now</p>
			</div>
		)
	}
	
	return (
		<div className="space-y-2">
			{tasks.map((task, i) => {
				const config = TYPE_CONFIG[task.type]
				return (
					<a 
						key={i}
						href={task.url}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-start gap-3 p-3 rounded-lg border border-gray-100 hover:border-gray-300 hover:bg-gray-50 transition-all group"
					>
						<span className={`text-xs font-medium px-2 py-1 rounded-full shrink-0 mt-0.5 ${config.color}`}>
							{config.label}
						</span>
						<div className="min-w-0">
							<p className="text-sm font-medium text-gray-800 group-hover:text-blue-700">
								{task.title}
							</p>
							<p className="text-xs text-gray-400">{task.description}</p>
						</div>
						<span className="ml-auto text-gray-300 group-hover:text-blue-500 shrink-0 text-xs mt-1">
							→
						</span>
					</a>
				)
			})}
		</div>
	)
}