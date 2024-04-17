export type ParkT = {
	name: string
	history: HistoryT
	slug: string
}

export type HistoryT = {
	description: {
		first: string
		second: string
	}
	images: string[]
}
