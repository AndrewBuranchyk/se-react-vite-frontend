import React, { FC, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import PageWrapper from "../../layout/PageWrapper/PageWrapper"
import Page from "../../layout/Page/Page"
import Card, { CardBody } from "../../components/bootstrap/Card"
import FormGroup from "../../components/bootstrap/forms/FormGroup"
import Input from "../../components/bootstrap/forms/Input"
import Button from "../../components/bootstrap/Button"
import Logo from "../../components/Logo"
import useDarkMode from "../../hooks/useDarkMode"
import Spinner from "../../components/bootstrap/Spinner"
import Alert from "../../components/bootstrap/Alert"
import { useAppDispatch } from "../../hooks/redux"
import { useAuth, storeCredentials } from "../../hooks/useAuth"
import { useLoginMutation } from "../../services/authApi"
import { setCredentials } from "../../store/reducers/authSlice"

const Login: FC = () => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const { darkModeStatus, setDarkModeStatus } = useDarkMode()
	const [validationError, setValidationError] = useState<string>("")
	const { user } = useAuth()
	const [login, { isLoading }] = useLoginMutation()

	useEffect(() => {
		if (!user) {
			setDarkModeStatus(true)
		} else {
			navigate("/users")
		}
	}, [navigate, user, setDarkModeStatus])

	const signInForm = useFormik({
		enableReinitialize: true,
		initialValues: {
			username: "",
			password: "",
			newPassword: "",
			confirmPassword: "",
		},
		validate: (values) => {
			const errors: {
				username?: string
				password?: string
				newPassword?: string
				confirmPassword?: string
			} = {}

			if (!values.username) {
				errors.username = "Required"
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
				errors.username = "Invalid email address"
			}

			if (!values.password) {
				errors.password = "Required"
			}

			return errors
		},

		validateOnChange: false,

		onSubmit: ({ username, password }) => {
			(async () => {
				try {
					const auth = await login({ email: username, password }).unwrap()
					storeCredentials(auth)
					dispatch(setCredentials(auth))
					navigate("/users")
				} catch (err) {
					// @ts-ignore
					setValidationError(err?.data?.message ?? err?.error ?? JSON.stringify(err))
				}
			})()
		},
	})

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

								<div className='text-center h1 fw-normal my-5'>Users Data Grid</div>

								{validationError && (
									<Alert isLight icon='Lock'>
										<div className='row'>
											<div className='col-12'>
												<strong>{validationError}</strong>
											</div>
										</div>
									</Alert>
								)}
								<form className='row g-4'>
									<div className='col-12'>
										<FormGroup id='username' isFloating label='Your email' className=''>
											<Input
												size='lg'
												autoComplete='username'
												value={signInForm.values.username}
												isTouched={signInForm.touched.username}
												invalidFeedback={signInForm.errors.username}
												isValid={signInForm.isValid}
												onChange={signInForm.handleChange}
												onBlur={signInForm.handleBlur}
												onFocus={() => {
													signInForm.setErrors({})
												}}
											/>
										</FormGroup>
									</div>
									<div className='col-12'>
										<FormGroup id='password' isFloating label='Password' className=''>
											<Input
												type='password'
												size='lg'
												autoComplete='current-password'
												value={signInForm.values.password}
												isTouched={signInForm.touched.password}
												invalidFeedback={signInForm.errors.password}
												validFeedback='Looks good!'
												isValid={signInForm.isValid}
												onChange={signInForm.handleChange}
												onBlur={signInForm.handleBlur}
											/>
										</FormGroup>
									</div>

									<div className='col-12'>
										<Button
											color='danger'
											className='w-100 py-3 fs-3 fw-medium'
											onClick={signInForm.handleSubmit}>
											{isLoading && <Spinner isSmall inButton isGrow />}
											Login
										</Button>
									</div>
								</form>
							</CardBody>
						</Card>
					</div>
				</div>
			</Page>
		</PageWrapper>
	)
}

export default Login
