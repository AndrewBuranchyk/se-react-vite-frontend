import React, { useLayoutEffect, forwardRef, ReactElement } from "react"
import classNames from "classnames"
import { ISubHeaderProps } from "../SubHeader/SubHeader"
import { IPageProps } from "../Page/Page"

interface IPageWrapperProps {
	title?: string
	description?: string
	children: ReactElement<ISubHeaderProps>[] | ReactElement<IPageProps> | ReactElement<IPageProps>[]
	className?: string
}
const PageWrapper = forwardRef<HTMLDivElement, IPageWrapperProps>(
	({ title, description, className, children }, ref) => {
		useLayoutEffect(() => {
			// @ts-ignore
			document.getElementsByTagName("TITLE")[0].text = `${title ? `${title} | ` : ""}${
				import.meta.env.VITE_SITE_NAME
			}`
			// @ts-ignore
			document
				?.querySelector('meta[name="description"]')
				.setAttribute("content", description || import.meta.env.VITE_META_DESC || "")
		})

		return (
			<div ref={ref} className={classNames("page-wrapper", "container-fluid", className)}>
				{children}
			</div>
		)
	},
)

export default PageWrapper
