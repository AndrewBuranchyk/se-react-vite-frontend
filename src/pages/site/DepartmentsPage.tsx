import React, { useLayoutEffect } from "react"
import classNames from "classnames"
import { useTranslation } from "react-i18next"
import Page from "../../layout/Page/Page"
import PageWrapper from "../../layout/PageWrapper/PageWrapper"
import SubHeader, { SubHeaderLeft } from "../../layout/SubHeader/SubHeader"
import { siteMenu } from "../../menu"
import useDarkMode from "../../hooks/useDarkMode"
import Progress from "../../components/bootstrap/Progress"
import showNotification from "../../components/extras/showNotification"
import { useGetDepartmentsQuery } from "../../services/departmentsApi"
import DepartmentsDataGrid from "../layout/content/DepartmentsDataGrid"

const DepartmentsPage = () => {
	const { darkModeStatus } = useDarkMode()
	const { data, isLoading, error } = useGetDepartmentsQuery()
	const { t } = useTranslation("departments")

	useLayoutEffect(() => {
		if (error) {
			showNotification(t("Departments data getting error"), `${error}`, "danger", 20000)
		}
	}, [error, t])

	return (
		<PageWrapper title={siteMenu.departments.text}>
			<SubHeader className='bg-transparent shadow-none'>
				<SubHeaderLeft>
					<span className={classNames("h2", "mb-0", "ms-2", "fw-medium", { "text-dark": !darkModeStatus })}>
						{t("Departments")}
					</span>
				</SubHeaderLeft>
				{isLoading && (
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
			</SubHeader>
			<Page className='pt-2'>
				<div className='row'>
					<div className='col-12'>
						<div className='d-flex flex-column px-4 pb-2 align-items-center data-grid-block'>
							{!isLoading && <DepartmentsDataGrid departmentsData={data ?? []} />}
						</div>
					</div>
				</div>
			</Page>
		</PageWrapper>
	)
}

export default DepartmentsPage
