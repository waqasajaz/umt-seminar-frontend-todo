import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TodosTable from "./TodosTable";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import TodosCreateDialog from "./TodosCreateDialog";
import TodosGridFilters from "./TodosGridFilters";
import {
  cancelgetTodosListCall,
  createNewTodo,
  getTodosList,
} from "./todosApiCalls";

const Todos = () => {
  const [todos, setTodos] = useState(null);
  const [isAddingTodoDialogOpen, setIsAddingTodoDialogOpen] = useState(false);
  const [todosTableFilters, setTodosTableFilters] = useState({
    status: "all",
  });
  const [newTodosRecord, setNewTodosRecord] = useState({
    name: "",
    description: "",
    status: false,
  });

  const resetNewRecord = () =>
    setNewTodosRecord({
      name: "",
      description: "",
      status: false,
    });

  useEffect(() => {
    (async () => {
      const todosList = await getTodosList(todosTableFilters);
      setTodos(todosList);
    })();

    return () => {
      cancelgetTodosListCall();
    };
  }, [todosTableFilters]);

  return (
    <Grid container mt={3}>
      {isAddingTodoDialogOpen ? (
        <TodosCreateDialog
          newTodosRecord={newTodosRecord}
          setNewTodosRecord={setNewTodosRecord}
          onDialogClose={() => {
            setIsAddingTodoDialogOpen(false);
            resetNewRecord();
          }}
          onAddNewTodo={async () => {
            const newTodo = await createNewTodo(newTodosRecord);
            setTodos((prev) => [...prev, { ...newTodo }]);

            setIsAddingTodoDialogOpen(false);
            resetNewRecord();
          }}
        />
      ) : null}

      <Grid xs={10} item mx={"auto"}>
        <Paper sx={{ padding: 2 }}>
          <Grid container>
            <Grid item xs={6}>
              <h1>Todos</h1>
            </Grid>

            <Grid
              container
              item
              xs={6}
              alignItems="center"
              justifyContent="flex-end"
            >
              <TodosGridFilters
                todosTableFilters={todosTableFilters}
                setTodosTableFilters={setTodosTableFilters}
              />
            </Grid>
          </Grid>

          <Grid container item xs={12} sx={{ marginBottom: 2 }}>
            <Button
              onClick={() => setIsAddingTodoDialogOpen(true)}
              startIcon={<AddIcon />}
            >
              Add New Todo
            </Button>
          </Grid>

          {todos?.length ? (
            <TodosTable
              todos={todos}
              setTodos={setTodos}
              todosTableFilters={todosTableFilters}
            />
          ) : null}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Todos;
