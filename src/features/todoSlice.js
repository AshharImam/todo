import {createSlice} from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todo: [
      {
        id: 11,
        title: 'Build React Native App',
        due: 'tomorrow',
        color: 'dodgerblue',
      },
      {
        id: 10,
        title: 'Build React Native App',
        due: 'tomorrow',
        color: 'dodgerblue',
      },
      {
        id: 9,
        title: 'Build React Native App',
        due: 'tomorrow',
        color: 'dodgerblue',
      },
      {
        id: 8,
        title: 'Build React Native App',
        due: 'tomorrow',
        color: 'dodgerblue',
      },
      {
        id: 7,
        title: 'Build React Native App',
        due: 'tomorrow',
        color: 'dodgerblue',
      },
      {
        id: 6,
        title: 'Build React Native App',
        due: 'tomorrow',
        color: 'dodgerblue',
      },
      {
        id: 5,
        title: 'Build React Native App',
        due: 'tomorrow',
        color: 'dodgerblue',
      },
      {
        id: 4,
        title: 'Build React Native App',
        due: 'tomorrow',
        color: 'dodgerblue',
      },
      {
        id: 3,
        title: 'Build React Native App',
        due: 'tomorrow',
        color: 'dodgerblue',
      },
      {
        id: 2,
        title: 'Build React Native App',
        due: 'tomorrow',
        color: 'dodgerblue',
      },
      {
        id: 1,
        title: 'Build React Native App',
        due: 'tomorrow',
        color: 'dodgerblue',
      },
    ],
  },
  reducers: {
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((m) => m.id !== action.payload);
    },
    addTodo: (state, action) => {
      const res = action.payload;
      res['id'] = state.todo.length === 0 ? 0 : state.todo[0].id + 1;
      // console.log(res);
      state.todo.unshift(res);
    },
  },
});

export const {deleteTodo, addTodo} = todoSlice.actions;

export const selectTodo = (state) => state.todo.todo;

export default todoSlice.reducer;
