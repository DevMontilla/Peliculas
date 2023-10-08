import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {Movie} from '../interfaces/movie';
import {MoviePoster} from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({title, movies}: Props) => {
  return (
    <View style={{height: !!title ? 235 : 220}}>
      {title && (
        <Text
          style={{
            color: '#FFF',
            marginBottom: 5,
            marginLeft: 7,
            fontWeight: '400',
            fontSize: 12,
          }}>
          {title}
        </Text>
      )}
      <FlatList
        data={movies}
        renderItem={({item}: any) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
