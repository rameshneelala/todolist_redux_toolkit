import { configureStore } from "@reduxjs/toolkit";
import todoSlicesReducer from "./todoSlices";

const appStore = configureStore({
  reducer: {
    todos: todoSlicesReducer,
  },
});

// appStore.subscribe(() => {
//   const state = appStore.getState();
//   localStorage.setItem("todos", JSON.stringify(state.todos));
// });

export default appStore;
