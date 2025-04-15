import { useMemo } from "react"
import { useSelector } from "react-redux"
import { selectCurrentUser, setCredentials } from "../store/reducers/authSlice"
import { useAppDispatch } from "./redux"
import type { LoginResponse } from "../services/authApi"

const getCredentials = (): LoginResponse => {
	return {
		token: sessionStorage.getItem("authToken") ?? "", // sessionStorage / localStorage
		user: JSON.parse(sessionStorage.getItem("authUser") ?? "{}"), // sessionStorage / localStorage
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
	sessionStorage.setItem("authToken", auth.token) // sessionStorage / localStorage
	sessionStorage.setItem("authUser", JSON.stringify(auth.user)) // sessionStorage / localStorage
	return true
}
export const clearCredentials = () => {
	sessionStorage.removeItem("authToken") // sessionStorage / localStorage
	sessionStorage.removeItem("authUser") // sessionStorage / localStorage
	return true
}
