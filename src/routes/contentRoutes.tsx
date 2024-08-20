import React, { FC, lazy, ReactNode } from "react"
import { RouteProps, Navigate } from "react-router-dom"
import { siteMenu, authMenu } from "../menu"
import Login from "../pages/auth/Login"
import { useAuth } from "../hooks/useAuth"

interface IProtectedRoute {
	children: ReactNode
}

const ProtectedRoute: FC<IProtectedRoute> = ({ children }) => {
	const { user } = useAuth()

	if (!user) {
		return <Navigate to={authMenu.login.path} replace />
	}
	// eslint-disable-next-line react/jsx-no-useless-fragment
	return <>{children}</>
}

const AUTH = {
	PAGE_404: lazy(() => import("../pages/auth/Page404")),
}

const SITE = {
	USERS: lazy(() => import("../pages/site/UsersPage")),
}

const AUTH_PAGES: RouteProps[] = [
	{
		path: authMenu.page404.path,
		element: <AUTH.PAGE_404 />,
	},
	{
		path: authMenu.login.path,
		element: <Login />,
	},
]
const PAGES: RouteProps[] = [
	{
		path: siteMenu.home.path,
		element: (
			<ProtectedRoute>
				<SITE.USERS />
			</ProtectedRoute>
		),
	},
	{
		path: siteMenu.users.path,
		element: (
			<ProtectedRoute>
				<SITE.USERS />
			</ProtectedRoute>
		),
	},
]

const routes = [...AUTH_PAGES, ...PAGES]

export default routes