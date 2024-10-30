import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducers";

const store = configureStore({
  reducer: todosReducer,
});

export default store;
