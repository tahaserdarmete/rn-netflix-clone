//import liraries
import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieData } from '../../store/actions/moviesActions';
import { defaultScreenStyle } from '../../styles/defaultScreenStyle';
import { Colors } from '../../theme/colors';
import { IMG_BASE_URL } from '../../service/url';
import { screenHeight, screenWidth } from '../../utils/constants';

// create a component
const MovieDetail = ({ route }) => {
  const movie = route.params.movie;
  const dispatch = useDispatch();
  const { pending, movieData } = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(getMovieData(movie.id));
  }, []);

  return (
    <View style={defaultScreenStyle.container}>
      {pending ? (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator color={Colors.SECOND} size={'large'} />
        </View>
      ) : (
        <ScrollView style={{ flex: 1 }}>
          <View>
            <Image
              style={{ width: screenWidth, height: screenHeight * 0.3 }}
              source={{ uri: `${IMG_BASE_URL}${movieData.backdrop_path}` }}
            />

            <Image
              style={{
                width: screenWidth / 3,
                height: screenHeight * 0.2,
                position: 'absolute',
                bottom: -screenHeight * 0.05,
                borderWidth: 2,
                borderColor: Colors.YELLOW,
                borderRadius: 10,
                resizeMode: 'stretch',
                left: 10,
                shadowColor: Colors.YELLOW,
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,
                elevation: 3,
              }}
              source={{ uri: `${IMG_BASE_URL}${movieData.poster_path}` }}
            />

            <View style={styles.voteContainer}>
              <Text style={styles.voteAverage}>
                IMDB: {movieData?.vote_average?.toFixed(2)}
              </Text>
            </View>
          </View>

          <View
            style={{ paddingHorizontal: 10, marginTop: screenHeight * 0.1 }}
          >
            <Text style={styles.title}>{movieData.title}</Text>
            <Text style={styles.overview}>{movieData.overview}</Text>
          </View>

          <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
            <Text
              style={{
                fontSize: 24,
                color: Colors.SECOND,
                fontWeight: '800',
              }}
            >
              Genres
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 10,
              }}
            >
              {movieData?.genres?.map(item => (
                <Text
                  style={{
                    color: Colors.YELLOW,
                    marginRight: 10,
                    marginTop: 5,
                  }}
                  key={item.id}
                >
                  {item.name}
                </Text>
              ))}
            </View>
          </View>

          <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
            <Text
              style={{
                fontSize: 24,
                color: Colors.SECOND,
                fontWeight: '800',
                marginTop: 10,
              }}
            >
              Release Date
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text
                style={{
                  color: Colors.YELLOW,
                  marginRight: 10,
                  marginTop: 5,
                }}
              >
                {new Date(movieData.release_date).toLocaleDateString('tr', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}
              </Text>
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  voteContainer: {
    backgroundColor: Colors.YELLOW,
    position: 'absolute',
    padding: 5,
    width: 90,
    height: 90,
    borderRadius: 1000,
    justifyContent: 'center',
    alignItems: 'center',
    right: 5,
    bottom: -screenHeight * 0.05,
  },
  voteAverage: {
    fontWeight: '700',
    fontSize: 14,
  },
  overview: {
    fontSize: 14,
    color: Colors.WHITE,
    lineHeight: 25,
  },
  title: {
    color: Colors.WHITE,
    marginVertical: 10,
    fontSize: 24,
    fontWeight: '800',
  },
});

//make this component available to the app
export default MovieDetail;
