import { useState } from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TodosTable from "./TodosTable";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import TodosCreateDialog from "./TodosCreateDialog";
import TodosGridFilters from "./TodosGridFilters";

const TODO_LIST = [
  {
    id: 1,
    name: "Patrol Gotham City",
    description:
      "Keep the streets of Gotham safe by patrolling high-crime areas. Watch out for the Bat-Signal!",
    status: false,
  },
  {
    id: 2,
    name: "Upgrade Batmobile",
    description:
      "Visit the Batcave and upgrade the Batmobile with the latest gadgets and technology. Ensure it's ready for high-speed chases.",
    status: true,
  },
  {
    id: 3,
    name: "Investigate Crime Scene at Ace Chemicals",
    description:
      "Head to Ace Chemicals and investigate reports of suspicious activity. Be prepared for unexpected encounters and chemical hazards.",
    status: false,
  },
  {
    id: 4,
    name: "Train with Alfred",
    description:
      "Engage in rigorous physical and mental training sessions with Alfred. Sharpen combat skills and strategize for upcoming challenges.",
    status: false,
  },
];

const Todos = () => {
  const [todos, setTodos] = useState(TODO_LIST);
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
