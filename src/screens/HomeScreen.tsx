import React, {useContext, useEffect} from 'react';
import {
  SafeAreaView,
  ActivityIndicator,
  Dimensions,
  View,
  Platform,
  ScrollView,
  Text,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {GradientBackground} from '../components/GradientBackground';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {getImageColors} from '../helper/getColores';
import {GradientContext} from '../context/GradientContext';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies();
  const {top, bottom} = useSafeAreaInsets();
  const {setMainColors} = useContext(GradientContext);

  useEffect(() => {
    if (nowPlaying.length > 0) {
      getPosterColors(0);
    }
  }, [nowPlaying]);

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie?.poster_path}`;

    const [primary = '#FFF', secondary = '#FFF'] = await getImageColors(uri);
    setMainColors({primary, secondary});
  };

  if (isLoading) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <GradientBackground>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{top: Platform.OS === 'android' ? 20 : top}}>
        <View style={{marginBottom:Platform.OS === 'android' ? 20 : bottom + 25}}>
          <Text
            style={{
              textAlign: 'center',
              color: '#FFF',
              marginBottom: 5,
              fontWeight: '400',
              fontSize: 12,
            }}>
            EN CARTELERA
          </Text>
          <View style={{height: 460}}>
            <Carousel
              data={nowPlaying}
              renderItem={({item}: any) => <MoviePoster movie={item} />}
              sliderWidth={windowWidth}
              itemWidth={300}
              inactiveSlideOpacity={0.9}
              onSnapToItem={index => getPosterColors(index)}
            />
          </View>
          <HorizontalSlider title="Popular" movies={popular} />
          <HorizontalSlider title="Top Rated" movies={topRated} />
          <HorizontalSlider title="Upcoming" movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
