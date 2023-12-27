import React, { Fragment } from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import TableCell from "@mui/material/TableCell";

const TodosGridDisplayRow = ({
  rowData,
  onTodosEditClick,
  onTodosDeleteClick,
}) => {
  return (
    <Fragment>
      <TableCell>{rowData.name}</TableCell>
      <TableCell>{rowData.description}</TableCell>
      <TableCell>
        {rowData.status ? (
          <p style={{ margin: 0, color: "green" }}>Active</p>
        ) : (
          <p style={{ margin: 0, color: "red" }}>Inactive</p>
        )}
      </TableCell>
      <TableCell>
        <Grid container>
          <IconButton onClick={onTodosEditClick}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={onTodosDeleteClick}>
            <DeleteForeverIcon />
          </IconButton>
        </Grid>
      </TableCell>
    </Fragment>
  );
};

export default TodosGridDisplayRow;
