import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import TarotReadingDisplay from './TarotReadingDisplay';

const TarotReadingList = ({ readings }) => {
  const renderItem = ({ item }) => (
    <View style={styles.readingContainer}>
      <Text style={styles.date}>
        {new Date(item.createdAt).toLocaleDateString()}
      </Text>
      <TarotReadingDisplay reading={item.reading} />
    </View>
  );

  return (
    <FlatList
      data={readings}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  readingContainer: {
    marginBottom: 20,
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default TarotReadingList;
