import React from "react"
import classNames from "classnames"
import { useTranslation } from "react-i18next"
import Page from "../../layout/Page/Page"
import PageWrapper from "../../layout/PageWrapper/PageWrapper"
import SubHeader, { SubHeaderLeft } from "../../layout/SubHeader/SubHeader"
import { siteMenu } from "../../menu"
import useDarkMode from "../../hooks/useDarkMode"
import LogsDataGrid from "../layout/content/LogsDataGrid"

const LogsPage = () => {
	const { darkModeStatus } = useDarkMode()
	const { t } = useTranslation("logs")

	return (
		<PageWrapper title={siteMenu.logs.text}>
			<SubHeader className='bg-transparent shadow-none'>
				<SubHeaderLeft>
					<span className={classNames("h2", "mb-0", "ms-2", "fw-medium", { "text-dark": !darkModeStatus })}>
						{t("Logs")}
					</span>
				</SubHeaderLeft>
			</SubHeader>
			<Page className='pt-2'>
				<div className='row'>
					<div className='col-12'>
						<div className='d-flex flex-column px-4 pb-2 align-items-center data-grid-block'>
							<LogsDataGrid />
						</div>
					</div>
				</div>
			</Page>
		</PageWrapper>
	)
}

export default LogsPage
