import { api } from "./api"
import { User } from "./usersApi"

export interface LoginRequest {
	email: string
	password: string
}
export interface LoginResponse {
	token: string
	user: User
}

export const authApi = api.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation<LoginResponse, LoginRequest>({
			query: (credentials) => ({
				url: "login",
				method: "POST",
				body: credentials,
			}),
		}),
	}),
})

export const { useLoginMutation } = authApi
