export type ParkT = {
	name: string
	history: HistoryT
	directions: DirectionsT
	popup: string
	slug: string
	attractions: AttractionT[]
}

export type HistoryT = {
	description: {
		first: string
		second: string
	}
	images: string[]
}

export type DirectionsT = {
	general: string
	driving: string
	transit: string
	walking: string
}

export type AttractionT = {
	name: string
	description: string
	image: string
	number: number
}

export type ParkPopups = {
	franklinPark: string
	arnoldArboretum: string
	jamaicaPond: string
	olmstedPark: string
	riverway: string
	backBayFens: string
}
