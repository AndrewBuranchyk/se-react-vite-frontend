import { ListAlt } from "./components/icon/material-icons"

export const siteMenu = {
	home: {
		id: "home",
		text: "Home",
		path: "/",
		hide: true,
	},
	users: {
		id: "users",
		text: "Users",
		path: "users",
		icon: "People",
	},
	departments: {
		id: "departments",
		text: "Departments",
		path: "departments",
		icon: "OtherHouses",
	},
	logs: {
		id: "logs",
		text: "Logs",
		path: "logs",
		icon: "ListAlt",
	},
}
export const authMenu = {
	auth: {
		id: "auth",
		text: "Auth Pages",
		icon: "Extension",
	},
	login: {
		id: "login",
		text: "Login",
		path: "/auth-pages/login",
		icon: "Login",
	},
	page404: {
		id: "Page404",
		text: "404 Page",
		path: "/auth-pages/404",
		icon: "ReportGmailerrorred",
	},
	googleCallback: {
		id: "googleCallback",
		text: "Login by Google",
		path: "/auth/google/callback",
	},
}
