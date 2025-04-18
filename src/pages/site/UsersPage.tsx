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
import { useGetUsersQuery } from "../../services/usersApi"
import { useGetDepartmentsQuery } from "../../services/departmentsApi"
import UsersDataGrid from "../layout/content/UsersDataGrid"

const UsersPage = () => {
	const { darkModeStatus } = useDarkMode()
	const { data: usersData, isLoading: isUsersLoading, error: getUsersError } = useGetUsersQuery()
	const { data: departmentsData, isLoading: isDepartmentsLoading, error: getDepartmentsError } = useGetDepartmentsQuery()
	const { t } = useTranslation("users")

	useLayoutEffect(() => {
		if (getUsersError) {
			showNotification(t("Users data getting error"), `${getUsersError}`, "danger", 20000)
		}
		if (getDepartmentsError) {
			showNotification(t("Departments data getting error"), `${getDepartmentsError}`, "danger", 20000)
		}
	}, [getUsersError, getDepartmentsError, t])

	return (
		<PageWrapper title={siteMenu.users.text}>
			<SubHeader className='bg-transparent shadow-none'>
				<SubHeaderLeft>
					<span className={classNames("h2", "mb-0", "ms-2", "fw-medium", { "text-dark": !darkModeStatus })}>
						{t("Users")}
					</span>
				</SubHeaderLeft>
				{(isUsersLoading || isDepartmentsLoading) && (
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
							{!isUsersLoading && !isDepartmentsLoading
								&& <UsersDataGrid
										usersData={usersData ?? []}
										departmentsData={departmentsData ?? []}
									/>}
						</div>
					</div>
				</div>
			</Page>
		</PageWrapper>
	)
}

export default UsersPage
