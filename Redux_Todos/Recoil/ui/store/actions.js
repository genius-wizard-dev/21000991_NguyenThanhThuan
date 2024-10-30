import { errorState, loadingState, todosState } from "./atoms";
const API_URL = "https://6716278c33bc2bfe40bcaadb.mockapi.io/todos";
export const fetchData = async ({ set }) => {
  set(loadingState, true);
  set(errorState, null);
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch data");
    const data = await response.json();
    set(todosState, data);
  } catch (error) {
    set(errorState, error.message);
  } finally {
    set(loadingState, false);
  }
};

export const addTodo = async ({ set, get }, todo) => {
  set(loadingState, true);
  set(errorState, null);
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    if (!response.ok) throw new Error("Failed to add todo");
    const newTodo = await response.json();
    const currentTodos = get(todosState);
    set(todosState, [...currentTodos, newTodo]);
    return newTodo;
  } catch (error) {
    set(errorState, error.message);
    throw error;
  } finally {
    set(loadingState, false);
  }
};

export const editTodo = async ({ set, get }, todo) => {
  set(loadingState, true);
  set(errorState, null);
  try {
    const response = await fetch(`${API_URL}/${todo.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    });
    if (!response.ok) throw new Error("Failed to edit todo");
    const updatedTodo = await response.json();
    const currentTodos = get(todosState);
    set(
      todosState,
      currentTodos.map((t) => (t.id === updatedTodo.id ? updatedTodo : t))
    );
    return updatedTodo;
  } catch (error) {
    set(errorState, error.message);
    throw error;
  } finally {
    set(loadingState, false);
  }
};

export const deleteTodo = async ({ set, get }, id) => {
  set(loadingState, true);
  set(errorState, null);
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete todo");
    const currentTodos = get(todosState);
    set(
      todosState,
      currentTodos.filter((todo) => todo.id !== id)
    );
    return id;
  } catch (error) {
    set(errorState, error.message);
    throw error;
  } finally {
    set(loadingState, false);
  }
};
