import React from "react"
import { Provider } from "react-redux"
import { createRoot } from "react-dom/client"
import { BrowserRouter as Router } from "react-router-dom"
import App from "./App/App"
import { store } from "./store/configure"
import { ThemeContextProvider } from "./contexts/themeContext"
import "./styles/styles.scss"
import "./i18n"

const children = (
	<Provider store={store}>
		<ThemeContextProvider>
			<Router>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</Router>
		</ThemeContextProvider>
	</Provider>
)

const container = document.getElementById("root")

createRoot(container as Element).render(children)
