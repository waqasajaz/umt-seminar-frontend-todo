import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const todoStatusOptions = [
  { labelToShow: "All", value: "all" },
  { labelToShow: "Active", value: true },
  { labelToShow: "Inactive", value: false },
];

const TodosGridFilters = ({ todosTableFilters, setTodosTableFilters }) => (
  <FormControl sx={{ m: 1, minWidth: 150 }}>
    <InputLabel>Todo Status</InputLabel>
    <Select
      label="Todo Status"
      value={todosTableFilters.status}
      onChange={(e) =>
        setTodosTableFilters((prev) => ({
          ...prev,
          status: e.target.value,
        }))
      }
    >
      {todoStatusOptions.map((status) => (
        <MenuItem key={status.value} value={status.value}>
          {status.labelToShow}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);
export default TodosGridFilters;
