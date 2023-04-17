import React, { useEffect } from 'react';
import { useUserContext } from './UserContext';
import { useNavigation } from '@react-navigation/native';

const withLogin = (WrappedComponent) => {
  function WithLoginWrapper(props) {
    const { user, setUser, setIsLoggedIn } = useUserContext();
    const navigation = useNavigation();

    useEffect(() => {
      if (!user) {
        navigation.navigate('Login');
      }
    }, [user, navigation]);

    const handleLoginSuccess = (userData) => {
      setUser(userData);
      setIsLoggedIn(true);
      console.log("Promise!", props.route.params);
      if (props.route.params?.onLoginSuccess) {
        props.route.params.onLoginSuccess();
      }
    };

    return <WrappedComponent {...props} onLoginSuccess={handleLoginSuccess} />;
  }

  return WithLoginWrapper;
};

export default withLogin;
