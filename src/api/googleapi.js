import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser'
import {GOOGLE_CLIENT_ID} from '@env';

WebBrowser.maybeCompleteAuthSession();

export const signIn = async () => {
  const [request, result, promptAsync] = await Google.useIdTokenAuthRequest({
    clientId: GOOGLE_CLIENT_ID,
    androidClientId: GOOGLE_CLIENT_ID
  })

  if (result.type === 'success') {
    // Handle the response from Google Sign-In
    // You might want to send the user information to your backend, or store it in your app state
    console.log(result);
  } else {
    // User cancelled the login flow
  }
};