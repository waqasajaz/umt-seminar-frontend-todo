import { useMemo, useState } from "react";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TodosDeleteDialog from "./TodosDeleteDialog";
import TodosGridEditableRow from "./TodosGridEditableRow";
import TodosGridDisplayRow from "./TodosGridDisplayRow";

const TodosTable = ({ todos, setTodos, todosTableFilters }) => {
  const tableRowData = useMemo(() => {
    if (
      todosTableFilters.status === true ||
      todosTableFilters.status === false
    ) {
      return todos.filter((todo) => todo.status === todosTableFilters.status);
    } else {
    }
    return todos;
  }, [todos, todosTableFilters]);

  const [rowToBeEdit, setRowToBeEdit] = useState(null);
  const [openDeleteTodosDialog, setOpenDeleteTodosDialog] = useState(false);

  return (
    <>
      {openDeleteTodosDialog ? (
        <TodosDeleteDialog
          closeDeleteDialog={() => {
            setOpenDeleteTodosDialog(false);
            setRowToBeEdit(null);
          }}
          onDeleteTodo={() => {
            setTodos((prev) => prev.filter((row) => row.id !== rowToBeEdit.id));
            setOpenDeleteTodosDialog(false);
            setRowToBeEdit(null);
          }}
        />
      ) : null}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold", width: "5%" }}>Id</TableCell>
              <TableCell sx={{ fontWeight: "bold", width: "15%" }}>
                Name
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", width: "50%" }}>
                Description
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", width: "10%" }}>
                Status
              </TableCell>
              <TableCell sx={{ fontWeight: "bold", width: "20%" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableRowData.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                {!openDeleteTodosDialog &&
                rowToBeEdit &&
                rowToBeEdit.id === row.id ? (
                  <TodosGridEditableRow
                    rowData={rowToBeEdit}
                    setRowData={setRowToBeEdit}
                    onCancelEditing={() => setRowToBeEdit(null)}
                    onConfirmEditing={() => {
                      setTodos((prev) =>
                        prev.map((row) =>
                          row.id === rowToBeEdit.id ? rowToBeEdit : row
                        )
                      );
                      setRowToBeEdit(null);
                    }}
                  />
                ) : (
                  <TodosGridDisplayRow
                    rowData={row}
                    onTodosEditClick={() => setRowToBeEdit(row)}
                    onTodosDeleteClick={() => {
                      setRowToBeEdit(row);
                      setOpenDeleteTodosDialog(true);
                    }}
                  />
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TodosTable;
