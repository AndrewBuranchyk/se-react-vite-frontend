import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { User } from "../../services/usersApi"
import type { RootState } from "../configure"

const initialState = {
	token: null,
	user: null,
} as { token: string | null; user: User | null }

const slice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setCredentials: (state, { payload: { token, user } }: PayloadAction<{ token: string; user: User }>) => {
			state.token = token
			state.user = user
		},
		dropCredentials: () => initialState,
	},
})

export const { setCredentials, dropCredentials } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user
