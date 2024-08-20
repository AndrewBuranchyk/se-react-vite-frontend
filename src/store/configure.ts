import { configureStore } from "@reduxjs/toolkit"
// eslint-disable-next-line import/no-cycle
import { api } from "../services/api"
import authReducer from "./reducers/authSlice"

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		auth: authReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
