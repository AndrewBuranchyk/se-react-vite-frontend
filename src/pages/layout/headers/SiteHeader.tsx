import React from "react"
import { Link } from "react-router-dom"
import Header, { HeaderLeft } from "../../../layout/Header/Header"
import Navigation from "../../../layout/Navigation/Navigation"
import useDarkMode from "../../../hooks/useDarkMode"
import useDeviceScreen from "../../../hooks/useDeviceScreen"
import CommonHeaderRight from "./CommonHeaderRight"
import Logo from "../../../components/Logo"
import { siteMenu } from "../../../menu"

const SiteHeader = () => {
	const { darkModeStatus } = useDarkMode()
	const { width } = useDeviceScreen()

	return (
		<Header>
			<div className='me-5'>
				<Link to='/' aria-label='Logo'>
					<Logo color={darkModeStatus ? "black" : ""} />
				</Link>
			</div>

			<HeaderLeft>
				<div className='d-flex align-items-center'>
					<Navigation
						menu={{
							siteAlerts: {
								id: "topMenuUsers",
								text: "Users",
								path: siteMenu.users.path,
								icon: "People",
							},
						}}
						id='header-top-menu'
						horizontal={!!width && width >= Number(import.meta.env.VITE_MOBILE_BREAKPOINT_SIZE)}
					/>
				</div>
			</HeaderLeft>
			<CommonHeaderRight />
		</Header>
	)
}

export default SiteHeader
