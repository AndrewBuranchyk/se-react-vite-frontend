import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { RootState } from "../store/configure"

export interface User {
	id: number
	department_id: number
	name: string
	email: string
	role: string
	department: {
		id: number
		name: string
		created_at: string
		updated_at: string
	}
	created_at: string
	updated_at: string
}

export interface LoginRequest {
	email: string
	password: string
}
export interface LoginResponse {
	token: string
	user: User
}

export type UsersResponse = User[]

export const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.BACKEND_BASE_URL ?? "http://127.0.0.1:8000/api/",
		prepareHeaders: (headers, { getState }) => {
			// By default, if we have a token in the store, let's use that for authenticated requests
			const { token } = (getState() as RootState).auth
			if (token) {
				headers.set("authorization", `Bearer ${token}`)
			}
			return headers
		},
	}),
	tagTypes: ["User"],

	endpoints: (builder) => ({
		login: builder.mutation<LoginResponse, LoginRequest>({
			query: (credentials) => ({
				url: "login",
				method: "POST",
				body: credentials,
			}),
		}),

		getUsers: builder.query<UsersResponse, void>({
			query: () => `users`,
			transformResponse: (response: { data: UsersResponse }) => response.data,
			transformErrorResponse: (response) =>
				`${
					// @ts-ignore
					response?.data?.message ?? JSON.stringify(response?.data)
				} (${response.status})`,
			providesTags: (result) =>
				result
					? [...result.map(({ id }) => ({ type: "User" as const, id })), { type: "User", id: "LIST" }]
					: [{ type: "User", id: "LIST" }],
		}),

		addUser: builder.mutation<User, Partial<User>>({
			query: (body) => ({
				url: `users`,
				method: "POST",
				body,
			}),
			transformResponse: (response: { data: User }) => response.data,
			transformErrorResponse: (response) =>
				`${
					// @ts-ignore
					response?.data?.message ?? JSON.stringify(response?.data)
				} (${response.status})`,
			invalidatesTags: [{ type: "User", id: "LIST" }],
		}),

		getUser: builder.query<User, string>({
			query: (id) => `users/${id}`,
			transformResponse: (response: { data: User }) => response.data,
			transformErrorResponse: (response) =>
				`${
					// @ts-ignore
					response?.data?.message ?? JSON.stringify(response?.data)
				} (${response.status})`,
			providesTags: (result, error, id) => [{ type: "User", id }],
		}),

		getCurrentUser: builder.query<User, void>({
			query: () => `user`,
			transformResponse: (response: { data: User }) => response.data,
			transformErrorResponse: (response) =>
				`${
					// @ts-ignore
					response?.data?.message ?? JSON.stringify(response?.data)
				} (${response.status})`,
		}),

		updateUser: builder.mutation<User, Partial<User>>({
			query(data) {
				const { id, ...body } = data
				return {
					url: `users/${id}`,
					method: "PUT",
					body,
				}
			},
			transformResponse: (response: { data: User }) => response.data,
			transformErrorResponse: (response) =>
				`${
					// @ts-ignore
					response?.data?.message ?? JSON.stringify(response?.data)
				} (${response.status})`,
			invalidatesTags: (user) => [{ type: "User", id: user?.id }],
		}),

		deleteUser: builder.mutation<{ success: boolean; id: number }, number>({
			query(id) {
				return {
					url: `users/${id}`,
					method: "DELETE",
				}
			},
			transformErrorResponse: (response) =>
				`${
					// @ts-ignore
					response?.data?.message ?? JSON.stringify(response?.data)
				} (${response.status})`,
			invalidatesTags: (result, error, id) => [{ type: "User", id }],
		}),
	}),
})

export const {
	useLoginMutation,
	useGetUsersQuery,
	useAddUserMutation,
	useGetUserQuery,
	useGetCurrentUserQuery,
	useUpdateUserMutation,
	useDeleteUserMutation,
} = api