import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('todos', jsonValue);
  } catch (e) {
    // saving error
  }
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todo: [],
  },
  reducers: {
    deleteTodo: (state, action) => {
      state.todo = state.todo.filter((m) => m.id !== action.payload);
      storeData(state.todo);
    },
    addTodo: (state, action) => {
      // console.log(res);
      state.todo.unshift(action.payload);
      storeData(state.todo);
    },
    completeTodo: (state, action) => {
      state.todo = state.todo.map((m) => {
        if (m.id === action.payload) {
          m.completed = true;
        }
        return m;
      });
    },
    loadData: (state, action) => {
      state.todo = action.payload;
    },
  },
});

export const {deleteTodo, addTodo, completeTodo, loadData} = todoSlice.actions;

export const selectTodo = (state) => state.todo.todo;

export default todoSlice.reducer;
