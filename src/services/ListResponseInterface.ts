export interface ListResponse<T> {
	data: T[]
	links: {
		first: string
		last: string
		prev: string
		next: string
	}
	meta: {
		current_page: number
		from: number
		last_page: number
		links: {}
		path: string
		per_page: number
		to: number
		total: number
	}
}

