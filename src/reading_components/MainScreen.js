import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ActivityIndicator, FlatList, StyleSheet } from 'react-native';
import { styles } from '../Style';
import TarotReading from '../TarotReading';
import TarotReadingDisplay from '../TarotReadingDisplay';
import { getTarotReading } from '../interop/tarot';
import { ComplexError } from '../api';
import { useUserContext } from '../UserContext';



const tarotQuestions = [
  "What does the future hold for me?",
  "What is blocking me from achieving my goals?",
  "How can I improve my relationship with my husband/wife?",
  "What do I need to learn from my past experiences?",
  "What is my purpose in life?",
];

const tarotLoadingMessages = [
  "Shuffling the deck...",
  "Drawing a card...",
  "Preparing the spread...",
  "Consulting the spirits...",
  "Interpreting the symbols...",
];

const MainScreen = ({navigation}) => {
  const [question, setQuestion] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [tarotReadingResult, setTarotReadingResult] = useState(null);

  const { user, setUser, setIsLoggedIn } = useUserContext();

  const handleSubmit = async () => {
    setError(false);
    try {
      setLoading(true);
  
      const response = await getTarotReading(user, 3, question);
      setLoading(false);
      setTarotReadingResult(response.reading);
    } catch (e) {
      if (e instanceof ComplexError && e.body.errorCode === 'ERR_DAILY_LIMIT_REACHED') {
        setError(e.body.error);
      } else {
        setError(`An error occurred, please try again. ${e.message}`);
      }
      setLoading(false);
    }
  };

  // choose a random loading message on mount or when loading state changes
  React.useEffect(() => {
    if (loading) {
      const randomIndex = Math.floor(Math.random() * tarotLoadingMessages.length);
      setLoadingMessage(tarotLoadingMessages[randomIndex]);
    }
  }, [loading]);

  // choose a random question on mount
  React.useEffect(() => {
    const randomIndex = Math.floor(Math.random() * tarotQuestions.length);
    setQuestion(tarotQuestions[randomIndex]);
  }, []);

  const renderItem = ({ item }) => {
    if (item.type === 'cards') {
      return <TarotReading />;
    }
    if (item.type === 'reading' && tarotReadingResult) {
      return <TarotReadingDisplay reading={tarotReadingResult} />;
    }
    return null;
  };

  const data = tarotReadingResult ? [{ type: 'cards' }, { type: 'reading' }] : [];

  return (<View style={styles.container}>
      {!tarotReadingResult && (
        <>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder={question}
              placeholderTextColor="#999"
              onChangeText={text => setQuestion(text)}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
              disabled={loading}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
          {loading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#5cb85c" />
              <Text style={styles.loadingMessage}>{loadingMessage}</Text>
            </View>
          )}
          {error && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorMessage}>
                {error}
              </Text>
            </View>
          )}
        </>
      )}
      {tarotReadingResult && (
        <FlatList
  data={data}
  renderItem={renderItem}
  keyExtractor={(item, index) => index.toString()}
  pagingEnabled={true} // Enable paging
  horizontal={false} // Change to vertical scrolling
  showsHorizontalScrollIndicator={false}
  showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
  style={styles.flatList}
/>
      )}
    </View>);
};

export default MainScreen;
