import React, { FC, ReactElement, ReactNode, useContext, useLayoutEffect } from "react"
import classNames from "classnames"
import { useMeasure, useWindowSize } from "react-use"
import { Link } from "react-router-dom"
import ThemeContext from "../../contexts/themeContext"
import Button from "../../components/bootstrap/Button"
import Portal from "../Portal/Portal"
import useDarkMode from "../../hooks/useDarkMode"
import Logo from "../../components/Logo"

interface IHeaderLeftProps {
	children: ReactNode
	className?: string
}
export const HeaderLeft: FC<IHeaderLeftProps> = ({ children, className }) => {
	return <div className={classNames("header-left", "col-md", className)}>{children}</div>
}

interface IHeaderRightProps {
	children: ReactNode
	className?: string
}
export const HeaderRight: FC<IHeaderRightProps> = ({ children, className }) => {
	const [ref, { height }] = useMeasure<HTMLDivElement>()

	const root = document.documentElement
	root.style.setProperty("--header-right-height", `${height}px`)

	return (
		<div ref={ref} className={classNames("header-right", "col-md-auto", className)}>
			{children}
		</div>
	)
}

interface IHeaderProps {
	children: ReactElement<IHeaderLeftProps> | ReactElement<IHeaderRightProps> | ReactNode
	hasLeftMobileMenu?: boolean
	hasRightMobileMenu?: boolean
}
const Header: FC<IHeaderProps> = ({ children, hasLeftMobileMenu = true, hasRightMobileMenu = true }) => {
	const { themeStatus, darkModeStatus } = useDarkMode()

	const windowsWidth = useWindowSize().width
	const [refMobileHeader, sizeMobileHeader] = useMeasure<HTMLDivElement>()
	const [refHeader, sizeHeader] = useMeasure<HTMLDivElement>()

	const root = document.documentElement
	root.style.setProperty("--mobile-header-height", `${sizeMobileHeader.height}px`)
	root.style.setProperty("--header-height", `${sizeHeader.height}px`)

	const { asideStatus, setAsideStatus, leftMenuStatus, setLeftMenuStatus, rightMenuStatus, setRightMenuStatus } =
		useContext(ThemeContext)

	useLayoutEffect(() => {
		if (
			(asideStatus || leftMenuStatus || rightMenuStatus) &&
			windowsWidth < Number(import.meta.env.VITE_MOBILE_BREAKPOINT_SIZE)
		)
			document.body.classList.add("overflow-hidden")
		return () => {
			document.body.classList.remove("overflow-hidden")
		}
	})

	return (
		<>
			<header ref={refMobileHeader} className='mobile-header'>
				<div className='container-fluid'>
					<div className='d-flex align-items-center justify-content-between'>
						<div className='d-flex align-items-center justify-content-start'>
							<Button
								aria-label='Toggle Aside'
								className='mobile-header-toggle'
								size='lg'
								color={asideStatus ? "primary" : themeStatus}
								isLight={asideStatus}
								icon={asideStatus ? "FirstPage" : "LastPage"}
								onClick={() => {
									setAsideStatus(!asideStatus)
									setLeftMenuStatus(false)
									setRightMenuStatus(false)
								}}
							/>
							<Link to='/' aria-label='Logo' className='ms-4 me-1'>
								<Logo color={darkModeStatus ? "black" : ""} />
							</Link>
							{hasLeftMobileMenu && (
								<Button
									aria-label='Toggle Left Menu'
									className='mobile-header-toggle'
									size='lg'
									color={leftMenuStatus ? "primary" : themeStatus}
									isLight={leftMenuStatus}
									icon={leftMenuStatus ? "MoreVert" : "MoreHoriz"}
									onClick={() => {
										setAsideStatus(false)
										setLeftMenuStatus(!leftMenuStatus)
										setRightMenuStatus(false)
									}}
								/>
							)}
						</div>
						{hasRightMobileMenu && (
							<div>
								<Button
									aria-label='Toggle Right Menu'
									className='mobile-header-toggle'
									size='lg'
									color={rightMenuStatus ? "primary" : themeStatus}
									isLight={rightMenuStatus}
									icon={rightMenuStatus ? "Menu" : "MenuOpen"}
									onClick={() => {
										setAsideStatus(false)
										setLeftMenuStatus(false)
										setRightMenuStatus(!rightMenuStatus)
									}}
								/>
							</div>
						)}
					</div>
				</div>
			</header>
			<header
				ref={refHeader}
				className={classNames("header", "shadow-none", "px-4", {
					"header-left-open": leftMenuStatus,
					"header-right-open": rightMenuStatus,
					"bg-transparent": darkModeStatus,
					"bg-white": !darkModeStatus,
					"header-border-bottom": !darkModeStatus,
				})}>
				<div className='container-fluid'>
					<div className='d-flex flex-row align-items-center'>
						{children}
						{(leftMenuStatus || rightMenuStatus) && (
							<Portal>
								<div
									role='presentation'
									className={classNames("header-overlay", {
										"header-overlay-left-menu": leftMenuStatus,
										"header-overlay-right-menu": rightMenuStatus,
									})}
									onClick={() => {
										setAsideStatus(false)
										setLeftMenuStatus(false)
										setRightMenuStatus(false)
									}}
								/>
							</Portal>
						)}
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
