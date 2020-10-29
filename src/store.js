import {configureStore} from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import todoReducer from './features/todoSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    todo: todoReducer,
  },
});
