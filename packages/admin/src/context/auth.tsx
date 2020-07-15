import React from 'react';

type AuthProps = {
  isAuthenticated: boolean;
  authenticate: Function;
  signout: Function;
};

export const AuthContext = React.createContext({} as AuthProps);

const isValidToken = () => {
  const token = localStorage.getItem('pickbazar_token');
  // JWT decode & check token validity & expiration.
  if (token) return true;
  return false;
};

const AuthProvider = (props: any) => {
  const [isAuthenticated, makeAuthenticated] = React.useState(isValidToken());
  async function authenticate({ token }) {
    makeAuthenticated(true);
    await localStorage.setItem('pickbazar_token', token);
  }
  function signout() {
    makeAuthenticated(false);
    localStorage.removeItem('pickbazar_token');
  }
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        signout,
      }}
    >
      <>{props.children}</>
    </AuthContext.Provider>
  );
};

export default AuthProvider;
