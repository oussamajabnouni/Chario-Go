import React, { useReducer, useEffect } from 'react';
import { AuthContext } from './auth.context';
const isBrowser = typeof window !== 'undefined';


function reducer(state: any, action: any) {
  console.log(state, 'auth');

  switch (action.type) {
    case 'SIGNIN':
      return {
        ...state,
        currentForm: 'signIn',
      };
    case 'SIGNIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        id: action.payload.id
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isAuthenticated: false,
      };
    case 'SIGNUP':
      return {
        ...state,
        currentForm: 'signUp',
      };
    case 'FORGOTPASS':
      return {
        ...state,
        currentForm: 'forgotPass',
      };
    default:
      return state;
  }
}

export const AuthProvider: React.FunctionComponent = ({ children }) => {

  let localState = null
  if (typeof localStorage !== "undefined" && localStorage.getItem("access_token")) {
    localState = localStorage.getItem("access_token") || ""
  }
  const INITIAL_STATE = {
    isAuthenticated: isBrowser && !!localStorage.getItem('access_token'),
    currentForm: 'signIn',
    id: localState
  };
  const [authState, authDispatch] = useReducer(reducer, INITIAL_STATE);

  if (typeof localStorage !== "undefined") {
    useEffect(() => {
      localStorage.setItem("access_token", authState.id)
    }, [authState])
  }
  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
