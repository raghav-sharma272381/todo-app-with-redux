import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    value: [
      { Text: "create UI", key: "0" },
      { Text: "create UseState", key: "1" },
      { Text: "create Navigations", key: "2" },
    ],
  },
  reducers: {
    add: (state, action) => {
      const id = Math.floor(Math.random() * 100000000);
      state.value = [
        ...state.value,

        {
          Text: action.payload,
          key: id.toString(),
        },
      ];
    },
    edit: (state, action) => {
      const { id, text } = action.payload;

      state.value = state.value.map((value) =>
        value.key === id ? { ...value, Text: text } : value
      );
    },
    remove: (state, action) => {
      const { key } = action.payload;

      state.value = state.value.filter((value) => value.key != key);
    },
  },
});

export const { add, remove, edit } = todoSlice.actions;

export const selecttodos = (state) => state.todos.value;

export default todoSlice.reducer;
