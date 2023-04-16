import React from 'react';
import { useUserContext } from './UserContext';

const withLogin = (WrappedComponent) => {
  function WithLoginWrapper(props) {
    const { user, setUser, setIsLoggedIn } = useUserContext();

    const handleLoginSuccess = (userData) => {
      setUser(userData);
      setIsLoggedIn(true);
      console.log("Promise!", props.rout.params);
      if (props.route.params?.onLoginSuccess) {
        
        props.route.params.onLoginSuccess();
      }
    };
    return <WrappedComponent {...props} onLoginSuccess={handleLoginSuccess} />;
  }

  return WithLoginWrapper;
};

export default withLogin;
