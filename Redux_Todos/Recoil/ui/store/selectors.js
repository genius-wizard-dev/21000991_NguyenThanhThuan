import { selector } from "recoil";
import { searchQueryState, todosState } from "./atoms";

export const filteredTodosSelector = selector({
  key: "filteredTodosSelector",
  get: ({ get }) => {
    const todos = get(todosState);
    const searchQuery = get(searchQueryState);

    if (!Array.isArray(todos)) return [];

    return todos.filter((todo) =>
      todo?.task?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  },
});

export const todoByIdSelector = selector({
  key: "todoByIdSelector",
  get: ({ get }) => (id) => {
    const todos = get(todosState);
    if (!Array.isArray(todos)) return null;
    return todos.find(todo => todo.id === id);
  }
});
