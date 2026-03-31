import { createSlice } from '@reduxjs/toolkit';
import {
  getMovieData,
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../actions/moviesActions';

const initialState = {
  popularMovies: [],
  nowPlayingMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  movieData: {},
  pending: false,
  error: '',
};

const movieSlice = createSlice({
  name: 'movies',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPopularMovies.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        state.pending = false;
        state.popularMovies = action.payload;
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload;
      })
      .addCase(getNowPlayingMovies.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getNowPlayingMovies.fulfilled, (state, action) => {
        state.pending = false;
        state.nowPlayingMovies = action.payload;
      })
      .addCase(getNowPlayingMovies.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload;
      })
      .addCase(getTopRatedMovies.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getTopRatedMovies.fulfilled, (state, action) => {
        state.pending = false;
        state.topRatedMovies = action.payload;
      })
      .addCase(getTopRatedMovies.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload;
      })
      .addCase(getUpcomingMovies.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getUpcomingMovies.fulfilled, (state, action) => {
        state.pending = false;
        state.upcomingMovies = action.payload;
      })
      .addCase(getUpcomingMovies.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload;
      })
      .addCase(getMovieData.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getMovieData.fulfilled, (state, action) => {
        state.pending = false;
        state.movieData = action.payload;
      })
      .addCase(getMovieData.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload;
      });
  },
});

export default movieSlice.reducer;
