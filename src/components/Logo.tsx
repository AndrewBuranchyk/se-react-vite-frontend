import React, { FC } from "react"
import LogoSVG from "../assets/logos/se_logo_header.svg"
import LogoBlackSVG from "../assets/logos/se_logo_header_black.svg"

interface ILogoProps {
	color: string
}
const Logo: FC<ILogoProps> = ({ color = "white" }) => {
	return (
		<img
			src={color === "black" ? LogoBlackSVG : LogoSVG}
			alt='SolarEdge'
			className='logo-img'
			style={{ height: "100%", maxHeight: "3rem" }}
		/>
	)
}

export default Logo
