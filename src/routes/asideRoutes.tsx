import React from "react"
import { RouteProps } from "react-router-dom"
import { siteMenu, authMenu } from "../menu"
import DefaultAside from "../pages/layout/asides/DefaultAside"

const asides: RouteProps[] = [
	{ path: authMenu.login.path, element: null },
	{ path: authMenu.page404.path, element: null },
	{ path: siteMenu.home.path, element: <DefaultAside /> },
	{ path: siteMenu.users.path, element: <DefaultAside /> },
	{ path: "*", element: null },
]

export default asides
