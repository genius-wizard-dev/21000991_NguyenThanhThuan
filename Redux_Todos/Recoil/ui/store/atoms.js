import { atom } from "recoil";

export const todosState = atom({
  key: "todosState",
  default: [],
});

export const loadingState = atom({
  key: "loadingState",
  default: false,
});

export const errorState = atom({
  key: "errorState",
  default: null,
});

export const searchQueryState = atom({
  key: "searchQueryState",
  default: "",
});
