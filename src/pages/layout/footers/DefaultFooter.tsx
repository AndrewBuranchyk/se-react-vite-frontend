import React from "react"
import classNames from "classnames"
import useDarkMode from "../../../hooks/useDarkMode"
import Footer from "../../../layout/Footer/Footer"

const DefaultFooter = () => {
	const { darkModeStatus } = useDarkMode()

	return (
		<Footer>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col'>
						<span className='fw-light'>Copyright © 2024</span>
					</div>
					<div className='col-auto'>
						<a
							href='https://www.solaredge.com/en'
							className={classNames("text-decoration-none", {
								"link-dark": !darkModeStatus,
								"link-light": darkModeStatus,
							})}>
							<span className='fw-light'>SolarEdge</span>
						</a>
					</div>
				</div>
			</div>
		</Footer>
	)
}

export default DefaultFooter
