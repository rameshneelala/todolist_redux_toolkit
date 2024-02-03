import { createSlice, current } from "@reduxjs/toolkit";

const todoSlices = createSlice({
  name: "todos",
  initialState: {
    items: JSON.parse(localStorage.getItem("todos"))
      ? JSON.parse(localStorage.getItem("todos"))
      : [],
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = action.payload;
      if (!state.items.some((todo) => todo.id === newTodo.id)) {
        state.items.push(newTodo);
      }
      let todoData = JSON.stringify(current(state.items));
      localStorage.setItem("todos", todoData);
    },
    editTodo: (state, action) => {
      state.items = state.items.map((todo) =>
        todo.id === action.payload
          ? { ...todo, title: action.payload.title }
          : todo
      );
      let todoData = JSON.stringify(state.items);
      localStorage.setItem("todos", todoData);
    },
    saveTodo: (state, action) => {
      const updatedTodos = state.items.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo
      );
      state.items = updatedTodos;
      let todoData = JSON.stringify(state.items);
      localStorage.setItem("todos", todoData);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
      let todoData = JSON.stringify(state.items);
      localStorage.setItem("todos", todoData);
    },
  },
});

export const { addTodo, editTodo, saveTodo, deleteTodo } = todoSlices.actions;
export default todoSlices.reducer;
