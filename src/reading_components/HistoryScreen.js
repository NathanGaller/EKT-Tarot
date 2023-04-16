import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useUserContext } from '../UserContext';
import TarotReadingList from '../TarotReadingList';
import { getUserTarotReadings } from '../interop/tarot';
import { styles } from '../Style';

const HistoryScreen = ({ navigation }) => {
  const [tarotReadingHistory, setTarotReadingHistory] = useState([]);
  const { user } = useUserContext();

  useEffect(() => {
    getUserTarotReadings(user)
      .then((readings) => setTarotReadingHistory(readings))
      .catch((error) => console.error(error));
    console.log(tarotReadingHistory);
  }, []);

  return <View style={styles.container}>
    <TarotReadingList readings={tarotReadingHistory} />
  </View>
};

export default HistoryScreen;