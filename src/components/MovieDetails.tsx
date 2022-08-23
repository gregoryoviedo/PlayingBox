import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';
import {MovieFull} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import {CastItem} from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      <View style={styles.marginHorizontal}>
        <View style={styles.directionFlex}>
          <Icon name="star-outline" color="gray" size={16} />
          <Text>{movieFull.vote_average}</Text>
          <Text style={styles.spaceLeft}>
            - {movieFull.genres.map((g) => g.name).join(', ')}
          </Text>
        </View>
        <Text style={styles.title}>Historia</Text>
        <Text style={styles.overview}>{movieFull.overview}</Text>
        <Text style={styles.title}>Presupuesto</Text>
        <Text style={styles.budget}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>
      <View style={styles.castCard}>
        <Text style={{...styles.title, marginHorizontal: 20}}>Actores</Text>
        <FlatList
          data={cast}
          horizontal={true}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          showsHorizontalScrollIndicator={false}
          style={styles.flatlistCard}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  marginHorizontal: {
    marginHorizontal: 20,
  },
  directionFlex: {
    flexDirection: 'row',
  },
  spaceLeft: {
    marginLeft: 5,
  },
  title: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
  },
  overview: {
    fontSize: 16,
  },
  budget: {
    fontSize: 18,
  },
  castCard: {
    marginTop: 10,
    marginBottom: 100,
  },
  flatlistCard: {
    marginTop: 10,
    height: 70,
  },
});
