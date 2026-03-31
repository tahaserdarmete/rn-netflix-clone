import { View, FlatList, Text } from 'react-native';
import React, { useEffect } from 'react';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import Section from '../../components/home/section';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPopularMovies,
  getNowPlayingMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../../store/actions/moviesActions';

const Home = () => {
  const { popularMovies, nowPlayingMovies, topRatedMovies, upcomingMovies } =
    useSelector(state => state.movies);
  const dispatch = useDispatch();

  const sections = [
    {
      id: 1,
      title: 'Now Playing Movies',
      data: nowPlayingMovies,
    },
    {
      id: 2,
      title: 'Popular Movies',
      data: popularMovies,
    },
    {
      id: 3,
      title: 'Top Rated Movies',
      data: topRatedMovies,
    },
    {
      id: 4,
      title: 'Upcoming Movies',
      data: upcomingMovies,
    },
  ];

  useEffect(() => {
    dispatch(getPopularMovies({}));
    dispatch(getNowPlayingMovies({}));
    dispatch(getTopRatedMovies({}));
    dispatch(getUpcomingMovies({}));
  }, []);

  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        data={sections}
        renderItem={({ item }) => <Section section={item} data={item.data} />}
      />
    </View>
  );
};

export default Home;
