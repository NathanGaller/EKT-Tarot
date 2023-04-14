import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import TarotCard from './TarotCard';

const TarotReading = () => {
  const [cards, setCards] = useState([]);
  const [isFlipped, setIsFlipped] = useState([false, false, false]);

  // const fetchTarotReading = async () => {
  //   try {
  //     const tarotReading = await getTarotReading(user);
  //     setCards(tarotReading.cards.slice(0, 3));
  //     setIsFlipped([true, true, true]);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <View>
      <View style={styles.cardRow}>
        <TarotCard
          card={cards[0]}
          isFlipped={isFlipped[0]}
        />
        <TarotCard
          card={cards[1]}
          isFlipped={isFlipped[1]}
        />
        <TarotCard
          card={cards[2]}
          isFlipped={isFlipped[2]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardRow: {
    flexDirection: 'row',
  },
});

export default TarotReading;