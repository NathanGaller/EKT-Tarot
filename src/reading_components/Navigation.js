import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from '../Style';


const Navigation = ({ setActiveScreen }) => (
  <View style={styles.navigation}>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => setActiveScreen('main')}
      >
        <Text style={styles.navButtonText}>New Reading</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => setActiveScreen('history')}
      >
        <Text style={styles.navButtonText}>Reading History</Text>
      </TouchableOpacity>
    </View>
);

export default Navigation;
