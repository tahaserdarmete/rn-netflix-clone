import React from 'react';
import { StyleSheet, Pressable, Image, View, Text } from 'react-native';
import { IMG_BASE_URL } from '../../service/url';
import { screenHeight, screenWidth } from '../../utils/constants';
import { Colors } from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { MOVIEDETAIL } from '../../utils/routes';

const MovieItem = ({ movie }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate(MOVIEDETAIL, { movie: movie })}
      style={styles.container}
    >
      <Image
        source={{ uri: `${IMG_BASE_URL}${movie.poster_path}` }}
        style={styles.image}
      />
      <View style={styles.voteContainer}>
        <Text style={styles.voteAverage}>
          IMDB: {movie.vote_average.toFixed(2)}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  image: {
    width: screenWidth * 0.4,
    height: screenHeight * 0.3,
    borderRadius: 8,
  },
  voteContainer: {
    backgroundColor: Colors.YELLOW,
    position: 'absolute',
    padding: 5,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    right: 0,
  },
  voteAverage: {
    fontWeight: '700',
    fontSize: 14,
  },
});

export default MovieItem;
