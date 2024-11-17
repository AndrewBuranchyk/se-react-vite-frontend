import { api } from "./api"
import { ListResponse } from "./ListResponseInterface"
import { User } from "./usersApi"

export interface Log {
	id: number
	user_id: number
	event: string
	model: string
	other_data: string
	user: User
	created_at: string
	updated_at: string
}

export const departmentsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getLogs: builder.query<ListResponse<Log>, { page: number | void, pageSize: number | void, search: string | void }>({
			query: ({page = 0, pageSize = 10, search = ''}) => `logs?page=${++page}&per_page=${pageSize}&search=${search}`,
			transformErrorResponse: (response) =>
				`${
					// @ts-ignore
					response?.data?.message ?? JSON.stringify(response?.data)
				} (${response.status})`,
			providesTags: (result) =>
				result
					? [...result.data.map(({ id }) => ({ type: "Log" as const, id })), { type: "Log", id: "PARTIAL-LIST" }]
					: [{ type: "Log", id: "PARTIAL-LIST" }],
		}),
	}),
})

export const {
	useGetLogsQuery,
} = departmentsApi
