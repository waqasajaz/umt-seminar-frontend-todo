import axios from "axios";
import config from "../config/config";

let getTodosListCallToken = null;

export const cancelgetTodosListCall = () => {
  if (getTodosListCallToken) {
    getTodosListCallToken.cancel();
    getTodosListCallToken = null;
  }
};

export const getTodosList = async ({ status }) => {
  let data = [];
  try {
    cancelgetTodosListCall();
    getTodosListCallToken = axios.CancelToken.source();
    const response = await axios.get(`${config.backendUrl}/api/todos`, {
      cancelToken: getTodosListCallToken.token,
      params: {
        status: status === "all" ? undefined : status,
      },
    });

    if (response.data?.data?.todos?.length) {
      data = response.data.data.todos;
    }
  } catch (error) {
    if (!axios.isCancel(error)) {
      console.error(error);
    }
  } finally {
    return data;
  }
};

export const createNewTodo = async (payload) => {
  let newTodoRecord = {};
  try {
    const { name, description, status } = payload;

    const response = await axios.post(`${config.backendUrl}/api/todos/`, {
      name,
      description,
      status,
    });

    if (response?.data?.data) {
      newTodoRecord = response?.data?.data;
    }
  } catch (error) {
    console.error(error);
  } finally {
    return newTodoRecord;
  }
};

export const updateTodoRecord = async (payload) => {
  let updatedTodoRecord = {};
  try {
    const { id, name, description, status } = payload;

    const response = await axios.put(`${config.backendUrl}/api/todos/${id}`, {
      name,
      description,
      status,
    });

    if (response?.data?.data) {
      updatedTodoRecord = response.data.data;
    }
  } catch (error) {
    console.error(error);
  } finally {
    return updatedTodoRecord;
  }
};

export const deleteTodoRecord = async (todoRecordId) => {
  try {
    const response = await axios.delete(
      `${config.backendUrl}/api/todos/${todoRecordId}`
    );

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
