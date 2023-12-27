import React, { Fragment } from "react";
import Checkbox from "@mui/material/Checkbox";
import TableCell from "@mui/material/TableCell";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";

const maxCharactersLimit = 255;

const TodosGridEditableRow = ({
  rowData,
  setRowData,
  onCancelEditing,
  onConfirmEditing,
}) => {
  return (
    <Fragment>
      <TableCell>
        <TextField
          label="Name"
          variant="outlined"
          error={
            rowData.name.length === 0 ||
            rowData.name.length >= maxCharactersLimit
          }
          helperText={
            rowData.name.length === 0
              ? "Name is required"
              : rowData.name.length >= maxCharactersLimit
              ? "To Long Name"
              : " "
          }
          value={rowData.name}
          onChange={(e) => {
            setRowData((prev) => ({
              ...prev,
              name: e.target.value.slice(0, maxCharactersLimit),
            }));
          }}
        />
      </TableCell>
      <TableCell>
        <TextField
          sx={{ width: "100%" }}
          label="Description"
          variant="outlined"
          error={
            rowData.description.length === 0 ||
            rowData.description.length >= maxCharactersLimit
          }
          helperText={
            rowData.description.length === 0
              ? "Description is required"
              : rowData.description.length >= maxCharactersLimit
              ? "To Long Description"
              : " "
          }
          value={rowData.description}
          onChange={(e) =>
            setRowData((prev) => ({
              ...prev,
              description: e.target.value.slice(0, maxCharactersLimit),
            }))
          }
        />
      </TableCell>
      <TableCell>
        <Checkbox
          checked={rowData.status}
          onChange={() =>
            setRowData((prev) => ({
              ...prev,
              status: !prev.status,
            }))
          }
        />
      </TableCell>
      <TableCell>
        <Grid container>
          <IconButton
            disabled={
              !rowData.name ||
              rowData.name.length >= maxCharactersLimit ||
              !rowData.description ||
              rowData.description.length >= maxCharactersLimit
            }
            onClick={onConfirmEditing}
          >
            <DoneIcon />
          </IconButton>
          <IconButton onClick={onCancelEditing}>
            <ClearIcon />
          </IconButton>
        </Grid>
      </TableCell>
    </Fragment>
  );
};

export default TodosGridEditableRow;
