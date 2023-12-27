import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";

const TodosDeleteDialog = ({ onCloseDeleteDialog, onDeleteTodo }) => {
  return (
    <Dialog open={true} onClose={onCloseDeleteDialog}>
      <DialogTitle>Delete Todo Record</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this todo record?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseDeleteDialog}>No</Button>
        <Button onClick={onDeleteTodo}>Yes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TodosDeleteDialog;
