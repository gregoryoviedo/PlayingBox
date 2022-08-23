import React from 'react';
import {Animated, Button, StyleSheet, View} from 'react-native';
import {useFade} from '../hooks/useFade';

export const FadeSceen = () => {
  const {opacity, fadeIn, fadeOut} = useFade();

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.box,
          opacity,
        }}
      />
      <Button title="fadeIn" onPress={() => fadeIn()} />
      <Button title="fadeOut" onPress={() => fadeOut()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#084F6A',
    width: 150,
    height: 150,
    borderWidth: 10,
    borderColor: 'white',
    marginBottom: 10,
  },
});
