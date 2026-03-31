import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../store/slices/movieSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});
