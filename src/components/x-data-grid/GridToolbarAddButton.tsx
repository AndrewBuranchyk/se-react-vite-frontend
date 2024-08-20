import React, { FC } from "react"
import Button from "@mui/material/Button"
import AddIcon from "@mui/icons-material/Add"
import { GridRowsProp, GridRowModesModel, GridRowModes } from "@mui/x-data-grid"
import { faker } from "@faker-js/faker"

interface IGridToolbarAddButtonProps {
	setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void
	setRowModesModel: (newModel: (oldModel: GridRowModesModel) => GridRowModesModel) => void
	buttonTitle?: string
	fieldToFocus?: string
}

const GridToolbarAddButton: FC<IGridToolbarAddButtonProps> = (props) => {
	const { setRows, setRowModesModel, buttonTitle, fieldToFocus } = props

	const handleClick = () => {
		const id = faker.number.int({ min: 100000000, max: 110000000 })
		setRows((oldRows) => [...oldRows, { id, isNew: true }])
		setRowModesModel((oldModel) => ({
			...oldModel,
			[id]: { mode: GridRowModes.Edit, fieldToFocus: fieldToFocus || "name" },
		}))
	}

	return (
		<Button color='primary' startIcon={<AddIcon />} onClick={handleClick}>
			{buttonTitle || "Add record"}
		</Button>
	)
}

export default GridToolbarAddButton
