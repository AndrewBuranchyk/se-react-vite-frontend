import React, { useEffect, useLayoutEffect, useState } from "react"
import { useNavigate, useLocation, Link } from "react-router-dom"
import PageWrapper from "../../layout/PageWrapper/PageWrapper"
import Page from "../../layout/Page/Page"
import Card, { CardBody } from "../../components/bootstrap/Card"
import Alert from "../../components/bootstrap/Alert"
import Progress from "../../components/bootstrap/Progress"
import { useAppDispatch } from "../../hooks/redux"
import { useAuth, storeCredentials } from "../../hooks/useAuth"
import { useHandleGoogleCallbackQuery } from "../../services/authApi"
import { setCredentials } from "../../store/reducers/authSlice"
import Logo from "../../components/Logo"
import useDarkMode from "../../hooks/useDarkMode"

const GoogleCallback = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const { darkModeStatus } = useDarkMode()
	const location = useLocation();
	const [validationError, setValidationError] = useState<string>("")
	const { user } = useAuth()
	const { data: loginResponse, isLoading: isLoginLoading, error: loginError } = useHandleGoogleCallbackQuery(location.search)

	useEffect(() => {
		if (user) {
			navigate("/users")
		}
	}, [navigate, user])

	useLayoutEffect(() => {
		// @ts-ignore
		setValidationError(loginError?.message ?? loginError?.error ?? JSON.stringify(loginError))
	}, [loginError])

	useEffect(() => {
		if (loginResponse) {
			storeCredentials(loginResponse)
			dispatch(setCredentials(loginResponse))
			navigate("/users")
		}
	}, [loginResponse])

	return (
		<PageWrapper title='Login' className='bg-transparent'>
			<Page className='p-0'>
				<div className='row h-100 align-items-center justify-content-center'>
					<div className='col-xxl-3 col-xl-4 col-lg-6 col-md-8 shadow-3d-container'>
						<Card data-tour='login-page' className='login-block'>
							<CardBody>
								<div className='text-center my-5'>
									<Link to='/' aria-label='SolarEdge'>
										<Logo color={darkModeStatus ? "black" : ""} />
									</Link>
								</div>

								<div className='text-center h1 fw-normal my-5'>Login by Google</div>
								{isLoginLoading && (
									<div className='subheader-progress-bar'>
										<Progress
											value={100}
											min={0}
											max={100}
											height='.5rem'
											isAnimated
											isStriped
											color='info'
											style={{ width: "100%" }}
										/>
									</div>
								)}
								{validationError && (
									<Alert isLight icon='Lock'>
										<div className='row'>
											<div className='col-12'>
												<strong>{validationError}</strong>
											</div>
										</div>
									</Alert>
								)}
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	)
}

export default GoogleCallback
