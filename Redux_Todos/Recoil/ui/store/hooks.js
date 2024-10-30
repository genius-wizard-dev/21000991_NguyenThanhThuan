import { useRecoilCallback } from "recoil";
import { errorState, loadingState, todosState } from "./atoms";

const API_URL = "https://6716278c33bc2bfe40bcaadb.mockapi.io/todos";

export const useTodoActions = () => {
  const fetchTodos = useRecoilCallback(({ set }) => async () => {
    set(loadingState, true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      set(todosState, data || []);
    } catch (error) {
      set(errorState, error.message);
      set(todosState, []);
    } finally {
      set(loadingState, false);
    }
  });

  const addTodo = useRecoilCallback(({ set, snapshot }) => async (todo) => {
    set(loadingState, true);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });
      if (!response.ok) throw new Error("Failed to add todo");
      const newTodo = await response.json();
      const currentTodos = await snapshot.getPromise(todosState);
      set(todosState, [...(currentTodos || []), newTodo]);
      return newTodo;
    } catch (error) {
      set(errorState, error.message);
      throw error;
    } finally {
      set(loadingState, false);
    }
  });

  const editTodo = useRecoilCallback(({ set, snapshot }) => async (todo) => {
    set(loadingState, true);
    try {
      const response = await fetch(`${API_URL}/${todo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
      });
      if (!response.ok) throw new Error("Failed to edit todo");
      const updatedTodo = await response.json();
      const currentTodos = await snapshot.getPromise(todosState);
      set(todosState, (currentTodos || []).map((t) =>
        t.id === updatedTodo.id ? updatedTodo : t
      ));
      return updatedTodo;
    } catch (error) {
      set(errorState, error.message);
      throw error;
    } finally {
      set(loadingState, false);
    }
  });

  const deleteTodo = useRecoilCallback(({ set, snapshot }) => async (id) => {
    set(loadingState, true);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete todo");
      const currentTodos = await snapshot.getPromise(todosState);
      set(todosState, (currentTodos || []).filter((todo) => todo.id !== id));
      return id;
    } catch (error) {
      set(errorState, error.message);
      throw error;
    } finally {
      set(loadingState, false);
    }
  });

  return {
    fetchTodos,
    addTodo,
    editTodo,
    deleteTodo,
  };
};
