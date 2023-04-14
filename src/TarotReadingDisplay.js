import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TarotReadingDisplay = ({ reading }) => {
  if (!reading) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarot Reading</Text>
      <Text style={styles.reading}>{reading}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reading: {
    fontSize: 16,
    color: '#333',
    textAlign: 'justify',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
    maxWidth: 600,
  },
});

export default TarotReadingDisplay;
