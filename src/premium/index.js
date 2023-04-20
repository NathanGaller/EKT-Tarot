import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { requestSubscription } from 'react-native-iap';
import { useUserContext } from '../UserContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  upgradeButton: {
    backgroundColor: '#5cb85c',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  upgradeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

const UpgradeToPremium = () => {
  const { user } = useUserContext();
  const [loading, setLoading] = useState(false);

  const upgrade = async () => {
    try {
      setLoading(true);
      const productId = 'your_subscription_product_id'; // Replace this with your subscription product ID
      await requestSubscription(productId);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upgrade to Premium</Text>
      <TouchableOpacity
        style={styles.upgradeButton}
        onPress={upgrade}
        disabled={loading}
      >
        <Text style={styles.upgradeButtonText}>
          {loading ? 'Processing...' : 'Upgrade Now'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpgradeToPremium;
