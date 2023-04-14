import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
    width: '100%',
    maxWidth: 600,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tarotReadingContainer: {
    marginBottom: 20,
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    width: '100%',
    maxWidth: 600,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    fontSize: 16,
    color: '#333', // Change text color to a dark gray
    backgroundColor: '#fff', // Add a white background to the text inputs
    borderColor: '#ccc',
    borderWidth: 1, // Add a border to the text inputs
    borderRadius: 5, // Add rounded corners to the text inputs
    marginBottom: 20, // Increase margin bottom
    paddingHorizontal: 15, // Add more padding to the text inputs
    paddingVertical: 10, // Add vertical padding to the text inputs
    width: '80%',
  },
  flatList: {
    width: '100%',
  },
  reading: {
    fontSize: 18,
    color: '#333',
    textAlign: 'justify',
    lineHeight: 28,
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#5cb85c',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorContainer: {
    backgroundColor: '#f8d7da',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    width: '100%',
    maxWidth: 600,
  },
  errorMessage: {
    fontSize: 16,
    color: '#721c24',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    width: '100%',
    maxWidth: 600,
  },
  loadingMessage: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  navButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    backgroundColor: '#5cb85c',
    borderRadius: 5,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});