import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {Cast} from '../interfaces/actor';

interface Props {
  actor: Cast;
}

export const CastCard = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image
          source={{uri}}
          style={{width: 50, height: 50, borderRadius: 10}}
        />
      )}

      <View style={styles.actorInfo}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{actor.name}</Text>
        <Text style={{fontSize: 16, color: '#000'}}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.24,
    shadowRadius: 3,
    elevation: 5,
    marginRight: 10,
    marginLeft: 20,
    paddingRight: 10,
    marginBottom: 15
  },
  actorInfo: {
    marginLeft: 10,
  },
});
