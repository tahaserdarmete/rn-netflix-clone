import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import MovieCard from '../../components/movies/movieCard';

const Movies = ({ route }) => {
  const data = route.params.data;

  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={({ item }) => <MovieCard movie={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Movies;
