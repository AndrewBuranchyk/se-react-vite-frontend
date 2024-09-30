import { api } from "./api"

export interface Department {
	id: number
	name: string
	created_at: string
	updated_at: string
}

export type DepartmentsResponse = Department[]

export const departmentsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getDepartments: builder.query<DepartmentsResponse, void>({
			query: () => `departments`,
			transformResponse: (response: { data: DepartmentsResponse }) => response.data,
			transformErrorResponse: (response) =>
				`${
					// @ts-ignore
					response?.data?.message ?? JSON.stringify(response?.data)
				} (${response.status})`,
			providesTags: (result) =>
				result
					? [...result.map(({ id }) => ({ type: "Department" as const, id })), { type: "Department", id: "LIST" }]
					: [{ type: "Department", id: "LIST" }],
		}),

		addDepartment: builder.mutation<Department, Partial<Department>>({
			query: (body) => ({
				url: "departments",
				method: "POST",
				body,
			}),
			transformResponse: (response: { data: Department }) => response.data,
			transformErrorResponse: (response) =>
				`${
					// @ts-ignore
					response?.data?.message ?? JSON.stringify(response?.data)
				} (${response.status})`,
			invalidatesTags: [{ type: "Department", id: "LIST" }],
		}),

		getDepartment: builder.query<Department, string>({
			query: (id) => `departments/${id}`,
			transformResponse: (response: { data: Department }) => response.data,
			transformErrorResponse: (response) =>
				`${
					// @ts-ignore
					response?.data?.message ?? JSON.stringify(response?.data)
				} (${response.status})`,
			providesTags: (result, error, id) => [{ type: "Department", id }],
		}),

		updateDepartment: builder.mutation<Department, Partial<Department>>({
			query(data) {
				const { id, ...body } = data
				return {
					url: `departments/${id}`,
					method: "PUT",
					body,
				}
			},
			transformResponse: (response: { data: Department }) => response.data,
			transformErrorResponse: (response) =>
				`${
					// @ts-ignore
					response?.data?.message ?? JSON.stringify(response?.data)
				} (${response.status})`,
			invalidatesTags: (department) => [{ type: "Department", id: department?.id }],
		}),

		deleteDepartment: builder.mutation<{ success: boolean; id: number }, number>({
			query(id) {
				return {
					url: `departments/${id}`,
					method: "DELETE",
				}
			},
			transformErrorResponse: (response) =>
				`${
					// @ts-ignore
					response?.data?.message ?? JSON.stringify(response?.data)
				} (${response.status})`,
			invalidatesTags: (result, error, id) => [{ type: "Department", id }],
		}),
	}),
})

export const {
	useGetDepartmentsQuery,
	useAddDepartmentMutation,
	useGetDepartmentQuery,
	useUpdateDepartmentMutation,
	useDeleteDepartmentMutation,
} = departmentsApi
