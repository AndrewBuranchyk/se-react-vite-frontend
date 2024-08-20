import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import classNames from "classnames"
import { useAppDispatch } from "../../hooks/redux"
import { DropdownItem, DropdownMenu } from "../../components/bootstrap/Dropdown"
import Button from "../../components/bootstrap/Button"
import useDarkMode from "../../hooks/useDarkMode"
import Collapse from "../../components/bootstrap/Collapse"
import Icon from "../../components/icon/Icon"
import useNavigationItemHandle from "../../hooks/useNavigationItemHandle"
import UserImage from "../../assets/img/wanna1.png"
import { useAuth, clearCredentials } from "../../hooks/useAuth"
import { dropCredentials } from "../../store/reducers/authSlice"
import { authMenu } from "../../menu"

const User = () => {
	const dispatch = useAppDispatch()
	const { user } = useAuth()
	const navigate = useNavigate()
	const handleItem = useNavigationItemHandle()
	const { darkModeStatus, setDarkModeStatus } = useDarkMode()

	const [collapseStatus, setCollapseStatus] = useState<boolean>(false)

	return (
		<>
			<div
				className={classNames("user", { open: collapseStatus })}
				role='presentation'
				onClick={() => setCollapseStatus(!collapseStatus)}>
				<div className='user-avatar'>
					<img src={UserImage} alt='Avatar' />
				</div>
				<div className='user-info'>
					<div className='user-name d-flex align-items-center'>
						{`${user?.name ?? user?.email ?? "No Auth"}`}
						<Icon icon='Verified' className='ms-1' color='info' />
					</div>
				</div>
			</div>
			<DropdownMenu>
				<DropdownItem>
					<Button
						icon={darkModeStatus ? "DarkMode" : "LightMode"}
						onClick={() => setDarkModeStatus(!darkModeStatus)}
						aria-label='Toggle fullscreen'>
						{darkModeStatus ? "Dark Mode" : "Light Mode"}
					</Button>
				</DropdownItem>
			</DropdownMenu>

			<Collapse isOpen={collapseStatus} className='user-menu'>
				<nav aria-label='aside-bottom-user-menu'>
					<div className='navigation'>
						<div
							role='presentation'
							className='navigation-item cursor-pointer'
							onClick={() => {
								setDarkModeStatus(!darkModeStatus)
								handleItem()
							}}>
							<span
								className={classNames(
									"navigation-link",
									"navigation-link-pill",
									"aside-site-nav-link",
								)}>
								<span className='navigation-link-info'>
									<Icon
										icon={darkModeStatus ? "DarkMode" : "LightMode"}
										color={darkModeStatus ? "info" : "warning"}
										className='navigation-icon'
									/>
									<span className='navigation-text'>
										{darkModeStatus ? "Dark Mode" : "Light Mode"}
									</span>
								</span>
							</span>
						</div>

						<div
							role='presentation'
							className='navigation-item cursor-pointer'
							onClick={() => {
								dispatch(dropCredentials())
								clearCredentials()
								navigate(`${authMenu.login.path}`)
							}}>
							<span
								className={classNames(
									"navigation-link",
									"navigation-link-pill",
									"aside-site-nav-link",
								)}>
								<span className='navigation-link-info'>
									<Icon icon='Logout' className='navigation-icon' />
									<span className='navigation-text'>Logout</span>
								</span>
							</span>
						</div>
					</div>
				</nav>
			</Collapse>
		</>
	)
}

export default User
