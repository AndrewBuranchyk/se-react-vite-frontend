import React from "react"
import { Link } from "react-router-dom"
import Header from "../../../layout/Header/Header"
import useDarkMode from "../../../hooks/useDarkMode"
import Logo from "../../../components/Logo"

const DefaultHeader = () => {
	const { darkModeStatus } = useDarkMode()
	return (
		<Header>
			<div>
				<Link to='/' aria-label='Logo'>
					<Logo color={darkModeStatus ? "black" : ""} />
				</Link>
			</div>
		</Header>
	)
}

export default DefaultHeader
