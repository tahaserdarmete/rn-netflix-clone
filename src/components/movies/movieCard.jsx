import { StyleSheet, Pressable, Image, View, Text } from 'react-native';
import { IMG_BASE_URL } from '../../service/url';
import { screenHeight, screenWidth } from '../../utils/constants';
import { Colors } from '../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { MOVIEDETAIL } from '../../utils/routes';

const MovieCard = ({ movie }) => {
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

      <View style={{ paddingHorizontal: 10 }}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.vote_count}>vote count: {movie.vote_count}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: screenWidth / 2 - 8,
    height: screenHeight * 0.45,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: Colors.YELLOW,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  vote_count: {
    color: 'gray',
  },
  title: {
    color: Colors.WHITE,
    marginVertical: 10,
    fontSize: 16,
    fontWeight: '600',
  },

  image: {
    width: screenWidth / 2 - 15,
    height: screenHeight * 0.35,
    borderRadius: 8,
    resizeMode: 'stretch',
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

export default MovieCard;
