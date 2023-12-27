import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TodosTable from "./TodosTable";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import TodosCreateDialog from "./TodosCreateDialog";
import TodosGridFilters from "./TodosGridFilters";

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const TODO_LIST = [
  {
    id: 1,
    name: "First Todo",
    description: `This is the first todo. ${lorem}`,
    status: true,
  },
  {
    id: 2,
    name: "Second Todo",
    description: `This is the second todo. ${lorem}`,
    status: false,
  },
  {
    id: 3,
    name: "Third Todo",
    description: `This is the third todo. ${lorem}`,
    status: true,
  },
  {
    id: 4,
    name: "Fourth Todo",
    description: `This is the fourth todo. ${lorem}`,
    status: false,
  },
  {
    id: 5,
    name: "Fifth Todo",
    description: `This is the fifth todo. ${lorem}`,
    status: true,
  },
  {
    id: 6,
    name: "Sixth Todo",
    description: `This is the sixth todo. ${lorem}`,
    status: false,
  },
  {
    id: 7,
    name: "Seventh Todo",
    description: `This is the seventh todo. ${lorem}`,
    status: true,
  },
  {
    id: 8,
    name: "Eighth Todo",
    description: `This is the eighth todo. ${lorem}`,
    status: false,
  },
  {
    id: 9,
    name: "Ninth Todo",
    description: `This is the ninth todo. ${lorem}`,
    status: true,
  },
  {
    id: 10,
    name: "Tenth Todo",
    description: `This is the tenth todo. ${lorem}`,
    status: false,
  },
];
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
    if (
      todosTableFilters.status === true ||
      todosTableFilters.status === false
    ) {
      setTodos(() =>
        TODO_LIST.filter((todo) => todo.status === todosTableFilters.status)
      );
    } else {
      setTodos(TODO_LIST);
    }
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
          onAddNewTodo={() => {
            setTodos((prev) => [
              ...prev,
              { id: todos.length + 1, ...newTodosRecord },
            ]);
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
            <TodosTable todos={todos} setTodos={setTodos} />
          ) : null}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Todos;
