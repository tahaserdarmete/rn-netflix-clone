import { createAsyncThunk } from '@reduxjs/toolkit';
import { getRequest } from '../../service/verb';
import {
  MOVIE_URL,
  NOW_PLAYING_URL,
  POPULAR_URL,
  TOP_RATED_URL,
  UPCOMING_URL,
} from '../../service/url';

const getNowPlayingMovies = createAsyncThunk(
  'movies/getNowPlayingMovies',
  async params => {
    try {
      const response = await getRequest(NOW_PLAYING_URL, params);

      return response.data.results;
    } catch (error) {}
  },
);

const getPopularMovies = createAsyncThunk(
  'movies/getPopularMovies',
  async params => {
    try {
      const response = await getRequest(POPULAR_URL, params);

      return response.data.results;
    } catch (error) {}
  },
);

const getTopRatedMovies = createAsyncThunk(
  'movies/getTopRatedMovies',
  async params => {
    try {
      const response = await getRequest(TOP_RATED_URL, params);

      return response.data.results;
    } catch (error) {}
  },
);

const getUpcomingMovies = createAsyncThunk(
  'movies/getUpcomingMovies',
  async params => {
    try {
      const response = await getRequest(UPCOMING_URL, params);

      return response.data.results;
    } catch (error) {}
  },
);

const getMovieData = createAsyncThunk('movies/getMovieData', async movieId => {
  try {
    const response = await getRequest(`${MOVIE_URL}${movieId}`);

    console.log('response movie data', response.data);

    return response.data;
  } catch (error) {}
});

export {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getMovieData,
};
