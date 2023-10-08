import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {MovieFull} from '../interfaces/movie';
import {Cast} from '../interfaces/actor';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import {CastCard} from './CastCard';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Icon name="star-outline" color={'white'} size={16} />
          <Text style={styles.textColor}> {Math.round(movieFull.vote_average)}</Text>
          <Text style={styles.textColor}>
            {' '}
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>

        <Text
          style={[
            {fontSize: 23, marginTop: 10, fontWeight: 'bold'},
            styles.textColor,
          ]}>
          Historia
        </Text>
        <Text style={styles.textColor}>{movieFull.overview}</Text>

        <Text
          style={[
            {fontSize: 23, marginTop: 10, fontWeight: 'bold'},
            styles.textColor,
          ]}>
          Presupuesto
        </Text>
        <Text style={styles.textColor}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>
      <View style={{marginBottom: 30}}>
        <Text
          style={[
            {fontSize: 23, marginTop: 10, fontWeight: 'bold', marginLeft: 20},
            styles.textColor,
          ]}>
          Reparto
        </Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastCard actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10}}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textColor: {
    color: '#E5E5E5',
  },
});
