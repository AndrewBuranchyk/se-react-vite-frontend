import React from "react"
import PageWrapper from "../../layout/PageWrapper/PageWrapper"
import Page from "../../layout/Page/Page"
import SunshineAnimated from "../../assets/img/404-animated.gif"
import Button from "../../components/bootstrap/Button"
import { authMenu } from "../../menu"

const Page404 = () => {
	return (
		<PageWrapper title={authMenu.page404.text}>
			<Page>
				<div className='row d-flex align-items-center h-100'>
					<div className='col-12 d-flex align-items-baseline justify-content-center'>
						<img src={SunshineAnimated} alt='SunShine' style={{ height: "30vh" }} />
					</div>
					<div className='col-12 d-flex flex-column justify-content-center align-items-center'>
						<div className='text-primary text-center fw-light display-3'>
							This page is not found but don't worry,
							<br />
							the sun is still shining!
						</div>
					</div>
					<div className='col-12 d-flex flex-column justify-content-center align-items-center'>
						<Button className='px-5 py-3 fs-2' color='danger' tag='a' href='/'>
							Homepage
						</Button>
					</div>
				</div>
			</Page>
		</PageWrapper>
	)
}

export default Page404
