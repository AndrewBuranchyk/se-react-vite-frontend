import { useMemo } from "react"
import { useSelector } from "react-redux"
import { selectCurrentUser, setCredentials } from "../store/reducers/authSlice"
import { useAppDispatch } from "./redux"
import type { LoginResponse } from "../services/authApi"

const getCredentials = (): LoginResponse => {
	return {
		token: localStorage.getItem("authToken") ?? "", // sessionStorage
		user: JSON.parse(localStorage.getItem("authUser") ?? "{}"), // sessionStorage
	}
}

export const useAuth = () => {
	let user = useSelector(selectCurrentUser)
	if (!user) {
		const auth = getCredentials()
		if (auth.token.length > 0) {
			user = auth.user
			// eslint-disable-next-line react-hooks/rules-of-hooks
			const dispatch = useAppDispatch()
			dispatch(setCredentials(auth))
		}
	}
	return useMemo(() => ({ user }), [user])
}

export const storeCredentials = (auth: LoginResponse) => {
	localStorage.setItem("authToken", auth.token) // sessionStorage
	localStorage.setItem("authUser", JSON.stringify(auth.user)) // sessionStorage
	return true
}
export const clearCredentials = () => {
	localStorage.removeItem("authToken") // sessionStorage
	localStorage.removeItem("authUser") // sessionStorage
	return true
}
