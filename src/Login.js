import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import { getLoginTokenWithGoogle } from './interop/login.js';
import { useUserContext } from './UserContext';
import { useNavigation } from '@react-navigation/native';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { GOOGLE_CLIENT_ID, ANDROID_CLIENT_ID } from '@env';
import jwtDecode from 'jwt-decode';

WebBrowser.maybeCompleteAuthSession();

const tarotLoadingMessages = [
  "Shuffling the deck...",
  "Drawing a card...",
  "Preparing the spread...",
  "Consulting the spirits...",
  "Interpreting the symbols...",
];

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');

  const { user, setUser, setIsLoggedIn } = useUserContext();

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: GOOGLE_CLIENT_ID,
    androidClientId: ANDROID_CLIENT_ID,
  });

  useEffect(() => {
    const handleGoogleSignIn = async () => {
      if (response?.type === 'success') {
        const googleToken = response.params.id_token;
  
        try {
          const decodedToken = jwtDecode(googleToken);
          const googleId = decodedToken.sub;
          console.log(googleId, googleToken);
  
          const user = await getLoginTokenWithGoogle(googleId, googleToken);
          setUser(user);
          setIsLoggedIn(true);
          navigation.navigate('TarotApp');
        } catch (error) {
          console.error('Failed to log in with Google:', error.message);
        }
      }
    };
  
    handleGoogleSignIn();
  }, [response]);

  const signIn = async () => {
    promptAsync();
  };

  React.useEffect(() => {
    if (loading) {
      const randomIndex = Math.floor(Math.random() * tarotLoadingMessages.length);
      setLoadingMessage(tarotLoadingMessages[randomIndex]);
    }
  }, [loading]);

  const handleSubmit = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await getLoginToken(email, password);
      setUser(response);
      setLoading(false);
      setIsLoggedIn(true);
      navigation.navigate('TarotApp'); // Navigate to TarotApp after login is successful
    } catch (e) {
      
      setErrorMessage(e.message);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TouchableOpacity style={styles.button} onPress={signIn} disabled={loading}>
        <Text style={styles.buttonText}>Log in with Google</Text>
      </TouchableOpacity>
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#7C4DFF" />
          <Text style={styles.loadingMessage}>{loadingMessage}</Text>
        </View>
      )}
      {error && (
        <View style={styles.errorContainer}>
          <View style={styles.errorMessage}>
            <Text>An error occurred, please try again.</Text>
            <Text>Error: "{errorMessage}"</Text>
          </View>
        </View>
      )}
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.loginLink}>Don't have an account? Create one here.</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  loginLink: {
    fontSize: 14,
    color: '#7C4DFF',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#ECE6F2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    marginBottom: 30,
  },
  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#7C4DFF',
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 40,
  },
  inputContainer: {
    width: '100%',
  },
  textInput: {
    fontSize: 16,
    color: '#333',
    backgroundColor: '#fff',
    borderColor: '#8B3A62',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#7C4DFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorContainer: {
    backgroundColor: '#f8d7da',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 20,
    width: '100%',
  },
  errorMessage: {
    fontSize: 16,
    color: '#8B3A62',
    textAlign: 'center',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 20,
    width: '100%',
  },
  loadingMessage: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
});
