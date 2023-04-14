import React from 'react';
import Login from './Login';
import { useUserContext } from './UserContext';

const withLogin = (WrappedComponent) => {
  return (props) => {
    const { user, isLoggedIn, setIsLoggedIn } = useUserContext();

    const handleLoginSuccess = () => {
      setIsLoggedIn(true);
      console.log(isLoggedIn);
    };

    if (!user) {
      return <Login onLoginSuccess={handleLoginSuccess} />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLogin;
