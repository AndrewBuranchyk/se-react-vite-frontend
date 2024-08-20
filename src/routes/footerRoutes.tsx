import React from "react"
import { RouteProps } from "react-router-dom"
import { authMenu } from "../menu"
import DefaultFooter from "../pages/layout/footers/DefaultFooter"

const footers: RouteProps[] = [
	{ path: authMenu.login.path, element: null },
	{ path: authMenu.page404.path, element: null },
	{ path: "*", element: <DefaultFooter /> },
]

export default footers
