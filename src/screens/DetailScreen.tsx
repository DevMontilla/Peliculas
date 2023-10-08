import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Platform,
} from 'react-native';
import {RootStackParams} from '../navigation/Navigation';
import {RouteProp} from '@react-navigation/native';
import {useMovieDetails} from '../hooks/useMovieDetails';
import {ActivityIndicator} from 'react-native';
import {MovieDetails} from '../components/MovieDetails';
import { GradientBackground } from '../components/GradientBackground';

type DetailScreenRouteProp = RouteProp<RootStackParams, any>;

interface Props {
  route: DetailScreenRouteProp;
}

const {height} = Dimensions.get('screen');

export const DetailScreen = ({route}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;

  const {isLoading, cast, movieFull} = useMovieDetails(movie?.id);

  return (
    <GradientBackground>
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.posterImage} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.subTitle}>{movie?.original_title}</Text>
        <Text style={styles.title}>{movie?.title}</Text>
      </View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <MovieDetails movieFull={movieFull!} cast={cast} />
      )}
    </ScrollView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: height * 0.7,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 20,
    marginBottom: Platform.OS === 'android' ? 20 : 0,
  },
  posterImage: {
    flex: 1,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  infoContainer: {
    marginHorizontal: 20,
    marginTop: Platform.OS === 'ios' ? 20 : 0,
  },
  subTitle: {
    fontSize: 16,
    color: '#FFF',
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
