import React, { FC, useState } from "react"
import Box from "@mui/material/Box"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/DeleteOutlined"
import SaveIcon from "@mui/icons-material/Save"
import CancelIcon from "@mui/icons-material/Close"
import {
	DataGrid,
	GridActionsCellItem,
	GridColDef,
	GridEventListener,
	GridInitialState,
	GridRowEditStopReasons,
	GridRowId,
	GridRowModel,
	GridRowModesModel,
	GridRowModes,
	GridRowsProp,
	// GridSlots,
	// GridRenderCellParams,
	// GridRenderEditCellParams,
	// GridToolbar,
	GridToolbarContainer,
	GridToolbarColumnsButton,
	GridToolbarFilterButton,
	GridToolbarDensitySelector,
	GridToolbarExport,
	useGridApiRef,
} from "@mui/x-data-grid"
import dayjs from "dayjs"
import { useTranslation } from "react-i18next"
import useDarkMode from "../../../hooks/useDarkMode"
import showNotification from "../../../components/extras/showNotification"
import GridToolbarAddButton from "../../../components/x-data-grid/GridToolbarAddButton"
import { useDeleteUserMutation, useUpdateUserMutation, useAddUserMutation } from "../../../services/usersApi"
import Progress from "../../../components/bootstrap/Progress"

interface IUsersDataGridProps {
	usersData: GridRowsProp
}

const UsersDataGrid: FC<IUsersDataGridProps> = ({ usersData }) => {
	const { darkModeStatus } = useDarkMode()
	const { t } = useTranslation("users")
	const apiRef = useGridApiRef()
	const [rows, setRows] = useState(usersData)
	const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({})
	const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation()
	const [updateUser, { isLoading: isUpdating, error: updatingError }] = useUpdateUserMutation()
	const [addUser, { isLoading: isAdding }] = useAddUserMutation()

	const handleEditClick = (id: GridRowId) => () => {
		setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } })
	}

	const handleSaveClick = (id: GridRowId) => () => {
		setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } })
	}

	const handleDeleteClick = (id: GridRowId) => async () => {
		if (!isDeleting) {
			try {
				const result = await deleteUser(Number(id)).unwrap()
				if (result) {
					showNotification(t("User deleting"), t("User successfully deleted"), "success", 20000)
					setRows(rows.filter((row) => row.id !== id))
				}
			} catch (err) {
				showNotification(t("User deleting error"), `${err}`, "danger", 20000)
			}
		}
	}

	const handleCancelClick = (id: GridRowId) => () => {
		setRowModesModel({
			...rowModesModel,
			[id]: { mode: GridRowModes.View, ignoreModifications: true },
		})

		const editedRow = rows.find((row) => row.id === id)

		if (editedRow?.isNew) {
			setRows(rows.filter((row) => row.id !== id))
		}
	}

	// eslint-disable-next-line consistent-return
	const processRowUpdate = async (newRow: GridRowModel) => {
		if (newRow?.isNew ?? false) {
			if (!isAdding) {
				try {
					const newRowWithAdditionalFields = {
						...newRow,
						department_id: 1,
						password: `NewUserPassword${newRow.id}`,
					}
					const result = await addUser(newRowWithAdditionalFields).unwrap()
					if (result?.id) {
						showNotification(
							t("User adding"),
							`User "${result?.name}" successfully added`,
							"success",
							20000,
						)
						setRows([result, ...rows.filter((row) => row.id !== newRow.id)])
						return { ...result, isNew: true }
					}
				} catch (err) {
					showNotification(t("User adding error"), `${err}`, "danger", 20000)
				}
			}
		} else if (!isUpdating) {
			try {
				const result = await updateUser(newRow).unwrap()
				if (result.id) {
					showNotification(t("User updating"), t("User successfully updated"), "success", 20000)
					return { ...result, isNew: false }
				}
			} catch (err) {
				showNotification(t("User updating error"), `${err}`, "danger", 20000)
			}
		}
	}

	const handleRowEditStop: GridEventListener<"rowEditStop"> = (params, event) => {
		if (params.reason === GridRowEditStopReasons.rowFocusOut) {
			event.defaultMuiPrevented = true
		}
	}

	const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
		setRowModesModel(newRowModesModel)
	}

	const columns: GridColDef[] = [
		{
			field: "name",
			headerName: t("Name"),
			flex: 1,
			editable: true,
		},
		{
			field: "email",
			headerName: t("Email"),
			flex: 1,
			editable: true,
		},
		{
			field: "role",
			headerName: t("Role"),
			flex: 1,
			editable: true,
			type: "singleSelect",
			valueOptions: [
				{ value: undefined, label: t("Select Role") },
				{ value: "admin", label: t("Admin") },
				{ value: "usersAdmin", label: t("Users Admin") },
				{ value: "viewOnly", label: t("View Only") },
				{ value: "user", label: t("User") },
			],
		},
		{
			field: "updated_at",
			headerName: t("Updated at"),
			flex: 1,
			valueFormatter: (value) => dayjs(new Date(value)).format("HH:mm DD.MM.YYYY"),
		},
		{
			field: "actions",
			type: "actions",
			headerName: "Actions",
			flex: 1,
			cellClassName: "actions",
			getActions: ({ id }) => {
				const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit

				if (isInEditMode) {
					return [
						<GridActionsCellItem
							icon={<SaveIcon />}
							label={t("Save")}
							sx={{
								color: "primary.main",
							}}
							onClick={handleSaveClick(id)}
						/>,
						<GridActionsCellItem
							icon={<CancelIcon />}
							label={t("Cancel")}
							className='textPrimary'
							onClick={handleCancelClick(id)}
							color='inherit'
						/>,
					]
				}

				return [
					<GridActionsCellItem
						icon={<EditIcon />}
						label={t("Edit")}
						className='textPrimary'
						onClick={handleEditClick(id)}
						color='inherit'
					/>,
					<GridActionsCellItem
						icon={<DeleteIcon />}
						label={t("Delete")}
						onClick={handleDeleteClick(id)}
						color='inherit'
					/>,
				]
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
			<div className='data-grid-progress-bar'>
				{(isDeleting || isUpdating || isAdding) && (
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
				)}
			</div>
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
					editMode='row'
					rowModesModel={rowModesModel}
					onRowModesModelChange={handleRowModesModelChange}
					onRowEditStop={handleRowEditStop}
					processRowUpdate={processRowUpdate}
					onProcessRowUpdateError={updatingError?.toString}
					pageSizeOptions={[5, 10, 25, 50, 100]}
					initialState={initialState}
					sx={{ border: 0 }}
					rowHeight={43}
					slots={{
						// eslint-disable-next-line react/no-unstable-nested-components
						toolbar: () => {
							return (
								<GridToolbarContainer>
									<GridToolbarColumnsButton />
									<GridToolbarFilterButton />
									<GridToolbarDensitySelector
										slotProps={{ tooltip: { title: t("Change density") } }}
									/>
									<GridToolbarExport slotProps={{ tooltip: { title: t("Export data") } }} />
									<Box sx={{ flexGrow: 1 }} />
									<GridToolbarAddButton
										setRows={setRows}
										setRowModesModel={setRowModesModel}
										buttonTitle='Add user'
										fieldToFocus='name'
									/>
								</GridToolbarContainer>
							)
						},
					}}
					apiRef={apiRef}
					disableRowSelectionOnClick
				/>
			</Box>
		</>
	)
}

export default UsersDataGrid
