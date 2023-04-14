import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { signUp } from './interop/signup.js';
import { useUserContext } from './UserContext.js';
import { useNavigation } from '@react-navigation/native';

const tarotLoadingMessages = [
  "Shuffling the deck...",
  "Drawing a card...",
  "Preparing the spread...",
  "Consulting the spirits...",
  "Interpreting the symbols...",
];

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const { user, setUser, setIsLoggedIn } = useUserContext();
  const navigation = useNavigation();

  React.useEffect(() => {
    if (loading) {
      const randomIndex = Math.floor(Math.random() * tarotLoadingMessages.length);
      setLoadingMessage(tarotLoadingMessages[randomIndex]);
    }
  }, [loading]);

  const handleSubmit = async () => {
    if (password !== passwordRepeat) {
      setError(true);
      setErrorMessage("Passwords don't match.");
      return;
    }

    setLoading(true);
    setError(false);

    try {
      const response = await signUp(email, password);
      setUser(response);
      setLoading(false);
      setIsLoggedIn(true);
      alert('An OTP has been sent to your email. Please verify your account.');
      navigation.navigate('TarotApp'); // Navigate to TarotApp after sign up is successful
    } catch (e) {
      setErrorMessage(e.message);
      setError(true);
      setLoading(false);
    }
  };

  return (
<View style={styles.container}>
  <Text style={styles.title}>Sign Up</Text>
  <View style={styles.inputContainer}>
    <TextInput
      style={styles.textInput}
      placeholder="Email"
      onChangeText={text => setEmail(text)}
      value={email}
    />
    <TextInput
      style={styles.textInput}
      placeholder="Password"
      onChangeText={text => setPassword(text)}
      value={password}
      secureTextEntry
    />
    <TextInput
      style={styles.textInput}
      placeholder="Repeat Password"
      onChangeText={text => setPasswordRepeat(text)}
      value={passwordRepeat}
      secureTextEntry
    />
    <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled={loading}>
      <Text style={styles.buttonText}>Sign up</Text>
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

  <TouchableOpacity onPress={() => navigation.navigate('Login')}>
    <Text style={styles.loginLink}>Already have an account? Log in</Text>
  </TouchableOpacity>
  </View>
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
