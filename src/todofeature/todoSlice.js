import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Redux Toolkit",
      completed: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      const todo = {
        id: nanoid(),
        title: actions.payload,
        completed: false,
      };
      state.todos.push(todo);
    },
    deleteTodo: (state, actions) => {
      state.todos = state.todos.filter((todo) => todo.id !== actions.payload);
    },
    completedTodo: (state, actions) => {
      state.todos.map((todo) =>
        todo.id === actions.payload.id
          ? todo.completed !== todo.completed
          : state.todos
      );
    },
    updateTodo: (state, actions) => {
      state.todos.map((todo) =>
        todo.id === actions.payload.id ? actions.payload.title : state.todos
      );
    },
  },
});

export const {addTodo, deleteTodo, completedTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer
