import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TarotCard = ({ card, isFlipped, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={isFlipped ? styles.cardFlipped : styles.cardPlaceholder}>
        {isFlipped && <Text style={styles.cardText}>{card}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  cardPlaceholder: {
    width: 100,
    height: 150,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardFlipped: {
    width: 100,
    height: 150,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
  },
});

export default TarotCard;