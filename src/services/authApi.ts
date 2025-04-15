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
export interface GetRedirectUrlResponse {
	url: string
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

		getGoogleRedirectUrl: builder.query<GetRedirectUrlResponse, void>({
			query: () => `auth/google/url`,
		}),

		handleGoogleCallback: builder.query<LoginResponse, string>({
			query: (query) => `auth/google/callback${query}`,
		}),
	}),
})

export const {
	useLoginMutation,
	useGetGoogleRedirectUrlQuery,
	useHandleGoogleCallbackQuery,
} = authApi
