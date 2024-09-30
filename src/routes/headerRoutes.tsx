import React from "react"
import { RouteProps } from "react-router-dom"
import { siteMenu, authMenu } from "../menu"
import DefaultHeader from "../pages/layout/headers/DefaultHeader"
import SiteHeader from "../pages/layout/headers/SiteHeader"

const headers: RouteProps[] = [
	{ path: authMenu.login.path, element: null },
	{ path: authMenu.page404.path, element: <DefaultHeader /> },
	{ path: siteMenu.home.path, element: <SiteHeader /> },
	{ path: siteMenu.users.path, element: <SiteHeader /> },
	{ path: siteMenu.departments.path, element: <SiteHeader /> },
	{ path: `*`, element: <DefaultHeader /> },
]

export default headers
