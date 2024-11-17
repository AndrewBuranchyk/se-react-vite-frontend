import React, { useLayoutEffect, useState, useMemo } from "react"
import Box from "@mui/material/Box"
import {
	DataGrid,
	GridColDef,
	GridInitialState,
	GridFilterModel,
	GridToolbarContainer,
	GridToolbarColumnsButton,
	GridToolbarDensitySelector,
	GridToolbarExport,
	GridToolbarQuickFilter,
	useGridApiRef,
} from "@mui/x-data-grid"
import dayjs from "dayjs"
import { useTranslation } from "react-i18next"
import useDarkMode from "../../../hooks/useDarkMode"
import showNotification from "../../../components/extras/showNotification"
import Progress from "../../../components/bootstrap/Progress"
import { useGetLogsQuery } from "../../../services/logsApi"

const LogsDataGrid = () => {
	const { darkModeStatus } = useDarkMode()
	const { t } = useTranslation("logs")
	const apiRef = useGridApiRef()
	const [paginationModel, setPaginationModel] = useState({
		page: 0,
		pageSize: 10,
	});
	const [queryFilter, setQueryFilter] = useState({
		search: "",
	});
	const queryOptions = useMemo(() => Object.assign({}, paginationModel, queryFilter), [paginationModel, queryFilter])
	const { data: logsData, isLoading, isFetching, error } = useGetLogsQuery(queryOptions)
	const rows = useMemo(() => logsData?.data ?? [], [logsData])
	const rowCount = useMemo(() => logsData?.meta?.total ?? 1, [logsData])

	const onFilterChange = (filterModel: GridFilterModel) => {
		let { quickFilterValues } = filterModel;
		if (quickFilterValues) {
			if (quickFilterValues.length > 0) {
				setQueryFilter({ search: quickFilterValues.join(" ") });
			} else {
				setQueryFilter({ search: "" });
			}
		} else {
			setQueryFilter({ search: "" });
		}
	}

	useLayoutEffect(() => {
		if (error) {
			showNotification(t("Logs data getting error"), `${error}`, "danger", 20000)
		}
	}, [error, t])

	const columns: GridColDef[] = [
		{
			field: "created_at",
			headerName: t("Created at"),
			sortable: false,
			filterable: false,
			flex: 1,
			valueFormatter: (value) =>
				dayjs(new Date(value)).format("DD.MM.YYYY HH:mm"),
		},
		{
			field: "event",
			headerName: t("Event"),
			sortable: false,
			filterable: false,
			flex: 1,
		},
		{
			field: "other_data",
			headerName: t("Details"),
			sortable: false,
			filterable: false,
			flex: 3,
			valueGetter: (value, row) => {
				let result = '';
				if (row.model) result += `${row.model}`
				if (value) {
					let otherData = JSON.parse(value);
					if (otherData.modelData) {
						result += ` # ${otherData.modelData?.id}`;
						if (otherData.modelData?.name)
							result += `, ${otherData.modelData?.name}`;
						if (otherData.modelData?.email)
							result += `, ${otherData.modelData?.email}`;
					}
					else result += ` ${value}`
				}
				if (row.user?.name){
					if (row?.event != 'login') result += ` |`
					result += ` ${row.user?.name}`
				}
				return result;
			},
		},
	]

	const initialState: GridInitialState = {
		pagination: {
			paginationModel: { pageSize: 10, page: 0 },
		},
		sorting: {
			sortModel: [{ field: "name", sort: "asc" }],
		},
	}

	return (
		<>
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
			{!isLoading &&
				<Box
					sx={{
						height: "81vh",
						width: "100%",
						"& .actions": {
							color: darkModeStatus ? "white" : "text.secondary",
						},
						"& .textPrimary": {
							color: darkModeStatus ? "white" : "text.primary",
						},
					}}>
					<DataGrid
						rows={rows}
						columns={columns}
						rowCount={rowCount}
						loading={isFetching}
						pageSizeOptions={[5, 10, 25, 50, 100]}
						paginationModel={paginationModel}
						paginationMode="server"
						onPaginationModelChange={setPaginationModel}
						filterMode="server"
						onFilterModelChange={onFilterChange}
						initialState={initialState}
						sx={{ border: 0 }}
						rowHeight={43}
						slots={{
							// eslint-disable-next-line react/no-unstable-nested-components
							toolbar: () => {
								return (
									<GridToolbarContainer>
										<GridToolbarColumnsButton />
										<GridToolbarDensitySelector
											slotProps={{ tooltip: { title: t("Change density") } }}
										/>
										<GridToolbarExport slotProps={{ tooltip: { title: t("Export data") } }} />
										<GridToolbarQuickFilter variant='outlined' debounceMs={1000} />
									</GridToolbarContainer>
								)
							},
						}}
						apiRef={apiRef}
						disableRowSelectionOnClick
					/>
				</Box>
			}
		</>
	)
}

export default LogsDataGrid
