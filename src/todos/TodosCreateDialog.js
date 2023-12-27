import React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const TodosCreateDialog = ({
  onDialogClose,
  newTodosRecord,
  setNewTodosRecord,
  onAddNewTodo,
}) => {
  return (
    <Dialog open={true} onClose={onDialogClose}>
      <DialogTitle>Delete Todo Record</DialogTitle>
      <DialogContent>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={2}
          sx={{ marginTop: "4px" }}
        >
          <Grid
            container
            item
            xs={12}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item xs={4}>
              Todo Name:
            </Grid>
            <Grid item xs={8}>
              <TextField
                label="Name"
                variant="outlined"
                value={newTodosRecord.name}
                onChange={(e) =>
                  setNewTodosRecord((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
              />
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item xs={4}>
              Todo Description:
            </Grid>
            <Grid item xs={8}>
              <TextField
                label="Description"
                variant="outlined"
                value={newTodosRecord.description}
                onChange={(e) =>
                  setNewTodosRecord((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
              />
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item xs={4}>
              Todo Status:
            </Grid>
            <Grid item xs={8}>
              <Checkbox
                checked={newTodosRecord.status}
                onChange={() =>
                  setNewTodosRecord((prev) => ({
                    ...prev,
                    status: !prev.status,
                  }))
                }
              />
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onDialogClose}>Cancel</Button>
        <Button
          disabled={!newTodosRecord.name || !newTodosRecord.description}
          onClick={onAddNewTodo}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TodosCreateDialog;
