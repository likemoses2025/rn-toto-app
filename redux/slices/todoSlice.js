import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    currentId: 4,
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: state.currentId++,
        text: action.payload.trim(),
        state: "doing",
      });
    },
    updateTodo: (state, action) => {
      const item = state.todos.findIndex((item) => item.id === action.payload);

      const newState = state.todos[item].state === "doing" ? "done" : "doing";

      state.todos[item].state = newState;

      state.todos.push(state.todos.splice(item, 1)[0]);
      //   Logic
      //   todos=[{text:"밥먹기",state:"done"},{text:"코딩하기",state:"doing"}]
      //   state.todos.splice(item, 1) ==> [{text:"밥먹기",state:"done"}]
      //   state.todos.splice(item,1)[0] ==> {text:"밥머기",state:"done"}
    },
    deleteTodo: (state, action) => {
      //   const newTodo = state.todos.filter((item) => item.id !== action.payload);
      //   state.todos.push(newTodo);
      const item = state.todos.findIndex((item) => item.id === action.payload);
      // item Exist
      if (item > -1) {
        state.todos.splice(item, 1);
      }
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;
