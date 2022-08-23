import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

export const CastItem = ({actor}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.CastCard}>
      {actor.profile_path && <Image source={{uri}} style={styles.ImageCast} />}
      <View style={styles.CastInfo}>
        <Text style={styles.nameCast}>{actor.name}</Text>
        <Text style={styles.characterCast}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  CastCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    marginHorizontal: 20,
    paddingRight: 15,
  },
  CastInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
  nameCast: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  characterCast: {
    fontSize: 16,
    opacity: 0.7,
  },
  ImageCast: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
