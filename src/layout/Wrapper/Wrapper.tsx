import React, { FC, ReactNode, useContext } from "react"
import classNames from "classnames"
import Content from "../Content/Content"
import WrapperOverlay from "./WrapperOverlay"
import HeaderRoutes from "../Header/HeaderRoutes"
import ThemeContext from "../../contexts/themeContext"
import useDarkMode from "../../hooks/useDarkMode"

interface IWrapperContainerProps {
	children: ReactNode
	className?: string
}
export const WrapperContainer: FC<IWrapperContainerProps> = ({ children, className = undefined, ...props }) => {
	const { rightPanel } = useContext(ThemeContext)
	const { darkModeStatus } = useDarkMode()
	return (
		<div
			className={classNames(
				"wrapper",
				{ "bg-gradient-dark-blue": darkModeStatus },
				{ "bg-light-gray": !darkModeStatus },
				{ "wrapper-right-panel-active": rightPanel },
				className,
			)}
			// eslint-disable-next-line react/jsx-props-no-spreading
			{...props}>
			{children}
		</div>
	)
}

const Wrapper = () => {
	return (
		<>
			<WrapperContainer>
				<HeaderRoutes />
				<Content />
			</WrapperContainer>
			<WrapperOverlay />
		</>
	)
}

export default Wrapper
